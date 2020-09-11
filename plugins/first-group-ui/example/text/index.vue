<template>
  <fg-form label-position="top" class="example-text-wrapper">
    <fg-form-item label="normal">
      <fg-text>{{ content }}</fg-text>
    </fg-form-item>
    <fg-form-item label="rows=2">
      <fg-text :rows="2">{{ content }}</fg-text>
    </fg-form-item>
    <fg-form-item label="rows=5 font-size=24px line-height=32">
      <fg-text :rows="5" font-size="24px" :line-height="32">{{
        content
      }}</fg-text>
    </fg-form-item>
  </fg-form>
</template>

<script>
export default {
  data() {
    return {
      content:
        'ギアアップの不具合を感じるとのことで入庫されたが、テスターを当てても、特に該当するような症状は見受けられず、何度か走行テストも実施した結果、万が一あり得るとしたら触媒の劣化であることが考察されたが、テストで取り替えるにはあまりに高いので、50万相当の工賃がかかる旨と若干の違和感を感じるかもしれないが、走行に問題が生じているわけではない旨を説明し車は戻していたが、再度やはりおかしいとの問い合わせ。',
    }
  },
}
</script>

<style lang="scss">
.example-text-wrapper {
  width: 640px;
  max-width: 100%;
}
</style>
