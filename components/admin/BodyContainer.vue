<template>
  <div>
    <Shop />
    <Staff />
  </div>
</template>

<script>
import Shop from './Shop'
import Staff from './Staff'
export default {
  name: 'BodyContainer',
  components: {
    Shop,
    Staff,
  },
}
</script>
