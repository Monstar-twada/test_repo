<template>
  <div class="page mt15 mb15">
    <div class="page__text">
      <h1>{{ total }}</h1>
      <h3>
        件中{{ (page - 1) * perPage + 1 }} ~
        {{ Math.min(total, page * perPage) }}件を表示
      </h3>
    </div>
    <v-pagination
      v-model="page"
      :length="Math.ceil(total / perPage)"
      @input="updateCurrentPage"
    ></v-pagination>
  </div>
</template>
<script>
export default {
  name: 'PaginationComponent',
  props: {
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 10,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      page: this.currentPage,
    }
  },
  watch: {
    currentPage(val, newVal) {
      this.page = val
    },
  },
  methods: {
    updateCurrentPage() {
      this.$emit('updateEvent', this.page)
    },
  },
}
</script>
<style lang="scss">
.page {
  ul {
    position: relative;
    li {
      margin-right: 10px;
    }
    li:first-child {
      position: absolute;
      right: 28px;
      margin-right: 0px;
      button {
        border-radius: 15px 0px 0px 15px;
        border-right: 2px solid $gray-100;
      }
    }
    li:last-child {
      position: absolute;
      margin-right: 0px;
      button {
        border-radius: 0px 15px 15px 0px;
      }
    }
    li:nth-last-child(2) {
      margin-right: 80px;
    }
  }
  .theme--light.v-pagination {
    justify-content: flex-end !important;
    display: inline-flex;
    .v-pagination__navigation {
      box-shadow: none !important;
      width: 28px;
      height: 24px;
    }
    .v-pagination__item {
      display: inline-block;
      font-size: 14px !important;
      font-weight: bold !important;
      min-width: 16px !important;
      width: 20px !important;
      height: 20px !important;
      line-height: 20px !important;
      background: none !important;
      box-shadow: none !important;
      color: $white-300 !important;
      border-radius: 0px !important;
      transition: none !important;
    }
    .v-pagination__item--active {
      border-bottom: 1px $white-300 solid !important;
    }

    .v-pagination__item--active .primary {
      border-color: none !important;
    }
    button {
      outline: none;
    }
  }
}
</style>
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
    h1 {
      font-weight: 800;
    }
    h3 {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.6px;
    }
  }
}
</style>
