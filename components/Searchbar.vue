<template>
  <div class="searchbar">
    <Input class="searchbar_input mr20" placeholder="顧客名" />
    <Select items="items" class="mr15" :list="list" placeholder="カテゴリー" />
    <Select
      items="items"
      class="mr20"
      :list="list"
      placeholder="サブカテゴリー"
    />
    <Select items="items" :list="list" placeholder="担当者" />
    <ButtonSearch class="searchbar_button" />
  </div>
</template>

<script>
import Input from '~/components/common/Input.vue'
import Select from '~/components/common/Select.vue'
import ButtonSearch from '~/components/common/ButtonSearch.vue'
export default {
  name: 'Searchbar',
  components: {
    Input,
    Select,
    ButtonSearch,
  },
  data: () => ({
    list: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    page: 1,
  }),
}
</script>
<style lang="scss"></style>
<style lang="scss" scoped>
.searchbar {
  width: 100%;
  padding: 20px;
  height: 70px;
  border-radius: 5px;
  background-color: $white-300;
  display: flex;
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
  &_button {
    margin-left: auto;
  }
}
</style>
