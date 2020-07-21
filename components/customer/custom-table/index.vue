<template>
  <div
    :class="[
      'customer-table-wrapper',
      rounded ? 'rounded' : '',
      headBottomBorder ? 'head-bottom-border' : '',
      headFontWeightNormal ? 'head-font-weight-normal' : '',
      headBackground ? 'head-background' : '',
      '__' + padding,
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
    <div class="table-body-wrapper" :style="{ height: bodyHeight }">
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
    padding: {
      type: String,
      default: 'lr10',
    },
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
  },
  watch: {
    data() {
      console.log('watch data')
      // this.initTableItemWidth()
    },
  },
  mounted() {
    this.initTableItemWidth()
  },
  methods: {
    initTableItemWidth() {
      this.$nextTick(() => {
        const head = this.$refs.head
        const headWidth = head.offsetWidth
        const body = this.$refs.body
        const bodyWidth = body.offsetWidth
        // reset head offset right when body has scroll bar
        this.headOffsetRight = headWidth - bodyWidth + 'px'
        // reset th and td width
        this.headWidthList = Array.prototype.slice
          .call(head.querySelectorAll('th'), 0)
          .map((el) => el.offsetWidth)
      })
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
    overflow-y: auto;
    background: $white-300;
  }
  // inner common style
  .cur {
    cursor: pointer;
  }
  .high-light {
    color: $blue-100;
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
    height: 70px;
    font-size: 12px;
    color: $blue-200;
    position: relative;
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
  tbody {
    tr {
      &:nth-child(2n) {
        background: $white-100;
      }
      &:hover {
        background: $gray-100;
      }
    }
  }

  &.rounded {
    border-radius: 5px;
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
    background: $white-100;
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
}
</style>
