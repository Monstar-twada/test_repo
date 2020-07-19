<template>
  <div class="bodyContainer">
    <OwnerInfoContainer />
    <CarBasicInfoContainer />
    <TexInfoContainer />
    <RunningCostContainer />
    <CostInfoContainer />
    <EquipmentInfoContainer :item-info="basicEquipment" />
    <EquipmentInfoContainer :item-info="safetyEquipment" />
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
        inputs: [
          {
            id: '1',
            title: 'エアバッグ ✳︎',
            items: ['サイド'],
          },
          {
            id: '2',
            title: 'ABS ✳︎',
            items: ['有'],
          },
          {
            id: '3',
            title: 'ホイール ✳︎',
            items: ['純正', '15inch'],
          },
          {
            id: '4',
            title: 'ナビ ✳︎',
            items: ['純正', 'SD'],
          },
          {
            id: '5',
            title: 'TV ✳︎',
            items: ['有', 'フルセグ'],
          },
          {
            id: '6',
            title: 'TV ✳︎',
            items: ['有', 'フルセグ'],
          },
          {
            id: '7',
            title: 'キー',
            items: ['純正', 'スマートキー'],
          },
          {
            id: '8',
            title: 'ETC ✳︎',
            items: ['有'],
          },
          {
            id: '9',
            title: 'サンルーフ ✳︎',
            items: ['有'],
          },
          {
            id: '10',
            title: 'バックカメラ ✳︎',
            items: ['有'],
          },
          {
            id: '11',
            title: 'ヘッドライト ✳︎',
            items: ['LED'],
          },
          {
            id: '12',
            title: 'エアコン ✳︎',
            items: ['オート', 'シングル'],
          },
          {
            id: '13',
            title: '禁煙者',
            items: ['○'],
          },
          {
            id: '14',
            title: '1オーナー ＊',
            items: ['複数'],
          },
          {
            id: '15',
            title: '保証書 ＊',
            items: ['有'],
          },
          {
            id: '16',
            title: '取説 ＊',
            items: ['無'],
          },
          {
            id: '17',
            title: '整備記録簿 ✳︎',
            items: ['有', '2020年1月1日', '15600円'],
          },
        ],
      },
      safetyEquipment: {
        title: '先進安全装備情報',
        inputs: [
          {
            id: '1',
            title: '運転支援レベル ✳︎',
            items: ['レベルⅡ'],
          },
          {
            id: '2',
            title: '自動ブレーキ ✳︎',
            items: ['有'],
          },
          {
            id: '3',
            title: 'ソナー ✳︎',
            items: ['有'],
          },
          {
            id: '4',
            title: 'BSM ✳︎',
            items: ['有'],
          },
          {
            id: '5',
            title: '自動ハイビーム ✳︎',
            items: ['有'],
          },
          {
            id: '6',
            title: 'レーンキープ ✳︎',
            items: ['有'],
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
