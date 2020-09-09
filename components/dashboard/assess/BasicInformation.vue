<template>
  <div>
    <div class="tab">
      <h3 class="title">基本情報</h3>
      <!-- 1st -->
      <div class="d-flex mb20">
        <div>
          <p>入庫予定日 ＊</p>
          <Select
            class="mr15"
            :customwidth="80"
            :customheight="30"
            placeholder="２週"
          />
        </div>
        <div>
          <p>ボディタイプ ＊</p>
          <Select
            class="mr15"
            :customwidth="80"
            :customheight="30"
            placeholder="セダン"
          />
        </div>
        <div>
          <p>運輸支局 ＊</p>
          <Select
            class="mr15"
            :customwidth="150"
            :customheight="30"
            placeholder="品川"
          />
        </div>
        <div>
          <p>分類番号 ＊</p>
          <Input
            class="mr15"
            :customwidth="70"
            :customfontsize="10"
            customtextalign="center"
            placeholder="331"
          />
        </div>
        <div>
          <p>用途判別 ＊</p>
          <Select
            class="mr15"
            :customwidth="80"
            :customheight="30"
            placeholder="た"
          />
        </div>
        <div>
          <p>指定番号 ＊</p>
          <Input
            class="mr15"
            :customwidth="80"
            :customfontsize="10"
            placeholder="3333"
          />
        </div>
        <div>
          <p>車台番号</p>
          <Input
            :customwidth="130"
            :customfontsize="10"
            placeholder="ZVW51 - 0123456"
          />
        </div>
      </div>
      <!-- 2nd -->
      <div class="d-flex mb20">
        <div>
          <p>登録年月日 ＊</p>
          <Select
            class="mr15"
            :customwidth="70"
            :customheight="30"
            placeholder="平成"
          />
        </div>
        <div>
          <Select
            class="mr15 nolabel"
            :customwidth="70"
            :customheight="30"
            placeholder="年"
          />
        </div>
        <div>
          <Select
            class="mr15 nolabel"
            :customwidth="70"
            :customheight="30"
            placeholder="月"
          />
        </div>
        <div>
          <Select
            class="mr15 nolabel"
            :customwidth="70"
            :customheight="30"
            placeholder="日"
          />
        </div>
        <div>
          <p>初度登録年月 ＊</p>
          <Select
            class="mr15"
            :customwidth="70"
            :customheight="30"
            placeholder="平成"
          />
        </div>
        <div>
          <Select
            class="mr15 nolabel"
            :customwidth="70"
            :customheight="30"
            placeholder="年"
          />
        </div>
        <div>
          <Select
            class="mr15 nolabel"
            :customwidth="70"
            :customheight="30"
            placeholder="月"
          />
        </div>
        <div>
          <p>車検満了日 ＊</p>
          <Select
            class="mr15"
            :customwidth="70"
            :customheight="30"
            placeholder="平成"
          />
        </div>
        <div>
          <Select
            class="mr15 nolabel"
            :customwidth="70"
            :customheight="30"
            placeholder="年"
          />
        </div>
        <div>
          <Select
            class="mr15 nolabel"
            :customwidth="70"
            :customheight="30"
            placeholder="月"
          />
        </div>
        <div>
          <Select
            class="mr15 nolabel"
            :customwidth="70"
            :customheight="30"
            placeholder="日"
          />
        </div>
      </div>
      <!-- 3rd -->
      <div class="d-flex mb20">
        <div class="mr15">
          <p>メーカー ＊</p>
          <Select :customwidth="150" :customheight="30" placeholder="トヨタ" />
        </div>
        <div class="mr15">
          <p>型式 ＊</p>
          <Input
            :customfontsize="10"
            :customwidth="200"
            placeholder="DAA - ZVW51 - AHXHB"
          />
        </div>
        <div class="mr15">
          <p>車名 ＊</p>
          <Input
            :customfontsize="10"
            :customwidth="110"
            placeholder="プリウス"
          />
        </div>
        <div class="mr15">
          <p>グレード ＊</p>
          <Input
            :customfontsize="10"
            :customwidth="145"
            placeholder="Aプレミアム"
          />
        </div>
        <div class="mr15">
          <p>排気量 ＊</p>
          <Input :customfontsize="10" :customwidth="80" placeholder="1.79" />
        </div>
        <div class="mr15">
          <p>型式指定番号 ＊</p>
          <Input :customfontsize="10" :customwidth="100" placeholder="18029" />
        </div>
        <div>
          <p>類別区分番号</p>
          <Input :customfontsize="10" :customwidth="100" placeholder="0011" />
        </div>
      </div>
      <!-- 4th -->
      <div class="d-flex mb20">
        <div class="mr15">
          <p>走行距離 ＊</p>
          <Input
            class="mr5"
            :customfontsize="10"
            :customwidth="80"
            placeholder="22573"
          />
          <span>km</span>
        </div>
        <div class="mr15">
          <p>メーター交換 ＊</p>
          <Input :customfontsize="10" :customwidth="70" placeholder="有" />
        </div>
        <div class="mr15">
          <p class="positionAbsolute">メーター交換前走行距離</p>
          <Select
            class="nolabel"
            :customwidth="70"
            :customheight="30"
            placeholder="平成"
          />
        </div>
        <div class="mr15 nolabel">
          <Select :customwidth="70" :customheight="30" placeholder="年" />
        </div>
        <div class="mr15 nolabel">
          <Select :customwidth="70" :customheight="30" placeholder="月" />
        </div>
        <div class="mr15 nolabel">
          <Select :customwidth="70" :customheight="30" placeholder="日" />
        </div>
        <div class="mr15 nolabel">
          <Input
            class="mr5"
            :customfontsize="10"
            :customwidth="80"
            placeholder="15573"
          />
          <span>km</span>
        </div>
        <div class="mr15">
          <p>合計走行距離</p>
          <Input
            class="mr5"
            :customfontsize="10"
            :customwidth="80"
            placeholder="37898"
          />
          <span>km</span>
        </div>
        <div class="mr15">
          <p>乗員定数 ＊</p>
          <Input
            class="mr5"
            :customfontsize="10"
            :customwidth="50"
            placeholder="5"
          />
          <span>人</span>
        </div>
      </div>
      <!-- 5th -->
      <div class="d-flex mb20">
        <div class="mr15">
          <p>最大積載量 ＊</p>
          <Input
            class="mr5"
            :customfontsize="10"
            :customwidth="80"
            placeholder="-"
          />
          <span>kg</span>
        </div>
        <div class="mr15">
          <p>車両重量 ＊</p>
          <Input
            class="mr5"
            :customfontsize="10"
            :customwidth="80"
            placeholder="1380"
          />
          <span>kg</span>
        </div>
        <div class="mr15">
          <p>燃料 ＊</p>
          <Input
            :customwidth="120"
            :customfontsize="10"
            placeholder="ハイブリッド"
          />
        </div>
        <div class="mr15">
          <p>駆動</p>
          <Input :customwidth="80" :customfontsize="10" placeholder="FF" />
        </div>
        <div class="mr15">
          <p>ドア数 ＊</p>
          <Input :customwidth="80" :customfontsize="10" placeholder="5ドア" />
        </div>
        <div class="mr15">
          <p>スライドドア ＊</p>
          <Select :customwidth="80" :customheight="30" placeholder="両側" />
        </div>
        <div class="mr15 nolabel">
          <Select :customwidth="80" :customheight="30" placeholder="電動" />
        </div>
        <div class="mr15">
          <p>Pバックドア ＊</p>
          <Select :customwidth="80" :customheight="30" placeholder="有" />
        </div>
      </div>
      <!-- 6th -->
      <div class="d-flex mb20">
        <div class="mr15">
          <p>車歴 ＊</p>
          <Select
            class="mr5"
            :customwidth="80"
            :customheight="30"
            placeholder="自家用"
          />
        </div>
        <div class="mr15">
          <p>シフト ＊</p>
          <Input
            class="mr5"
            :customfontsize="10"
            :customwidth="120"
            placeholder="インパネ"
          />
        </div>
        <div class="mr15">
          <p>ミッション ＊</p>
          <Input
            class="mr5"
            :customfontsize="10"
            :customwidth="120"
            placeholder="インパネ"
          />
        </div>
      </div>
    </div>
    <div class="tab">
      <h3 class="title">所有情報</h3>
      <div class="d-flex mb20">
        <div>
          <p>所有者：氏名</p>
          <Input
            class="mr15"
            :customwidth="120"
            :customheight="30"
            :customfontsize="10"
            placeholder="米田 道春"
          />
        </div>
        <div>
          <p>所有者：住所</p>
          <Input
            class="mr15"
            :customwidth="170"
            :customfontsize="10"
            :customheight="30"
            placeholder="東京都渋谷区渋谷2 - 11 - 5"
          />
        </div>
        <div>
          <p>使用者：氏名</p>
          <Input
            class="mr15"
            :customwidth="170"
            :customheight="30"
            :customfontsize="10"
            placeholder="所有者に同じ"
          />
        </div>
        <div>
          <p>使用者：住所</p>
          <Input
            class="mr15"
            :customwidth="170"
            :customheight="30"
            :customfontsize="10"
            placeholder="所有者に同じ"
          />
        </div>
      </div>
    </div>
    <div class="tab">
      <h3 class="title">輸入車情報</h3>
      <div class="d-flex mb20">
        <div>
          <p>ハンドル</p>
          <Input
            class="mr15"
            :customwidth="100"
            :customheight="30"
            :customfontsize="10"
            placeholder="ー"
          />
        </div>
        <div>
          <p>VINコード</p>
          <Input
            class="mr15"
            :customwidth="100"
            :customheight="30"
            :customfontsize="10"
            placeholder="ー"
          />
        </div>
        <div>
          <p>正規並行</p>
          <Input
            class="mr15"
            :customwidth="100"
            :customheight="30"
            :customfontsize="10"
            placeholder="ー"
          />
        </div>
        <div>
          <p>登録年月</p>
          <Input
            class="mr15"
            :customwidth="100"
            :customheight="30"
            :customfontsize="10"
            placeholder="ー"
          />
        </div>
      </div>
    </div>
    <div class="tab">
      <h3 class="title">内外装情報</h3>
      <div class="d-flex mb20">
        <div>
          <p>外板色 ✳︎</p>
          <Select
            class="mr15"
            :customwidth="100"
            :customheight="30"
            placeholder="米田 道春"
          />
        </div>
        <div>
          <p>カラーコード ✳︎</p>
          <Input
            class="mr15"
            :customwidth="80"
            :customfontsize="10"
            placeholder="070"
          />
        </div>
        <div>
          <p>ツートン</p>
          <Select
            class="mr15"
            :customwidth="100"
            :customheight="30"
            placeholder="ルーフ"
          />
        </div>
        <div class="nolabel">
          <Input
            class="mr15"
            :customwidth="120"
            :customfontsize="10"
            placeholder="ブラック"
          />
        </div>
        <div>
          <p>トリムコード</p>
          <Input
            class="mr15"
            :customwidth="100"
            :customfontsize="10"
            placeholder="FA20"
          />
        </div>
        <div>
          <p>内装色 ✳︎</p>
          <Input
            class="mr15"
            :customwidth="100"
            :customfontsize="10"
            placeholder="FA20"
          />
        </div>
        <div>
          <p>革シート</p>
          <Select
            class="mr15"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Select from '~/components/common/Select.vue'
import Input from '~/components/common/Input.vue'
export default {
  name: 'BasicInformation',
  components: {
    Select,
    Input,
  },
}
</script>
<style lang="scss" scoped>
.title {
  font-size: 20px;
  color: $--color-primary;
  font-weight: 600;
  margin-bottom: 25px;
}

.tab {
  padding: 30px;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 30px;
  p {
    font-size: 12px;
    font-family: 'Noto Sans JP';
    color: $--color-primary;
    margin-bottom: 10px;
  }
  .positionAbsolute {
    position: absolute;
  }
  .nolabel {
    margin-top: 28px;
  }
  span {
    font-size: 12px;
    color: $--color-primary;
  }
}
</style>
