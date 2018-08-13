// @flow

// import type { Fix } from 'flown'
import type { Is, IsNot, If } from './typelevel/util'
import type { Nat, NonZeroNat } from './typelevel/number/nat'
import type { Inc } from './typelevel/number/inc'
import type { Dec } from './typelevel/number/dec'
import type { Add } from './typelevel/number/add'
import type { Gt } from './typelevel/number/gt'

import { List } from 'immutable'

class VectClass<N: Nat = 0, T = any> extends List<T> { __vector = true }
export opaque type Vect<N: Nat = 0, T = any> = VectClass<N, T>

// declare function incVect <N: Nat, T>(Vect<N, T>): Vect<Inc<N>, T>
declare function decVect <N: Nat, T>(Vect<N, T>): Vect<Dec<N>, T>

export type GetLength<V> =
  $Call<(<N, T, VV: Vect<N, T>>(VV) => N), V>

export type IsEmpty<V> =
  Is<GetLength<V>, 0>

export type IsNotEmpty<V> =
  IsNot<GetLength<V>, 0>

export type IsVect<MaybeV> =
  Is<MaybeV, Vect<any, any>>

export function createVect <T>(/*:: t?: T */): Vect<0, T> {
  return new VectClass()
}

export function push <N: Nat, T>(el: T, vect: Vect<N, T>): Vect<Inc<N>, T> {
  const newVect = (vect.push(el): $FlowFixMe)
  newVect.__vector = true
  return newVect
}

export function pop <N: NonZeroNat, T>(vect: Vect<N, T>): [ T, Vect<Dec<N>, T> ] {
  const value = vect.last()
  const newVect = vect.pop()
  newVect.__vector = true
  return [ (value: $FlowFixMe), /*:: decVect */ (newVect) ]
}

export function unshift <N: Nat, T>(el: T, vect: Vect<N, T>): Vect<Inc<N>, T> {
  const newVect = (vect.unshift(el): $FlowFixMe)
  newVect.__vector = true
  return newVect
}

export function shift <N: NonZeroNat, T>(vect: Vect<N, T>): [ T, Vect<Dec<N>, T> ] {
  const value = vect.first()
  const newVect = vect.shift()
  newVect.__vector = true
  return [ (value: $FlowFixMe), /*:: decVect */ (newVect) ]
}

export function head <N: NonZeroNat, T>(vect: Vect<N, T>): T {
  const el = vect.first()
  return (el: $FlowFixMe)
}

export function last <N: NonZeroNat, T>(vect: Vect<N, T>): T {
  const el = vect.last()
  return (el: $FlowFixMe)
}

export function append <N: Nat, M: Nat, T>(
  v1: Vect<N, T>,
  v2: Vect<M, T>
): Vect<Add<N, M>, T> {
  const v3 = (v1.concat(v2): $FlowFixMe)
  v3.__vector = true
  return v3
}

declare class EMPTYClass {}
export opaque type EMPTY = EMPTYClass

export function index <I: Nat, N: NonZeroNat, T>(
  index: I,
  vect: Vect<N, T>
): If<Gt<N, I>, T, EMPTY> {
  const value = vect.get(index)
  return (value: $FlowFixMe)
}

export function indexOf <N: NonZeroNat, T>(el: T, vect: Vect<N, T>): number | void {
  const index = vect.indexOf(el)
  if (index === -1) return undefined
  return index
}

export function equals <N: Nat, M: Nat, T>(
  v1: Vect<N, T>,
  v2: Vect<M, T>
): boolean {
  return v1.equals(v2)
}

export function isVect (maybeVect: mixed): boolean %checks {
  return (typeof maybeVect === 'object' && maybeVect)
    ? maybeVect.__vector === true
    : false
}
