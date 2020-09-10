# fg-input



## Usage

```html
<template>
    <fg-input
        v-model="inputValue"
        placeholder="入力ください"
        clearable
    />
</template>

<script>
export default {
    data() {
        return {
            inputValue: '',
        }
    },
}
</script>
```

## Attributes

|Attribute|Type|Description|Default|
|:--|:--|:--|:--|
|v-model / value|String, Number|||
|items|Array||`[{text: '', value: ''}]`|
|readonly|Boolean||`false`|
|disabled|Boolean||`false`|
|clearable|Boolean||`false`|
|placeholder|String||`入力ください`|
|size|String|medium / small / mini|`-`|
|type|String|textarea / password / date / number ...|`text`|
|round|Boolean|determine whether it's a round input|`false`|
|rows|String, Number|textarea only|`5`|

## Events

|Event Name|Description|Parameters|
|:--|:--|:--|
|@change|on change|(value: any)|

```html
<fg-input @change="handleChange" />

<script>
export default {
    methods: {
        handleChange(value) {
            console.log(value)
        },
    },
}
</script>
```

## Methods

|Event Name|Description|Parameters|
|:--|:--|:--|
|@focus|focus the input element|-|

## slots

|Name|Description|
|:--|:--|
|-|-|
