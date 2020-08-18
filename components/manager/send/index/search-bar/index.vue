<template>
  <div class="send-search-bar-container">
    <v-row justify="start" align="center" class="mx-0">
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
      <fg-select
        v-model="selectValue1"
        :items="list"
        size="small"
        class="mr20"
        :width="'120px'"
        placeholder="メーカー"
      />
      <fg-select
        v-model="selectValue1"
        :items="list"
        size="small"
        class="mr20"
        :width="'120px'"
        placeholder="車種"
      />
      <Input
        class="mr20"
        :customwidth="120"
        :customheight="30"
        :customfontsize="10"
        placeholder="登録ナンバー"
      />
    </v-row>
    <v-row justify="center" align="center" class="mt20 mx-0">
      <fg-select
        v-model="selectValue1"
        :items="list"
        size="small"
        class="mr20"
        :width="'120px'"
        placeholder="依頼種別"
      />
      <fg-select
        v-model="selectedStatus"
        class="mr20"
        :items="status"
        size="small"
        :width="'120px'"
        placeholder="ステータス"
      />
      <ButtonSearch class="send-search-bar-container_button" />
    </v-row>
  </div>
</template>

<script>
import Input from '~/components/common/Input.vue'
import ButtonSearch from '~/components/common/button-search/index'
export default {
  name: 'Searchbar',
  components: {
    Input,
    ButtonSearch,
  },
  data: () => ({
    selectValue1: '',
    list: [
      {
        text: 'Foo',
        value: 1,
      },
      {
        text: 'Bar',
        value: 2,
      },
      {
        text: 'Fizz',
        value: 3,
      },
      {
        text: 'Buzz',
        value: 4,
      },
    ],
    selectedStatus: '',
    status: [
      {
        text: '送客中',
        value: 1,
      },
      {
        text: '対応中',
        value: 1,
      },
      {
        text: '成約済',
        value: 1,
      },
      {
        text: '見送済',
        value: 1,
      },
    ],
  }),
}
</script>
<style lang="scss"></style>
<style lang="scss" scoped>
.send-search-bar-container {
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
