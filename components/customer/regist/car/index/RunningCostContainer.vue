<template>
  <div class="bodyContainer__RunningCost runningCostContainer">
    <h3>ランニングコスト/月</h3>
    <div>
      <ContentRowContainer
        :title="'ガソリン代'"
        :kind="'input'"
        :placeholder="'10,000'"
      />
      <ContentRowContainer
        :title="'保険料'"
        :kind="'input'"
        :placeholder="'8,540'"
      />
      <ContentRowContainer
        :title="'駐車場代'"
        :kind="'input'"
        :placeholder="'12,000'"
      />
    </div>
  </div>
</template>

<script>
import ContentRowContainer from '~/components/customer/regist/car/index/ContentRowContainer'

export default {
  name: 'TexInfoContainer',
  components: {
    ContentRowContainer,
  },
}
</script>
<style lang="scss" scoped>
.runningCostContainer {
  width: 100%;
  border-radius: 6px;
  background-color: $white-300;
  padding: 24px 23.5px;
  margin-bottom: 30px;
  h3 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 12px;
  }
}
</style>
