<template>
  <fg-form-item label="家族構成" class="plus-row-wrapper">
    <div v-for="(item, i) in list" :key="i" class="mb10">
      <fg-select
        v-model="item.familyRelationship"
        inline
        width="110"
        placeholder="選択"
        :items="familyRelationships"
        @change="handleChange"
      ></fg-select>
      <fg-input
        v-model="item.lastName"
        inline
        width="110"
        class="ml10 mr10"
        placeholder="姓"
        @change="handleChange"
      ></fg-input>
      <fg-input
        v-model="item.firstName"
        inline
        width="110"
        placeholder="名"
        @change="handleChange"
      ></fg-input>
      <fg-calendar
        v-model="item.birthday"
        inline
        width="120"
        class="ml10 mr10"
        writable
        placeholder="生年月日"
        format="yyyy/MM/dd"
        value-format="yyyy-MM-dd"
        default-view="1985/01/01"
        @change="handleChange"
      ></fg-calendar>
      <fg-button
        size="mini"
        icon="trash"
        circle
        border
        @click="delItem(i)"
      ></fg-button>
    </div>

    <fg-button
      size="small"
      icon="plus"
      circle
      border
      @click="addItem"
    ></fg-button>
  </fg-form-item>
</template>

<script>
import { DEF_CUSTOMER_FAMILY } from './constants'
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    customerCode: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      familyRelationships: this.$ui.getBasicData('family_relationship'),
      list: [],
    }
  },
  watch: {
    items() {
      this.initList()
    },
  },
  created() {
    this.initList()
  },
  methods: {
    initList() {
      const val = this.items
      this.list =
        Array.isArray(val) && val.length > 0
          ? [...val]
          : [
              {
                ...DEF_CUSTOMER_FAMILY,
              },
            ]
    },
    addItem() {
      this.list.push({
        ...DEF_CUSTOMER_FAMILY,
      })
      this.handleChange()
    },
    delItem(index) {
      this.list.splice(index, 1)
      this.handleChange()
    },
    handleChange() {
      const keys = Object.keys(DEF_CUSTOMER_FAMILY)
      let temp
      this.$emit(
        'change',
        this.list.map((item) => {
          temp = {}
          keys.forEach((key) => {
            temp[key] = item[key]
          })
          temp.familyCustomerCode = this.customerCode
          return temp
        })
      )
    },
  },
}
</script>

<style lang="scss"></style>
