
## Methods

`this.$ui.isNumber(2323123) // return true`

|Name|Parameters|Description|
|:--|:--|:--|
|getScrollParents|(el: HTMLElement)|return `HTMLElement[]`|
|getMaxZIndex|()|get max z-index value, return `number`|
|getScrollBarWidth|()|get scrollbar width|
|getStyleValue|(el: HTMLElement, attr: string[, isInt: boolean])|get style value of el attr|
|isElement|(el)|Determine whether el is an HTMLElement|
|isFunction|(fn)|Determine whether fn is a Function|
|isNumber|(n)|Determine whether n is a Number|
|isNumberLike|(n)|Determine whether n is like a Number|
|isString|(s)|Determine whether s is a String|
|isUndefined|(o)|Determine whether o is undefined|
|resetZIndex|(el: HTMLElement)|Determine and reset the z-index value of EL, when is less than the maximum z-index|
|slice|(arrayLike: ArrayLike[, index: Number])|ArrayLike to Array|
|toHumpStr|(str: String[, spacer = '-'])|str to Hump string, Example: `font-size` -> `fontSize`|
|toNumber|(a)|`a` to number|
|toTwoDigits|(n)|Example: `2` -> `02`|

## colors

`this.$colors.primaryPlaceholder`
`// see assets/scss/theme-*.scss $--color-primary-placeholder`

|Name|Value(assets/scss/theme-*.scss)|
|:--|:--|
|primary|'#1E5199'|
|primaryActive|'#0786BD'|
|primaryHover|'#2DA2D5'|
|primaryPlaceholder|'#748EB7'|
|primaryGradient|'linear-gradient(135deg, #1295CE, #0786BD)'|
|success|'#12AACE'|
|successActive|'#0DBEA9'|
|successHover|'#1DDB99'|
|successGraph|'#2993D9'|
|warning|'#DB3394'|
|warningActive|'#DB3394'|
|warningHover|'#DB3394'|
|border|'#DFE6F0'|
|background|'#F2F6FA'|
|backgroundHover: '#E5EDF6'|
|white|'#FFF'|
|black|'#000'|
|tableSortDefault|'#C6D1E2'|
|shadowPrimary|'rgba(7, 134, 189, 0.31)'|
|shadowGray|'rgba(44, 44, 44, 0.1)'|
|disabledOpacity|'0.5'|
|radioChecked|'#1E5199'|
