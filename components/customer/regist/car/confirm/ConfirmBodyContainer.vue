<template>
  <div class="bodyContainer">
    <OwnerInfoContainer />
    <CarBasicInfoContainer />
    <TexInfoContainer />
    <RunningCostContainer />
    <CostInfoContainer />
    <EquipmentInfoContainer />
    <!-- <EquipmentInfoContainer :item-info="safetyEquipment" /> -->
    <div class="bodyContainer__btns">
      <ButtonLarge :content="'保存'" :is-white="true" />
      <ButtonLarge :content="'戻る'" :is-white="false" />
    </div>
  </div>
</template>

<script>
import OwnerInfoContainer from '~/components/customer/regist/car/confirm/OwnerInfoContainer'
import CarBasicInfoContainer from '~/components/customer/regist/car/confirm/CarBasicInfoContainer'
import TexInfoContainer from '~/components/customer/regist/car/confirm/TexInfoContainer.vue'
import RunningCostContainer from '~/components/customer/regist/car/confirm/RunningCostContainer.vue'
import CostInfoContainer from '~/components/customer/regist/car/confirm/CostInfoContainer.vue'
import EquipmentInfoContainer from '~/components/customer/regist/car/confirm/EquipmentInfoContainer.vue'

import ButtonLarge from '~/components/common/ButtonLarge.vue'

export default {
  name: 'ConfirmBodyContainer',
  components: {
    ButtonLarge,
    OwnerInfoContainer,
    CarBasicInfoContainer,
    TexInfoContainer,
    RunningCostContainer,
    CostInfoContainer,
    EquipmentInfoContainer,
  },
  data() {
    return {
      basicEquipment: {
        title: '基本装備情報',
        results: [
          'サイド',
          '有',
          '純正',
          '15',
          '純正',
          'SD',
          '有',
          'フルセグ',
          '純正',
          'スマートキー',
          '有',
          '有',
          '有',
          'LED',
          'オート',
          'シングル',
          '○',
          '複数',
          '有',
          '無',
          '有',
          '年',
          '月',
          '日',
          '15600',
        ],
        inputs: [
          {
            id: '1',
            title: 'エアバッグ',
            require: true,
            items: [
              {
                index: 0,
                placeholder: 'サイド',
                type: 'text',
                items: [],
                width: 80,
                height: 40,
                otherText: '',
              },
            ],
          },
        ],
      },
      safetyEquipment: {
        title: '先進安全装備情報',
        results: ['レベルⅡ', '有', '有', '有', '有', '有'],
        inputs: [
          {
            id: '1',
            title: '運転支援レベル',
            require: true,
            items: [
              {
                index: 0,
                placeholder: 'レベルⅡ',
                type: 'select',
                items: ['レベルⅡ'],
                width: 118,
                height: 31,
                otherText: '',
              },
            ],
          },
        ],
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.bodyContainer {
  width: 100%;
  max-width: 712px;
  margin: 0 auto;
  color: $blue-200;
  &__btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > button {
      margin-bottom: 20px;
    }
  }
}
</style>
