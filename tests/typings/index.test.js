// @flow

import {
  createVect,
  push,
  unshift,
  shift,
  head,

  type Vect,

  type GetLength,
  type IsEmpty,
  type IsNotEmpty,

  type InvalidVect
} from '../../src'

const vect = createVect() // Vect<0, string>   (type inferred from usage)
// or
//   createVect<string>()
//   createVect('str')

const vect1 = push(vect, 'foo') // Vect<1, string>
const vect2 = push(vect1, 'bar') // Vect<2, string>


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

console.log(vect2) //=> Vect

const vect22: Vect<2, string> = vect2

const [ vect3, value ] = shift(vect22)
console.log(value) //=> 'foo'
;(1: GetLength<typeof vect3>)
;(vect3: Vect<1, string>)

const x = shift(vect) // vect = Vect<0>
;(x: InvalidVect)
// $FlowFixMe
;(x: [any, any])


const vect4 = unshift(vect22, 'abc')


const el = head(vect4)
;(el: string)
// $FlowFixMe
;(el: number)
console.log(el) //=> 'abc'

;(head(vect): InvalidVect)
// $FlowFixMe
;(head(vect): string)

function sum2 (vect: Vect<2, number>): number {
  const [vect1, n1] = shift(vect)
  const [, n2] = shift(vect1)
  return n1 + n2
}
