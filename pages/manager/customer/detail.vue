<template>
  <CustomerDetail />
</template>

<script>
import CustomerDetail from '~/components/common/customer/detail/index'
export default {
  layout: 'manager',
  middleware: 'authenticated',
  components: {
    CustomerDetail,
  },
}
</script>
