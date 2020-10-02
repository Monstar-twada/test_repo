/* eslint-disable prettier/prettier */
<template>
  <v-container class="regist-user">
    <v-row class="regist-user-form ma-0">
      <h3>基本情報</h3>
      <dl>
        <dt>免許証</dt>
        <dd>
          <UploadImage />
        </dd>
      </dl>
      <dl>
        <dt>氏名</dt>
        <dd>
          <Input
            class="d-inline-block mr20"
            placeholder="姓"
            :customwidth="210"
            :customheight="40"
          />
          <Input placeholder="名" :customwidth="210" :customheight="40" />
        </dd>
      </dl>
      <dl>
        <dt>フリガナ</dt>
        <dd>
          <Input
            class="d-inline-block mr20"
            placeholder="セイ"
            :customwidth="210"
            :customheight="40"
          />
          <Input placeholder="メイ" :customwidth="210" :customheight="40" />
        </dd>
      </dl>
      <dl>
        <dt>ユーザー名</dt>
        <dd>
          <Input placeholder="" :customwidth="210" :customheight="40" />
        </dd>
      </dl>
      <dl>
        <dt>性別</dt>
        <dd>
          <v-radio-group row class="ma-0 radio-group">
            <v-radio label="男性" value="1"></v-radio>
            <v-radio label="女性" value="2"></v-radio>
          </v-radio-group>
        </dd>
      </dl>
      <dl>
        <dt>電話番号1</dt>
        <dd>
          <Input
            placeholder="080-1234-1234"
            :customwidth="520"
            :customheight="40"
          />
        </dd>
      </dl>
      <dl>
        <dt>電話番号2</dt>
        <dd>
          <Input
            placeholder="080-1234-1234"
            :customwidth="520"
            :customheight="40"
          />
        </dd>
      </dl>
      <dl>
        <dt>メールアドレス</dt>
        <dd>
          <Input
            placeholder="user@cars-enjoy.com"
            :customwidth="520"
            :customheight="40"
          />
        </dd>
      </dl>
      <dl>
        <dt>郵便番号</dt>
        <dd>
          <Input placeholder="1234567" :customwidth="160" :customheight="40" />
        </dd>
      </dl>
      <dl>
        <dt>都道府県</dt>
        <dd>
          <Select
            items="items"
            :list="list"
            placeholder=""
            :customwidth="160"
            :customheight="30"
          />
        </dd>
      </dl>
      <dl>
        <dt>市区町村</dt>
        <dd>
          <Input placeholder="" :customwidth="520" :customheight="40" />
        </dd>
      </dl>
      <dl>
        <dt>番地など</dt>
        <dd>
          <Input placeholder="" :customwidth="520" :customheight="40" />
        </dd>
      </dl>
      <dl>
        <dt>建物名・部屋番号など</dt>
        <dd>
          <Input placeholder="" :customwidth="520" :customheight="40" />
        </dd>
      </dl>
      <dl>
        <dt>生年月日</dt>
        <dd>
          <Select
            items="items"
            :list="list"
            placeholder=""
            :customwidth="110"
            :customheight="30"
          />
          <span class="font-content">年</span>
          <Select
            items="items"
            :list="list"
            placeholder=""
            :customwidth="110"
            :customheight="30"
          />
          <span class="font-content">月</span>
          <Select
            items="items"
            :list="list"
            placeholder=""
            :customwidth="110"
            :customheight="30"
          />
          <span class="font-content">日</span>
        </dd>
      </dl>
      <dl>
        <dt>勤務先</dt>
        <dd>
          <Input placeholder="" :customwidth="520" :customheight="40" />
        </dd>
      </dl>
      <dl>
        <dt>勤続年数</dt>
        <dd>
          <Input placeholder="" :customwidth="160" :customheight="40" />
          <span class="font-content">年</span>
        </dd>
      </dl>
      <dl>
        <dt>年収</dt>
        <dd>
          <Input placeholder="" :customwidth="160" :customheight="40" />
          <span class="font-content">万円</span>
        </dd>
      </dl>
      <dl>
        <dt>住宅</dt>
        <dd>
          <Select
            items="items"
            :list="list"
            placeholder=""
            :customwidth="110"
            :customheight="30"
          />
          <Input
            placeholder=""
            class="ml20"
            :customwidth="110"
            :customheight="40"
          />
          <span class="font-content">年</span>
        </dd>
      </dl>
      <dl>
        <dt>銀行口座</dt>
        <dd>
          <Input
            placeholder="ファイルを選択"
            :customwidth="140"
            :customheight="40"
          />
        </dd>
      </dl>
      <dl>
        <dt>家族構成</dt>
        <dd>
          <ul class="ma-0 pa-0">
            <li
              v-for="(i, index) in familyLength"
              :key="index"
              class="family-input"
            >
              <Select
                items="items"
                :list="list"
                placeholder="続柄"
                :customwidth="110"
                :customheight="30"
              />
              <Input
                placeholder="姓"
                class="ml20"
                :customwidth="110"
                :customheight="40"
              />
              <Input
                placeholder="名"
                class="ml20"
                :customwidth="110"
                :customheight="40"
              />
              <Input
                placeholder="ファイルを選択"
                class="ml20"
                :customwidth="140"
                :customheight="40"
              />
            </li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt></dt>
        <dd class="family-add">
          <img
            src="/customer/btn-plus.svg"
            width="30"
            @click="familyInputAdd"
          />
        </dd>
      </dl>
    </v-row>
    <v-row class="regist-user-form mx-0 mt20">
      <h3>その他の情報</h3>
      <dl>
        <dt>ペット</dt>
        <dd>
          <Input
            placeholder="例)猫 2才"
            :customwidth="520"
            :customheight="40"
          />
        </dd>
      </dl>
      <dl>
        <dt>実家</dt>
        <dd>
          <Input placeholder="鹿児島" :customwidth="520" :customheight="40" />
        </dd>
      </dl>
      <dl>
        <dt>ドリンク</dt>
        <dd>
          <Input
            placeholder="コーヒー(ブラック)"
            :customwidth="520"
            :customheight="40"
          />
        </dd>
      </dl>
      <dl>
        <dt>趣味</dt>
        <dd>
          <Input placeholder="ドライブ" :customwidth="520" :customheight="40" />
        </dd>
      </dl>
    </v-row>
    <div class="d-flex flex-column justify-center align-center mt40">
      <nuxt-link to="/customer/regist/user/confirm"
        ><ButtonLarge content="確認" :is-white="true"
      /></nuxt-link>
      <ButtonLarge class="mt30 mb100" content="戻る" />
    </div>
  </v-container>
</template>

<script>
import Input from '~/components/common/Input.vue'
import Select from '~/components/common/Select.vue'
import ButtonLarge from '~/components/common/ButtonLarge.vue'
import UploadImage from '~/components/common/customer/regist/user/new/UploadImage.vue'
export default {
  name: 'RegistUser',
  components: {
    Input,
    Select,
    ButtonLarge,
    UploadImage,
  },
  data() {
    return {
      list: ['北海道', '青森県', '埼玉県', '千葉県', '東京都'],
      page: 1,
      loadedImage: '',
      familyLength: 1,
    }
  },
  methods: {
    familyInputAdd() {
      this.familyLength++
    },
    familyInputRem() {
      this.familyLength--
    },
    handleClick() {
      this.$router.push({
        path: `/customer/user/confirm`,
      })
    },
  },
}
</script>
<style lang="scss">
.radio-group {
  .v-input__control {
    margin: 5px 0;
  }
  .v-input__slot {
    margin-bottom: 0 !important;
  }
  .v-messages {
    display: none;
  }
  .v-input .v-label {
    line-height: 20px;
  }
  .v-label {
    font-size: 12px;
  }
  .v-input--selection-controls__ripple {
    width: 16px !important;
    height: 16px !important;
    top: 2px !important;
    left: 0px !important;
    margin: 0 5px;
  }
  .v-input input {
    max-height: 20px;
  }
  .v-icon.v-icon {
    font-size: 16px;
  }
  .theme--light.v-label {
    color: $--color-primary;
  }
}
</style>
<style lang="scss" scoped>
.regist-user {
  width: 712px;
  margin: 0 auto;
  &-form {
    background: $--color-white;
    border-radius: 5px;
    padding: 20px;
    h3 {
      color: $--color-primary;
    }
    dl {
      width: 100%;
      padding: 10px 0;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      font-size: 12px;
      color: $--color-primary;
      dt {
        width: 20%;
        line-height: 40px;
      }
      dd {
        width: 80%;
        display: flex;
        flex: 0 0 auto;

        .font-content {
          line-height: 40px;
          margin: 0 20px 0 10px;
        }

        .family-input {
          width: 100%;
          display: flex;
          flex: 0 0 auto;
          margin-bottom: 10px;
        }
        .family-add {
          width: 100%;
          height: 30px;
        }
      }
    }
    &__apologize {
      border: 1px $--color-border solid;
      border-radius: 5px;
      flex: 0 0 auto !important;
      width: 300px;
      height: 100px;
    }
  }
}
</style>
