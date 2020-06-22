<template>
  <div class="container">
    <div>
      <h2>メッセージボックス</h2>
      <div></div>
      <textarea id="" name="" cols="30" rows="10"></textarea>
      <button></button>
    </div>
    <CustomerInfo />
    <div>c</div>
    <SituationContainer />
  </div>
</template>

<script>
import CustomerInfo from '~/components/matter/CustomerInfo.vue'
import SituationContainer from '~/components/matter/SituationContainer.vue'

export default {
  name: 'MatterDetail',
  components: {
    CustomerInfo,
    SituationContainer,
  },
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 473px max-content;
  grid-gap: 30px;
  margin: 30px 0;
  & > div {
    background-color: $white-300;
    border-radius: 6px;
  }
}
</style>
