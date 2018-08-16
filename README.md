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
  append,
  index,
  indexOf,

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


const [ value, vect11 ] = shift(vect22)
console.log(value) //=> 'foo'
;(1: GetLength<typeof vect11>)
;(vect11: Vect<1, string>)


const vect3 = unshift('abc', vect22)
;(vect3: Vect<3, string>)


const el = head(vect3)
;(el: string)
console.log(el) //=> 'abc'


const vect50 = append(vect22, (vect3: Vect<3, string>))
;(vect50: Vect<5, string>)


const el0 = index(1, vect22)
;(el0: string)
console.log('index', el0) //=> 'bar'


;(indexOf('bar', vect22): number | void)


function sum2 (vect: Vect<2, number>): number {
  const [x, xs] = shift(vect)
  const [y] = shift(xs)
  return x + y
}
```

See also [index.test.js](tests/typings/index.test.js).

#### Functions:

- `createVect`
- `push`
- `pop`
- `unshift`
- `shift`
- `head`
- `last`
- `append`
- `index`
- `indexOf`
- `equals`
- `isVect`

#### Types:

- `Vect<N, T>`
- `GetLength<V>`
- `IsEmpty<V>`
- `IsNotEmpty<V>`
- `IsVect<V>`
