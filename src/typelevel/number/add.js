// @flow

import type { Inc } from './inc'
import type { Dec } from './dec'

export type Add<A, B> = $Call<
  & (<AA, BB: 0>(AA, BB) => AA)
  & (<AA, BB: 1>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 2>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 3>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 4>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 5>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 6>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 7>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 8>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 9>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 10>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 11>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 12>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 13>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 14>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 15>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 16>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 17>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 18>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 19>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 20>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 21>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 22>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 23>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 24>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 25>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 26>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 27>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 28>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 29>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 30>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 31>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 32>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 33>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 34>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 35>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 36>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 37>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 38>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 39>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 40>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 41>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 42>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 43>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 44>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 45>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 46>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 47>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 48>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 49>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 50>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 51>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 52>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 53>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 54>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 55>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 56>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 57>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 58>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 59>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 60>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 61>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 62>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 63>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 64>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 65>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 66>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 67>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 68>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 69>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 70>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 71>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 72>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 73>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 74>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 75>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 76>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 77>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 78>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 79>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 80>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 81>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 82>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 83>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 84>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 85>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 86>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 87>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 88>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 89>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 90>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 91>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 92>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 93>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 94>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 95>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 96>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 97>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 98>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 99>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 100>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 101>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 102>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 103>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 104>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 105>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 106>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 107>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 108>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 109>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 110>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 111>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 112>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 113>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 114>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 115>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 116>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 117>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 118>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 119>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 120>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 121>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 122>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 123>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 124>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 125>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 126>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 127>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 128>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 129>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 130>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 131>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 132>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 133>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 134>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 135>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 136>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 137>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 138>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 139>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 140>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 141>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 142>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 143>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 144>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 145>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 146>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 147>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 148>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 149>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 150>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 151>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 152>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 153>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 154>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 155>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 156>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 157>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 158>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 159>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 160>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 161>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 162>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 163>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 164>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 165>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 166>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 167>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 168>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 169>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 170>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 171>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 172>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 173>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 174>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 175>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 176>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 177>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 178>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 179>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 180>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 181>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 182>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 183>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 184>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 185>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 186>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 187>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 188>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 189>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 190>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 191>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 192>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 193>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 194>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 195>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 196>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 197>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 198>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 199>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 200>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 201>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 202>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 203>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 204>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 205>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 206>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 207>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 208>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 209>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 210>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 211>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 212>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 213>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 214>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 215>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 216>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 217>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 218>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 219>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 220>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 221>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 222>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 223>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 224>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 225>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 226>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 227>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 228>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 229>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 230>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 231>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 232>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 233>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 234>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 235>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 236>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 237>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 238>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 239>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 240>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 241>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 242>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 243>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 244>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 245>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 246>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 247>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 248>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 249>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 250>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 251>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 252>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 253>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 254>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 255>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 256>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 257>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 258>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 259>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 260>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 261>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 262>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 263>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 264>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 265>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 266>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 267>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 268>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 269>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 270>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 271>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 272>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 273>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 274>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 275>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 276>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 277>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 278>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 279>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 280>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 281>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 282>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 283>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 284>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 285>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 286>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 287>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 288>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 289>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 290>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 291>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 292>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 293>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 294>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 295>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 296>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 297>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 298>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 299>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 300>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 301>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 302>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 303>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 304>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 305>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 306>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 307>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 308>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 309>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 310>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 311>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 312>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 313>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 314>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 315>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 316>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 317>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 318>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 319>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 320>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 321>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 322>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 323>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 324>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 325>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 326>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 327>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 328>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 329>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 330>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 331>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 332>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 333>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 334>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 335>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 336>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 337>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 338>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 339>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 340>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 341>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 342>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 343>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 344>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 345>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 346>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 347>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 348>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 349>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 350>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 351>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 352>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 353>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 354>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 355>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 356>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 357>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 358>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 359>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 360>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 361>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 362>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 363>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 364>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 365>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 366>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 367>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 368>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 369>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 370>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 371>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 372>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 373>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 374>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 375>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 376>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 377>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 378>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 379>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 380>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 381>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 382>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 383>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 384>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 385>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 386>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 387>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 388>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 389>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 390>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 391>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 392>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 393>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 394>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 395>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 396>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 397>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 398>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 399>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 400>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 401>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 402>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 403>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 404>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 405>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 406>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 407>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 408>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 409>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 410>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 411>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 412>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 413>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 414>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 415>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 416>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 417>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 418>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 419>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 420>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 421>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 422>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 423>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 424>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 425>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 426>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 427>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 428>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 429>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 430>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 431>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 432>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 433>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 434>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 435>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 436>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 437>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 438>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 439>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 440>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 441>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 442>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 443>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 444>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 445>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 446>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 447>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 448>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 449>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 450>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 451>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 452>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 453>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 454>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 455>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 456>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 457>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 458>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 459>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 460>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 461>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 462>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 463>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 464>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 465>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 466>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 467>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 468>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 469>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 470>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 471>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 472>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 473>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 474>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 475>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 476>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 477>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 478>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 479>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 480>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 481>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 482>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 483>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 484>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 485>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 486>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 487>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 488>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 489>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 490>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 491>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 492>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 493>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 494>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 495>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 496>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 497>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 498>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 499>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
  & (<AA, BB: 500>(AA, BB) => Add<Inc<AA>, Dec<BB>>)
, A, B>