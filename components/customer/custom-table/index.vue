<template>
  <div
    :class="[
      'customer-table-wrapper',
      rounded ? 'rounded' : '',
      headBottomBorder ? 'head-bottom-border' : '',
      headFontWeightNormal ? 'head-font-weight-normal' : '',
      headBackground ? 'head-background' : '',
      '__' + padding,
      stripe ? '__stripe' : '',
      border ? '__border' : '',
      tdSpaceVerticalLine ? 'td-space-vertical-line' : '',
      '__' + size,
      bottomRounded ? 'bottom-rounded' : '',
      tdBottomBorder ? 'td-bottom-border' : '',
      smallHeader ? 'small-header' : '',
    ]"
  >
    <div class="table-head-wrapper" :style="{ paddingRight: headOffsetRight }">
      <table cellpadding="0" cellspacing="0">
        <colgroup>
          <col v-for="(width, i) in headWidthList" :key="i" :width="width" />
        </colgroup>
        <thead ref="head">
          <tr>
            <th
              v-for="(item, i) in headers"
              :key="i"
              :class="[item.align ? 'is-' + item.align : 'is-center']"
            >
              <div class="table-th-item">
                <span :class="sortItems[item.value] ? 'bold' : ''">{{
                  item.text
                }}</span>
                <SortIcon
                  v-if="item.sortable"
                  v-model="sortItems[item.value]"
                />
              </div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
    <div
      class="table-body-wrapper"
      :style="{
        height: bodyHeight,
        minHeight: bodyMinHeight,
        maxHeight: bodyMaxHeight,
      }"
    >
      <div v-show="isEmpty" class="empty-content-wrapper">
        {{ emptyContent }}
      </div>
      <table cellpadding="0" cellspacing="0">
        <colgroup>
          <col v-for="(width, i) in headWidthList" :key="i" :width="width" />
        </colgroup>
        <tbody ref="body">
          <slot></slot>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import SortIcon from './SortIcon'
import { slice } from '~/assets/js/utils'
export default {
  components: {
    SortIcon,
  },
  props: {
    headers: {
      type: Array,
      default() {
        return []
      },
    },
    list: {
      type: Array,
      default() {
        return []
      },
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    headBottomBorder: {
      type: Boolean,
      default: false,
    },
    headFontWeightNormal: {
      type: Boolean,
      default: false,
    },
    headBackground: {
      type: Boolean,
      default: false,
    },
    bodyHeight: {
      type: String,
      default: null,
    },
    bodyMinHeight: {
      type: String,
      default: null,
    },
    bodyMaxHeight: {
      type: String,
      default: null,
    },
    padding: {
      type: String,
      default: 'lr10',
    },
    border: Boolean,
    stripe: Boolean,
    tdSpaceVerticalLine: Boolean,
    tdBottomBorder: Boolean,
    size: {
      type: String,
      default: 'medium',
    },
    bottomRounded: Boolean,
    emptyContent: {
      type: String,
      default: 'データはありません',
    },
    smallHeader: Boolean,
  },
  data() {
    const headWidthList = this.headers.map((item) => item.width)
    return {
      headWidthList,
      headOffsetRight: '0',
    }
  },
  computed: {
    sortItems() {
      const items = {}
      this.headers.forEach((item) => {
        if (item.sortable) {
          items[item.value] = ''
        }
      })
      return items
    },
    isEmpty() {
      return this.list.length === 0
    },
  },
  watch: {
    list() {
      this.initTableItemWidth()
    },
  },
  mounted() {
    this.initTableItemWidth()
  },
  methods: {
    initTableItemWidth() {
      let timer = setTimeout(() => {
        const head = this.$refs.head
        if (!head) return
        const headWidth = head.offsetWidth
        const body = this.$refs.body
        const bodyWidth = body.offsetWidth
        // reset head offset right when body has scroll bar
        this.headOffsetRight = headWidth - bodyWidth + 'px'
        // reset th and td width from th width
        // this.headWidthList = slice(head.querySelectorAll('th'), 0).map(
        //   (el) => el.offsetWidth
        // )
        if (body.children[0]) {
          // from td width
          this.headWidthList = slice(
            body.children[0].querySelectorAll('td'),
            0
          ).map((el) => el.offsetWidth)
        }
        clearTimeout(timer)
        timer = null
      }, 0)
    },
  },
}
</script>

<style lang="scss">
.customer-table-wrapper {
  // thead wrapper
  .table-head-wrapper {
    background: $white-300;
  }
  // tbody wrapper
  .table-body-wrapper {
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    background: $white-300;
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: $gray-400;
      cursor: pointer;
      border-radius: 2px;
      border: 1px solid $white-300;
    }
    .empty-content-wrapper {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      background: $white-300;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $blue-100;
      font-size: 14px;
    }
  }
  // inner common style
  .cur {
    cursor: pointer;
  }
  .high-light {
    color: $blue-100;
    td,
    th {
      color: $blue-100;
    }
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  // table
  table {
    width: 100%;
    border: 0;
    th,
    td {
      text-align: center;
      &.is-left {
        text-align: left;
      }
      &.is-right {
        text-align: right;
      }
    }
  }

  th {
    height: 40px;
    font-size: 12px;
    color: $blue-200;
  }
  td {
    font-size: 12px;
    color: $blue-200;
    position: relative;
  }
  tbody {
    tr {
      &:hover td {
        background: $gray-100;
      }
    }
  }

  // border radius
  &.rounded {
    border-radius: 5px;
    overflow: hidden;
  }

  &.bottom-rounded {
    border-radius: 0 0 4px 4px;
    overflow: hidden;
  }

  // head-bottom-border
  &.head-bottom-border {
    .table-head-wrapper {
      border-bottom: 1px solid $gray-100;
    }
  }
  // head font weight normal
  &.head-font-weight-normal {
    th {
      font-weight: normal;
    }
  }

  &.head-background {
    th {
      background: $white-100;
    }
  }

  &.__border {
    border: 1px solid $gray-100;
    border-top: 0;
    th,
    td {
      border-top: 1px solid $gray-100;
    }
  }

  &.td-bottom-border {
    tr {
      td {
        border-bottom: 1px solid $gray-100;
      }
      &:last-child td {
        border-bottom: 0;
      }
    }
  }

  &.__stripe {
    tbody {
      tr {
        &:nth-child(2n) {
          background: $white-100;
        }
      }
    }
  }

  &.td-space-vertical-line {
    tbody {
      td {
        &:before {
          position: absolute;
          top: 15%;
          left: 0;
          content: '';
          background: $gray-100;
          width: 1px;
          height: 70%;
        }
        &:first-child {
          &:before {
            background: none;
          }
        }
      }
    }
  }

  // size
  &.__medium {
    td {
      height: 70px;
    }
  }

  &.__small {
    .empty-content-wrapper {
      font-size: 12px;
    }
    td {
      height: 40px;
    }
  }

  &.small-header {
    th {
      height: 30px;
      font-size: 12px;
    }
  }

  .table-th-item {
    span {
      vertical-align: middle;
    }
    .bold {
      font-weight: 800;
    }
  }

  // padding
  &.__lr10 {
    th,
    td {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  // is-selected
  .is-selected td {
    background: $gray-100;
  }
}
</style>
