<template>
  <v-dialog v-model="visible" persistent max-width="940px">
    <div class="customer-licence-dialog">
      <DialogHeader title="免許証" @close="visible = false" />
      <div class="body-wrapper">
        <fg-row gutter="20">
          <fg-col span="12">
            <img src="/common/licence-photo-a.jpg" alt="" />
          </fg-col>
          <fg-col span="12">
            <img src="/common/licence-photo-b.jpg" alt="" />
          </fg-col>
        </fg-row>
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
      visible: this.value,
    }
  },
  watch: {
    value(val) {
      this.visible = val
    },
    visible(val) {
      this.$emit('input', val)
    },
  },
}
</script>

<style lang="scss">
.customer-licence-dialog {
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
