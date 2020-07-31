<template>
  <div class="searchbar">
    <v-row justify="left" align="center" class="mx-0">
      <Input
        class="mr20"
        :customwidth="120"
        :customheight="30"
        :customfontsize="10"
        placeholder="顧客名"
      />
      <Input
        class="mr20"
        :customwidth="120"
        :customheight="30"
        :customfontsize="10"
        placeholder="電話番号"
      />
      <Select items="items" class="mr20" :list="list" placeholder="メーカー" />
      <Select items="items" class="mr20" :list="list" placeholder="車種" />
      <Input
        class="mr20"
        :customwidth="120"
        :customheight="30"
        :customfontsize="10"
        placeholder="登録ナンバー"
      />
    </v-row>
    <v-row justify="center" align="center" class="mt20 mx-0">
      <Select items="items" class="mr20" :list="list" placeholder="依頼種別" />
      <Select
        items="items"
        class="mr20"
        :list="status"
        placeholder="ステータス"
      />
      <ButtonSearch class="searchbar_button" />
    </v-row>
  </div>
</template>

<script>
import Input from '~/components/common/Input.vue'
import Select from '~/components/common/Select.vue'
import ButtonSearch from '~/components/common/button-search/index'
export default {
  name: 'Searchbar',
  components: {
    Input,
    Select,
    ButtonSearch,
  },
  data: () => ({
    list: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    status: ['送客中', '対応中', '成約済', '見送済'],
  }),
}
</script>
<style lang="scss"></style>
<style lang="scss" scoped>
.searchbar {
  width: 100%;
  padding: 20px;
  height: 120px;
  border-radius: 5px;
  background-color: $white-300;
  &_space {
    display: block;
    width: 20px;
    height: 30px;
    text-align: center;
    line-height: 30px;
  }
  &_button {
    margin-left: auto;
  }
}
</style>
