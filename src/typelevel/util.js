// @flow

export type If<X: boolean, Then, Else = empty> = $Call<
  & ((true, Then, Else) => Then)
  & ((false, Then, Else) => Else),
  X, Then, Else
>

export type Is<A, B> = $Call<
  & (B => true)
  & (any => false),
  A
>

export type IsNot<A, B> = $Call<
  & (B => false)
  & (any => true),
  A
>

export type Not<X: boolean> = $Call<
  & (true => false)
  & (false => true),
  X
>

// export type IsCompat<X, Y> = $Call<
//   & ($Subtype<Y> => true)
//   & (any => false),
//   X
// >
