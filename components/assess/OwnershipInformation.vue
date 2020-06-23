<template>
  <div>
    <div class="tab">
      <h3 class="title">所有情報</h3>
      <div class="d-flex mb20">
        <div>
          <p>所有者：氏名</p>
          <Input
            class="mr15"
            :customwidth="120"
            :customheight="30"
            placeholder="米田 道春"
          />
        </div>
        <div>
          <p>所有者：住所</p>
          <Input
            class="mr15"
            :customwidth="170"
            :customheight="30"
            placeholder="東京都渋谷区渋谷2-11-5"
          />
        </div>
        <div>
          <p>使用者：氏名</p>
          <Input
            class="mr15"
            :customwidth="170"
            :customheight="30"
            placeholder="所有者に同じ"
          />
        </div>
        <div>
          <p>使用者：住所</p>
          <Input
            class="mr15"
            :customwidth="170"
            :customheight="30"
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
            placeholder="ー"
          />
        </div>
        <div>
          <p>VINコード</p>
          <Input
            class="mr15"
            :customwidth="100"
            :customheight="30"
            placeholder="ー"
          />
        </div>
        <div>
          <p>正規並行</p>
          <Input
            class="mr15"
            :customwidth="100"
            :customheight="30"
            placeholder="ー"
          />
        </div>
        <div>
          <p>登録年月</p>
          <Input
            class="mr15"
            :customwidth="100"
            :customheight="30"
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
          <Input class="mr15" :customwidth="80" placeholder="070" />
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
          <Input class="mr15" :customwidth="120" placeholder="ブラック" />
        </div>
        <div>
          <p>トリムコード</p>
          <Input class="mr15" :customwidth="100" placeholder="FA20" />
        </div>
        <div>
          <p>内装色 ✳︎</p>
          <Input class="mr15" :customwidth="100" placeholder="FA20" />
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
import Input from '~/components/common/Input.vue'
import Select from '~/components/common/Select.vue'
export default {
  name: 'BasicInformation',
  components: {
    Input,
    Select,
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
  padding: 0px 30px 30px 30px;
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
