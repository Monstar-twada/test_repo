<template>
  <SearchBar class="search-bar-form-wrapper" @click="search">
    <fg-row gutter="20">
      <fg-col span="11" class="left-item-wrapper">
        <h3 class="label">人で探す</h3>
        <fg-row gutter="20">
          <fg-col span="8">
            <fg-input
              v-model="form.lastName"
              size="small"
              placeholder="顧客名（姓）"
              clearable
              @keyup.native.enter="search"
            ></fg-input>
          </fg-col>
          <fg-col span="8">
            <fg-input
              v-model="form.firstName"
              size="small"
              placeholder="顧客名（名）"
              clearable
              @keyup.native.enter="search"
            ></fg-input>
          </fg-col>
          <fg-col span="8">
            <fg-input
              v-model="form.tel"
              size="small"
              placeholder="電話番号"
              clearable
              @keyup.native.enter="search"
            ></fg-input>
          </fg-col>
        </fg-row>
      </fg-col>
      <fg-col span="13" class="right-item-wrapper">
        <h3>属性で探す</h3>
        <div class="checkbox-wrapper">
          <fg-checkbox size="small" label="買換意向"></fg-checkbox>
          <fg-checkbox size="small" label="乗換対象"></fg-checkbox>
          <fg-checkbox size="small" label="車検間近"></fg-checkbox>
          <fg-checkbox size="small" label="6ヶ月内接点"></fg-checkbox>
        </div>
      </fg-col>
    </fg-row>
    <fg-row gutter="20">
      <fg-col span="11" class="left-item-wrapper">
        <h3 class="label">車で探す</h3>
        <fg-row gutter="20">
          <fg-col span="8">
            <fg-input
              v-model="form.maker"
              size="small"
              placeholder="メーカー"
              clearable
              @keyup.native.enter="search"
            ></fg-input>
          </fg-col>
          <fg-col span="8">
            <fg-input
              v-model="form.class"
              size="small"
              placeholder="車種"
              clearable
              @keyup.native.enter="search"
            ></fg-input>
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
      <fg-col span="13">
        <fg-row gutter="20">
          <fg-col span="6">
            <fg-calendar
              v-model="form.firstRegistrationDateFrom"
              size="small"
              placeholder="初度登録年月"
              show-after-dash
              type="month"
              clearable
            ></fg-calendar>
          </fg-col>
          <fg-col span="6">
            <fg-calendar
              v-model="form.firstRegistrationDateTo"
              size="small"
              type="month"
              clearable
            ></fg-calendar>
          </fg-col>
          <fg-col span="6">
            <fg-calendar
              v-model="form.inspectionExpirationDateFrom"
              size="small"
              placeholder="車検満了年月"
              show-after-dash
              clearable
            ></fg-calendar>
          </fg-col>
          <fg-col span="6">
            <fg-calendar
              v-model="form.inspectionExpirationDateTo"
              size="small"
              placeholder=""
              clearable
            ></fg-calendar>
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
    }
    .checkbox-wrapper {
      flex: 1;
      height: 30px;
      display: flex;
      align-items: center;
      // justify-content: space-between;
      .fg-checkbox {
        margin-right: 40px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
@media screen and (max-width: 1370px) {
  .search-bar-form-wrapper {
    .right-item-wrapper {
      .checkbox-wrapper {
        justify-content: space-between;
        .fg-checkbox {
          flex: 1;
          margin-right: 0;
        }
      }
    }
  }
}
</style>
