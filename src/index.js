// @flow

// import type { Fix } from 'flown'
import type { Is, Not } from './typelevel/util'
import type { Inc } from './typelevel/number/inc'
import type { Dec } from './typelevel/number/dec'

import { LinkedList } from './list'

class VectClass<N: number = 0, T = any> extends LinkedList<T> {}
export opaque type Vect<N: number = 0, T = any> = VectClass<N, T>

declare class InvalidVectClass {}
export opaque type InvalidVect = InvalidVectClass

declare function incVect <N: number, T>(Vect<N, T>): Vect<Inc<N>, T>
declare function decVect <N: number, T>(Vect<N, T>): Vect<Dec<N>, T>

export type GetLength<V> =
  $Call<(<N, T, VV: Vect<N, T>>(VV) => N), V>

export type IsEmpty<V> =
  Is<GetLength<V>, 0>

export type IsNotEmpty<V> =
  Not<Is<GetLength<V>, 0>>

export function createVect <T>(/*:: t?: T */): Vect<0, T> {
  return new VectClass()
}

export function push <N: number, T>(vect: Vect<N, T>, el: T): Vect<Inc<N>, T> {
  vect.push(el)
  return /*:: incVect */ (vect)
}

export function unshift <N: number, T>(vect: Vect<N, T>, el: T): Vect<Inc<N>, T> {
  vect.unshift(el)
  return /*:: incVect */ (vect)
}

declare export function shift (Vect<0>): InvalidVect
declare export function shift <N: number, T>(Vect<N, T>): [ T, Vect<Dec<N>, T> ]
export function shift <N: number, T>(vect: Vect<N, T>): [ T, Vect<Dec<N>, T> ] {
  const value = vect.shift()
  return [ (value: $FlowFixMe), /*:: decVect */ (vect) ]
}

declare export function head (Vect<0>): InvalidVect
declare export function head <N: number, T>(Vect<N, T>): T
export function head <N: number, T>(vect: Vect<N, T>): T {
  const head = (vect.head: $FlowFixMe)
  return head && head.value
}

export function isVect (maybeVect: any): boolean %checks {
  return maybeVect instanceof VectClass
}
