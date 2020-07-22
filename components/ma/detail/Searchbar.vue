<template>
  <div class="searchbar">
    <v-row justify="start" align="center" class="ma-0 pa-0">
      <v-col cols="2">
        <GlobalInput
          v-model="search.name"
          :customheight="30"
          :customfontsize="10"
          placeholder="顧客名"
        />
      </v-col>
      <v-col cols="2">
        <GlobalInput
          v-model="search.city"
          :customwidth="120"
          :customheight="30"
          :customfontsize="10"
          placeholder="住所"
        />
      </v-col>
      <v-col cols="2">
        <GlobalSelector
          v-model="search.maker"
          :options="manufacturers"
          placeholder="メーカー"
        />
      </v-col>
      <v-col cols="2">
        <GlobalSelector
          v-model="search.class"
          placeholder="車種"
          :options="carModels"
        />
      </v-col>
      <v-col cols="2">
        <GlobalInput
          v-model="search.tel"
          :customwidth="120"
          :customheight="30"
          :customfontsize="10"
          placeholder="電話番号"
        />
      </v-col>
      <v-col cols="2">
        <GlobalInput
          v-model="search.email"
          :customwidth="120"
          :customheight="30"
          :customfontsize="10"
          placeholder="メールアドレス"
        />
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mx-0">
      <v-col cols="2">
        <GlobalSelector
          v-model="search.statusCall"
          :options="statusList"
          placeholder="コールステータス"
        />
      </v-col>
      <v-col cols="2">
        <GlobalSelector
          v-model="search.statusDM"
          :options="statusList"
          placeholder="DMステータス"
        />
      </v-col>
      <v-col cols="2">
        <GlobalSelector
          v-model="search.statusSMS"
          :options="statusList"
          placeholder="SMSステータス"
        />
      </v-col>
      <v-col cols="2">
        <GlobalSelector
          v-model="search.reserve"
          :options="statusList"
          placeholder="予約ステータス"
        />
      </v-col>
      <v-col cols="2">
        <GlobalSelector
          v-model="search.warehouse"
          :options="statusList"
          placeholder="入庫ステータス"
        />
      </v-col>
      <ButtonSearch class="searchbar_button" @clickEvent="searchButtonClick" />
    </v-row>
  </div>
</template>

<script>
import { getManufacturerList } from '~/components/customer/manufacturers.js'
import GlobalInput from '~/components/common/global-input/index'
import ButtonSearch from '~/components/common/ButtonSearch.vue'
import GlobalSelector from '~/components/common/global-selector/index'

const SELECT_DEFAULT = [
  {
    text: '選択しません',
    value: null,
  },
]

export default {
  name: 'Searchbar',
  components: {
    GlobalInput,
    ButtonSearch,
    GlobalSelector,
  },
  props: {
    searchParams: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      statusList: [
        {
          text: 'ー',
          value: 0,
        },
        {
          text: '○',
          value: 1,
        },
      ],
      search: {
        ...this.searchParams,
      },
      Default: [{ text: '選択なし', value: '' }],
      manufacturers: [...SELECT_DEFAULT, ...getManufacturerList()],
    }
  },
  computed: {
    carModels() {
      const data =
        this.manufacturers.find((item) => item.text === this.search.maker) || {}
      return data.child || []
    },
  },
  watch: {
    'search.maker'() {
      this.search.class = ''
    },
  },

  methods: {
    searchButtonClick() {
      this.$emit('searchEvent', this.search)
    },
  },
}
</script>
<style lang="scss"></style>
<style lang="scss" scoped>
.searchbar {
  width: 100%;
  padding: 5px 20px;
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
