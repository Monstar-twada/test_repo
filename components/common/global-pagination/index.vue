<template>
  <div class="global-pagination-wrapper">
    <PageMessage :total="total" :theme="theme" :message="currentPageText" />
    <Pagination
      v-model="page"
      :theme="theme"
      :page-size="pageSize"
      :total="total"
      :size="size"
      :show-number="showNumber"
    />
  </div>
</template>

<script>
import PageMessage from './PageMessage'
import Pagination from './Pagination'
export default {
  components: {
    PageMessage,
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
      default: 'middle',
    },
  },
  data() {
    return {
      page: this.value,
    }
  },
  computed: {
    currentPageText() {
      const start = (this.page - 1) * this.pageSize
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
    },
  },
}
</script>

<style lang="scss">
$normalHeight: 24px;
.global-pagination-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
