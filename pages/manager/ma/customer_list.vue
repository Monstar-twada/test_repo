<template>
  <div>
    <MaDetail />
  </div>
</template>

<script>
import MaDetail from '~/components/manager/ma/customer_list/index'

export default {
  layout: 'manager',
  middleware: 'authenticated',
  components: {
    MaDetail,
  },
}
</script>
<style></style>
