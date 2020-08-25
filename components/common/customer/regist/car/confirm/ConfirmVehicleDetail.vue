<template>
  <div class="vehicle-detail-wrapper">
    <h3 class="mb20">車両詳細情報</h3>
    <fg-form
      ref="form"
      :model="form"
      label-width="150px"
      class="ml20"
      split-vertical-line
    >
      <fg-form-item label="車台番号">
        <h4>{{ form.chassisNumber }}</h4>
      </fg-form-item>
      <fg-form-item label="通称型式">
        <h4>{{ form.nameModel }}</h4>
      </fg-form-item>
      <fg-form-item label="エンジン型式">
        <h4>{{ form.engineType }}</h4>
      </fg-form-item>
      <fg-form-item label="最大出力">
        <h4>{{ form.maxOutput }}</h4>
      </fg-form-item>
      <fg-form-item label="最大トルク">
        <h4>{{ form.maxTorque }}</h4>
      </fg-form-item>
      <fg-form-item label="タイヤサイズ">
        <h4>{{ form.tireSize }}</h4>
      </fg-form-item>
      <fg-form-item label="バッテリーサイズ">
        <h4>{{ form.batterySize }}</h4>
      </fg-form-item>
      <fg-form-item label="燃料タンク">
        <h4>{{ form.gasTank + 'L' }}</h4>
      </fg-form-item>
      <fg-form-item label="カラーコード">
        <h4>{{ form.colorCode }}</h4>
      </fg-form-item>
      <fg-form-item label="トリムコード">
        <h4>{{ form.trimCode }}</h4>
      </fg-form-item>
      <fg-form-item label="モデル">
        <h4>{{ form.model }}</h4>
      </fg-form-item>
      <fg-form-item label="発売開始">
        <h4>{{ form.launched }}</h4>
      </fg-form-item>
      <fg-form-item label="保証期間">
        <h4>{{ form.warrantyPeriod }}</h4>
      </fg-form-item>
      <fg-form-item label="燃費(JC08モード)">
        <h4>{{ form.fuelConsumption + 'km/L' }}</h4>
      </fg-form-item>
      <fg-form-item label="車両重量">
        <h4>{{ form.vehicleWeight + 'Kg' }}</h4>
      </fg-form-item>
      <fg-form-item label="車両寸法">
        <div class="vehicle-detail-wrapper__car-info">
          <h4>全長</h4>
          <h4>{{ form.vehicleDimentionLength + 'mm' }}</h4>
        </div>
        <div class="vehicle-detail-wrapper__car-info">
          <h4>全幅</h4>
          <h4>{{ form.vehicleDimentionWidth + 'mm' }}</h4>
        </div>
        <div class="vehicle-detail-wrapper__car-info">
          <h4>全高</h4>
          <h4>{{ form.vehicleDimentionHeight + 'mm' }}</h4>
        </div>
      </fg-form-item>
    </fg-form>
  </div>
</template>

<script>
export default {
  name: 'ConfirmVehicleDetail',
  data() {
    return {
      form: {
        chassisNumber: 'ZVW51-0123456',
        nameModel: 'ZVW51-AHXGB(T)',
        engineType: '2ZR-1NM',
        maxOutput: '72kW(98PS)',
        maxTorque: '142N･m',
        tireSize: '215/45R17',
        batterySize: 'LN1',
        gasTank: '43',
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
.vehicle-detail-wrapper {
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
