<template>
  <div class="edit-vehicle-detail-wrapper">
    <h3 class="mb20">車両詳細情報</h3>
    <fg-form ref="form" :model="form" label-width="150px" class="ml20">
      <fg-form-item label="車台番号">
        <fg-input v-model="form.chassisNumber" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="通称型式">
        <fg-input v-model="form.nameModel" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="エンジン型式">
        <fg-input v-model="form.engineType" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="最大出力">
        <fg-input v-model="form.maxOutput" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="最大トルク">
        <fg-input v-model="form.maxTorque" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="タイヤサイズ">
        <fg-row gutter="20">
          <fg-col span="9" class="edit-vehicle-detail-wrapper__tire-box">
            <h4>フロント</h4>
            <fg-input v-model="form.tireSizeFront" width="110px"></fg-input>
          </fg-col>
          <fg-col span="9" class="edit-vehicle-detail-wrapper__tire-box">
            <h4>リア</h4>
            <fg-input v-model="form.tireSizeBack" width="110px"></fg-input>
          </fg-col>
        </fg-row>
      </fg-form-item>
      <fg-form-item label="タイヤ製造">
        <fg-row gutter="20">
          <fg-col span="8" class="edit-vehicle-detail-wrapper__tire-box">
            <fg-input
              v-model="form.tireYear"
              width="110px"
              suffix-text-outside="年"
            ></fg-input>
          </fg-col>
          <fg-col span="8" class="edit-vehicle-detail-wrapper__tire-box">
            <fg-input
              v-model="form.tireWeek"
              width="110px"
              suffix-text-outside="週目"
            ></fg-input>
          </fg-col>
        </fg-row>
      </fg-form-item>
      <fg-form-item label="バッテリーサイズ">
        <fg-input v-model="form.batterySize" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="燃料タンク">
        <fg-input
          v-model="form.gasTank"
          width="110px"
          suffix-text-outside="L"
        ></fg-input>
      </fg-form-item>
      <fg-form-item label="カラーコード">
        <fg-input v-model="form.colorCode" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="トリムコード">
        <fg-input v-model="form.trimCode" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="モデル">
        <fg-input v-model="form.model" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="発売開始">
        <fg-input v-model="form.launched" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="保証期間">
        <fg-input v-model="form.warrantyPeriod" width="440px"></fg-input>
      </fg-form-item>
      <fg-form-item label="燃費(JC08モード)">
        <fg-input
          v-model="form.fuelConsumption"
          width="110px"
          suffix-text-outside="km/L"
        ></fg-input>
      </fg-form-item>
      <fg-form-item label="車両重量">
        <fg-input
          v-model="form.vehicleWeight"
          width="110px"
          suffix-text-outside="Kg"
        ></fg-input>
      </fg-form-item>
      <fg-form-item label="車両寸法">
        <div class="edit-vehicle-detail-wrapper__car-info">
          <h4>全長</h4>
          <fg-input
            v-model="form.vehicleDimentionLength"
            class="mb20"
            width="110px"
            suffix-text-outside="mm"
          ></fg-input>
        </div>
        <div class="edit-vehicle-detail-wrapper__car-info">
          <h4>全幅</h4>
          <fg-input
            v-model="form.vehicleDimentionWidth"
            class="mb20"
            width="110px"
            suffix-text-outside="mm"
          ></fg-input>
        </div>
        <div class="edit-vehicle-detail-wrapper__car-info">
          <h4>全高</h4>
          <fg-input
            v-model="form.vehicleDimentionHeight"
            width="110px"
            suffix-text-outside="mm"
          ></fg-input>
        </div>
      </fg-form-item>
    </fg-form>
  </div>
</template>

<script>
export default {
  name: 'EditVehicleDetail',
  data() {
    return {
      form: {
        chassisNumber: ' ',
        nameModel: ' ',
        engineType: ' ',
        maxOutput: ' ',
        maxTorque: ' ',
        tireSizeFront: ' ',
        tireSizeBack: ' ',
        tireYear: ' ',
        tireWeek: ' ',
        batterySize: ' ',
        gasTank: ' ',
        colorCode: ' ',
        trimCode: ' ',
        model: ' ',
        launched: ' ',
        warrantyPeriod: ' ',
        fuelConsumption: ' ',
        vehicleWeight: ' ',
        vehicleDimentionLength: ' ',
        vehicleDimentionWidth: ' ',
        vehicleDimentionHeight: ' ',
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.edit-vehicle-detail-wrapper {
  width: 715px;
  height: auto;
  border-radius: 6px;
  background-color: $white-300;
  padding: 24px 23.5px 10px;
  margin-bottom: 30px;
  &__tire-box {
    display: flex;
    h4 {
      margin-right: 15px;
    }
  }
  &__car-info {
    display: flex;
    margin-bottom: 0px;
    h4 {
      margin-right: 20px;
    }
  }
}
</style>
