# flow-vect

Statically typed `Vect`

[![npm](https://img.shields.io/npm/v/flow-vect.svg)](https://www.npmjs.com/package/flow-vect)

## Installation

```console
$ npm i flow-vect
```

## Usage

```js
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
  type IsNotEmpty
} from 'flow-vect'


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
;(true: IsEmpty<typeof vect2>) // error

;(true: IsEmpty<typeof vect>)
;(false: IsEmpty<typeof vect1>)


console.log(vect2) //=> Vect

const vect22: Vect<2, string> = vect2


const [ value, vect3 ] = shift(vect22)
console.log(value) //=> 'foo'
;(1: GetLength<typeof vect3>)
;(vect3: Vect<1, string>)


const vect4 = unshift('abc', vect22)


const el = head(vect4)
;(el: string)
console.log(el) //=> 'abc'


function sum2 (vect: Vect<2, number>): number {
  const [x, xs] = shift(vect)
  const [y] = shift(xs)
  return x + y
}
```

See also [index.test.js](tests/typings/index.test.js).
