# Breadcrumbs

### Slot

|name|remark|
|:--|:--|
|right||

### Usage

```html
<template>
  <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="customer.svg"
      :page="page"
    >
    <template v-slot:right>
      Some Component
    </template>
  </Breadcrumbs>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
export default {
  components: {
    Breadcrumbs,
  }
}
</script>
```    
