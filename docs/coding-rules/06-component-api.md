# Component API

`v-model`, `@change`, `@click`, `disabled`, `clearable`, `:slot`, ...

`list|items`, `data|item`, ...

```html
<template>
    <g-dialog @change="dialogChange">
        <template>
            slot
        </template>
    </g-select>
</template>

<script>
export default {
    methods: {
        dialogChange() {
            // do something
        },
    },
}
</script>
````

```html
<template>
    <g-select
        clearable
        v-model="selectedValue" />
</template>

<script>
export default {
    data() {
        return {
            selectedValue: 'initialValue',
        }
    },
}
</script>
````
