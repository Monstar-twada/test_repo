# global-pagination

```javascript
// 1025 件中 0〜10件を表示      |< 12345678910 >| <>
import GlobalPagination from '~/components/common/global-pagination/index'

// |< 12345678910 >| <>
import OnlyPagination from '~/components/common/global-pagination/Pagination'
```

## Property

|property|type|remark|
|:--|:--|:--|
|v-model|Number|currentPage, set and get|
|total|Number|total|
|page-size|Number|Number of data items displayed per page|
|theme|String|`white/blue`, default `white`|
|size|String|`medium/small`, default `medium`|
|show-number|Number|default `10`, show page item number|

## Usage

```html
<template>
  <GlobalPagination
      v-model="query.page"
      :total="total"
      :page-size="query.pageSize"
    />
</template>

<script>
export default {
  components: {
    GlobalPagination,
  },
  data() {
    return {
      total: 12229,
      query: {
        pageSize: 20,
        page: 2
      },
      list: []
    }
  }
}
</script>
```


