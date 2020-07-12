<template>
  <div class="formContainer">
    <div class="formContainer__top">
      <h3>送客依頼フォーム</h3>
    </div>
    <div class="formContainer__bottom">
      <CustomerPart />
      <RequestKindPart />
    </div>
  </div>
</template>

<script>
import CustomerPart from '~/components/send/common/CustomerPart.vue'
import RequestKindPart from '~/components/send/common/RequestKindPart.vue'
export default {
  name: 'FormContainer',
  components: {
    CustomerPart,
    RequestKindPart,
  },
}
</script>

<style lang="scss" scoped>
.formContainer {
  width: 100%;
  background-color: $white-300;
  border-radius: 6px;
  color: $blue-200;
  &__top {
    padding: 25px 20px;
    border-bottom: 1px solid $gray-400;
    h3 {
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
