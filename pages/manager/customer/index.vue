<template>
  <Customer />
</template>

<script>
import Customer from '~/components/common/customer/index'
export default {
  scrollToTop: true,
  layout: 'manager',
  middleware: 'authenticated',
  components: {
    Customer,
  },
}
</script>
