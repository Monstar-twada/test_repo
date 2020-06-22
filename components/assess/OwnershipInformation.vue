<template>
  <div>
    <div class="tab" color="red">
      <h3 class="title">所有情報</h3>
      <!-- 1st -->
      <div class="d-flex mb20">
        <div>
          <p>入庫予定日 ✳︎</p>
          <Select
            class="mr15"
            :customwidth="80"
            :customheight="30"
            placeholder="２週"
          />
        </div>
        <div>
          <p>ボディタイプ ✳︎</p>
          <Select
            class="mr15"
            :customwidth="80"
            :customheight="30"
            placeholder="セダン"
          />
        </div>
        <div>
          <p>運輸支局 ✳︎</p>
          <Select
            class="mr15"
            :customwidth="150"
            :customheight="30"
            placeholder="品川"
          />
        </div>
        <div>
          <p>分類番号 ✳︎</p>
          <Input class="mr15" :customwidth="70" placeholder="331" />
        </div>
        <div>
          <p>用途判別 ✳︎</p>
          <Select
            class="mr15"
            :customwidth="80"
            :customheight="30"
            placeholder="た"
          />
        </div>
        <div>
          <p>指定番号 ✳︎</p>
          <Input class="mr15" :customwidth="80" placeholder="3333" />
        </div>
        <div>
          <p>車台番号</p>
          <Input :customwidth="130" placeholder="ZVW51 - 0123456" />
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
  color: $blue-200;
  font-weight: 600;
  margin-bottom: 25px;
}

.tab {
  padding: 30px;
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
      color: red !important;
      font-family: 'Noto Sans JP';
    }
  }
  span {
    font-size: 12px;
    color: $blue-200;
  }
}
</style>
