// @flow

import {
  type Vect,
  createVect,
  push,
  unshift,
  type GetLength,
  type IsEmpty,
  type IsNotEmpty
} from '../src'

const vect = createVect() // Vect<0, string>
// or
//   createVect<string>()
//   createVect('str')

const vect1 = push(vect, 'foo') // Vect<1, string>
const vect2 = push(vect1, 'bar') // Vect<2, string>

const vect21: Vect<2, string> = vect2

type Length = GetLength<typeof vect2>
;(2: Length)
// $ExpectError
;(3: Length) // error

;(true: IsNotEmpty<typeof vect21>)
// $ExpectError
;(false: IsNotEmpty<typeof vect21>) // error
// $ExpectError
;(true: IsEmpty<typeof vect2>) // error

;(true: IsEmpty<typeof vect>)
;(false: IsEmpty<typeof vect1>)

console.log(vect2)

const vect22: Vect<2, string> = vect2

const [ vect3, value ] = unshift(vect22)
console.log(value) //=> 'foo'
;(1: GetLength<typeof vect3>)
;(vect3: Vect<1, string>)
