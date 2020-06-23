<template>
  <div class="searchbar">
    <v-row justify="left" align="center">
      <Input class="searchbar_input mr20" placeholder-text="顧客名" />
      <Select
        items="items"
        class="mr20"
        :list="list"
        placeholder="顧客ランク"
      />
      <Select items="items" class="mr20" :list="list" placeholder="担当店舗" />
      <Select items="items" class="mr20" :list="list" placeholder="担当者" />
      <Select items="items" class="mr20" :list="list" placeholder="メーカー" />
      <Select items="items" class="mr20" :list="list" placeholder="車種" />
    </v-row>
    <v-row justify="center" align="center" class="mt20">
      <Input class="searchbar_input mr20" placeholder-text="登録ナンバー" />
      <Calendar />
      <span class="searchbar_space">~</span>
      <Calendar />
      <span class="searchbar_space"></span>
      <Calendar />
      <span class="searchbar_space">~</span>
      <Calendar class="searchbar_calendar" />
      <ButtonSearch class="searchbar_button" />
    </v-row>
  </div>
</template>

<script>
import Input from '~/components/common/Input.vue'
import Select from '~/components/common/Select.vue'
import Calendar from '~/components/common/Calendar.vue'
import ButtonSearch from '~/components/common/ButtonSearch.vue'
export default {
  name: 'Searchbar',
  components: {
    Input,
    Select,
    ButtonSearch,
    Calendar,
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
