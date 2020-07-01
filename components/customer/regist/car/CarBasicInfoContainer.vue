<template>
  <div class="bodyContainer__carInfo carBasicInfoContainer">
    <h3>車両基本情報</h3>
    <div class="carBasicInfoContainer__content">
      <div class="carBasicInfoContainer__content--row">
        <div class="content__row--title">車検証</div>
        <div class="content__row--body">
          <div class="content__row--body--pic">
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
        </div>
      </div>
      <div class="carBasicInfoContainer__content--row">
        <div class="content__row--title">メーカー</div>
        <div class="content__row--body">
          <div class="content__row--body--440Select">
            <Select
              :placeholder="'トヨタ'"
              :customwidth="'100%'"
              :customheight="31"
            />
          </div>
        </div>
      </div>
      <div class="carBasicInfoContainer__content--row">
        <div class="content__row--title">車種</div>
        <div class="content__row--body">
          <div class="content__row--body--440Select">
            <Select
              :placeholder="'プリウス'"
              :customwidth="'100%'"
              :customheight="31"
            />
          </div>
        </div>
      </div>
      <div class="carBasicInfoContainer__content--row">
        <div class="content__row--title">グレード</div>
        <div class="content__row--body">
          <div class="content__row--body--440Select">
            <Select
              :placeholder="'Sツーリングセレクション'"
              :customwidth="'100%'"
              :customheight="31"
            />
          </div>
        </div>
      </div>
      <div class="carBasicInfoContainer__content--row">
        <div class="content__row--title">登録ナンバー</div>
        <div class="content__row--body">
          <div class="content__row--body--160Input">
            <input placeholder="品川 310 あ 1234" type="text" />
          </div>
        </div>
      </div>
      <div class="carBasicInfoContainer__content--row">
        <div class="content__row--title">初度登録年月</div>
        <div class="content__row--body">
          <div class="content__row--body--date">
            <div class="content__row--body--110Select">
              <Select :placeholder="''" :customwidth="105" :customheight="31" />
            </div>
            年
            <div class="content__row--body--110Select">
              <Select :placeholder="''" :customwidth="105" :customheight="31" />
            </div>
            月
            <div class="content__row--body--110Select">
              <Select :placeholder="''" :customwidth="105" :customheight="31" />
            </div>
            日
          </div>
        </div>
      </div>
      <div class="carBasicInfoContainer__content--row">
        <div class="content__row--title">登録年月日</div>
        <div class="content__row--body">
          <div class="content__row--body--date">
            <div class="content__row--body--110Select">
              <Select :placeholder="''" :customwidth="105" :customheight="31" />
            </div>
            年
            <div class="content__row--body--110Select">
              <Select :placeholder="''" :customwidth="105" :customheight="31" />
            </div>
            月
            <div class="content__row--body--110Select">
              <Select :placeholder="''" :customwidth="105" :customheight="31" />
            </div>
            日
          </div>
        </div>
      </div>
      <div class="carBasicInfoContainer__content--row">
        <div class="content__row--title">車検満了日</div>
        <div class="content__row--body">
          <div class="content__row--body--date">
            <div class="content__row--body--110Select">
              <Select :placeholder="''" :customwidth="105" :customheight="31" />
            </div>
            年
            <div class="content__row--body--110Select">
              <Select :placeholder="''" :customwidth="105" :customheight="31" />
            </div>
            月
            <div class="content__row--body--110Select">
              <Select :placeholder="''" :customwidth="105" :customheight="31" />
            </div>
            日
          </div>
        </div>
      </div>
      <div class="carBasicInfoContainer__content--row">
        <div class="content__row--title">新中区分</div>
        <div class="content__row--body">
          <div class="content__row--body--160Select">
            <Select
              :placeholder="''"
              :customwidth="'100%'"
              :customheight="31"
            />
          </div>
        </div>
      </div>
      <div class="carBasicInfoContainer__content--row">
        <div class="content__row--title">新中区分</div>
        <div class="content__row--body">
          <div class="content__row--body--insurance">
            <div class="content__row--body--160Input">
              <input placeholder="ファイル選択" type="text" />
            </div>
            <Checkbox />
            <p>自社</p>
          </div>
        </div>
      </div>
      <div class="carBasicInfoContainer__content--row">
        <div class="content__row--title">代替反応</div>
        <div class="content__row--body">
          <div class="content__row--body--feedback">
            <Checkbox />
            <p>あり</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Select from '~/components/common/Select'
import Checkbox from '~/components/common/Checkbox'

export default {
  name: 'CarBasicInfoContainer',
  components: {
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
  h3 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  &__content {
    &--row {
      margin-bottom: 20px;
      .content__row--title {
        padding: 10px;
        font-size: 12px;
        display: flex;
      }
      display: grid;
      grid-template-columns: 130px 1fr;
    }
    .content__row--body {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      &--pic {
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
      &--440Select {
        width: 440px;
        height: 40px;
      }
      &--160Input {
        width: 160px;
        height: 40px;
        margin-right: 15px;
        input {
          width: 100%;
          height: 100%;
          border-radius: 4px;
          padding: 14px 18px;
          border: solid 1px $gray-100;
          font-size: 12px !important;
          color: $blue-500 !important;
        }
      }
      &--date {
        width: 440px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 12px;
        color: $blue-200;
      }
      &--insurance {
        width: 440px;
        display: flex;
        align-items: center;
        font-size: 12px;
        color: $blue-200;
        input {
          margin-right: 15px;
        }
        input[type='checkbox'] {
          margin-right: 5px;
        }
        p {
          margin-bottom: 0;
        }
      }
      &--feedback {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: $blue-200;
        input[type='checkbox'] {
          margin-right: 5px;
        }
        p {
          margin-bottom: 0;
        }
      }
      &--110Select {
        width: 110px;
        height: 40px;
      }
      &--160Select {
        width: 160px;
        height: 40px;
      }
    }
  }
}
</style>
