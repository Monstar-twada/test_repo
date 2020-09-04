<template>
  <div class="customer-import-dialog-success">
    <v-img class="is-bi" :src="require('./img/export-success.svg')"></v-img>
    <h2 class="mt25">エクスポートが完了しました。</h2>
    <v-btn class="mt30" rounded outlined depressed @click="$emit('close')"
      >閉じる</v-btn
    >
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.customer-import-dialog-success {
  position: absolute;
  z-index: 2;
  top: 58px;
  left: 0;
  bottom: 0;
  width: 100%;
  background: $--color-white;
  padding: 0 24px;
  text-align: center;
  .v-image {
    margin: 73px auto 0;
    width: 80px;
  }
  .is-bi {
    margin: 30px auto 0;
  }
  h2 {
    color: $--color-primary;
  }
  .v-btn {
    width: 160px;
    border-color: $--color-primary-active;
    color: $--color-primary-active;
  }
}
</style>
