<template>
  <div class="car-info">
    <v-row justify="center" align="start" class="mx-0 mt20">
      <v-col cols="8" class="px-0">
        <v-row align="start" justify="center" class="mx-0 car-info__base">
          <v-col cols="6">
            <h3>車両情報</h3>
            <h4 class="mt20">トヨタ</h4>
            <h4>プリウス S”ツーリングセレクション”</h4>
            <v-img
              :max-width="300"
              :min-height="166"
              :src="require(`./img/car-img.png`)"
            ></v-img>
          </v-col>
          <v-col cols="6">
            <v-row align="center" justify="end" class="mb10">
              <v-img
                class="d-inline-block mr10"
                max-width="64"
                max-height="24"
                :src="require(`./img/btn-edit.svg`)"
              ></v-img>
              <v-img
                class="d-inline-block mr10"
                max-width="64"
                max-height="24"
                :src="require(`./img/btn-update.svg`)"
              ></v-img>
              <h4
                class="d-inline-block mr20 font-weight-regular"
                style="height: 24px; line-height: 24px;"
              >
                最終更新 : 2019/11/11 12:30
              </h4>
            </v-row>
            <h3 class="car-info__base-title">車両基本情報</h3>
            <dl>
              <dt>車両No</dt>
              <dd>1234567890</dd>
            </dl>
            <dl>
              <dt>登録ナンバー</dt>
              <dd>足立 310 あ 1234</dd>
            </dl>
            <dl>
              <dt>車両走行距離</dt>
              <dd>11,111km</dd>
            </dl>
            <dl>
              <dt>車台番号</dt>
              <dd>ZVW51 - 0123456</dd>
            </dl>
            <dl>
              <dt>初度登録年月日</dt>
              <dd>2019/01/20</dd>
            </dl>
            <dl>
              <dt>車検満了日</dt>
              <dd>車検切れ</dd>
            </dl>
            <dl>
              <dt>前回点検日/距離</dt>
              <dd>2020/12/31 / 10,000km</dd>
            </dl>
            <dl>
              <dt>車体形状</dt>
              <dd>セダン</dd>
            </dl>
            <dl>
              <dt>外板色</dt>
              <dd>サーモテクトライムグリーン(8X7)</dd>
            </dl>
            <dl>
              <dt>内装色</dt>
              <dd>ブラック(FA22)</dd>
            </dl>
            <dl>
              <dt>シート表皮</dt>
              <dd>合成皮革</dd>
            </dl>
            <dl>
              <dt>滞留期間</dt>
              <dd>130日</dd>
            </dl>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" class="pl20 pr-0">
        <div class="car-info__customer">
          <h3 class="mb10">出品者</h3>
          <v-img
            class="d-inline-block"
            :max-width="60"
            :max-height="60"
            :src="require(`./img/profile.png`)"
          ></v-img>
          <div class="d-inline-block ml20">
            <p class="car-info__customer-name">
              米田 道春<span>（31歳）</span>
            </p>
            <span>
              <v-img
                class="d-inline-block"
                :max-width="12"
                :max-height="12"
                :src="require(`./img/tel.svg`)"
              ></v-img>
              080-1234-1234
            </span>
          </div>
        </div>
        <div class="car-info__price mt20">
          <div class="car-info__price-title">
            <h3>希望価格</h3>
            <h4 class="font-weight-regular">2020/05/20時点</h4>
          </div>
          <div class="car-info__price-content">
            <span>¥</span>
            <input class="input" value="1,500,000" />
          </div>
        </div>
        <div class="car-info__table mt20">
          <h3>同時進行案件</h3>
          <v-simple-table :dense="false" :fixed-header="false" :height="100">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">案件ID</th>
                  <th class="text-center">発生日</th>
                  <th class="text-center" width="100">担当者</th>
                  <th class="text-center">電話番号</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.tel }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'DetailSearch',
  components: {},
  data: () => ({
    list: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    desserts: [
      {
        id: 'AT-123',
        date: 'R2/3/3',
        name: 'cars足立店山田太郎',
        tel: '03-1234-5678',
      },
      {
        id: 'AT-124',
        date: 'R2/3/3',
        name: 'cars足立店山田太郎',
        tel: '03-1234-5678',
      },
    ],
  }),
}
</script>
<style lang="scss"></style>
<style lang="scss" scoped>
.car-info {
  color: $blue-200;
  &__base {
    background: $white-300;
    border-radius: 5px;
    overflow: hidden;
    &-title {
      line-height: 40px;
      border-bottom: 1px $gray-100 solid;
      font-weight: 400;
    }
    dl {
      font-size: 12px;
      height: 30px;
      line-height: 30px;
      dt {
        display: inline-block;
        width: 30%;
        border-right: 1px $gray-100 solid;
      }
      dd {
        display: inline-block;
        width: 58%;
        margin-left: 10%;
      }
    }
  }

  &__customer {
    background: $white-300;
    border-radius: 5px;
    overflow: hidden;
    padding: 20px;
    &-name {
      font-size: 19px;
      margin-bottom: 5px;

      span {
        font-size: 14px;
      }
    }
    span {
      font-size: 12px;
    }
  }

  &__price {
    background: $white-300;
    border-radius: 5px;
    overflow: hidden;
    padding: 20px;

    &-title {
      width: 30%;
      float: left;
    }
    &-content {
      width: 60%;
      float: right;
      font-size: 26px;

      span {
        font-size: 16px;
        font-weight: bold;
      }

      .input {
        width: 170px;
        height: 44px;
        border: 1px $gray-100 solid;
        color: $blue-200;
        font-weight: bold;
        text-align: right;
        padding: 0 10px;
      }
    }
  }
  &__table {
    background: $white-100;
    border-radius: 5px;
    overflow: hidden;
    padding: 20px;
    .theme--light.v-data-table .v-data-table__wrapper table thead th {
      font-size: 12px;
      color: $blue-200;
    }
    .theme--light.v-data-table .v-data-table__wrapper table tbody td {
      font-size: 12px;
      color: $blue-200;
    }
  }
}
</style>
