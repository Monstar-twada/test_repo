## Properties

|Name|Description|
|:--|:--|
|project| project name: manager/dashboard/console|

## Methods

`this.$ui.isNumber(2323123) // return true`

|Name|Parameters|Description|
|:--|:--|:--|
|clearCache|(key: string): void|clear all cache data the domain localStorage.<br>該当ドメインのlocalStorage全部データを削除する|
|createUrlQuery|(params: object[, fields: string[]]): string||
|createRandomStr|(prefix: string): string| create a random string|
|getCache|(key: string): any||
|getMaxZIndex|(): number||
|getParentComponent|(fgParentName: string): Component||
|getStyleValue|(el: HTMLElement, attr: string[, isInt: boolean]): string/number||
|getScrollBarWidth|(): number||
|getScrollParents|(el: HTMLElement): HTMLElement[]||
|hasOwn|(o: object, attr: string): boolean|Object.hasOwnProperty|
|init|(projectName: string): void|initial|
|merge|(target: object, ...args: object): object||
|isElement|(el: any): boolean||
|isFunction|(fn: any): boolean||
|isNumber|(n: any): boolean||
|isNumberLike|(n: any): boolean||
|isString|(s: any): boolean||
|isUndefined|(a: any): boolean||
|removeCache|(key: string): void||
|resetZIndex|(el: HTMLElement): void||
|setCache|(key: string, value: any): void||
|slice|(o: ArrayLike, index: number): any[]||
|toCommaNumber|(value: string[, keepDecimalPlaces: boolean]): string|Example: `123456` -> `123,456`|
|toNumber|(a: any): number||
|toTwoDigits|(a: any): string|Example: `3` -> `03`|
|toHumpStr|(attr: string[, spacer: string])|Example: `font-size` -> `fontSize`|
|windowDispatcher|(eventName: string)||

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