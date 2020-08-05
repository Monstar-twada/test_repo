<template>
  <div class="d-flex">
    <div class="tab mr25">
      <h3 class="title">車両展開図</h3>
      <v-img
        :min-height="800"
        :min-width="420"
        :src="require('./img/car-interior.svg')"
        class="mb40"
      />
      <h3 class="title">特記事項</h3>
      <v-textarea class="textarea" outlined value="①に傷あり"></v-textarea>
    </div>
    <div class="tab">
      <h3 class="title">車両本体評価</h3>
      <table class="tableStyle mb25">
        <tbody>
          <tr>
            <td>外板価値減点</td>
            <td>有 / ランク1</td>
            <td>修復歴減点</td>
            <td>有 / A</td>
          </tr>
        </tbody>
      </table>
      <h3 class="subtitle">ガラス</h3>
      <table class="tableStyle mb25">
        <tbody>
          <tr>
            <td>フロント</td>
            <td>有 / ワイパー傷</td>
            <td>その他</td>
            <td>無 / -</td>
          </tr>
        </tbody>
      </table>
      <h3 class="subtitle">塗装状態</h3>
      <table class="tableStyle mb25">
        <tbody>
          <tr>
            <td>つや</td>
            <td>有</td>
            <td>状態</td>
            <td>良い</td>
          </tr>
        </tbody>
      </table>
      <h3 class="subtitle">Eg / 下廻り</h3>
      <table class="tableStyle mb25">
        <tbody>
          <tr>
            <td>異常</td>
            <td>無</td>
            <td>錆 / 腐食</td>
            <td>無</td>
          </tr>
          <tr>
            <td>水漏れ</td>
            <td>無</td>
            <td>オイル漏れ</td>
            <td>無</td>
          </tr>
          <tr>
            <td>異音 /アイドル不調</td>
            <td>無</td>
            <td>ベルト鳴き</td>
            <td>無</td>
          </tr>
        </tbody>
      </table>
      <h3 class="subtitle">マフラー</h3>
      <table class="tableStyle mb25">
        <tbody>
          <tr>
            <td>異常</td>
            <td>無</td>
            <td>異常 / 不良</td>
            <td>無</td>
          </tr>
          <tr>
            <td>錆 / 腐食</td>
            <td>無</td>
            <td>白煙 / 黒煙 / 排気漏れ</td>
            <td>無</td>
          </tr>
        </tbody>
      </table>
      <h3 class="subtitle">車内状態</h3>
      <table class="tableStyle mb25">
        <tbody>
          <tr>
            <td>目立つダメージ</td>
            <td>無</td>
            <td>色あせ</td>
            <td>無</td>
          </tr>
          <tr>
            <td>接着剤 /シール跡</td>
            <td>無</td>
            <td>シミ/コゲ/スレ</td>
            <td>有 / 複数</td>
          </tr>
          <tr>
            <td>タバコ /ペット臭</td>
            <td>無 / ペット</td>
            <td>ヤニ / ペット毛</td>
            <td>有 / ヤニ</td>
          </tr>
        </tbody>
      </table>
      <h3 class="subtitle">その他</h3>
      <table class="tableStyle mb25">
        <tbody>
          <tr>
            <td>ミッション不良</td>
            <td>無</td>
            <td>チェックランプ点灯</td>
            <td>無</td>
          </tr>
          <tr>
            <td>エアコン不良</td>
            <td>無</td>
            <td>ナビ不良</td>
            <td>無</td>
          </tr>
        </tbody>
      </table>
      <table class="tableStyle tableBold mb25">
        <tbody>
          <tr>
            <td>総合評価</td>
            <td>3.5</td>
            <td>内装評価</td>
            <td>3.5</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CarInterior',
}
</script>
<style lang="scss">
.textarea.theme--light.v-input textarea {
  font-size: 12px;
  color: $blue-200;
}
.textarea.v-text-field--outlined fieldset {
  border-color: $gray-100;
}
</style>
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
  height: auto;
  padding: 30px;
  border-radius: 5px;
  margin-bottom: 30px;
  background: $white-300;
}
table.tableStyle {
  width: 100%;
  background-color: $white-300;
  border-collapse: collapse;
  border: 1px solid $gray-100;
  color: $blue-200;

  td {
    height: 50px;
    &:nth-child(odd) {
      width: 77px;
      font-size: 14px;
      background-color: $white-100;
    }
    &:nth-child(even) {
      width: 117px;
      font-size: 14px;
      text-align: center;
    }
  }
}
table.tableStyle td,
table.tableStyle th {
  border: 1px solid $gray-100;
  padding: 5px;
}

table.tableBold td {
  &:nth-child(odd) {
    width: 77px;
    font-size: 14px;
    background-color: $white-100;
  }
  &:nth-child(even) {
    width: 117px;
    font-size: 14px;
    text-align: center;
  }
}
</style>
