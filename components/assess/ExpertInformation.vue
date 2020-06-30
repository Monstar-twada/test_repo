<template>
  <div>
    <div class="tab">
      <h3 class="title">基本装備情報</h3>
      <!-- 1st -->
      <div class="d-flex mb20">
        <div>
          <p>エアバッグ ＊</p>
          <Input class="mr15" :customwidth="80" placeholder="サイド" />
        </div>
        <div>
          <p>ABS ＊</p>
          <Select
            class="mr15"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div>
          <p>ホイール ＊</p>
          <Select
            class="mr15"
            :customwidth="80"
            :customheight="30"
            placeholder="純正"
          />
        </div>
        <div class="mr15 nolabel">
          <Input class="mr5" :customwidth="80" placeholder="15" />
          <span>inch</span>
        </div>
        <div>
          <p>ナビ ＊</p>
          <Select
            class="mr15"
            :customwidth="80"
            :customheight="30"
            placeholder="純正"
          />
        </div>
        <div class="nolabel">
          <Select
            class="mr15"
            :customwidth="80"
            :customheight="30"
            placeholder="SD"
          />
        </div>
        <div class="mr15">
          <p>TV ＊</p>
          <Select :customwidth="70" :customheight="30" placeholder="有" />
        </div>
        <div class="nolabel">
          <Select
            class="mr15"
            :customwidth="120"
            :customheight="30"
            placeholder="フルセグ"
          />
        </div>
      </div>
      <!-- 2nd -->
      <div class="d-flex mb20">
        <div>
          <p>キー ＊</p>
          <Select
            class="mr15"
            :customwidth="80"
            :customheight="30"
            placeholder="純正"
          />
        </div>
        <div>
          <Select
            class="mr15 nolabel"
            :customwidth="120"
            :customheight="30"
            placeholder="スマートキー"
          />
        </div>
        <div>
          <p>ETC ＊</p>
          <Select
            class="mr15"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div>
          <p>サンルーフ ＊</p>
          <Select
            class="mr15"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div>
          <p>バックカメラ ＊</p>
          <Select
            class="mr15"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div>
          <p>ヘッドライト ＊</p>
          <Select
            class="mr15"
            :customwidth="120"
            :customheight="30"
            placeholder="LED"
          />
        </div>
        <div>
          <p>エアコン ＊</p>
          <Select
            class="mr15"
            :customwidth="100"
            :customheight="30"
            placeholder="オート"
          />
        </div>
        <div>
          <Select
            class="mr15 nolabel"
            :customwidth="120"
            :customheight="30"
            placeholder="シングル"
          />
        </div>
      </div>
      <!-- 3rd -->
      <div class="d-flex mb20">
        <div class="mr15">
          <p>禁煙者</p>
          <Select :customwidth="80" :customheight="30" placeholder="○" />
        </div>
        <div class="mr15">
          <p>1オーナー ＊</p>
          <Select :customwidth="80" :customheight="30" placeholder="複数" />
        </div>
        <div class="mr15">
          <p>保証書 ＊</p>
          <Select :customwidth="70" :customheight="30" placeholder="有" />
        </div>
        <div class="mr15">
          <p>取説 ＊</p>
          <Select :customwidth="70" :customheight="30" placeholder="無" />
        </div>
        <div class="mr15">
          <p>整備記録簿 ＊</p>
          <Select :customwidth="80" :customheight="30" placeholder="有" />
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
          <Input class="mr5" :customwidth="80" placeholder="15600" />
          <span>円</span>
        </div>
      </div>
    </div>
    <div class="tab">
      <h3 class="title">先進安全装備情報</h3>
      <div class="d-flex mb20">
        <div>
          <p>運転支援レベル ✳︎</p>
          <Select
            class="mr15"
            :customwidth="120"
            :customheight="30"
            placeholder="レベルⅡ"
          />
        </div>
        <div>
          <p>自動ブレーキ ✳︎</p>
          <Select
            class="mr30"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div>
          <p>ソナー ✳︎</p>
          <Select
            class="mr15"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div>
          <p>BSM ✳︎</p>
          <Select
            class="mr15"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div>
          <p>レーンキープ ✳︎</p>
          <Select
            class="mr30"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
        <div>
          <p>自動ハイビーム ✳︎</p>
          <Select
            class="mr15"
            :customwidth="70"
            :customheight="30"
            placeholder="有"
          />
        </div>
      </div>
    </div>
    <div class="tab">
      <h3 class="title">競合情報</h3>
      <div class="d-flex mb20">
        <div>
          <p>社名1</p>
          <Input class="mr15" :customwidth="120" placeholder="ビックモーター" />
        </div>
        <div class="nolabel mr15">
          <Input class="mr5" :customwidth="70" placeholder="135" />
          <span>万円</span>
        </div>
        <div>
          <p>社名2</p>
          <Input class="mr15" :customwidth="120" placeholder="ビックモーター" />
        </div>
        <div class="nolabel mr15">
          <Input class="mr5" :customwidth="70" placeholder="135" />
          <span>万円</span>
        </div>
        <div>
          <p>社名3</p>
          <Input class="mr15" :customwidth="120" placeholder="ビックモーター" />
        </div>
        <div class="nolabel mr15">
          <Input class="mr5" :customwidth="70" placeholder="135" />
          <span>万円</span>
        </div>
        <div>
          <p>社名4</p>
          <Input class="mr15" :customwidth="120" placeholder="ビックモーター" />
        </div>
        <div class="nolabel mr15">
          <Input class="mr5" :customwidth="70" placeholder="135" />
          <span>万円</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Select from '~/components/common/Select.vue'
import Input from '~/components/common/Input.vue'
export default {
  name: 'ExpertInformation',
  components: {
    Select,
    Input,
  },
}
</script>
<style lang="scss" scoped>
.title {
  font-size: 20px;
  color: $blue-200;
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
    color: $blue-200;
    margin-bottom: 10px;
  }
  .positionAbsolute {
    position: absolute;
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
