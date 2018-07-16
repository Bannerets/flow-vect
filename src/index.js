// @flow

// import type { Fix } from 'flown'
import type { If, Is } from './typelevel/util'
import type { Inc } from './typelevel/number/inc'
import type { Dec } from './typelevel/number/dec'

import { LinkedList } from './list'

class VectClass<N = 0, T = any> extends LinkedList<T> {}
export opaque type Vect<N = 0, T = any> = VectClass<N, T>

export type GetLength<V> =
  $Call<(<N, T, VV: Vect<N, T>>(VV) => N), V>

export type IsEmpty<V> =
  If<Is<GetLength<V>, 0>, true, false>

export type IsNotEmpty<V> =
  If<Is<GetLength<V>, 0>, false, true>

export function createVect <T>(/*:: t?: T*/): Vect<0, T> {
  return new VectClass()
}

export function push <N, T>(vect: Vect<N, T>, el: T): Vect<Inc<N>, T> {
  vect.push(el)
  return (vect: $FlowFixMe)
}

export function unshift <N, T>(vect: Vect<N, T>): [ Vect<Dec<N>, T>, T | null ] {
  const value = vect.unshift()
  return [ (vect: $FlowFixMe), value ]
}

// const vect = createVect() // Vect<0, string>
//
// const vect1 = push(vect, 'foo') // Vect<1, string>
// const vect2 = push(vect1, 'bar') // Vect<2, string>
//
// const vect21: Vect<2, string> = vect2
//
// type Length = GetLength<typeof vect2>
// ;(2: Length)
//
// // ;(3: Length) // error
//
// ;(true: IsNotEmpty<typeof vect21>)
//
// // ;(false: IsNotEmpty<typeof vect21>) // error
//
// // ;(true: IsEmpty<typeof vect2>) // error
//
// ;(true: IsEmpty<typeof vect>)
// ;(false: IsEmpty<typeof vect1>)
//
// console.log(vect2)
//
// const vect22: Vect<2, string> = vect2
//
// const [ vect3, value ] = unshift(vect22)
// console.log(value) //=> 'foo'
// ;(1: GetLength<typeof vect3>)
// ;(vect3: Vect<1, string>)
//
// // console.log(unshift(vect3))
// // console.log(unshift(vect3))
// // console.log(push(vect3, '1234'))
// // console.log(unshift(vect3))
