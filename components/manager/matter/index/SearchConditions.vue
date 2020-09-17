<template>
  <SearchBar class="search-bar-matter-wrapper" @click="search">
    <fg-row gutter="10">
      <fg-col span="9" class="left-item-wrapper">
        <h3 class="label">属性で探す</h3>
        <fg-row gutter="20">
          <fg-col span="7">
            <fg-input
              v-model="form.lastName"
              size="small"
              placeholder="案件番号"
              clearable
              @keyup.native.enter="search"
            ></fg-input>
          </fg-col>
          <fg-col span="8">
            <fg-select
              v-model="form.firstName"
              size="small"
              placeholder="担当"
              clearable
              @keyup.native.enter="search"
            ></fg-select>
          </fg-col>
          <fg-col span="8">
            <fg-select
              v-model="form.tel"
              size="small"
              placeholder="依頼種別"
              clearable
              @keyup.native.enter="search"
            ></fg-select>
          </fg-col>
        </fg-row>
      </fg-col>
      <fg-col span="5" class="left-item-wrapper">
        <h3 class="label">顧客で探す</h3>
        <fg-row gutter="10">
          <fg-col span="12">
            <fg-input
              v-model="form.lastName"
              size="small"
              placeholder="姓"
              clearable
              @keyup.native.enter="search"
            />
          </fg-col>
          <fg-col span="12">
            <fg-input
              v-model="form.lastName"
              size="small"
              placeholder="名"
              clearable
              @keyup.native.enter="search"
            ></fg-input>
          </fg-col>
        </fg-row>
      </fg-col>
      <fg-col span="10" class="left-item-wrapper">
        <h3 class="label">車で探す</h3>
        <fg-row gutter="20">
          <fg-col span="8">
            <fg-select
              v-model="form.maker"
              size="small"
              placeholder="メーカー"
              clearable
              @keyup.native.enter="search"
            ></fg-select>
          </fg-col>
          <fg-col span="8">
            <fg-select
              v-model="form.class"
              size="small"
              placeholder="車種"
              clearable
              @keyup.native.enter="search"
            ></fg-select>
          </fg-col>
          <fg-col span="8">
            <fg-input
              v-model="form.vin"
              size="small"
              placeholder="登録ナンバー"
              clearable
              @keyup.native.enter="search"
            ></fg-input>
          </fg-col>
        </fg-row>
      </fg-col>
    </fg-row>
    <fg-row gutter="20">
      <fg-col span="24" class="left-item-wrapper">
        <h3 class="label">期間で探す</h3>
        <fg-row gutter="20">
          <fg-col span="3" class="radio-container">
            <fg-radio v-model="value1"></fg-radio>
            <h4>案件組成日</h4>
          </fg-col>
          <fg-col span="3">
            <fg-calendar
              v-model="form.firstRegistrationDateFrom"
              size="small"
              placeholder="対象期間選択"
              show-after-dash
              type="month"
              clearable
            ></fg-calendar>
          </fg-col>
          <fg-col span="3">
            <fg-calendar
              v-model="form.firstRegistrationDateTo"
              size="small"
              type="month"
              clearable
            ></fg-calendar>
          </fg-col>
          <fg-col span="4" class="radio-container">
            <fg-radio v-model="value1"></fg-radio>
            <h4>支払処理日(紹介料)</h4>
          </fg-col>
          <fg-col span="3">
            <fg-calendar
              v-model="form.inspectionExpirationDateFrom"
              size="small"
              placeholder="対象期間選択"
              show-after-dash
              clearable
            ></fg-calendar>
          </fg-col>
          <fg-col span="3">
            <fg-calendar
              v-model="form.inspectionExpirationDateTo"
              size="small"
              placeholder=""
              clearable
            ></fg-calendar>
          </fg-col>
          <fg-col span="2">
            <fg-button
              class="export"
              size="small"
              width="110"
              prefix-icon="download"
            >
              エクスポート
            </fg-button>
          </fg-col>
        </fg-row>
      </fg-col>
    </fg-row>
  </SearchBar>
</template>

<script>
import SearchBar from './search-bar/index'
export default {
  components: {
    SearchBar,
  },
  props: {
    query: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      form: {
        ...this.query,
      },
      value1: '',
      value2: '',
      makerItems: [],
      carModels: [],
    }
  },
  watch: {
    value1(val) {
      console.log('value1', val)
    },
    value2(val) {
      console.log('value2', val)
    },
  },
  methods: {
    search() {
      this.$emit('change', this.form)
    },
  },
}
</script>

<style lang="scss">
.search-bar-matter-wrapper {
  > .fg-row {
    padding-top: 20px;
  }
  .left-item-wrapper {
    display: flex;
    align-items: center;
    .label {
      font-size: 14px;
      flex: 0 0 70px;
      color: $--color-primary;
      margin-right: 10px;
    }
    > .fg-row {
      flex: 1;
    }
    .radio-container {
      display: flex;
      align-items: center;
      margin-top: 3px;
      margin-right: -10px;
      .fg-radio {
        margin-right: 0px;
      }
      h4 {
        color: $--color-primary;
        font-weight: 400;
      }
    }
    .export {
      border: 1px solid #dfe6f0;
    }
  }
  .right-item-wrapper {
    display: flex;
    align-items: center;
    height: 30px;
    h3 {
      flex: 0 0 86px;
    }
    .label {
      font-size: 14px;
      flex: 0 0 70px;
      color: $--color-primary;
    }
  }
}
@media screen and (max-width: 1370px) {
  .search-bar-form-wrapper {
    .right-item-wrapper {
    }
  }
}
</style>
