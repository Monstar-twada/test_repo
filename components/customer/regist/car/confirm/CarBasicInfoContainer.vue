<template>
  <div class="bodyContainer__carInfo carBasicInfoContainer">
    <h3>車両基本情報</h3>
    <div class="carBasicInfoContainer__content">
      <ConfirmRowContainer :title="'車検証'">
        <template>
          <div class="row--body--pic">
            <div class="pic--right">
              <v-img
                :max-width="116"
                :max-height="77"
                :src="require(`~/static/customer/user_card_img.png`)"
              ></v-img>
            </div>
          </div>
        </template>
      </ConfirmRowContainer>
      <ConfirmRowContainer
        :title="'メーカー'"
        :kind="'base'"
        :value="'トヨタ'"
      />
      <ConfirmRowContainer :title="'車種'" :kind="'base'" :value="'プリウス'" />
      <ConfirmRowContainer
        :title="'グレード'"
        :kind="'base'"
        :value="'Sツーリングセレクション'"
      />
      <ConfirmRowContainer
        :title="'登録ナンバー'"
        :kind="'base'"
        :value="'品川 310 あ 1234'"
      />
      <ConfirmRowContainer
        :title="'初度登録年月'"
        :kind="'base'"
        :value="'H29/02'"
      />
      <ConfirmRowContainer
        :title="'登録年月日'"
        :kind="'base'"
        :value="'H30/12/01'"
      />
      <ConfirmRowContainer
        :title="'車検満了日'"
        :kind="'base'"
        :value="'R2/03/24'"
      />
      <ConfirmRowContainer
        :title="'新中区分'"
        :kind="'base'"
        :value="'中古車'"
      />
      <ConfirmRowContainer :title="'保険情報有無'">
        <template>
          <div class="row--body--insurance">
            <p>839294813493</p>
            <span>自社</span>
          </div>
        </template>
      </ConfirmRowContainer>
      <ConfirmRowContainer :title="'代替反応'" :kind="'base'" :value="'あり'" />
    </div>
  </div>
</template>

<script>
import ConfirmRowContainer from '~/components/customer/regist/car/confirm/ConfirmRowContainer'

export default {
  name: 'CarBasicInfoContainer',
  components: {
    ConfirmRowContainer,
  },
}
</script>
<style lang="scss" scoped>
.carBasicInfoContainer {
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
  .row--body--pic {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: max-content;
    height: 100px;
    border-radius: 4px;
    & > div {
      width: max-content;
      justify-self: center;
    }
    .pic--left {
      p {
        font-size: 12px;
        color: $blue-500;
      }
    }
  }
  .row--body--insurance {
    width: 440px;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: $blue-200;
    padding-bottom: 10px;
    & > p {
      padding-bottom: 0;
    }
    & > span {
      font-size: 10px;
      color: $white-300;
      background-color: $blue-200;
      border-radius: 9px;
      padding: 2px 10px;
      margin-left: 10px;
    }
  }
}
</style>
