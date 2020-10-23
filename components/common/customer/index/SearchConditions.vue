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
              v-model="form.phoneNumber"
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
          <fg-checkbox
            v-model="form.purchaseIntention"
            size="small"
            label="買換意向"
          ></fg-checkbox>
          <fg-checkbox
            v-model="form.transferTarget"
            size="small"
            label="乗換対象"
          ></fg-checkbox>
          <fg-checkbox
            v-model="form.nearInspection"
            size="small"
            label="車検間近"
          ></fg-checkbox>
          <fg-checkbox
            v-model="form.sixMonthContact"
            size="small"
            label="6ヶ月内接点"
          ></fg-checkbox>
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
              v-model="form.carType"
              size="small"
              placeholder="車種"
              clearable
              @keyup.native.enter="search"
            ></fg-input>
          </fg-col>
          <fg-col span="8">
            <fg-input
              v-model="form.carRegistrationNumber"
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
              v-model="form.registrationFirstDateFrom"
              size="small"
              placeholder="初度登録年月"
              show-after-dash
              clearable
              format="yyyy-MM"
              value-format="yyyy-MM"
              :error-message="registrationDateError"
              error-message-nowrap
            ></fg-calendar>
          </fg-col>
          <fg-col span="6">
            <fg-calendar
              v-model="form.registrationFirstDateTo"
              size="small"
              clearable
              show-after-dash
              format="yyyy-MM"
              value-format="yyyy-MM"
              :is-error="!!registrationDateError"
            ></fg-calendar>
          </fg-col>
          <fg-col span="6">
            <fg-calendar
              v-model="form.registrationEndDateFrom"
              size="small"
              placeholder="車検満了年月"
              show-after-dash
              clearable
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              :error-message="registrationEndDateError"
              error-message-nowrap
            ></fg-calendar>
          </fg-col>
          <fg-col span="6">
            <fg-calendar
              v-model="form.registrationEndDateTo"
              size="small"
              placeholder=""
              clearable
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              :is-error="!!registrationEndDateError"
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
    }
  },
  computed: {
    registrationDateError() {
      const { registrationFirstDateFrom, registrationFirstDateTo } = this.form
      const frFrom = new Date(registrationFirstDateFrom)
      const frTo = new Date(registrationFirstDateTo)
      return frFrom > frTo ? '日付を正しく設定してください' : ''
    },
    registrationEndDateError() {
      const { registrationEndDateFrom, registrationEndDateTo } = this.form
      const frFrom = new Date(registrationEndDateFrom)
      const frTo = new Date(registrationEndDateTo)
      return frFrom > frTo ? '日付を正しく設定してください' : ''
    },
  },
  methods: {
    search() {
      if (this.registrationDateError || this.registrationEndDateError) return
      const form = {
        ...this.form,
      }
      for (const property in form) {
        if (form[property] === '') {
          form[property] = null
        }
      }
      this.$ui.booleanToNumber(form, [
        'purchaseIntention',
        'transferTarget',
        'nearInspection',
        'sixMonthContact',
      ])
      this.$emit('change', form)
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
