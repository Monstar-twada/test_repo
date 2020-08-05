<template>
  <div class="searchbar">
    <v-row justify="start" align="center" class="mx-0">
      <Input
        class="mr20"
        :customwidth="120"
        :customheight="30"
        :customfontsize="10"
        placeholder="顧客名"
      />
      <Select items="items" class="mr20" :list="list" placeholder="メーカー" />
      <Select items="items" class="mr20" :list="list" placeholder="車種" />
      <Select items="items" class="mr20" :list="list" placeholder="担当者" />
      <Calendar label="作成日" />
      <span class="searchbar_space">~</span>
      <Calendar />
      <ButtonSearch class="searchbar_button" />
    </v-row>
  </div>
</template>

<script>
import Input from '~/components/common/Input.vue'
import Select from '~/components/common/Select.vue'
import Calendar from '~/components/common/Calendar.vue'
import ButtonSearch from '~/components/common/button-search/index'
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
  height: 70px;
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
