<template>
  <Confirm />
</template>

<script>
import Confirm from '~/components/common/customer/regist/user/confirm/index'

export default {
  layout: 'manager',
  middleware: 'authenticated',
  components: {
    Confirm,
  },
}
</script>
