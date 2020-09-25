<template>
  <SearchBar class="search-bar-form-wrapper" @click="search">
    <fg-row gutter="20">
      <fg-col span="8" class="left-item-wrapper">
        <h3 class="label">期間で探す</h3>
        <fg-row gutter="20">
          <fg-col span="12">
            <fg-calendar
              v-model="form.firstRegistrationDateFrom"
              size="small"
              placeholder="初度登録年月"
              show-after-dash
              type="month"
              clearable
            ></fg-calendar>
          </fg-col>
          <fg-col span="12">
            <fg-calendar
              v-model="form.firstRegistrationDateTo"
              size="small"
              type="month"
              clearable
            ></fg-calendar>
          </fg-col>
        </fg-row>
      </fg-col>
      <fg-col span="8" class="right-item-wrapper">
        <h3>属性で探す</h3>
        <fg-row gutter="20">
          <fg-col span="12">
            <fg-select placeholder="依頼種別" />
          </fg-col>
          <fg-col span="12">
            <fg-select placeholder="ステータス" />
          </fg-col>
        </fg-row>
      </fg-col>
    </fg-row>
    <fg-row gutter="20">
      <fg-col span="8" class="left-item-wrapper">
        <h3 class="label">人で探す</h3>
        <fg-row gutter="20">
          <fg-col span="12">
            <fg-input
              v-model="form.lastName"
              size="small"
              placeholder="顧客名（姓）"
              clearable
            ></fg-input>
          </fg-col>
          <fg-col span="12">
            <fg-input
              v-model="form.firstName"
              size="small"
              placeholder="顧客名（名）"
              clearable
            ></fg-input>
          </fg-col>
        </fg-row>
      </fg-col>
      <fg-col span="10" class="right-item-wrapper">
        <h3 class="label">車で探す</h3>
        <fg-row gutter="20">
          <Maker />
        </fg-row>
      </fg-col>
    </fg-row>
  </SearchBar>
</template>

<script>
import SearchBar from '~/components/common/customer/index/search-bar/index'
import Maker from '~/components/common/customer/common/maker-select-cols/index'
export default {
  components: {
    SearchBar,
    Maker,
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
      makerItems: [],
      carModels: [],
    }
  },
  methods: {
    search() {
      this.$emit('change', this.form)
    },
  },
}
</script>

<style lang="scss">
.search-bar-form-wrapper {
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
    }
    > .fg-row {
      flex: 1;
    }
  }
  .right-item-wrapper {
    display: flex;
    align-items: center;
    height: 30px;
    h3 {
      flex: 0 0 86px;
      color: $--color-primary;
    }
    .fg-select {
      height: 30px;

      .result-wrapper {
        height: 30px;
      }
    }
    .select-wrapper {
      flex: 1;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .fg-row {
      flex: 1;
    }
  }
}
</style>
