## Properties

|Props|Type|Default|Description|
|:--|:--|:--|:--|
|src|string|`''`|Avatar image file URL|
|data|object|`{}`|`{url: '', name: '', summary: '', ...}`|
|size|string|`37`|set avatar size|
|circle|boolean|`true`|Whether to display as a circle|
|clickable|boolean|`false`||
|fillet|boolean|`false`||
|background|boolean|`false`||
|name-font-weight-normal|boolean|`false`||
|text-flex-direction-column|boolean|`false`||
|text-summary-no-offset|boolean|`false`||
|text-width|string|`''`|単位が必要|

### data

|Props|Type|Required|Description|
|:--|:--|:--|:--|
|url|string|yes|Avatar image file URL|
|name|string|no|username or `lastName + firstName`|
|firstName|string|no||
|lastName|string|no||
|summary|string|no||
|subName|string|no||

## Events

|Name|Parameters|Description|
|:--|:--|:--|
|click|(src: string, e: Event)|if `clickable`  is `true`, triggers when left button is clicked|
