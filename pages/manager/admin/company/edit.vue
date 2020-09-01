<template>
  <Edit />
</template>

<script>
import Edit from '~/components/common/admin/manager/company/edit/index'

export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Edit,
  },
}
</script>
