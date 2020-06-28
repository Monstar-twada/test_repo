<template>
  <div>
    <StepContainer :step-info="stepList[0]" :selected="selected.maker">
      <template>
        <div class="makerContainer">
          <div
            v-for="(maker, i) in stepList[0].itemList"
            :key="`maker-${i}`"
            class="makerContainer__list"
          >
            <p class="makerContainer__list--title">{{ maker.title }}</p>
            <div class="makerContainer__list__items">
              <div
                v-for="(item, j) in maker.items"
                :key="`item-${j}`"
                class="makerContainer__list__items--item"
                @click="setSelected(item, stepList[0].step)"
              >
                <v-img
                  :max-width="12"
                  :max-height="12"
                  :src="require(`~/static/assess/checkbox_icon.svg`)"
                ></v-img>
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </StepContainer>
    <StepContainer :step-info="stepList[1]" :selected="selected.car">
      <template>
        <div class="makerContainer">
          <div
            v-for="(maker, i) in stepList[1].itemList"
            :key="`maker-${i}`"
            class="makerContainer__list"
          >
            <p class="makerContainer__list--title">{{ maker.title }}</p>
            <div class="makerContainer__list__items">
              <div
                v-for="(item, j) in maker.items"
                :key="`item-${j}`"
                class="makerContainer__list__items--item"
                @click="setSelected(item, stepList[1].step)"
              >
                <v-img
                  :max-width="12"
                  :max-height="12"
                  :src="require(`~/static/assess/checkbox_icon.svg`)"
                ></v-img>
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </StepContainer>
    <!-- <StepContainer :step="3" :title="titles.type" :selected="selected.type">
      <template>
        <div></div>
      </template>
    </StepContainer>
    <StepContainer :step="4" :title="titles.grade" :selected="selected.grade">
      <template>
        <div></div>
      </template>
    </StepContainer> -->
  </div>
</template>

<script>
import StepContainer from '~/components/assess/free/StepContainer'

export default {
  name: 'BodyContainer',
  components: {
    StepContainer,
  },
  data() {
    return {
      currentStep: 0,
      selected: {
        maker: 'KIA',
        car: 'df',
        type: '',
        grade: '',
      },
      stepList: [
        {
          step: 0,
          stepName: 'maker',
          title: 'メーカー選択',
          editing: false,
          itemList: [
            {
              title: '国産車メーカー',
              items: [
                'レクサス',
                'トヨタ',
                '日産',
                'ホンダ',
                'マツダ',
                'スバル',
                'スズキ',
                '三菱',
                'ダイハツ',
                'いすゞ',
                '光岡自動車',
              ],
            },
            {
              title: '輸入車メーカー',
              items: [
                'メルセデス・ベンツ',
                'マイバッハ',
                'スマート',
                'BMW',
                'BMWアルピナ',
                'アウディ',
                'フォルクスワーゲン',
                'オペル',
                'ポルシェ',
                'ミニ',
                'キャデラック',
                'シボレー',
                'ビュイック',
                'ポンテアック',
                'サターン',
                'ハマー',
                'フォード',
                'リンカーン',
                'マーキュリー',
                'クライスラー',
                'ダッジ',
                'プリムス',
                'ジープ',
                'オールズモビル',
                'ロールスロイス',
                'クライスラー',
                'ベントレー',
                'ジャガー',
                'ランドローバー',
                'アストンマーティン',
                'ロータス',
                'ローバー',
                'ボルボ',
                'サーブ',
                'プジョー',
                'ルノー',
                'シトロエン',
                'アルピーヌ',
                'フィアット',
                'アルファ ロメオ',
                'フェラーリ',
                'ランボルギーニ',
                'マセラティ',
                'ランチア',
                'ベルトーネ',
                'アウトビアンキ',
                'アバルト',
                'ヒュンダイ',
                'サンヨン',
                'KIA',
              ],
            },
          ],
        },
        {
          step: 1,
          stepName: 'car',
          title: '車種選択',
          editing: false,
          itemList: [
            {
              title: '',
              items: [
                'IQ',
                'JPN TAXI',
                'MIRAI',
                'MR2',
                'MR－S',
                'RAV4',
                'RAV4 J',
                'RAV4 L',
                'RAV4 L ウェルキャブ',
                'SAI',
                'SAI ウェルキャブ',
                'WiLL CYPHA',
                'WiLL Vi',
                'WiLL VS',
                'アイシス',
                'アイシス ウェルキャブ',
                'アクア',
                'アクア ウェルキャブ',
                'アバロン',
                'アベンシス',
                'アリオン',
              ],
            },
          ],
        },
      ],
    }
  },
  methods: {
    setSelected(target, step) {
      this.selected[this.stepList[step].stepName] = target
      this.toggleEdit(step)
    },
    toggleEdit(step) {
      this.stepList[step].editing = !this.stepList[step].editing
    },
  },
}
</script>
<style lang="scss" scoped>
.makerContainer {
  &__list {
    &--title {
      font-size: 14px;
      font-weight: bold;
      color: $blue-200;
      margin-bottom: 23px;
    }
    &__items {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      input {
        margin-right: 5px;
        width: 12px;
        height: 12px;
        border-radius: 2px;
        border: solid 1px #dfe6f0;
      }
      &--item {
        display: flex;
        align-items: center;
        font-size: 12px;
        font-weight: 500;
        color: $blue-200;
        margin-bottom: 21px;
      }
    }
  }
}
</style>
