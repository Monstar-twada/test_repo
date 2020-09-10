# fg-pagination

## Usage

```html
<template>
    <fg-pagination
        v-model="currentPage"
        :page-size="pageSize"
        :total="total"
    />
</template>

<script>
export default {
    data() {
        return {
            currentPage: 1,
            total: 199,
            pageSize: 10,
        }
    },
}
</script>
```

## Attributes

|Attribute|Type|Description|Default|
|:--|:--|:--|:--|
|v-model / value|Number|current page|`-`|
|page-size|Number|page size / sql limit|`10`|
|total|Number|data total|`0`|
|show-number|Number|show page items|`10`|
|hide-page-info|Boolean|hide left info|`false`|

## Events

|Event Name|Description|Parameters|
|:--|:--|:--|
|@change|on change|(newPage: number)|

