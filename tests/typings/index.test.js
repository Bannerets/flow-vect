// @flow

import {
  createVect,
  push,
  unshift,
  shift,
  head,
  isVect,

  type Vect,

  type GetLength,
  type IsEmpty,
  type IsNotEmpty,
  type IsVect,

  type InvalidVect
} from '../../src'


const vect = createVect() // Vect<0, string>   (type inferred from usage)
// or
//   createVect<string>()
//   createVect('str')

const vect1 = push('foo', vect) // Vect<1, string>
const vect2 = push('bar', vect1) // Vect<2, string>


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


const [ value, vect3 ] = shift(vect22)
console.log(value) //=> 'foo'
;(1: GetLength<typeof vect3>)
;(vect3: Vect<1, string>)

const x = shift(vect) // vect = Vect<0>
;(x: InvalidVect)
// $ExpectError
;(x: [any, any])


const vect4 = unshift('abc', vect22)


const el = head(vect4)
;(el: string)
// $ExpectError
;(el: number)
console.log(el) //=> 'abc'

;(head(vect): InvalidVect)
// $ExpectError
;(head(vect): string)


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
