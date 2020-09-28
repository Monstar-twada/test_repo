<template>
  <SearchBar class="search-bar-form-wrapper" @click="search">
    <fg-row gutter="20">
      <fg-col span="20" class="left-item-wrapper">
        <fg-row gutter="22">
          <fg-col span="3">
            <fg-radio v-model="value1" label="企業"></fg-radio>
          </fg-col>
          <fg-col span="3">
            <fg-radio v-model="value2" label="スタッフ"></fg-radio>
          </fg-col>
          <fg-col span="3">
            <fg-input
              v-model="form.value1"
              size="small"
              placeholder="cars Manager ID"
              clearable
              @keyup.native.enter="search"
            ></fg-input>
          </fg-col>
          <fg-col span="3">
            <fg-input
              v-model="form.value1"
              size="small"
              placeholder="企業名"
              clearable
              @keyup.native.enter="search"
            ></fg-input>
          </fg-col>
          <fg-col span="3">
            <fg-input
              v-model="form.value1"
              size="small"
              placeholder="姓"
              clearable
              @keyup.native.enter="search"
            ></fg-input>
          </fg-col>
          <fg-col span="3">
            <fg-input
              v-model="form.value1"
              size="small"
              placeholder="名"
              clearable
              @keyup.native.enter="search"
            ></fg-input>
          </fg-col>
          <fg-col span="3">
            <fg-input
              v-model="form.value1"
              size="small"
              placeholder="電話番号"
              clearable
              @keyup.native.enter="search"
            ></fg-input>
          </fg-col>
          <fg-col span="3">
            <fg-input
              v-model="form.value1"
              size="small"
              placeholder="メールアドレス"
              clearable
              @keyup.native.enter="search"
            ></fg-input>
          </fg-col>
        </fg-row>
      </fg-col>
      <fg-col span="2">
        <fg-row
          v-if="
            validationMessage.firstRegistration ||
            validationMessage.inspectionExpiration
          "
          gutter="20"
        >
          <fg-col span="12">
            <fg-text class="search-bar-form-wrapper__error mt10">{{
              validationMessage.firstRegistration
            }}</fg-text>
          </fg-col>
          <fg-col span="12">
            <fg-text class="search-bar-form-wrapper__error mt10">{{
              validationMessage.inspectionExpiration
            }}</fg-text>
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
      validationMessage: {
        firstRegistration: '',
        inspectionExpiration: '',
      },
    }
  },
  methods: {
    validation() {
      let count = 0
      const frFrom = new Date(this.form.firstRegistrationDateFrom)
      const frTo = new Date(this.form.firstRegistrationDateTo)
      if (frFrom > frTo) {
        this.validationMessage.firstRegistration =
          '日付を正しく設定してください'
        count += 1
      } else this.validationMessage.firstRegistration = ''

      const inspectionFrom = new Date(this.form.inspectionExpirationDateFrom)
      const inspectionTo = new Date(this.form.inspectionExpirationDateTo)
      if (inspectionFrom > inspectionTo) {
        this.validationMessage.inspectionExpiration =
          '日付を正しく設定してください'
        count += 1
      } else this.validationMessage.inspectionExpiration = ''
      return count
    },
    search() {
      const count = this.validation()
      if (count === 0) this.$emit('change', this.form)
    },
  },
}
</script>

<style lang="scss">
.search-bar-form-wrapper {
  &__error {
    div {
      color: $--color-warning;
    }
  }
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
