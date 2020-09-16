# global-selector


```javascript
import GlobaInput from '~/components/common/global-input/index'
```

## Properties

|property|type|remark|
|:--|:--|:--|
|v-model|String/Number|input value, get or set|
|inputType|String|`text/password`, default: `text`|
|placeholder|String|placeholder|
|customheight|Number|default `40`|
|customfontsize|Number|default `14`|
|customtextalign|String|`left/center/right`, default `left`|
|theme|String|`blue`, default `blue`|
|disabled|Boolean|default `false`|
|clearable|Boolean|default `true`|

## Usage

```html
<template>
  <div>
    <GlobalInput
      v-model="inputValue"
      :customheight=20
      :customfontsize=14
    />
  </div>
</template>

<script>
export default {
  components: {
    Globalnput,
  },
  data() {
    return {
      inputValue: '',　//例: 渡辺太郎/080-1234-5678
    }
  }
}
</script>
```