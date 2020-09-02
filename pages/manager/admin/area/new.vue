<template>
  <Area />
</template>

<script>
import Area from '~/components/common/admin/manager/area/new/index'

export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Area,
  },
}
</script>
