<template>
  <div class="fg-pagination-wrapper">
    <div v-if="hidePageInfo"></div>
    <PageInfo v-else :total="total" :theme="theme" :info="currentPageText" />
    <Pagination
      v-model="page"
      :theme="theme"
      :page-size="pageSize"
      :total="total"
      :size="size"
      :show-number="showNumber"
      :before-change="beforeChange"
    />
  </div>
</template>

<script>
import PageInfo from './PageInfo'
import Pagination from './Pagination'
export default {
  name: 'FgPagination',
  components: {
    PageInfo,
    Pagination,
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    theme: {
      type: String,
      default: 'white',
    },
    total: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    showNumber: {
      type: Number,
      default: 10,
    },
    size: {
      type: String,
      default: 'medium',
    },
    hidePageInfo: Boolean,
    beforeChange: {
      type: Function,
      default: undefined,
    },
  },
  data() {
    return {
      page: this.value,
    }
  },
  computed: {
    currentPageText() {
      let start = (this.page - 1) * this.pageSize
      if (this.total) {
        start += 1
      }
      const end = Math.min(this.page * this.pageSize, this.total)
      return `${start}〜${end}`
    },
  },
  watch: {
    value(val) {
      if (this.page !== val) {
        this.page = val
      }
    },
    page(val) {
      this.$emit('input', val)
      this.$emit('change', val)
    },
  },
}
</script>

<style lang="scss">
.fg-pagination-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
