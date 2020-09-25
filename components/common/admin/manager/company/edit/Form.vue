<template>
  <div class="admin-company-edit-form-container">
    <div class="admin-company-edit-form-container_body">
      <div class="page-title-wrapper">
        <h2>企業情報</h2>
      </div>
      <fg-form label-width="150px">
        <fg-form-item label="会社名" required>
          <fg-input placeholder="株式会社XXXXXX"></fg-input>
        </fg-form-item>
        <fg-form-item label="代表者" required>
          <fg-input placeholder="田中 太郎"></fg-input>
        </fg-form-item>
        <fg-form-item label="郵便番号">
          <fg-input
            v-model="zipcode"
            placeholder="1200011"
            width="160px"
          ></fg-input>
          <fg-text
            v-if="validationMessage.zipcode"
            class="admin-company-edit-form-container__error"
            >{{ validationMessage.zipcode }}</fg-text
          >
        </fg-form-item>
        <fg-form-item label="都道府県">
          <fg-select
            v-model="areaName"
            :options="areaItems"
            width="160px"
            placeholder="東京都"
            item-prefix="- "
          />
        </fg-form-item>
        <fg-form-item label="市区町村">
          <fg-input placeholder="足立区中央町"></fg-input>
        </fg-form-item>
        <fg-form-item label="番地など">
          <fg-input placeholder="1-20-1"></fg-input>
        </fg-form-item>
        <fg-form-item label="建物名・部屋番号など">
          <fg-input placeholder=""></fg-input>
        </fg-form-item>
        <fg-form-item label="電話番号" required>
          <fg-input v-model="phone" placeholder="000-0000-0000"></fg-input>
          <fg-text
            v-if="validationMessage.phone"
            class="admin-company-edit-form-container__error"
            >{{ validationMessage.phone }}</fg-text
          >
        </fg-form-item>
        <fg-form-item label="メールアドレス" required>
          <fg-input
            v-model="email"
            placeholder="aaaa@cars-enjoy.com"
          ></fg-input>
          <fg-text
            v-if="validationMessage.email"
            class="admin-company-edit-form-container__error"
            >{{ validationMessage.email }}</fg-text
          >
        </fg-form-item>
        <fg-form-item label="店舗数">
          <fg-input placeholder="30店"></fg-input>
        </fg-form-item>
        <fg-form-item label="社員数">
          <fg-input placeholder="210名"></fg-input>
        </fg-form-item>
        <fg-form-item label="年度">
          <p>4月〜3月</p>
        </fg-form-item>
        <fg-form-item label="銀行口座" class="form-bankaccount">
          <fg-row gutter="20">
            <fg-col span="18">
              <fg-input v-model="a" placeholder="銀行名"></fg-input>
            </fg-col>
            <fg-col span="6">
              <fg-input v-model="b" placeholder="銀行コード"></fg-input>
            </fg-col>
          </fg-row>
          <fg-row gutter="20">
            <fg-col span="18">
              <fg-input v-model="a" placeholder="支店名"></fg-input>
            </fg-col>
            <fg-col span="6">
              <fg-input v-model="b" placeholder="支店コード"></fg-input>
            </fg-col>
          </fg-row>
          <fg-row gutter="20">
            <fg-col span="6">
              <fg-select
                v-model="areaName"
                :options="areaItems"
                placeholder="口座種別"
                item-prefix="- "
              />
            </fg-col>
          </fg-row>
          <fg-row gutter="20">
            <fg-col span="18">
              <fg-input
                v-model="a"
                placeholder="口座名義人（全角カナ）"
              ></fg-input>
            </fg-col>
            <fg-col span="6">
              <fg-input v-model="b" placeholder="口座番号"></fg-input>
            </fg-col>
          </fg-row>
        </fg-form-item>
      </fg-form>
    </div>
    <div class="admin-company-edit-form-container_bottom">
      <fg-button
        suffix-icon="arrow-right"
        border
        bold
        width="220px"
        @click="handleSubmit"
        >保存</fg-button
      >
      <fg-button width="220px" suffix-icon="arrow-right" bold white-transparent
        >戻る</fg-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      areaItems: {},
      name: '',
      areaName: '',
      zipcode: '',
      phone: '',
      email: '',
      reg: {
        zipcode: /\d{3}-\d{4}/,
        phone: /\d{2,4}-\d{2,4}-\d{3,4}/,
        // eslint-disable-next-line no-useless-escape
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      },
      validationMessage: {
        zipcode: '',
        phone: '',
        email: '',
      },
    }
  },
  watch: {
    zipcode(val) {
      this.validation()
    },
    phone(val) {
      this.validation()
    },
    email(val) {
      this.validation()
    },
  },
  methods: {
    validation() {
      let count = 0
      if (!this.reg.zipcode.test(this.zipcode)) {
        this.validationMessage.zipcode = '正しい形式で入力してください'
        count += 1
      } else this.validationMessage.zipcode = ''
      if (!this.reg.phone.test(this.phone)) {
        this.validationMessage.phone = '正しい形式で入力してください'
        count += 1
      } else this.validationMessage.phone = ''
      if (!this.reg.email.test(this.email)) {
        this.validationMessage.email = '正しい形式で入力してください'
        count += 1
      } else this.validationMessage.email = ''
      return count
    },
    handleSubmit() {
      const count = this.validation()
      if (count === 0) console.log('submitted')
      // if (count === 0) this.nextUrl('/login/passwordreset')
    },
  },
}
</script>

<style lang="scss">
.admin-company-edit-form-container {
  max-width: 712px;
  width: 100%;
  margin: 0 auto;
  color: $--color-primary;
  &__error {
    input {
      border: 1px solid $--color-warning;
    }
    div {
      color: $--color-warning;
    }
  }
  &_body {
    border-radius: 6px;
    padding: 24px;
    background-color: $--color-white;
    .page-title-wrapper {
      margin-bottom: 20px;
      h2 {
        font-size: 14px;
      }
    }
    .fg-form-item {
      .service-items {
        display: flex;
        align-items: center;
      }

      p {
        font-size: 12px;
        margin-bottom: 0;
      }

      &.form-bankaccount {
        align-items: flex-start;
        .fg-row {
          margin-bottom: 15px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
  &_bottom {
    margin-top: 40px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
