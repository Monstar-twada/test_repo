<template>
  <Edit />
</template>

<script>
import Edit from '~/components/common/account/edit/index'

export default {
  layout: 'login',
  middleware: 'authenticated',
  components: {
    Edit,
  },
}
</script>
