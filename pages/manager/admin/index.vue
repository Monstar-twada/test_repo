<template>
  <Admin />
</template>

<script>
// import Admin from '~/components/common/admin/index'
import Admin from '~/components/common/admin/manager/index'

export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Admin,
  },
}
</script>
