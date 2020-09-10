## Properties

|Props|Type|Default|Description|
|:--|:--|:--|:--|
|accept|string|`image/*`|file mime types|
|readonly|boolean|`false`|when `true`, the operation button will not be displayed|
|url|string|`''`|image url|
|width|string|`150px`|component width|
|height|string|`100px`|component height|
|icon|string|`''`|optional values: `'car', 'license-back', 'license-front', 'pdf'`|
|options|object|`{}`|Parameters required for image processing|
|view-mode|string|`''`|see fg-image `view-mode`|
|cropperTitle|string|`顔写真を編集`|dialog title|
|validate|function|`undefined`|file check, parameter: `(file: File, next: Function)`|

### options

|Props|Type|Default|Description|
|:--|:--|:--|:--|
|width|number|`0`|The processed image width|
|height|number|`0`|The processed image height|
|isForce|boolean|`false`||
|enableDevicePixelRatio|boolean|`false`||
|mimeType|string|`image/jpeg`|The processed image type|
|perResize|number|`500`||
|quality|number|`0.8`|optional values range: `(0, 1]`|

## Events

|Name|Parameters|Description|
|:--|:--|:--|
|change|(res: object)|`{blob: '', url: '', raw: {}, ...}`|
