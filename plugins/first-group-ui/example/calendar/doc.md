## Properties

|Props|Type|Default|Description|
|:--|:--|:--|:--|
|v-model/value|String, Array, Number, Date|`''`||
|placeholder|string|`選択`||
|size|string|`regular`|Optional values: `regular/medium/samll/mini`|
|clearable|boolean|`false`||
|writable|boolean|`false`||
|disabled|boolean|`false`||
|inline|boolean|`false`||
|type|string|`date`|Optional values: `date/month/year`|
|show-before-dash|boolean|`false`||
|show-after-dash|boolean|`false`||
|width|string, number|`''`||
|popup-class|string|`''`|popup class name|
|popup-position|string|`''`|Optional values: `left/right`|
|date-range|array|`[]`||
|format|string|``|view format, Example: `yyyy/MM/dd` or `timestamp`|
|select-mode|string|`single`|Optional values: `single/multiple/range`|
|* is-time-picker|boolean|`single`|Only for `fg-date-picker` component|
|value-format|string|`''`|value format, Example: `yyyy/MM/dd` or `timestamp`|
|value-formatter|function|`undefined`|Parameters:(currentDate), return processed `currentDate`|

## Events

|Name|Parameters|Description|
|:--|:--|:--|
|click|(src: string, e: Event)|if `clickable`  is `true`, triggers when left button is clicked|
