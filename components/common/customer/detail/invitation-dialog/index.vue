<template>
  <v-dialog v-model="visible" persistent max-width="350px">
    <v-card class="customer-invitation-dialog-card">
      <DialogHeader title="" no-border @close="visible = false" />
      <v-card-text class="body-wrapper">
        <img src="./img/e-mail.svg" alt="" />
        <h2 class="mt15">招待メールを送りました。</h2>
        <v-btn outlined rounded color="#1295CE" height="40" class="mt25"
          >OK</v-btn
        >
      </v-card-text>
    </v-card>
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
.customer-invitation-dialog-card {
  position: relative;
  .body-wrapper {
    text-align: center;
    h2 {
      color: $blue-200;
    }
    .v-btn {
      width: 160px;
    }
  }
}
</style>
