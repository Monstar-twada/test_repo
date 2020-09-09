<template>
  <div class="detailsearch">
    <v-row justify="start" align="center" class="ma-0">
      <h3 class="mr10">案件ID</h3>
      <h4 class="mr20">AT-123</h4>
      <span class="line"></span>
      <h3 class="ml20 mr10">ステータス</h3>
      <Select items="items" class="mr10" :list="list" placeholder="出品中" />
      <span class="keep mr20">キープ中</span>
      <span class="line"></span>
      <h4 class="ml20 mr10">車両保管場所</h4>
      <Input
        class="searchbar-input mr20"
        placeholder="例)東京都渋谷区"
        :customwidth="180"
        :customheight="30"
      />
      <v-btn class="btn-white" outlined>出品取消</v-btn>
      <v-btn class="btn-blue" outlined>保存</v-btn>
    </v-row>
  </div>
</template>

<script>
import Input from '~/components/common/Input.vue'
import Select from '~/components/common/Select.vue'
export default {
  name: 'DetailSearch',
  components: {
    Input,
    Select,
  },
  data: () => ({
    list: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
}
</script>
<style lang="scss"></style>
<style lang="scss" scoped>
.detailsearch {
  width: 100%;
  padding: 15px 20px;
  height: 70px;
  line-height: 40px;
  border-radius: 5px;
  background-color: $--color-white;
  color: $--color-primary;

  h3 {
    font-weight: bold;
  }
  .line {
    display: block;
    width: 1px;
    height: 40px;
    background: $--color-border;
  }
  .keep {
    font-size: 12px;
    width: 84px;
    height: 24px;
    border-radius: 12px;
    border: 1px $--color-border solid;
    line-height: 24px;
    text-align: center;
  }
  .btn-white {
    width: 80px;
    height: 30px;
    font-size: 12px;
    border: 1px $--color-border solid;
    color: $--color-primary;
    border-radius: 15px;
    margin-left: auto;
  }
  .btn-blue {
    width: 80px;
    height: 30px;
    font-size: 12px;
    background: $--color-primary;
    border: 1px $--color-primary solid;
    color: $--color-background;
    border-radius: 15px;
    margin-left: 10px;
  }
}
</style>
