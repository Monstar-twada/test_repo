<template>
  <div class="bodyContainer__equipmentInfo equipmentInfoContainer">
    <h3>車両基本情報</h3>
    <div class="equipmentInfoContainer__content">
      <ConfirmRowContainer
        :title="'エアバッグ ✳︎'"
        :kind="'base'"
        :value="'サイド'"
      />
      <ConfirmRowContainer :title="'ABS ✳︎'" :kind="'base'" :value="'有'" />
      <ConfirmRowContainer :title="'ホイール ✳︎'">
        <template>
          <div class="row--body">
            <p>純正</p>
            <p>15inch</p>
          </div>
        </template>
      </ConfirmRowContainer>
      <ConfirmRowContainer :title="'ナビ ✳︎'">
        <template>
          <div class="row--body">
            <p>純正</p>
            <p>SD</p>
          </div>
        </template>
      </ConfirmRowContainer>
      <ConfirmRowContainer :title="'TV ✳︎'">
        <template>
          <div class="row--body">
            <p>有</p>
            <p>フルセグ</p>
          </div>
        </template>
      </ConfirmRowContainer>
      <ConfirmRowContainer :title="'キー'">
        <template>
          <div class="row--body">
            <p>純正</p>
            <p>スマートキー</p>
          </div>
        </template>
      </ConfirmRowContainer>
    </div>
  </div>
</template>

<script>
import ConfirmRowContainer from '~/components/customer/regist/car/confirm/ConfirmRowContainer'

export default {
  name: 'EquipmentInfoContainer',
  components: {
    ConfirmRowContainer,
  },
}
</script>
<style lang="scss" scoped>
.equipmentInfoContainer {
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
  .row--body {
    padding: 10px 0;
    p {
      margin-bottom: 20px;
    }
    p:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
