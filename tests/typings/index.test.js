// @flow

import {
  createVect,
  push,
  pop,
  unshift,
  shift,
  head,
  last,
  append,
  index,
  indexOf,
  equals,
  isVect,

  type Vect,

  type GetLength,
  type IsEmpty,
  type IsNotEmpty,
  type IsVect
} from '../../src'


const vect = createVect() // Vect<0, string>   (type inferred from usage)
// or
//   createVect<string>()
//   createVect('str')

const vect1 = push('foo', vect) // Vect<1, string>
const vect2 = push('bar', vect1) // Vect<2, string>


// const vv0: Vect<1, string | number> = vect1


type Length = GetLength<typeof vect2>
;(2: Length)
// $ExpectError
;(3: Length) // error


;(true: IsNotEmpty<typeof vect2>)
// $ExpectError
;(false: IsNotEmpty<typeof vect2>) // error
// $ExpectError
;(true: IsEmpty<typeof vect2>) // error

;(true: IsEmpty<typeof vect>)
;(false: IsEmpty<typeof vect1>)


;(true: IsVect<typeof vect>)
;(true: IsVect<typeof vect2>)
// $ExpectError
;(false: IsVect<typeof vect>)
// $ExpectError
;(true: IsVect<{}>) // error
;(false: IsVect<Number>)


console.log(vect2) //=> Vect

const vect22: Vect<2, string> = vect2


const [ value, vect11 ] = shift(vect22)
console.log(value) //=> 'foo'
;(1: GetLength<typeof vect11>)
;(vect11: Vect<1, string>)

// $ExpectError
const x = shift(vect) // vect = Vect<0>


const [v, vect111] = pop(vect22)
;(v: string)
// $ExpectError
;(v: number)
;(vect111: Vect<1, string>)
// $ExpectError
;(vect111: Vect<2, string>)


const vect3 = unshift('abc', vect22)
;(vect3: Vect<3, string>)
// $ExpectError
;(vect3: Vect<3, number>)


const el = head(vect3)
;(el: string)
// $ExpectError
;(el: number)
console.log(el) //=> 'abc'
// $ExpectError
;(head(vect): string)


const lastEl = last(vect3)
;(el: string)
// $ExpectError
;(el: {})
// $ExpectError
last(vect)


const vect50 = append(vect22, (vect3: Vect<3, string>))
console.log('append', vect50)
;(vect50: Vect<5, string>)
// $ExpectError
;(vect50: Vect<4, string>)
// $ExpectError
;(vect50: Vect<6, string>)


const el0 = index(1, vect22)
console.log('index', el0) //=> 'bar'
;(el0: string)
// $ExpectError
;(el0: number)
// $ExpectError
index(0, vect)
// $FlowFixMe
const el1 = index(8, vect22)
;(el1: string)
// $ExpectError
index('abc', vect22)
// $ExpectError
/*:: index(2, []) */


const i0 = indexOf('bar', vect22)
;(i0: number | void)
console.log('indexOf', i0) //=> 1
// $ExpectError
indexOf('bar', vect)
// $ExpectError
indexOf(1, vect22)


;(equals(vect1, vect2): boolean)
// $ExpectError
;(equals(vect1, vect2): number)


;(isVect(vect): boolean)
;(isVect({}): boolean)
// $ExpectError
;(isVect({}): number)

console.log('isVect 1:', isVect(vect)) //=> true
console.log('isVect 2:', isVect({})) //=> false


function sum2 (vect: Vect<2, number>): number {
  const [x, xs] = shift(vect)
  const [y] = shift(xs)
  return x + y
}

console.log('sum 8 + 3:', sum2(
  push(8,
    (push(3,
      createVect()
    ): Vect<1, number>))
)) //=> 11
