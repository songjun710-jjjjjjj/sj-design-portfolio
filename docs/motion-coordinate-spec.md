# Motion Coordinate Spec

Source screenshot: `C:/Users/Administrator/Desktop/977c01eb-fd53-423c-843b-a38144db0676.png`

Image size: `1069 x 340`

All coordinates use the screenshot top-left as origin. Red annotation boxes are excluded from measurements.

## Capability Section Lines

Top horizontal line:

| x | y | w | h | right |
|---:|---:|---:|---:|---:|
| 29 | 17 | 1032 | 1 | 1060 |

Vertical dividers:

| line | x | y | w | h | bottom |
|---|---:|---:|---:|---:|---:|
| 01/02 | 287 | 17 | 1 | 288 | 304 |
| 02/03 | 545 | 17 | 1 | 288 | 304 |
| 03/04 | 803 | 17 | 1 | 288 | 304 |

## Capability Cells

| block | cell x | cell y | cell w | cell h | text x | text y | text w | text h | left padding |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 01 | 29 | 17 | 259 | 288 | 67 | 81 | 174 | 159 | 38 |
| 02 | 288 | 17 | 258 | 288 | 316 | 81 | 190 | 159 | 28 |
| 03 | 546 | 17 | 258 | 288 | 574 | 81 | 190 | 159 | 28 |
| 04 | 804 | 17 | 257 | 288 | 832 | 81 | 179 | 159 | 28 |

## Text Rows

| block | English title | number | Chinese title | desc line 1 | desc line 2 |
|---|---|---|---|---|---|
| 01 | `x68 y81 w82 h12` | `x67 y116 w12 h10` | `x69 y166 w129 h17` | `x68 y206 w173 h11` | `x67 y229 w102 h11` |
| 02 | `x317 y81 w87 h12` | `x316 y116 w15 h10` | `x317 y166 w130 h17` | `x316 y206 w190 h11` | `x317 y229 w117 h11` |
| 03 | `x574 y81 w118 h12` | `x574 y116 w14 h10` | `x575 y166 w130 h17` | `x575 y206 w189 h11` | `x575 y229 w58 h11` |
| 04 | `x832 y81 w126 h10` | `x832 y116 w15 h10` | `x832 y166 w149 h17` | `x832 y206 w179 h11` | `x833 y229 w130 h11` |

## Typography Constraints

Measured against the supplied screenshot and current project font usage.

| element | font | weight | size | letter spacing | line-height target |
|---|---|---:|---:|---:|---:|
| English title | SJ Dongqing | 400 | 12px | 0 | 12px |
| number | SJ Dongqing | 400 | 12px | 0 | 12px |
| Chinese title | SJ Dongqing | 400 | 19px | 0 | 24px max row box |
| description | SJ Dongqing | 400 | 12px | 0 | 23px baseline step |

Vertical rhythm from measured top y values:

| relation | delta |
|---|---:|
| English title y to number y | 35px |
| number y to Chinese title y | 50px |
| Chinese title y to desc line 1 y | 40px |
| desc line 1 y to desc line 2 y | 23px |

## Hover Hit Areas

Use the full cell for hover intent, not the text-only bounds:

| block | hit x | hit y | hit w | hit h |
|---|---:|---:|---:|---:|
| 01 | 29 | 17 | 259 | 288 |
| 02 | 288 | 17 | 258 | 288 |
| 03 | 546 | 17 | 258 | 288 |
| 04 | 804 | 17 | 257 | 288 |

If the motion should trigger only near content, use text bounds expanded by 32px:

| block | hit x | hit y | hit w | hit h |
|---|---:|---:|---:|---:|
| 01 | 35 | 49 | 238 | 223 |
| 02 | 284 | 49 | 254 | 223 |
| 03 | 542 | 49 | 254 | 223 |
| 04 | 800 | 49 | 243 | 223 |

## Header Logo Constraint

Source crop: `web/assets/header-brand.png`

Crop size: `290 x 56`

Measured dark-pixel bounds:

| element | x | y | w | h | right | bottom |
|---|---:|---:|---:|---:|---:|---:|
| whole logo text | 32 | 5 | 228 | 44 | 259 | 48 |
| top line | 32 | 5 | 228 | 16 | 259 | 20 |
| bottom line | 103 | 38 | 82 | 11 | 184 | 48 |

Implementation constraint:

- `.brand`: `position: relative; width: 290px; height: 56px`
- `.brand-title`: absolute, `top: 2px`, `font-size: 18.08px`, `line-height: 18.08px`, `letter-spacing: 0`
- `.brand-subtitle`: absolute, `top: 34px`, `font-size: 12.73px`, `line-height: 12.73px`, `letter-spacing: 0`
