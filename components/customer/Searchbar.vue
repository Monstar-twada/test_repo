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
      <Select
        items="items"
        class="mr20"
        :list="list"
        placeholder="顧客ランク"
      />
      <Select items="items" class="mr20" :list="list" placeholder="担当店舗" />
      <Select items="items" class="mr20" :list="list" placeholder="担当者" />
      <Select
        v-model="manufacturer"
        items="items"
        class="mr20"
        :list="list"
        placeholder="メーカー"
      />
      <Select
        v-model="carModel"
        items="items"
        class="mr20"
        :list="carModels"
        placeholder="車種"
      />
    </v-row>
    <v-row justify="center" align="center" class="mt20 mx-0">
      <Input
        class="mr20"
        :customwidth="120"
        :customheight="30"
        :customfontsize="10"
        placeholder="登録ナンバー"
      />
      <Calendar label="初度登録年月" />
      <span class="searchbar_space">~</span>
      <Calendar />
      <span class="searchbar_space"></span>
      <Calendar label="車検満了年月" />
      <span class="searchbar_space">~</span>
      <Calendar class="searchbar_calendar" />
      <ButtonSearch class="searchbar_button" />
    </v-row>
  </div>
</template>

<script>
// import { manufacturerList } from './manufacturers'
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
  data() {
    return {
      list: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      // list: manufacturerList.map((item) => item.text),
      manufacturer: '',
      carModel: '',
    }
  },
  computed: {
    carModels() {
      // const data =
      //  manufacturerList.find((item) => item.text === this.manufacturer) || {}
      return []
    },
  },
  watch: {
    manufacturer(val) {
      this.carModel = ''
    },
  },
}
</script>
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
