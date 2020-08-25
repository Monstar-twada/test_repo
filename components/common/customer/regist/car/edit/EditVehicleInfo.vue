<template>
  <div class="edit-vehicle-wrapper">
    <h3 class="mb20">車両基本情報</h3>
    <fg-form ref="form" :model="form" label-width="150px" class="ml20">
      <fg-form-item label="車検証">
        <div class="edit-vehicle-wrapper__item">
          <v-img
            :max-width="150"
            :max-height="100"
            :src="require(`./img/user-card-img.png`)"
          ></v-img>
          <fg-button
            class="mr5 ml5"
            size="mini"
            icon="edit"
            border
            circle
          ></fg-button>
          <fg-button size="mini" icon="trash" border circle></fg-button>
        </div>
      </fg-form-item>
      <fg-form-item label="車検証番号">
        <fg-input v-model="form.licenseNumber" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="メーカー">
        <fg-select
          v-model="form.maker"
          :placeholder="form.maker"
          :items="years"
          width="440px"
        ></fg-select>
      </fg-form-item>
      <fg-form-item label="車種">
        <fg-select
          v-model="form.model"
          :placeholder="form.model"
          :items="years"
          width="440px"
        ></fg-select>
      </fg-form-item>
      <fg-form-item label="グレード">
        <fg-select
          v-model="form.grade"
          :placeholder="form.grade"
          :items="years"
          width="440px"
        ></fg-select>
      </fg-form-item>
      <fg-form-item label="登録ナンバー">
        <div class="edit-vehicle-wrapper__car-box">
          <fg-input v-model="form.plateCity" width="110px"></fg-input>
          <fg-input v-model="form.plateNumber" width="110px"></fg-input>
          <fg-input v-model="form.plateLetter" width="80px"></fg-input>
          <fg-input v-model="form.plateYear" width="110px"></fg-input>
        </div>
      </fg-form-item>
      <fg-form-item label="初度登録年月">
        <fg-calendar
          v-model="form.firstRegistrationDate"
          width="160px"
          writable
          clearable
        />
      </fg-form-item>
      <fg-form-item label="登録年月日">
        <fg-calendar
          v-model="form.registerDate"
          width="160px"
          writable
          clearable
        />
      </fg-form-item>
      <fg-form-item label="車検満了日">
        <fg-calendar
          v-model="form.carInspectionExpiration"
          width="160px"
          writable
          clearable
        />
      </fg-form-item>
      <fg-form-item label="新中区分">
        <fg-select
          v-model="form.carSizeType"
          :placeholder="form.carSizeType"
          width="160px"
          :items="years"
        ></fg-select>
      </fg-form-item>
      <fg-form-item label="新中区分">
        <fg-checkbox
          v-model="form.intentionToPurchase"
          theme="blue"
          label="あり"
        ></fg-checkbox>
      </fg-form-item>
      <fg-form-item label="走行距離">
        <fg-input
          v-model="form.mileage"
          width="110px"
          suffix-text-outside="km"
        ></fg-input>
      </fg-form-item>
      <fg-form-item label="走行距離確認日">
        <fg-calendar
          v-model="form.mileageCheckDate"
          width="160px"
          writable
          clearable
        />
      </fg-form-item>
    </fg-form>
  </div>
</template>

<script>
function toDouble(n) {
  return n.toString()[1] ? n : '0' + n
}
export default {
  name: 'EditVehicleInfo',

  data() {
    const months = []
    for (let i = 1; i <= 12; i++) {
      months.push({
        text: toDouble(i),
        value: i,
      })
    }
    const days = []
    for (let i = 1; i <= 31; i++) {
      days.push({
        text: toDouble(i),
        value: i,
      })
    }
    return {
      years: [
        {
          text: '1990',
          value: 1990,
        },
      ],
      model: [
        {
          toyota: 'トヨタ',
        },
      ],
      form: {
        licenseNumber: '839294813493',
        maker: 'トヨタ',
        model: 'プリウス',
        grade: 'Sツーリングセレクション',
        plateCity: '足立',
        plateNumber: '310',
        plateLetter: 'あ',
        plateYear: '1234',
        firstRegistrationDate: '2017/2',
        registerDate: '2018/12/1',
        carInspectionExpiration: '2020/3/24',
        carSizeType: '中古車',
        intentionToPurchase: true,
        mileage: '90,000',
        mileageCheckDate: '2020/9/7',
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.edit-vehicle-wrapper {
  width: 715px;
  height: auto;
  border-radius: 6px;
  background-color: $white-300;
  padding: 24px 23.5px 10px;
  margin-bottom: 30px;
  &__item {
    display: flex;
    align-items: flex-end;
  }
  &__car-box {
    display: flex;
    justify-content: space-between;
    width: 440px;
  }
}
</style>
