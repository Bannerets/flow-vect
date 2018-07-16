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

// export type Lte<X, Y> = $Call<
//   & ($Subtype<X> => true)
//   & (any => false),
//   Y
// >
