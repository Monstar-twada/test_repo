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
        <fg-input v-model="form.tireSize" width="440px"></fg-input>
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
        chassisNumber: 'ZVW51-0123456',
        nameModel: 'ZVW51-AHXGB(T)',
        engineType: '2ZR-1NM',
        maxOutput: '72kW(98PS)',
        maxTorque: '142N･m',
        tireSize: '215/45R17',
        batterySize: 'バッテリーサイズ',
        gasTank: '燃料タンク',
        colorCode: '3T7(エモーショナルレッド)',
        trimCode: 'トリムコード',
        model: '後期型',
        launched: '2018/12',
        warrantyPeriod: '~2022/2/24',
        fuelConsumption: '37.2',
        vehicleWeight: '1,360',
        vehicleDimentionLength: '4,575',
        vehicleDimentionWidth: '1,760',
        vehicleDimentionHeight: '1,470',
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
  &__car-info {
    display: flex;
    margin-bottom: 0px;
    h4 {
      margin-right: 20px;
    }
  }
}
</style>
