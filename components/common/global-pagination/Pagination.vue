<template>
  <div
    class="global-pagination-pagination-wrapper"
    :class="['__' + theme, '__' + size]"
  >
    <i
      :class="['first-page', isFirstPage ? 'disabled' : 'cur']"
      @click="handleClick(1)"
      ><FirstIconSvg :theme="theme"
    /></i>
    <div ref="pageItems" class="page-items-wrapper">
      <i
        v-for="item in showItems"
        :key="item"
        :class="item === page ? 'is-current' : ''"
        @click="handleClick(item)"
        >{{ item }}</i
      >
      <div v-show="total > 0" ref="line" class="__line" />
    </div>
    <i
      :class="['last-page', isLastPage ? 'disabled' : 'cur']"
      @click="handleClick(pages.length)"
      ><FirstIconSvg :theme="theme"
    /></i>
    <div class="prev-next-group">
      <button
        :class="['__prev', isFirstPage ? 'disabled' : 'cur']"
        @click="changePage('prev')"
      >
        <PrevNextIcon :theme="theme" />
      </button>
      <span class="__line"></span>
      <button
        :class="['__next', isLastPage ? 'disabled' : 'cur']"
        @click="changePage('next')"
      >
        <PrevNextIcon :theme="theme" />
      </button>
    </div>
  </div>
</template>

<script>
import FirstIconSvg from './FirstIconSvg'
import PrevNextIcon from './PrevNextIcon'
export default {
  components: {
    FirstIconSvg,
    PrevNextIcon,
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
  },
  data() {
    return {
      page: this.value,
      themeColor: this.theme,
    }
  },
  computed: {
    /**
     * page number array
     * @returns {[]}
     */
    pages() {
      const len = Math.ceil(this.total / this.pageSize)
      const arr = []
      for (let i = 1; i <= len; i++) {
        arr.push(i)
      }
      return arr
    },
    /**
     * show page item array
     * @returns {*[]}
     */
    showItems() {
      if (this.pages.length <= this.showNumber) {
        return [...this.pages]
      }
      let start = Math.max(this.page - 5, 0)
      const end = Math.min(this.pages.length, this.showNumber + start)
      if (end - start < this.showNumber) {
        start = end - this.showNumber
      }
      return this.pages.slice(start, end)
    },
    /**
     * line that current page underline
     * @returns {*}
     */
    $line() {
      return this.$refs.line
    },
    /**
     * current page is first page
     * @returns {boolean}
     */
    isFirstPage() {
      return this.page === 1
    },
    /**
     * current page is last page
     * @returns {boolean}
     */
    isLastPage() {
      return this.page === this.pages.length || this.pages.length === 0
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
      this.resetLinePosition()
    },
    total() {
      // データ数が変わった時
      this.resetLinePosition()
    },
  },
  methods: {
    handleClick(page) {
      if (page) {
        this.page = page
      }
    },
    changePage(type) {
      switch (type) {
        case 'prev':
          if (!this.isFirstPage) {
            this.page -= 1
          }
          break
        case 'next':
          if (!this.isLastPage) {
            this.page += 1
          }
          break
      }
    },
    resetLinePosition() {
      this.$nextTick(() => {
        const pageItems = this.$refs.pageItems.querySelectorAll('i')
        const index = this.showItems.findIndex((page) => page === this.page)
        const el = pageItems[index]
        if (!el) return
        this.$line.style.width = el.offsetWidth + 'px'
        this.$line.style.transform = `translateX(${el.offsetLeft}px) scaleX(0.5)`
      })
    },
  },
}
</script>

<style lang="scss">
$normalHeight: 24px;
.global-pagination-pagination-wrapper {
  display: flex;
  align-items: center;
  .cur {
    cursor: pointer;
  }
  .disabled {
    opacity: 0.7;
  }
  .first-page,
  .last-page {
    display: inline-block;
    margin-top: -3px;
    width: 20px;
    height: $normalHeight;
    text-align: center;
    line-height: $normalHeight;
    svg {
      display: inline-block;
      vertical-align: middle;
    }
  }
  .last-page {
    svg {
      transform: rotate(180deg);
    }
  }
  .page-items-wrapper {
    position: relative;
    i {
      display: inline-block;
      font-style: normal;
      font-family: 'Noto Sans CJK JP', 'Helvetica', Arial;
      font-size: 14px;
      margin: 0 2px;
      min-width: 20px;
      height: $normalHeight;
      line-height: $normalHeight;
      text-align: center;
      cursor: pointer;
      &.is-current {
        font-weight: bold;
      }
    }
    .__line {
      position: absolute;
      bottom: -1px;
      left: 0;
      height: 1px;
      width: 0;
      transition: all 0.2s ease-in-out;
    }
  }

  .prev-next-group {
    display: inline-block;
    margin-left: 15px;
    width: 57px;
    height: $normalHeight;
    font-size: 0;
    span,
    button {
      display: inline-block;
      height: $normalHeight;
      text-align: center;
      vertical-align: top;
      line-height: $normalHeight;
      outline: none;
      svg {
        display: inline-block;
        vertical-align: middle;
      }
      &.__prev,
      &.__next {
        width: 28px;
        background: $white-300;
      }
      &.__prev {
        border-radius: $normalHeight / 2 0 0 $normalHeight / 2;
      }
      &.__next {
        border-radius: 0 $normalHeight / 2 $normalHeight / 2 0;
        svg {
          transform: rotate(180deg);
        }
      }
      &.__line {
        width: 1px;
        background: $gray-100;
      }
    }
  }

  // theme
  &.__white {
    .page-items-wrapper {
      i {
        color: $white-300;
      }
      .__line {
        background: $white-300;
      }
    }
  }

  &.__blue {
    .page-items-wrapper {
      i {
        color: $blue-100;
      }
      .__line {
        background: $blue-100;
      }
    }
    .prev-next-group {
      span {
        box-sizing: border-box;
        &.__prev {
          border: 1px solid $gray-100;
          border-right: 0;
        }
        &.__next {
          border: 1px solid $gray-100;
          border-left: 0;
        }
      }
    }
  }

  // size
  &.__small {
    .page-items-wrapper {
      i {
        font-size: 12px;
      }
    }
  }
}
</style>
