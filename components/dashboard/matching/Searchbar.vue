<template>
  <div class="searchbar">
    <v-row justify="start" align="center" class="ma-0">
      <Select items="items" class="mr20" :list="list" placeholder="メーカー" />
      <Select items="items" class="mr20" :list="list" placeholder="車種" />
      <Select items="items" class="mr20" :list="list" placeholder="グレード" />
      <Select
        items="items"
        class="mr20"
        :list="list"
        placeholder="ボディタイプ"
      />
      <Select items="items" class="mr20" :list="list" placeholder="カラー" />
      <Select items="items" class="mr20" :list="list" placeholder="車検残" />
      <Select items="items" class="mr20" :list="list" placeholder="価格帯" />
    </v-row>
    <v-row justify="start" align="center" class="mt20 mx-0">
      <Select
        items="items"
        class="mr20"
        :list="list"
        placeholder="仕入れ期間"
      />
      <Select
        items="items"
        class="mr20"
        :list="list"
        placeholder="ステータス"
      />
      <Select items="items" class="mr20" :list="list" placeholder="安全装備" />
      <Select items="items" class="mr20" :list="list" placeholder="便利機能" />
      <Select items="items" class="mr20" :list="list" placeholder="ナビ有無" />
      <Input class="searchbar_input mr20" placeholder="出品者名" />
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
  &_input {
    height: 30px;
    width: 120px;
    line-height: 20px;
    padding-bottom: 5px;
    border: 1px solid $gray-100;
    &::-webkit-input-placeholder {
      color: $blue-500;
      font-size: 10px;
    }
  }
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
