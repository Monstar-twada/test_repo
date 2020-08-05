<template>
  <Admin />
</template>

<script>
import Admin from '~/components/common/admin/index'

export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Admin,
  },
}
</script>
