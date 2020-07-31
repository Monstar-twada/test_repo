<template>
  <div class="bodyContainer__carInfo carBasicInfoContainer">
    <h3>車両基本情報</h3>
    <div class="carBasicInfoContainer__content">
      <ContentRowContainer :title="'車検証'">
        <template>
          <div class="row--body--pic">
            <div class="pic--left">
              <p>選択してください</p>
              <v-img
                :max-width="89"
                :max-height="24"
                :src="require(`~/static/customer/set_image_icon.png`)"
              ></v-img>
            </div>
            <div class="pic--right">
              <v-img
                :max-width="116"
                :max-height="77"
                :src="require(`~/static/customer/user_card_img.png`)"
              ></v-img>
            </div>
          </div>
        </template>
      </ContentRowContainer>
      <ContentRowContainer
        :title="'メーカー'"
        :kind="'select'"
        :placeholder="'トヨタ'"
      />
      <ContentRowContainer
        :title="'車種'"
        :kind="'select'"
        :placeholder="'プリウス'"
      />
      <ContentRowContainer
        :title="'グレード'"
        :kind="'select'"
        :placeholder="'Sツーリングセレクション'"
      />
      <ContentRowContainer :title="'登録ナンバー'">
        <template>
          <div class="row--body--160Input">
            <input placeholder="品川 310 あ 1234" type="text" />
          </div>
        </template>
      </ContentRowContainer>

      <ContentRowContainer :title="'初度登録年月'" :kind="'date'" />
      <ContentRowContainer :title="'登録年月日'" :kind="'date'" />
      <ContentRowContainer :title="'車検満了日'" :kind="'date'" />

      <ContentRowContainer :title="'新中区分'">
        <template>
          <div class="row--body--160Select">
            <Select
              :placeholder="''"
              :customwidth="'100%'"
              :customheight="31"
            />
          </div>
        </template>
      </ContentRowContainer>
      <ContentRowContainer :title="'保険情報有無'">
        <template>
          <div class="row--body--insurance">
            <div class="row--body--insurance--input">
              <input placeholder="ファイル選択" type="text" />
            </div>
            <Checkbox />
            <p>自社</p>
          </div>
        </template>
      </ContentRowContainer>
      <ContentRowContainer :title="'代替反応'">
        <div class="row--body--feedback">
          <Checkbox />
          <p>あり</p>
        </div>
      </ContentRowContainer>
    </div>
  </div>
</template>

<script>
import ContentRowContainer from '~/components/common/customer/regist/car/ContentRowContainer'
import Select from '~/components/common/Select'
import Checkbox from '~/components/common/Checkbox'

export default {
  name: 'CarBasicInfoContainer',
  components: {
    ContentRowContainer,
    Select,
    Checkbox,
  },
}
</script>
<style lang="scss" scoped>
.carBasicInfoContainer {
  width: 100%;
  height: 777px;
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
    width: 300px;
    height: 100px;
    border-radius: 4px;
    border: solid 1px $gray-100;
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
  .row--body--160Input {
    width: 160px;
    height: 40px;
    margin-right: 15px;
  }
  .row--body--160Select {
    width: 160px;
    height: 40px;
  }
  .row--body--insurance {
    width: 440px;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: $blue-200;
    &--input {
      width: 160px;
      height: 40px;
      margin-right: 15px;
    }
    p {
      margin-bottom: 0;
    }
  }
  .row--body--feedback {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: $blue-200;
    p {
      margin-bottom: 0;
    }
  }
}
</style>
