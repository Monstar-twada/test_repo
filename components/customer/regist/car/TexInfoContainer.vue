<template>
  <div class="bodyContainer__TexInfo texInfoContainer">
    <h3>税金/諸費用</h3>
    <div>
      <ContentRowContainer
        :title="'自動車税'"
        :kind="'input'"
        :placeholder="'¥36,000'"
      />
      <ContentRowContainer
        :title="'自賠責保険'"
        :kind="'input'"
        :placeholder="'¥27,840'"
      />
      <ContentRowContainer
        :title="'重量税'"
        :kind="'input'"
        :placeholder="'¥24,600'"
      />
      <ContentRowContainer
        :title="'リサイクル'"
        :kind="'input'"
        :placeholder="'¥11,350'"
      />
    </div>
  </div>
</template>

<script>
import ContentRowContainer from '~/components/customer/regist/car/ContentRowContainer'

export default {
  name: 'TexInfoContainer',
  components: {
    ContentRowContainer,
  },
}
</script>
<style lang="scss" scoped>
.texInfoContainer {
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
