<template>
  <NewUser />
</template>

<script>
import NewUser from '~/components/common/customer/regist/new/user/index/index'

export default {
  layout: 'manager',
  middleware: 'authenticated',
  components: {
    NewUser,
  },
}
</script>
