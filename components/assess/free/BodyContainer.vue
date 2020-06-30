<template>
  <div>
    {{ currentStep }}
    <StepContainer
      :step-info="stepList[0]"
      :selected="selected.maker"
      :current-step="currentStep"
    >
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
                <div class="item__radio">
                  <v-img
                    :max-width="16"
                    :max-height="16"
                    :src="require(`~/static/assess/no_radio_icon.svg`)"
                    class="item__radio__no"
                  ></v-img>
                  <v-img
                    v-if="selected[stepList[0].stepName] === item"
                    :max-width="10"
                    :max-height="10"
                    :src="require(`~/static/assess/radio_active_icon.svg`)"
                    class="item__radio__active"
                  ></v-img>
                </div>
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </StepContainer>
    <StepContainer
      :step-info="stepList[1]"
      :selected="selected.car"
      :current-step="currentStep"
    >
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
                <div class="item__radio">
                  <v-img
                    :max-width="16"
                    :max-height="16"
                    :src="require(`~/static/assess/no_radio_icon.svg`)"
                    class="item__radio__no"
                  ></v-img>
                  <v-img
                    v-if="selected[stepList[1].stepName] === item"
                    :max-width="10"
                    :max-height="10"
                    :src="require(`~/static/assess/radio_active_icon.svg`)"
                    class="item__radio__active"
                  ></v-img>
                </div>
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </StepContainer>
    <StepContainer
      :step-info="stepList[2]"
      :selected="selected.type"
      :current-step="currentStep"
    >
      <template>
        <div class="typeContainer">
          <div
            v-for="(item, i) in stepList[2].itemList"
            :key="`type-item-${i}`"
            :class="[
              'typeContainer__typeItem',
              selected.type === item.id ? 'active' : null,
            ]"
            @click="setSelected(item.id, stepList[2].step)"
          >
            <div class="typeContainer__typeItem__info">
              <div>{{ item.id }}</div>
              <div>
                <p>{{ item.movingType }}</p>
                <p>{{ item.grade }}</p>
              </div>
            </div>
            <div class="typeContainer__typeItem__series">
              <p>{{ item.type }}</p>
              <p>
                <span v-for="(ser, j) in item.series" :key="`ser-${j}`">
                  {{ ser.title.join('') }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </template>
    </StepContainer>
    <StepContainer
      :step-info="stepList[3]"
      :selected="selected.grade"
      :current-step="currentStep"
    >
      <template>
        <div class="typeContainer">
          <div v-for="(ser, i) in stepList[3].itemList" :key="`ser-${i}`">
            <div
              v-for="(item, i) in ser.series"
              :key="`type-item-${i}`"
              :class="[
                'typeContainer__typeItem gradeItem',
                selected.grade === getGradeTitle(item.title) ? 'active' : null,
              ]"
              @click="setSelected(getGradeTitle(item.title), stepList[3].step)"
            >
              <div class="typeContainer__typeItem__info">
                <div class="itemTitle">
                  <p v-for="(tit, z) in item.title" :key="`tit-${z}`">
                    {{ tit }}
                  </p>
                </div>
                <div>
                  <p>型式</p>
                  <p>駆動</p>
                  <p>車両本体価格</p>
                </div>
              </div>
              <div class="typeContainer__typeItem__series">
                <p class="series__type">{{ item.type }}</p>
                <p class="series__movingType">{{ item.movingType }}</p>
                <p class="series__price">
                  {{ numberWithCommas(item.price) }}円
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </StepContainer>
    <div v-if="checkAllSelected" class="nextBtn">
      <button class="nextBtn--btn">
        査定入力へ
        <v-img
          :max-width="7"
          :max-height="12"
          :src="require(`~/static/assess/arrow_right_icon.svg`)"
          class="item__radio__no"
        ></v-img>
      </button>
    </div>
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
        maker: '',
        car: '',
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
        {
          step: 2,
          stepName: 'type',
          title: '型式選択',
          editing: false,
          itemList: [
            {
              id: 'ZVW51',
              movingType: '駆動',
              grade: '対象グレード',
              type: 'FF',
              series: [
                {
                  title: ['Aプレミアム', '”ツーリングセレクション”'],
                  type: 'ZVW51-AHXHB(T)',
                  movingType: 'FF',
                  price: 3345100,
                },
                {
                  title: ['Aプレミアム'],
                  type: 'ZVW51-AHXHB',
                  movingType: 'FF',
                  price: 3234000,
                },
                {
                  title: ['A', '“ツーリングセレクション”'],
                  type: 'ZVW51-AHXGB(T)',
                  movingType: 'FF',
                  price: 3062400,
                },
                {
                  title: ['A'],
                  type: 'ZVW51-AHXGB',
                  movingType: 'FF',
                  price: 2895200,
                },
                {
                  title: ['S', '“ツーリングセレクション”'],
                  type: 'ZVW51-AHXGB(T)',
                  movingType: 'FF',
                  price: 2783000,
                },
                {
                  title: ['S'],
                  type: 'ZVW51-AHXGB',
                  movingType: 'FF',
                  price: 2612500,
                },
                {
                  title: ['E'],
                  type: 'ZVW51-AHXGB',
                  movingType: 'FF',
                  price: 2565200,
                },
              ],
            },
            {
              id: 'ZVW55',
              movingType: '駆動',
              grade: '対象グレード',
              type: 'E-Four',
              series: [
                {
                  title: ['Aプレミアム', '”ツーリングセレクション”'],
                  type: 'ZVW51-AHXHB(T)',
                  movingType: 'FF',
                  price: 3345100,
                },
                {
                  title: ['Aプレミアム'],
                  type: 'ZVW51-AHXHB',
                  movingType: 'FF',
                  price: 3234000,
                },
                {
                  title: ['A', '“ツーリングセレクション”'],
                  type: 'ZVW51-AHXGB(T)',
                  movingType: 'FF',
                  price: 3062400,
                },
                {
                  title: ['A'],
                  type: 'ZVW51-AHXGB',
                  movingType: 'FF',
                  price: 2895200,
                },
                {
                  title: ['S', '“ツーリングセレクション”'],
                  type: 'ZVW51-AHXGB(T)',
                  movingType: 'FF',
                  price: 2783000,
                },
                {
                  title: ['S'],
                  type: 'ZVW51-AHXGB',
                  movingType: 'FF',
                  price: 2612500,
                },
                {
                  title: ['E'],
                  type: 'ZVW51-AHXGB',
                  movingType: 'FF',
                  price: 2565200,
                },
              ],
            },
          ],
        },
        {
          step: 3,
          stepName: 'grade',
          title: 'グレード選択',
          editing: false,
          itemList: [
            {
              id: 'ZVW51',
              series: [
                {
                  title: ['Aプレミアム', '”ツーリングセレクション”'],
                  type: 'ZVW51-AHXHB(T)',
                  movingType: 'FF',
                  price: 3345100,
                },
                {
                  title: ['Aプレミアム'],
                  type: 'ZVW51-AHXHB',
                  movingType: 'FF',
                  price: 3234000,
                },
                {
                  title: ['A', '“ツーリングセレクション”'],
                  type: 'ZVW51-AHXGB(T)',
                  movingType: 'FF',
                  price: 3062400,
                },
                {
                  title: ['A'],
                  type: 'ZVW51-AHXGB',
                  movingType: 'FF',
                  price: 2895200,
                },
                {
                  title: ['S', '“ツーリングセレクション”'],
                  type: 'ZVW51-AHXGB(T)',
                  movingType: 'FF',
                  price: 2783000,
                },
                {
                  title: ['S'],
                  type: 'ZVW51-AHXGB',
                  movingType: 'FF',
                  price: 2612500,
                },
                {
                  title: ['E'],
                  type: 'ZVW51-AHXGB',
                  movingType: 'FF',
                  price: 2565200,
                },
              ],
            },
            {
              id: 'ZVW55',
              series: [
                {
                  title: ['Aプレミアム', '”ツーリングセレクション”'],
                  type: 'ZVW51-AHXHB(T)',
                  movingType: 'FF',
                  price: 3345100,
                },
                {
                  title: ['Aプレミアム'],
                  type: 'ZVW51-AHXHB',
                  movingType: 'FF',
                  price: 3234000,
                },
                {
                  title: ['A', '“ツーリングセレクション”'],
                  type: 'ZVW51-AHXGB(T)',
                  movingType: 'FF',
                  price: 3062400,
                },
                {
                  title: ['A'],
                  type: 'ZVW51-AHXGB',
                  movingType: 'FF',
                  price: 2895200,
                },
                {
                  title: ['S', '“ツーリングセレクション”'],
                  type: 'ZVW51-AHXGB(T)',
                  movingType: 'FF',
                  price: 2783000,
                },
                {
                  title: ['S'],
                  type: 'ZVW51-AHXGB',
                  movingType: 'FF',
                  price: 2612500,
                },
                {
                  title: ['E'],
                  type: 'ZVW51-AHXGB',
                  movingType: 'FF',
                  price: 2565200,
                },
              ],
            },
          ],
        },
      ],
    }
  },
  computed: {
    checkAllSelected() {
      const result = Object.keys(this.selected).filter(
        (key) => !this.selected[key]
      )
      return result.length === 0
    },
  },
  methods: {
    getGradeTitle(arr) {
      return arr.join('')
    },
    numberWithCommas(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    setSelected(target, step) {
      this.selected[this.stepList[step].stepName] = target
      this.toggleEdit(step)
    },
    toggleEdit(step) {
      if (this.currentStep > step) this.currentStep = step
      else this.currentStep += 1
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
        cursor: pointer;
        .item__radio {
          width: 16px;
          height: 16px;
          position: relative;
          margin-right: 5px;
          &__no {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
          }
          &__active {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
          }
        }
      }
    }
  }
}

.typeContainer {
  &__typeItem {
    border-radius: 4px;
    background-color: $white-100;
    display: grid;
    grid-template-columns: 200px 1fr;
    align-items: center;
    padding: 11px 14px;
    margin-bottom: 20px;
    opacity: 0.8;
    cursor: pointer;
    &.active {
      opacity: 1;
    }
    &__info {
      width: 100%;
      display: flex;
      align-items: center;
      border-right: 1px solid $gray-100;
      & > div:first-child {
        width: 70px;
        height: 70px;
        border-radius: 4px;
        background-color: $blue-100;
        font-size: 14px;
        font-weight: bold;
        color: $white-300;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
          margin: 0;
        }
      }
      & > div:last-child {
        font-size: 12px;
        color: $blue-200;
        margin: 0 20px;
      }
    }
    &__series {
      margin: 0 22px;
      font-size: 12px;
      color: $blue-200;
      span {
        margin-right: 10px;
      }
    }

    &.gradeItem {
      grid-template-columns: 327px 1fr;
      .itemTitle {
        width: 190px;
      }
      .series__price {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
.nextBtn {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  &--btn {
    width: 240px;
    height: 40px;
    border-radius: 50px;
    background-color: $white-300;
    position: relative;
    font-size: 14px;
    font-weight: bold;
    color: $blue-100;
    .v-image {
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
    }
  }
}
</style>
