<template>
  <div class="bodyContainer">
    <div class="bodyContainer__btns">
      <UserInfoContainer />
      <OtherInfoContainer />
      <ButtonLarge :content="'保存'" :is-white="true" />
      <ButtonLarge :content="'戻る'" :is-white="false" />
    </div>
  </div>
</template>

<script>
import UserInfoContainer from '~/components/customer/regist/user/confirm/UserInfoContainer'
import OtherInfoContainer from '~/components/customer/regist/user/confirm/OtherInfoContainer'
import ButtonLarge from '~/components/common/ButtonLarge.vue'

export default {
  name: 'ConfirmBodyContainer',
  components: {
    UserInfoContainer,
    OtherInfoContainer,
    ButtonLarge,
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.bodyContainer {
  width: 100%;
  max-width: 712px;
  margin: 0 auto;
  color: $blue-200;
  &__btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > button {
      margin-bottom: 20px;
    }
  }
}
</style>
