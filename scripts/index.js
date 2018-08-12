// @flow

function generateNat (n/*: number*/) {
  console.log('export type Nat =')
  for (let i = 0; i <= n; i++)
    console.log(`  | ${i}`)
}

function generateInc (n/*: number */) {
  console.log('export type Inc<N> = $Call<')
  let i = 0
  while (i < n)
    console.log(`  & (${i++} => ${i})`)
  console.log(', N>')
}

function generateDec (n/*: number */) {
  console.log('export type Dec<N> = $Call<')
  for (let i = 1; i <= n; i++) {
    const j = i - 1
    console.log(`  & (${i} => ${j})`)
  }
  console.log(', N>')
}

function generateAdd (n/*: number */) {
  console.log('export type Add<A, B> = $Call<')
  console.log('  & (<AA, BB: 0>(AA, BB) => AA)')
  for (let i = 1; i <= n; i++)
    console.log(`  & (<AA, BB: ${i}>(AA, BB) => Add<Inc<AA>, Dec<BB>>)`)
  console.log(', A, B>')
}

function generateGt (n/*: number */) {
  console.log('export type Gt<A, B> = $Call<')
  console.log('  & (<AA: 0, BB>(AA, BB) => false)')
  console.log('  & (<AA, BB: 0>(AA, BB) => true)')
  for (let i = 1; i <= n; i++)
    console.log(`  & (<AA, BB: ${i}>(AA, BB) => Gt<Dec<AA>, Dec<BB>>)`)
  console.log(', A, B>')
}

// generateNat(500)
// generateInc(500)
// generateDec(500)
// generateAdd(500)
// generateGt(500)
