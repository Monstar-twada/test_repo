<template>
  <v-dialog v-model="visible" persistent max-width="940px">
    <div class="customer-licence-dialog">
      <DialogHeader title="車検証" @close="visible = false" />
      <div class="body-wrapper">
        <img src="/common/vehicle-inspection-certificate.jpg" alt="" />
      </div>
    </div>
  </v-dialog>
</template>

<script>
import DialogHeader from '~/components/common/dialog-header/index'
export default {
  components: {
    DialogHeader,
  },
  props: {
    value: Boolean,
  },
  data() {
    return {
      carModel: '',
      visible: this.value,
      carModels: ['A', 'B', 'C'],
    }
  },
  computed: {},
  watch: {
    value(val) {
      this.visible = val
    },
    visible(val) {
      this.$emit('input', val)
    },
  },
  methods: {},
}
</script>

<style lang="scss">
.customer-licence-dialog-card {
  background: $white-300;
  border-radius: 4px;
  position: relative;
  .body-wrapper {
    padding: 40px;
    img {
      width: 100%;
    }
  }
}
</style>
