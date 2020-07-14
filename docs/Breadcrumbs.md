# Breadcrumbs

### Import

```javascript
import Breadcrumbs from '~/components/breadcrumbs/index'
```

### Properties

|property|type|remark|
|:--|:--|:--|
|breadcrumbs|Array|breadcrumb items|
|title-image|String|Icon before Title|
|page|String|Page Tile|
|sub-title|String|sub title|

### Slot

|name|remark|
|:--|:--|
|left|left slot after sub title|
|right| right slot|

### Usage

```html
<template>
  <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="customer.svg"
      :page="page"
    >
    <template v-slot:left>
      Left Some Component
    </template>
    <template v-slot:right>
      Right Some Component
    </template>
  </Breadcrumbs>
</template>

<script>
export default {
  components: {
    Breadcrumbs,
  }
}
</script>
```    
