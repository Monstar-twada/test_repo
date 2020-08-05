<template>
  <div class="bodyContainer">
    <OwnerInfoContainer />
    <CarBasicInfoContainer />
    <TexInfoContainer />
    <CostInfoContainer />
    <EquipmentInfoContainer :item-info="basicEquipment" />
    <EquipmentInfoContainer :item-info="safetyEquipment" />
    <div class="bodyContainer__btns">
      <ButtonLarge :content="'確認'" :is-white="true" />
      <ButtonLarge :content="'削除'" :is-white="false" />
      <ButtonLarge :content="'戻る'" :is-white="false" />
    </div>
  </div>
</template>

<script>
import OwnerInfoContainer from '~/components/common/customer/regist/car/OwnerInfoContainer'
import CarBasicInfoContainer from '~/components/common/customer/regist/car/CarBasicInfoContainer'
import TexInfoContainer from '~/components/common/customer/regist/car/TexInfoContainer'
import CostInfoContainer from '~/components/common/customer/regist/car/CostInfoContainer'
import EquipmentInfoContainer from '~/components/common/customer/regist/car/EquipmentInfoContainer'

import ButtonLarge from '~/components/common/ButtonLarge'

export default {
  name: 'IndexBodyContainer',
  components: {
    OwnerInfoContainer,
    CarBasicInfoContainer,
    TexInfoContainer,
    CostInfoContainer,
    EquipmentInfoContainer,
    ButtonLarge,
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
          {
            id: '2',
            title: 'ABS',
            require: true,
            items: [
              {
                index: 1,
                placeholder: '有',
                type: 'select',
                items: ['有'],
                width: 68,
                height: 31,
                otherText: '',
              },
            ],
          },
          {
            id: '3',
            title: 'ホイール',
            require: true,
            items: [
              {
                index: 2,
                placeholder: '純正',
                type: 'select',
                items: ['純正'],
                width: 90,
                height: 31,
                otherText: '',
              },
              {
                index: 3,
                placeholder: '15',
                type: 'text',
                items: [],
                width: 80,
                height: 40,
                otherText: 'inch',
              },
            ],
          },
          {
            id: '4',
            title: 'ナビ',
            require: true,
            items: [
              {
                index: 4,
                placeholder: '純正',
                type: 'select',
                items: ['純正'],
                width: 78,
                height: 31,
                otherText: '',
              },
              {
                index: 5,
                placeholder: 'SD',
                type: 'select',
                items: ['SD'],
                width: 78,
                height: 31,
                otherText: '',
              },
            ],
          },
          {
            id: '5',
            title: 'TV',
            require: true,
            items: [
              {
                index: 6,
                placeholder: '有',
                type: 'select',
                items: ['有'],
                width: 68,
                height: 31,
                otherText: '',
              },
              {
                index: 7,
                placeholder: 'フルセグ',
                type: 'select',
                items: ['フルセグ'],
                width: 118,
                height: 31,
                otherText: '',
              },
            ],
          },
          {
            id: '6',
            title: 'キー',
            require: true,
            items: [
              {
                index: 8,
                placeholder: '純正',
                type: 'select',
                items: ['純正'],
                width: 78,
                height: 31,
                otherText: '',
              },
              {
                index: 9,
                placeholder: 'スマートキー',
                type: 'select',
                items: ['スマートキー'],
                width: 118,
                height: 31,
                otherText: '',
              },
            ],
          },
          {
            id: '7',
            title: 'ETC',
            require: false,
            items: [
              {
                index: 10,
                placeholder: '有',
                type: 'select',
                items: ['有'],
                width: 68,
                height: 31,
                otherText: '',
              },
            ],
          },
          {
            id: '8',
            title: 'サンルーフ',
            require: true,
            items: [
              {
                index: 11,
                placeholder: '有',
                type: 'select',
                items: ['有'],
                width: 68,
                height: 31,
                otherText: '',
              },
            ],
          },
          {
            id: '9',
            title: 'バックカメラ',
            require: true,
            items: [
              {
                index: 12,
                placeholder: '有',
                type: 'select',
                items: ['有'],
                width: 68,
                height: 31,
                otherText: '',
              },
            ],
          },
          {
            id: '10',
            title: 'ヘッドライト',
            require: true,
            items: [
              {
                index: 13,
                placeholder: 'LED',
                type: 'select',
                items: ['LED'],
                width: 118,
                height: 31,
                otherText: '',
              },
            ],
          },
          {
            id: '11',
            title: 'エアコン',
            require: true,
            items: [
              {
                index: 14,
                placeholder: 'オート',
                type: 'select',
                items: ['オート'],
                width: 98,
                height: 31,
                otherText: '',
              },
              {
                index: 15,
                placeholder: 'シングル',
                type: 'select',
                items: ['シングル'],
                width: 118,
                height: 31,
                otherText: '',
              },
            ],
          },
          {
            id: '12',
            title: 'シングル',
            require: false,
            items: [
              {
                index: 16,
                placeholder: '○',
                type: 'select',
                items: ['○'],
                width: 78,
                height: 31,
                otherText: '',
              },
            ],
          },
          {
            id: '13',
            title: '1オーナー',
            require: true,
            items: [
              {
                index: 17,
                placeholder: '複数',
                type: 'select',
                items: ['複数'],
                width: 78,
                height: 31,
                otherText: '',
              },
            ],
          },
          {
            id: '14',
            title: '保証書',
            require: true,
            items: [
              {
                index: 18,
                placeholder: '有',
                type: 'select',
                items: ['有'],
                width: 68,
                height: 31,
                otherText: '',
              },
            ],
          },
          {
            id: '15',
            title: '取説',
            require: true,
            items: [
              {
                index: 19,
                placeholder: '無',
                type: 'select',
                items: ['無'],
                width: 68,
                height: 31,
                otherText: '',
              },
            ],
          },
          {
            id: '16',
            title: '整備記録簿',
            require: true,
            items: [
              {
                index: 20,
                placeholder: '有',
                type: 'select',
                items: ['有'],
                width: 68,
                height: 31,
                otherText: '',
              },
              {
                index: 21,
                placeholder: '年',
                type: 'select',
                items: ['年'],
                width: 68,
                height: 31,
                otherText: '',
              },
              {
                index: 22,
                placeholder: '月',
                type: 'select',
                items: ['月'],
                width: 68,
                height: 31,
                otherText: '',
              },
              {
                index: 23,
                placeholder: '日',
                type: 'select',
                items: ['日'],
                width: 68,
                height: 31,
                otherText: '',
              },
              {
                index: 24,
                placeholder: '15600',
                type: 'text',
                items: [],
                width: 80,
                height: 40,
                otherText: '円',
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
          {
            id: '2',
            title: '自動ブレーキ',
            require: true,
            items: [
              {
                index: 1,
                placeholder: '有',
                type: 'select',
                items: ['有'],
                width: 68,
                height: 31,
                otherText: '',
              },
            ],
          },
          {
            id: '3',
            title: 'ソナー',
            require: true,
            items: [
              {
                index: 2,
                placeholder: '有',
                type: 'select',
                items: ['有'],
                width: 68,
                height: 31,
                otherText: '',
              },
            ],
          },
          {
            id: '4',
            title: 'BSM',
            require: true,
            items: [
              {
                index: 3,
                placeholder: '有',
                type: 'select',
                items: ['有'],
                width: 68,
                height: 31,
                otherText: '',
              },
            ],
          },
          {
            id: '5',
            title: 'レーンキープ',
            require: true,
            items: [
              {
                index: 4,
                placeholder: '有',
                type: 'select',
                items: ['有'],
                width: 68,
                height: 31,
                otherText: '',
              },
            ],
          },
          {
            id: '6',
            title: '自動ハイビーム',
            require: true,
            items: [
              {
                index: 5,
                placeholder: '有',
                type: 'select',
                items: ['有'],
                width: 68,
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
  /*max-width: 712px;*/
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
