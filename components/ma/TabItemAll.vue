<template>
  <div>
    <Inspection />
    <Advertisement />
  </div>
</template>
<script>
import Inspection from '~/components/ma/TabItemRepeat.vue'
import Advertisement from '~/components/ma/TabItemNew.vue'
export default {
  components: {
    Advertisement,
    Inspection,
  },
}
</script>
<style lang="scss"></style>
<style lang="scss" scoped></style>
