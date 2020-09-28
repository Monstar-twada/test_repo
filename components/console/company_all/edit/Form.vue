<template>
  <div class="console-company_all-edit-form-container">
    <div class="console-company_all-edit-form-container_compony_info">
      <div class="console-company_all-edit-form-container_compony_info_body">
        <div class="page-title-wrapper">
          <h2>企業情報</h2>
        </div>
        <fg-form label-width="150px">
          <fg-form-item label="会社名" required>
            <fg-row gutter="20">
              <fg-col span="22">
                <fg-input placeholder="株式会社XXXXXX"></fg-input>
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="代表者" required>
            <fg-row gutter="20">
              <fg-col span="11">
                <fg-input placeholder="田中"></fg-input>
              </fg-col>
              <fg-col span="11">
                <fg-input placeholder="太郎"></fg-input>
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="郵便番号">
            <fg-row gutter="20">
              <fg-col span="22">
                <fg-input
                  v-model="form1.zipcode"
                  placeholder="1200011"
                  width="160px"
                ></fg-input>
                <fg-text
                  v-if="form1.validationMessage.zipcode"
                  class="console-company_all-edit-form-container_compony_info_body__error"
                  >{{ form1.validationMessage.zipcode }}</fg-text
                >
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="都道府県">
            <fg-row gutter="20">
              <fg-col span="22">
                <fg-select
                  v-model="form1.areaName"
                  :options="form1.areaItems"
                  width="160px"
                  placeholder="東京都"
                  item-prefix="- "
                />
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="市区町村">
            <fg-row gutter="20">
              <fg-col span="22">
                <fg-input placeholder="足立区中央町"></fg-input>
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="番地など">
            <fg-row gutter="20">
              <fg-col span="22">
                <fg-input placeholder="1-20-1"></fg-input>
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="建物名・部屋番号など">
            <fg-row gutter="20">
              <fg-col span="22">
                <fg-input placeholder=""></fg-input>
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="電話番号" required>
            <fg-row gutter="20">
              <fg-col span="22">
                <fg-input
                  v-model="form1.phone"
                  placeholder="000-0000-0000"
                ></fg-input>
                <fg-text
                  v-if="form1.validationMessage.phone"
                  class="console-company_all-edit-form-container_compony_info_body__error"
                  >{{ form1.validationMessage.phone }}</fg-text
                >
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="メールアドレス" required>
            <fg-row gutter="20">
              <fg-col span="22">
                <fg-input
                  v-model="form1.email"
                  placeholder="aaaa@cars-enjoy.com"
                ></fg-input>
                <fg-text
                  v-if="form1.validationMessage.email"
                  class="console-company_all-edit-form-container_compony_info_body__error"
                  >{{ form1.validationMessage.email }}</fg-text
                >
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="店舗数">
            <fg-row gutter="20">
              <fg-col span="22">
                <fg-input placeholder="30店"></fg-input>
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="社員数">
            <fg-row gutter="20">
              <fg-col span="22">
                <fg-input placeholder="210名"></fg-input>
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="年度">
            <fg-row gutter="20">
              <fg-col span="22">
                <p>4月〜3月</p>
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="銀行口座" class="form-bankaccount">
            <fg-row gutter="20">
              <fg-col span="17">
                <fg-input v-model="a" placeholder="銀行名"></fg-input>
              </fg-col>
              <fg-col span="5">
                <fg-input v-model="b" placeholder="銀行コード"></fg-input>
              </fg-col>
            </fg-row>
            <fg-row gutter="20">
              <fg-col span="17">
                <fg-input v-model="a" placeholder="支店名"></fg-input>
              </fg-col>
              <fg-col span="5">
                <fg-input v-model="b" placeholder="支店コード"></fg-input>
              </fg-col>
            </fg-row>
            <fg-row gutter="20">
              <fg-col span="6">
                <fg-select
                  v-model="form1.areaName"
                  :options="form1.areaItems"
                  placeholder="口座種別"
                  item-prefix="- "
                />
              </fg-col>
            </fg-row>
            <fg-row gutter="20">
              <fg-col span="17">
                <fg-input
                  v-model="a"
                  placeholder="口座名義人（全角カナ）"
                ></fg-input>
              </fg-col>
              <fg-col span="5">
                <fg-input v-model="b" placeholder="口座番号"></fg-input>
              </fg-col>
            </fg-row>
          </fg-form-item>
        </fg-form>
      </div>
    </div>

    <div class="console-company_all-edit-form-container_representative">
      <div class="console-company_all-edit-form-container_representative_body">
        <div class="page-title-wrapper">
          <h2>基本情報</h2>
        </div>
        <fg-form label-width="120px">
          <fg-form-item label="会社名">
            <fg-row gutter="20">
              <fg-col span="22">
                <fg-input placeholder=""></fg-input>
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="権限">
            <fg-row gutter="20">
              <fg-col span="22">
                <div class="scrollable">
                  <div
                    v-for="(item, i) in form2.scrollItem"
                    :key="`${item.title}-${i}`"
                    class="scrollable_item"
                  >
                    <fg-checkbox v-model="value2"></fg-checkbox>
                    <p>{{ item.title }}</p>
                  </div>
                </div>
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="写真">
            <fg-row gutter="20">
              <fg-col span="22">
                <fg-image-processor
                  accept="*/*"
                  :options="options"
                  width="80"
                  height="80"
                  :url="url"
                  :validate="customValidate"
                  @change="change"
                />
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="氏名">
            <fg-row gutter="20">
              <fg-col span="6">
                <fg-input placeholder="姓"></fg-input>
              </fg-col>
              <fg-col span="6">
                <fg-input placeholder="名"></fg-input>
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="フリガナ">
            <fg-row gutter="20">
              <fg-col span="6">
                <fg-input placeholder="姓"></fg-input>
              </fg-col>
              <fg-col span="6">
                <fg-input placeholder="名"></fg-input>
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="生年月日">
            <fg-row gutter="20">
              <fg-col span="8">
                <fg-calendar
                  v-model="registrationFirstDateTo"
                  clearable
                ></fg-calendar>
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="cars Manager ID">
            <fg-row gutter="20">
              <fg-col span="8">
                <p>df1s082829</p>
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="権限">
            <fg-row gutter="20">
              <fg-col span="22">
                <fg-radio-group>
                  <fg-radio label="オーナー" value="2"></fg-radio>
                </fg-radio-group>
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="職種">
            <fg-row gutter="20">
              <fg-col span="22">
                <div class="job-items">
                  <div
                    v-for="(item, i) in form2.jobItems"
                    :key="`${item}-${i}`"
                    class="job-items_item"
                  >
                    <div class="job-items_item_img">
                      <v-img
                        :max-width="24"
                        :max-height="24"
                        :src="require(`./img/${item.icon}-icon-white.svg`)"
                      ></v-img>
                    </div>
                    <div class="job-items_item_text">
                      {{ item.text }}
                    </div>
                  </div>
                </div>
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="資格">
            <fg-row gutter="20">
              <fg-col span="22">
                <fg-input placeholder=""></fg-input>
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="電話番号">
            <fg-row gutter="20">
              <fg-col span="22">
                <fg-input placeholder=""></fg-input>
              </fg-col>
            </fg-row>
          </fg-form-item>
          <fg-form-item label="メールアドレス">
            <fg-row gutter="20">
              <fg-col span="22">
                <fg-input placeholder=""></fg-input>
              </fg-col>
            </fg-row>
          </fg-form-item>
        </fg-form>
      </div>
    </div>
    <div class="console-company_all-edit-form-container_bottoms">
      <fg-button
        suffix-icon="arrow-right"
        bold
        width="220px"
        type="primary"
        @click="handleSubmit"
        >追加</fg-button
      >
      <fg-button
        width="220px"
        suffix-icon="arrow-right"
        border
        bold
        type="primary"
        >戻る</fg-button
      >
      <fg-button
        width="220px"
        suffix-icon="arrow-right"
        border
        bold
        type="primary"
        >戻る</fg-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form1: {
        areaItems: {},
        firstName: '',
        lastName: '',
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
      },
      form2: {
        areaOptions: {},
        scrollItem: [
          {
            title: 'cars足立',
          },
          {
            title: 'cars板橋',
          },
          {
            title: 'cars杉並',
          },
          {
            title: 'cars大宮',
          },
          {
            title: 'cars奈良中央',
          },
          {
            title: '武蔵小杉',
          },
          {
            title: '新宿',
          },
          {
            title: '渋谷',
          },
        ],
        jobItems: [
          {
            icon: 'car',
            text: '購入',
          },
          {
            icon: 'money',
            text: '整備',
          },
          {
            icon: 'wrench',
            text: '整備',
          },
          {
            icon: 'hammer',
            text: '鈑金',
          },
          {
            icon: 'heart',
            text: '保険',
          },
          {
            icon: 'tire',
            text: 'アクセサリー',
          },
          {
            icon: 'paper',
            text: '車検',
          },
        ],
        form: {
          name: '',
          areaName: '',
          avatarUrl:
            'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2700073372,1831939333&fm=26&gp=0.jpg',
        },
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
      if (!this.form1.reg.zipcode.test(this.form1.zipcode)) {
        this.form1.validationMessage.zipcode = '正しい形式で入力してください'
        count += 1
      } else this.form1.validationMessage.zipcode = ''
      if (!this.form1.reg.phone.test(this.form1.phone)) {
        this.form1.validationMessage.phone = '正しい形式で入力してください'
        count += 1
      } else this.form1.validationMessage.phone = ''
      if (!this.form1.reg.email.test(this.form1.email)) {
        this.form1.validationMessage.email = '正しい形式で入力してください'
        count += 1
      } else this.form1.validationMessage.email = ''
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
.console-company_all-edit-form-container {
  &_compony_info {
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
      margin-bottom: 30px;
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
  }

  &_representative {
    max-width: 712px;
    width: 100%;
    margin: 0 auto;
    color: $--color-primary;
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
        align-items: center;
        .just-text {
          margin-bottom: 0;
          font-size: 12px;
        }
        .input-small-column {
          display: flex;
          align-items: center;
          &-width {
            width: 120px;
            margin-right: 15px;
          }
        }
        .service-items {
          display: flex;
          align-items: center;
        }
        .scrollable {
          width: 100%;
          height: 160px;
          overflow-y: scroll;
          border: 1px solid $--color-background-hover;
          border-radius: 4px;
          padding: 20px;
          &_item {
            display: flex;
            align-items: center;
            .fg-checkbox {
              padding-right: 8px;
              margin-right: 0;
            }
            & > p {
              font-size: 12px;
              margin-bottom: 0;
            }
          }
        }

        .job-items {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          &_item {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &_img {
              width: 40px;
              height: 40px;
              background-color: #dddddd;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 6px;
              .v-image {
                width: 100%;
                height: 100%;
              }
            }

            &_text {
              font-size: 12px;
              color: #999999;
            }
          }
        }
      }
    }
  }

  &_bottoms {
    margin-top: 30px;
    height: 170px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
