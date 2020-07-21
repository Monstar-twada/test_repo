<template>
  <div class="customer-detail-car-info-wrapper pb20">
    <ColumnTitle title="車両情報" border>
      <v-img
        class="change-car-icon mr10"
        width="90"
        :src="require('~/static/customer/car-more.svg')"
        @click="selectCarVisible = true"
      />
      <PlusButton border />
    </ColumnTitle>

    <v-row no-gutters>
      <v-col cols="8" class="p20">
        <div class="mt10 ml20">
          <SubTitle sub-title="プリウス" />
        </div>
        <v-row no-gutters class="customer-car__owner p20">
          <v-col cols="3" class="">
            <h4>所有者</h4>
            <v-avatar size="24" class="ml10">
              <v-img :src="require('~/static/customer/profile-edit.svg')" />
            </v-avatar>
          </v-col>
          <v-col cols="3" class="px-0">
            <h4>意思決定者</h4>
            <v-avatar size="24" class="ml10">
              <v-img :src="require('~/static/customer/profile-edit.svg')" />
            </v-avatar>
          </v-col>
          <v-col cols="3" class="px-0">
            <h4>利用者</h4>
            <v-avatar size="24" class="ml10">
              <v-img :src="require('~/static/customer/profile-edit.svg')" />
            </v-avatar>
            <v-avatar size="24">
              <v-img :src="require('~/static/customer/profile-edit.svg')" />
            </v-avatar>
          </v-col>
        </v-row>

        <v-row no-gutters class="customer-car__owner pl20 pr20">
          <v-col cols="2" class="px-0">
            <h4>主な利用目的</h4>
          </v-col>
          <v-col cols="10" class="px-0">
            <v-chip text-color="#436AA3" color="#DFE6F0" outlined label small
              >車出勤</v-chip
            >
            <v-chip text-color="#436AA3" color="#DFE6F0" outlined label small
              >買い物</v-chip
            >
            <v-chip text-color="#436AA3" color="#DFE6F0" outlined label small
              >部活送迎</v-chip
            >
            <v-chip text-color="#436AA3" color="#DFE6F0" outlined label small
              >習い事送迎</v-chip
            >
          </v-col>
        </v-row>

        <v-row no-gutters class="customer-car__owner p20">
          <v-col cols="2" class="px-0">
            <h4>取引種別</h4>
          </v-col>
          <v-col cols="10" class="px-0">
            <v-chip small text-color="white" color="#1E5199">車販</v-chip>
            <v-chip small text-color="white" color="#1E5199">整備</v-chip>
            <v-chip small text-color="white" color="#aaa">車検</v-chip>
            <v-chip small text-color="white" color="#aaa">鈑金</v-chip>
            <v-chip small text-color="white" color="#aaa">保険</v-chip>
          </v-col>
        </v-row>

        <div class="mt20 ml20">
          <SubTitle sub-title="車両基本情報" />
        </div>

        <v-row no-gutters>
          <v-col cols="6">
            <div class="right-border pt10 pl20 pr20">
              <TextContent label="メーカー" content="トヨタ" />
              <TextContent label="車種" content="プリウス" />
              <TextContent label="登録ナンバー" content="足立 310 あ 1234" />
              <TextContent label="登録年月日" content="H30/12/01" />
              <TextContent label="新中区分" content="中古車" />
              <TextContent
                label="保険情報有無"
                content="839294813493"
                copyable
                high-light
              >
                <v-chip x-small text-color="white" color="#1E5199" class="ml5"
                  >自社</v-chip
                >
              </TextContent>
              <TextContent
                label="その他システムID"
                content="VerticeID : 0123456789"
              />
            </div>
          </v-col>
          <v-col cols="6">
            <div class="pt10 pl20 pr20">
              <TextContent label="グレード" content="Sツーリングセレクション" />
              <TextContent label="初度登録年月" content="H29/02" />
              <TextContent label="車検満了日" content="R2/03/24" flex>
                <RoundBorderButton
                  icon="calendar"
                  class="ml5"
                  text="予約・入庫状況"
                  @click="reservationVisible = true"
                />
              </TextContent>
              <TextContent
                label="車検証有無"
                content="839294813493"
                copyable
                high-light
              />
              <TextContent
                label="代替対象"
                content="対象"
                custom-font-weight="normal"
              />
              <TextContent
                label="代替反応"
                content="あり"
                custom-font-weight="normal"
              />
            </div>
          </v-col>
        </v-row>

        <div class="mt20 ml20">
          <SubTitle sub-title="売買情報" />
        </div>

        <v-row no-gutters>
          <v-col cols="6">
            <div class="right-border pt10 pl20 pr20">
              <TextContent
                label="小売価格"
                content="¥2,340,000（R1/1/1時点）"
              />
              <TextContent
                label="本査定額"
                content="¥910,000（H31/12/12時点）"
                customheight="35"
              />
              <TextContent label="支払区分" content="ローン" />
              <TextContent
                label="月々返済"
                content="¥30,000（ボーナス時 ¥100,000）"
              />
            </div>
          </v-col>
          <v-col cols="6">
            <div class="pt10 pl20 pr20">
              <TextContent
                label="AI査定額"
                content="¥1,594,000（R1/1/1時点）"
              />
              <HtmlContent
                label="<h3>予想価格</h3><h4>(マッチング)</h4>"
                content="¥1,900,000（H31/12/12時点）"
                customheight="35"
              />
              <TextContent
                label="支払残債"
                content="¥510,000（H31/12/12時点）"
              />
            </div>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="6">
            <div class="mt20 ml20">
              <SubTitle sub-title="税金/諸費用" />
            </div>
            <div class="pt10 pl20 pr20">
              <TextContent label="自動車税" content="¥36,000" />
              <TextContent label="自賠責保険" content="¥27,840" />
              <TextContent label="重量税" content="¥24,600" />
              <TextContent label="リサイクル" content="¥11,350" />
            </div>
          </v-col>
          <v-col cols="6">
            <div class="mt20 ml20">
              <SubTitle sub-title="ランニングコスト/月" />
            </div>
            <div class="pt10 pl20 pr20">
              <TextContent label="ガソリン代" content="¥10,000" />
              <TextContent label="保険料" content="¥8,540" />
              <TextContent label="駐車場代" content="¥12,000" />
              <div class="double-line mt10 mb5"></div>
              <TextContent label="月間コスト" content="¥30,540" />
            </div>
          </v-col>
        </v-row>

        <div class="mt20 ml20">
          <SubTitle sub-title="車両詳細情報">
            <button class="car-info-arrow-down-button">
              <img src="../../img/arr-down.svg" alt="" />
            </button>
          </SubTitle>
        </div>

        <v-row no-gutters>
          <v-col cols="6">
            <div class="right-border pt10 pl20 pr20 pb20">
              <TextContent label="車台番号" content="ZVW51-0123456" />
              <TextContent label="通称型式" content="ZVW51-AHXGB(T)" />
              <TextContent label="エンジン型式" content="2ZR-1NM" />
              <TextContent label="最大出力" content="72kW(98PS)" />
              <TextContent label="最大トルク" content="142N･m" />
              <TextContent label="タイヤサイズ" content="215/45R17" />
              <TextContent label="バッテリーサイズ" content="LN1" />
              <TextContent label="燃料タンク" content="43L" />
            </div>
          </v-col>
          <v-col cols="6">
            <div class="pt10 pl20 pr20">
              <TextContent
                label="カラーコード"
                content="3T7(サーモテクトライムグリーン)"
              />
              <TextContent label="トリムコード" content="FA22(ブラック)" />
              <TextContent label="モデル" content="後期型" />
              <TextContent label="販売期間" content="2018/12~" />
              <TextContent label="保証期間" content="~R4/2/24" />
              <HtmlContent
                label="<h3>燃費</h3><h4>(JC08モード)</h4>"
                content="37.2km/L"
              />
              <TextContent label="車両重量" content="1,360Kg" />
              <HtmlContent
                label="車両寸法"
                content="全長 4,575mm<br />全幅 1,760mm<br />全高 1,470mm"
              />
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" class="customer-car__matching">
        <div class="top-edit-button-wrapper">
          <RoundBorderButton />
        </div>
        <CarInfoSide />
      </v-col>
      <SelectCarDialog
        v-model="selectCarVisible"
        :data="carListData"
        :current-car="currentCar"
        @change="changeCar"
      />
      <EditReservationDialog v-model="reservationVisible" />
    </v-row>
  </div>
</template>
<script>
import SelectCarDialog from './select-car-dialog/index'
import CarInfoSide from './CarInfoSide'
import SubTitle from '~/components/customer/SubTitle.vue'
import TextContent from '~/components/customer/TextContent.vue'
import HtmlContent from '~/components/customer/HtmlContent.vue'
import ColumnTitle from '~/components/customer/ColumnTitle'
import PlusButton from '~/components/breadcrumbs/PlusButton'
import RoundBorderButton from '~/components/customer/detail/button/RoundBorderButton'
import EditReservationDialog from '~/components/customer/detail/edit-reservation-dialog'
export default {
  name: 'CarInfo',
  components: {
    SubTitle,
    TextContent,
    HtmlContent,
    SelectCarDialog,
    ColumnTitle,
    PlusButton,
    RoundBorderButton,
    EditReservationDialog,
    CarInfoSide,
  },
  props: {
    customerId: {
      type: [String, Number],
      default: 0,
    },
  },
  data: () => ({
    selectCarVisible: false,
    reservationVisible: false,
    carListData: {},
    currentCar: {},
  }),
  created() {
    this.getCarList()
  },
  methods: {
    async getCarList() {
      const params = {
        limit: 50,
        offset: 0,
      }
      try {
        const res = await this.$api.get(
          `/v1/customer/${this.customerId}/car`,
          params
        )
        console.log('getCarList', res)
        this.carListData = res || {}
        const carList = this.carListData.results || []
        this.currentCar = carList[0] || {}
        await this.getCarInfo()
      } catch (e) {
        console.error(e)
      }
    },
    async getCarInfo() {
      try {
        const res = await this.$api.get(
          `/v1/customer/${this.customerId}/car/${this.currentCar.carId}`
        )
        console.log('getCarInfo', res)
      } catch (e) {
        console.error(e)
      }
    },
    changeCar(item) {
      this.currentCar = {
        ...item,
      }
      this.getCarInfo()
    },
  },
}
</script>

<style lang="scss">
.customer-detail-car-info-wrapper {
  .change-car-icon {
    cursor: pointer;
  }
  .customer-car {
    &__owner {
      h4 {
        display: inline-block;
        color: $blue-200;
      }
    }
    &__matching {
      .top-edit-button-wrapper {
        margin-right: 20px;
        height: 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      h3 {
        margin: 30px 0 10px;
        color: $blue-200;
      }
      h4 {
        color: $blue-200;
        margin: 10px 0;
        font-weight: normal;
      }
      .v-card {
        padding: 10px;
        background: $white-100;
        border: none !important;
        font-weight: normal;
        dl {
          position: relative;
          padding-bottom: 1px;
          padding-top: 1px;
          &:after {
            position: absolute;
            top: 0;
            bottom: 0;
            content: '';
            width: 1px;
            background: #dfe6f0;
            left: 80px;
          }
          dd {
            padding-left: 15px;
          }
        }
      }
    }
  }
  .profile {
    color: $blue-200;
  }
  .line {
    width: 100%;
    height: 1px;
    background: $gray-100;
  }
  .double-line {
    width: 100%;
    height: 3px;
    border-top: 1px solid $gray-100;
    border-bottom: 1px solid $gray-100;
  }
  .car-info-arrow-down-button {
    height: 40px;
    padding: 0 5px;
    outline: none;
  }
}
</style>
