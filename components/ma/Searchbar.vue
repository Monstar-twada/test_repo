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
        placeholder="住所"
      />
      <Select items="items" class="mr20" :list="list" placeholder="メーカー" />
      <Select items="items" class="mr20" :list="list" placeholder="車種" />
      <Input
        class="mr20"
        :customwidth="120"
        :customheight="30"
        :customfontsize="10"
        placeholder="電話番号"
      />
      <Input
        class="mr20"
        :customwidth="120"
        :customheight="30"
        :customfontsize="10"
        placeholder="メールアドレス"
      />
    </v-row>
    <v-row justify="center" align="center" class="mt20 mx-0">
      <Select
        items="items"
        class="mr20"
        :list="list"
        placeholder="コールステータス"
      />
      <Select
        items="items"
        class="mr20"
        :list="list"
        placeholder="DMステータス"
      />
      <Select
        items="items"
        class="mr20"
        :list="list"
        placeholder="SMSステータス"
      />
      <Select
        items="items"
        class="mr20"
        :list="list"
        placeholder="予約ステータス"
      />
      <Select
        items="items"
        class="mr20"
        :list="list"
        placeholder="入庫ステータス"
      />
      <ButtonSearch class="searchbar_button" />
    </v-row>
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
