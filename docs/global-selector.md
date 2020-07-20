# global-selector


```javascript
import GlobalSelector from '~/components/common/global-selector/index'
```

## Properties

|property|type|remark|
|:--|:--|:--|
|v-model|String/Number|selected value, get or set|
|options|Array|`[{title: 'small title'}, {text: 'some string', value: n}]`|
|placeholder|String|placeholder|
|theme|String|`light-blue/default/transparent`, default `default`|
|size|String|`medium(35px)/small(28px)`, default `small`|
|disabled|Bollean|can't select|
|item-prefix|String|option prefix|
|width|String|selector width, default '100%'|

### options

|property|type|remark|
|:--|:--|:--|
|title|String|options sub title|
|text|String|option display content|
|value|String/Number|value|
|disabled|Boolean|can't select|

## Usage

```html
<template>
  <div>
    <GlobalSelector
      v-model="selectedValue"
      :options="options"
    />
  </div>
</template>

<script>
export default {
  components: {
    GlobalSelector,
  },
  data() {
    return {
      selectedValue: 1001,
      options: [
        {
          text: 'option 1',
          value: 1001
        },
        {
          text: 'option 2',
          value: 1002
        },
      ]
    }
  }
}
</script>
```