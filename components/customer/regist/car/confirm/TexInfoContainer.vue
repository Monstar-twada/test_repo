<template>
  <div class="bodyContainer__TexInfo texInfoContainer">
    <h3>税金/諸費用</h3>
    <div>
      <ConfirmRowContainer
        :title="'自動車税'"
        :kind="'base'"
        :value="'¥36,000'"
      />
      <ConfirmRowContainer
        :title="'自賠責保険'"
        :kind="'base'"
        :value="'¥27,840'"
      />
      <ConfirmRowContainer
        :title="'重量税'"
        :kind="'base'"
        :value="'¥24,600'"
      />
      <ConfirmRowContainer
        :title="'リサイクル'"
        :kind="'base'"
        :value="'¥11,350'"
      />
    </div>
  </div>
</template>

<script>
import ConfirmRowContainer from '~/components/customer/regist/car/confirm/ConfirmRowContainer.vue'

export default {
  name: 'TexInfoContainer',
  components: {
    ConfirmRowContainer,
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
