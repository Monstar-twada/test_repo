<template>
  <Admin />
</template>

<script>
import Admin from '~/components/admin/index'

export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Admin,
  },
}
</script>
