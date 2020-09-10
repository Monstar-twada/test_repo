# name

### FGComponent

```html
<template>
    <div></div>
</template>

<script>
export default {
    name: 'FGInput',
    props: {
        value: {
            type: [String, Number],
            default: '',
        },
        camelCase: {
            type: String,
            default: ''
        },
        readonly: Boolean,
        ...,
    }
}
</script>
```

### Usage

```html
<template>
    <fg-input
        v-model="inputValue"
        camel-case="some value"
        readonly
    />
</template>

<script>
export default {
    data() {
        return {
            inputValue: 'test',
        }
    },
}
</script>
```

## Attributes

|Attribute|Type|Description|Default|
|:--|:--|:--|:--|
|v-model / value|String, Number|||
|readonly|Boolean||`false`|
|disabled|Boolean||`false`|
|clearable|Boolean||`false`|
|list / items|Array||`[]`|
|data / item|Object||`{}`|
|placeholder|String||`''`|
|label|String|||
|width / height|String|||
|max-width / max-height|String|||
|min-width / min-height|String|||
|size|String|medium / small / mini|`-`|
|type|String|primary / success / warning / danger / info / text|`-`|
|plain|Boolean|determine whether it's a plain button|`false`|
|round|Boolean|determine whether it's a round button|`false`|
|circle|Boolean|determine whether it's a circle button|`false`|


## Events

|Event Name|Description|Parameters|
|:--|:--|:--|
|@change|コンポーネントのデータが変更あり、親に知らせなど|(value: any)|

```html
<template>
    <fg-input @change="handleChange">
</template>

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

## slots

|Name|Description|
|:--|:--|
|||