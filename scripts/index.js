// @flow





function generateInc (n/*: number */) {
  let i = 0
  while (i < n)
    console.log(`  & (${i++} => ${i})`)
}

function generateDec (n/*: number */) {
  let i = 0
  while (i < n) {
    i++
    const j = i - 1
    console.log(`  & (${i} => ${j})`)
  }
}

// generateInc(1000)
// generateDec(1000)
