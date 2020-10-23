<template>
  <Customer />
</template>

<script>
import Customer from '~/components/common/customer/index'
export default {
  layout: 'manager',
  middleware: 'authenticated',
  components: {
    Customer,
  },
}
</script>
