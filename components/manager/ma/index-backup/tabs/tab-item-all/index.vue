<template>
  <div>
    <Inspection />
    <Advertisement />
  </div>
</template>
<script>
import Inspection from '~/components/manager/ma/index/tabs/tab-item-repeat/index.vue'
import Advertisement from '~/components/manager/ma/index/tabs/tab-item-new/index.vue'
export default {
  components: {
    Advertisement,
    Inspection,
  },
}
</script>
<style lang="scss"></style>
<style lang="scss" scoped></style>
