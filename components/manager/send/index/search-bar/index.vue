<template>
  <div class="send-search-bar-container">
    <v-row justify="start" align="center" class="mx-0">
      <div class="send-search-bar-container__input__box mr20">
        <fg-input
          v-model="inputValue1"
          placeholder="顧客名"
          clearable
          size="small"
        />
      </div>
      <div class="send-search-bar-container__input__box mr20">
        <fg-input
          v-model="inputValue2"
          placeholder="電話番号"
          clearable
          size="small"
        />
      </div>
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
      <div class="send-search-bar-container__input__box mr20">
        <fg-input
          v-model="inputValue3"
          placeholder="登録ナンバー"
          clearable
          size="small"
        />
      </div>
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
import ButtonSearch from '~/components/common/button-search/index'
export default {
  name: 'Searchbar',
  components: {
    ButtonSearch,
  },
  data: () => ({
    inputValue1: '',
    inputValue2: '',
    inputValue3: '',
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
  background-color: $--color-white;
  &__input__box {
    width: 120px;
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
