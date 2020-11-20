<template>
  <ConfirmUser />
</template>

<script>
import ConfirmUser from '~/components/common/customer/regist/new/user/confirm/index'

export default {
  layout: 'manager',
  middleware: 'authenticated',
  components: {
    ConfirmUser,
  },
}
</script>
