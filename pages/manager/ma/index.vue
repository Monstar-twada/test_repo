<template>
  <div>
    <Ma />
  </div>
</template>

<script>
import Ma from '~/components/manager/ma/index'
export default {
  scrollToTop: true,
  layout: 'manager',
  middleware: 'authenticated',
  components: {
    Ma,
  },
}
</script>
<style></style>
