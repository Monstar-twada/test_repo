<template>
  <div class="page mt10 mb10">
    <div class="page__text">
      <h1>{{ total }}</h1>
      <h3>
        件中{{ (currentPage - 1) * perPageNumber + 1 }} ~
        {{ Math.min(total, currentPage * perPageNumber) }}件を表示
      </h3>
    </div>
    <v-pagination v-model="page" :length="Math.ceil(total / perPageNumber)">
    </v-pagination>
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    total: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    perPageNumber: {
      type: Number,
      default: 0,
    },
  },
}
</script>
<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: space-between;
  &__text {
    h1,
    h3 {
      display: inline;
      color: $white-300;
    }
  }
}
</style>
