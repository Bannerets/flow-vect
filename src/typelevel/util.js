// @flow

export type If<X: boolean, Then, Else = empty> = $Call<
  & ((true, Then, Else) => Then)
  & ((false, Then, Else) => Else),
  X, Then, Else
>

export type Lte<X, Y> = $Call<
  & ($Subtype<X> => true)
  & (any => false),
  Y
>
