<template>
  <div class="vehicle-wrapper">
    <h3 class="mb20">車両基本情報</h3>
    <fg-form
      ref="form"
      :model="form"
      label-width="150px"
      class="ml20"
      split-vertical-line
    >
      <fg-form-item label="車検証">
        <div class="vehicle-wrapper__item">
          <fg-image-processor
            :options="{ width: 2000, height: 'auto' }"
            icon="license-front"
            url=""
            readonly
          ></fg-image-processor>
        </div>
      </fg-form-item>
      <fg-form-item label="車検証番号">
        <h4>{{ form.licenseNumber }}</h4>
      </fg-form-item>
      <fg-form-item label="メーカー">
        <h4>{{ form.maker }}</h4>
      </fg-form-item>
      <fg-form-item label="車種">
        <h4>{{ form.model }}</h4>
      </fg-form-item>
      <fg-form-item label="グレード">
        <h4>{{ form.grade }}</h4>
      </fg-form-item>
      <fg-form-item label="登録ナンバー">
        <h4>
          {{
            form.plateCity +
            form.plateNumber +
            form.plateLetter +
            form.plateYear
          }}
        </h4>
      </fg-form-item>
      <fg-form-item label="初度登録年月">
        <h4>{{ form.firstRegistrationDate }}</h4>
      </fg-form-item>
      <fg-form-item label="登録年月日">
        <h4>{{ form.registerDate }}</h4>
      </fg-form-item>
      <fg-form-item label="車検満了日">
        <h4>{{ form.carInspectionExpiration }}</h4>
      </fg-form-item>
      <fg-form-item label="新中区分">
        <h4>{{ form.carSizeType }}</h4>
      </fg-form-item>
      <fg-form-item label="新中区分">
        <h4>{{ form.intentionToPurchase ? 'あり' : 'なし' }}</h4>
      </fg-form-item>
      <fg-form-item label="走行距離">
        <h4>{{ form.mileage + 'km' }}</h4>
      </fg-form-item>
      <fg-form-item label="走行距離確認日">
        <h4>{{ form.mileageCheckDate }}</h4>
      </fg-form-item>
    </fg-form>
  </div>
</template>

<script>
export default {
  name: 'ConfirmVehicleInfo',

  data() {
    return {
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
.vehicle-wrapper {
  width: 715px;
  height: auto;
  border-radius: 6px;
  background-color: $white-300;
  padding: 24px 23.5px 10px;
  margin-bottom: 30px;
}
</style>
