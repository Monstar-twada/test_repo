<template>
  <div class="fg-month-picker">
    <div class="fg-month-picker-wrapper">
      <button
        :class="isStartDate() ? '__disable' : ''"
        @click="changeMonth('prev')"
      >
        <fg-icon name="arrow-left"></fg-icon>
      </button>
      <span class="context" @click="handleToggle"
        >{{ current.year }}年{{ current.month }}月</span
      >
      <button
        :class="isEndDate() ? '__disable' : ''"
        @click="changeMonth('next')"
      >
        <fg-icon name="arrow-right"></fg-icon>
      </button>
    </div>
    <Popup
      ref="pop"
      v-model="popVisible"
      :wrapper="wrapper"
      :popup-class="popupClass"
      class="fg-calendar-pop-wrapper"
      auto-width
    ></Popup>
  </div>
</template>

<script>
import ZxCalendar from 'zx-calendar'
import Popup from '../../popup/index'
import { toNumber } from '../../../libs'
const DEF_TITLE_FORMATTERS = {
  date: 'yyyy年MM月',
  month: 'yyyy年',
  year: 'yyyy年-yyyy年',
}

const DEF_ITEM_SUFFIXES = {
  date: '',
  month: '月',
  year: '年',
}

// const DEF_VALUE_FORMATTERS = {
//   date: 'yyyy/MM/dd',
//   month: 'yyyy/MM',
//   year: 'yyyy',
// }

export default {
  name: 'FgMonthPicker',
  components: {
    Popup,
  },
  props: {
    value: {
      type: Object,
      default: () => {
        return {}
      },
    },
    size: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'month',
    },
    range: {
      type: Number,
      default: 36,
    },
    popupClass: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      popVisible: false,
      current: this.value,
      dateRange: {},
    }
  },
  computed: {
    wrapper() {
      return this.$refs.wrapper
    },
  },
  watch: {
    current: {
      deep: true,
      handler(val) {
        this.calendar.setDate(this.fmtValBeforeSetDate(val))
        this.$emit('input', val)
      },
    },
    value(val) {
      if (this.current.year !== val.year) {
        this.current = {
          ...val,
        }
      }
    },
  },
  mounted() {
    this.setDateRange(this.value, this.range)
    this.$nextTick(() => {
      const config = {
        el: this.$refs.pop.$el,
        lang: 'jp',
        defaultDate: this.fmtValBeforeSetDate(this.current),
        type: 'month',
        dateRange: this.fmtDateRange(this.dateRange),
        titleFormatter: this.titleFormatter || DEF_TITLE_FORMATTERS[this.type],
        itemSuffix: DEF_ITEM_SUFFIXES[this.type],
        mode: this.selectMode,
      }
      const calendar = new ZxCalendar(config)
      calendar.on('change', (list) => {
        this.current.year = Number(list[0].value.toString().slice(0, 4))
        this.current.month = Number(list[0].value.toString().slice(4, 6))
        this.popVisible = false
      })
      calendar.on('cancel', () => {
        this.popVisible = false
      })
      calendar.on('error', (err) => {
        console.error(err)
      })
      this.calendar = calendar
    })
  },
  methods: {
    handleToggle() {
      if (!this.popVisible) {
        let timer = setTimeout(() => {
          this.popVisible = true
          clearTimeout(timer)
          timer = null
        }, 0)
      }
    },
    changeMonth(type) {
      if (type === 'next') {
        if (this.isEndDate()) return
        if (this.current.month + 1 > 12) {
          this.current.year += 1
          this.current.month = 1
        } else {
          this.current.month += 1
        }
      } else if (type === 'prev') {
        if (this.isStartDate()) return
        if (this.current.month - 1 === 0) {
          this.current.year -= 1
          this.current.month = 12
        } else {
          this.current.month -= 1
        }
      }
      this.calendar.setDate(this.fmtValBeforeSetDate(this.current))
    },
    fmtValBeforeSetDate(val) {
      if (!val || !toNumber(val.year) || !toNumber(val.month)) return null
      return `${toNumber(val.year)}/${toNumber(val.month)}`
    },
    setDateRange(val, range) {
      if (!val) return val
      if (!range) return range
      const rangeYear = parseInt(range / 12)
      const rangeMonth = Math.round(range % 12)
      let startMonth, startYear, endMonth, endYear
      if (val.month - rangeMonth <= 0) {
        startMonth = val.month + 12 - rangeMonth
        startYear = val.year - Math.max(0, rangeYear - 1)
      } else {
        startMonth = val.month - rangeMonth
        startYear = val.year - rangeYear
      }

      if (val.month + rangeMonth > 12) {
        endMonth = val.month + rangeMonth - 12
        endYear = val.year + rangeYear + 1
      } else {
        endMonth = val.month + rangeMonth
        endYear = val.year + rangeYear
      }
      this.dateRange = { startYear, startMonth, endYear, endMonth }
    },
    isEndDate() {
      return (
        this.current.year === this.dateRange.endYear &&
        this.current.month === this.dateRange.endMonth
      )
    },
    isStartDate() {
      return (
        this.current.year === this.dateRange.startYear &&
        this.current.month === this.dateRange.startMonth
      )
    },
    fmtDateRange(val) {
      if (!val) return
      const arr = new Array(2)
      if (val.startYear && val.startMonth) {
        arr[0] = `${val.startYear}/${val.startMonth}`
      }
      if (val.endYear && val.endMonth) {
        arr[1] = `${val.endYear}/${val.endMonth}`
      }
      return arr
    },
  },
}
</script>

<style lang="scss">
.fg-month-picker {
  display: inline-flex;
  position: relative;

  &-wrapper {
    display: flex;
    align-items: center;
  }

  .fg-icon {
    cursor: pointer;
  }
  .context {
    margin: 0 30px;
  }

  button {
    width: 22px;
    height: 22px;
    cursor: pointer;
    border: none;
    background: none;
    outline: none;
    &.__disable {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
</style>
