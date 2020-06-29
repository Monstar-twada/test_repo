<template>
  <div class="d-flex">
    <div class="tab mr25">
      <h3 class="title">車両展開図</h3>
      <v-img
        :min-height="800"
        :min-width="420"
        :src="require('~/static/assess/car-interior.svg')"
        class="mb40"
      />
      <h3 class="title">特記事項</h3>
      <v-textarea outlined value="例）①に傷あり"></v-textarea>
    </div>
    <div class="tab">
      <h3 class="title">車両本体評価</h3>
      <!-- 1st -->
      <div class="d-flex mb25">
        <div>
          <p>外板価値減点 ✳︎</p>
          <Select
            class="mr10"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div class="nolabel">
          <Select
            class="mr10"
            :customwidth="100"
            :customheight="30"
            placeholder="ランク1"
          />
        </div>
        <div>
          <p>修復歴減点</p>
          <Select
            class="mr10"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div class="nolabel">
          <Select
            class="mr10"
            :customwidth="70"
            :customheight="30"
            placeholder="A"
          />
        </div>
      </div>
      <!-- 2nd -->
      <h3 class="subtitle">ガラス</h3>
      <div class="d-flex mb25">
        <div>
          <p>フロント ✳︎</p>
          <Select
            class="mr10"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div class="nolabel">
          <Select
            class="mr10"
            :customwidth="120"
            :customheight="30"
            placeholder="ワイパー傷"
          />
        </div>
        <div>
          <p>その他 ✳︎</p>
          <Select
            class="mr10"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div class="nolabel">
          <Select
            class="mr10"
            :customwidth="120"
            :customheight="30"
            placeholder="ー"
          />
        </div>
      </div>
      <!-- 3rd -->
      <h3 class="subtitle">塗装状態</h3>
      <div class="d-flex mb25">
        <div>
          <p>つや</p>
          <Select
            class="mr10"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div>
          <p>状態</p>
          <Select
            class="mr10"
            :customwidth="90"
            :customheight="30"
            placeholder="良い"
          />
        </div>
      </div>
      <!-- 4th -->
      <h3 class="subtitle">Eg / 下廻り</h3>
      <div class="d-flex flex-wrap mb25">
        <div>
          <p>異常</p>
          <Select
            class="mr10"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div>
          <p>錆 / 腐食</p>
          <Select
            class="mr10"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div>
          <p>水漏れ</p>
          <Select
            class="mr10"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div>
          <p>オイル漏れ</p>
          <Select
            class="mr10"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div class="mr5">
          <p class="positionAbsolute">異音 / アイドル不調</p>
          <Select
            class="mr10 nolabel"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div class="mt10">
          <p>ベルト鳴き</p>
          <Select
            class="mr10"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
      </div>
      <!-- 5h -->
      <h3 class="subtitle">マフラー</h3>
      <div class="d-flex mb25">
        <div>
          <p>異常</p>
          <Select
            class="mr10"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div>
          <p>異常 / 不良</p>
          <Select
            class="mr10"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div>
          <p>錆 / 腐食</p>
          <Select
            class="mr10"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div>
          <p class="positionAbsolute">白煙 / 黒煙 / 排気漏れ</p>
          <Select
            class="mr10 nolabel"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
      </div>
      <!-- 6th -->
      <h3 class="subtitle">車内状態</h3>
      <div class="d-flex flex-wrap mb25">
        <div>
          <p>目立つダメージ</p>
          <Select
            class="mr25"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div>
          <p>色あせ</p>
          <Select
            class="mr10"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div>
          <p>接着剤 / シール跡</p>
          <Select
            class="mr40"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div>
          <p>シミ/コゲ/スレ</p>
          <Select
            class="mr10"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div>
          <Input
            class="mr10 nolabel"
            :customwidth="80"
            :customheight="40"
            placeholder="複数"
          />
        </div>
        <div class="mt10">
          <p>タバコ / ペット臭</p>
          <Select
            class="mr10"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div class="mt10">
          <Input
            class="mr10 nolabel"
            :customwidth="80"
            :customheight="40"
            placeholder="ペット"
          />
        </div>
        <div class="mt10">
          <p>ヤニ / ペット毛</p>
          <Select
            class="mr10"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div class="mt10">
          <Input
            class="mr10 nolabel"
            :customwidth="80"
            :customheight="40"
            placeholder="ヤニ"
          />
        </div>
      </div>
      <!-- 7th -->
      <h3 class="subtitle">その他</h3>
      <div class="d-flex mb25">
        <div>
          <p>ミッション不良</p>
          <Select
            class="mr30"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div>
          <p class="positionAbsolute">チェックランプ点灯</p>
          <Select
            class="mr50 nolabel"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div>
          <p class="positionAbsolute">エアコン不良</p>
          <Select
            class="mr15 nolabel"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div>
          <p class="positionAbsolute">ナビ不良</p>
          <Select
            class="mr10 nolabel"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
      </div>
      <!-- 8th -->
      <div class="d-flex">
        <div>
          <h3 class="subtitle">内装評価</h3>
          <Select
            class="mr15"
            :customwidth="100"
            :customheight="30"
            placeholder="3.5"
          />
        </div>
        <div>
          <h3 class="subtitle">総合評価</h3>
          <Select
            class="mr15"
            :customwidth="100"
            :customheight="30"
            placeholder="3.5"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Input from '~/components/common/Input.vue'
import Select from '~/components/common/Select.vue'
export default {
  name: 'CarInterior',
  components: {
    Input,
    Select,
  },
}
</script>
<style lang="scss" scoped>
.title,
.subtitle {
  font-size: 20px;
  color: $blue-200;
  font-weight: 600;
  margin-bottom: 25px;
}
.subtitle {
  font-size: 16px;
  margin-bottom: 15px;
}
.positionAbsolute {
  position: absolute;
}
.tab {
  width: 100%;
  padding: 25px 20px;
  border-radius: 5px;
  margin-bottom: 30px;
  background: $white-300;
  p {
    font-size: 12px;
    font-family: 'Noto Sans JP';
    color: $blue-200;
    margin-bottom: 10px;
  }
  .nolabel {
    margin-top: 28px;
  }
  input {
    font-size: 12px;
    font-family: 'Noto Sans JP';
    &::-webkit-input-placeholder {
      font-size: 12px !important;
      font-family: 'Noto Sans JP';
    }
  }
  span {
    font-size: 12px;
    color: $blue-200;
  }
}
</style>
