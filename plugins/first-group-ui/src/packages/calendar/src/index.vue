<template>
  <div ref="wrapper" class="fg-calendar" :style="elStyle">
    <Input
      :value="inputValue"
      :placeholder="placeholder"
      :clearable="clearable"
      :disabled="disabled"
      :readonly="!writable"
      :size="size"
      :offset-right="clearable ? 0 : 23"
      :calendar-icon="isTimePicker ? 'clock' : 'calendar'"
      @click="handleToggle"
      @change="inputChange"
    />
    <fg-icon
      v-if="showBeforeDash"
      name="dash"
      :color="dashColor"
      class="__dash __before"
    ></fg-icon>
    <fg-icon
      v-if="showAfterDash"
      name="dash"
      :color="dashColor"
      class="__dash __after"
    ></fg-icon>
    <Popup
      ref="popup"
      v-model="popVisible"
      :wrapper="wrapper"
      :class="[
        'fg-calendar-pop-wrapper',
        popupClass,
        {
          'is-time-picker': isTimePicker,
        },
      ]"
      :position="popupPosition"
      auto-width
    >
      <div ref="pop" class="fg-calendar__date-wrapper">
        <ZxVueCalendar
          lang="jp"
          :value="currentDate"
          :date-range="dateRange"
          :mode="selectMode"
          :type="type"
          :format="formatter"
          :title-formatter="titleFormatter"
          :item-suffix="itemSuffix"
          @cancel="popVisible = false"
          @error="calendarError"
          @change="calendarChange"
          @instance="getCalendar"
        />
      </div>
      <slot name="time-picker"></slot>
    </Popup>
  </div>
</template>

<script>
import { ZxVueCalendar } from 'zx-calendar/lib/vue-calendar'
import Input from '../../input/index'
import Popup from '../../popup/index'
import { isFunction, isNumberLike } from '../../../libs'
import {
  DEF_ITEM_SUFFIXES,
  DEF_TITLE_FORMATTERS,
  DEF_VALUE_FORMATTERS,
} from './constants'

export default {
  name: 'FgCalendar',
  components: {
    Input,
    Popup,
    ZxVueCalendar,
  },
  props: {
    value: {
      type: [String, Array, Number, Date],
      default: '',
    },
    placeholder: {
      type: String,
      default: '選択',
    },
    size: {
      type: String,
      default: 'regular',
    },
    clearable: Boolean,
    writable: Boolean,
    disabled: Boolean,
    inline: Boolean,
    type: {
      type: String,
      default: 'date',
    },
    showBeforeDash: Boolean,
    showAfterDash: Boolean,
    width: {
      type: [String, Number],
      default: '',
    },
    popupClass: {
      type: String,
      default: '',
    },
    popupPosition: {
      type: String,
      default: '',
    },
    dateRange: {
      type: Array,
      default() {
        return []
      },
    },
    format: {
      type: String,
      default: '',
    },
    selectMode: {
      type: String,
      default: 'single',
    },
    isTimePicker: Boolean,
    valueFormatter: {
      type: Function,
      default: undefined,
    },
  },
  data() {
    return {
      popVisible: false,
      currentDate: this.value,
      calendar: null,
      dashColor: this.$colors.primary,
    }
  },
  computed: {
    wrapper() {
      return this.$refs.wrapper
    },
    formatter() {
      return this.format || DEF_VALUE_FORMATTERS[this.type]
    },
    titleFormatter() {
      return DEF_TITLE_FORMATTERS[this.type]
    },
    itemSuffix() {
      return DEF_ITEM_SUFFIXES[this.type]
    },
    inputValue() {
      let currentDate = this.currentDate
      if (Array.isArray(currentDate)) {
        currentDate = currentDate.join(' ~ ')
      }
      if (isFunction(this.valueFormatter)) {
        currentDate = this.valueFormatter(currentDate)
      }
      return currentDate
    },
    elStyle() {
      const ret = {}
      if (this.width) {
        ret.width = this.width + (isNumberLike(this.width) ? 'px' : '')
      }
      if (this.inline) {
        ret.display = 'inline-flex'
      }
      return ret
    },
  },
  watch: {
    currentDate(val) {
      this.$emit('input', val)
    },
    value(val) {
      if (this.currentDate !== val) {
        this.currentDate = val
        this.calendar.setDate(val)
      }
    },
    dateRange(val) {
      if (Array.isArray(val)) {
        this.calendar.setRange(val[0], val[1])
      } else {
        this.calendar.setRange()
      }
    },
  },
  methods: {
    getCalendar(calendar) {
      this.calendar = calendar
      this.$emit('calendar', this)
    },
    formatDate(str, fmt) {
      if (!this.calendar) return str
      return this.calendar.formatDate(str, fmt)
    },
    toDate(str) {
      if (!this.calendar) return null
      return this.calendar.toDate(str)
    },
    setDate(str) {
      if (!this.calendar) return null
      return this.calendar.setDate(str)
    },
    handleToggle() {
      if (!this.popVisible) {
        let timer = setTimeout(() => {
          this.popVisible = true
          clearTimeout(timer)
          timer = null
        }, 0)
      } else {
        this.popVisible = false
      }
    },
    formatValue(list) {
      const arr = []
      switch (this.selectMode) {
        case 'multiple':
        case 'range':
          /* eslint-disable no-case-declarations */
          let date
          list.forEach((item) => {
            date = this.fmtDate(item)
            if (date) {
              arr.push(date)
            }
          })
          break
        default:
          return list[0] ? this.fmtDate(list[0]) : null
      }
      return arr
    },
    fmtDate(item) {
      if (!item) return null
      return this.calendar.formatDate(item.date, this.formatter)
    },
    inputChange(val) {
      const date = this.calendar.toDate(val)
      if (date) {
        this.currentDate = this.calendar.formatDate(date, this.formatter)
        this.calendar.setDate(date)
      }
    },
    hidePop() {
      this.popVisible = false
    },
    calendarError(err) {
      this.$emit('error', err)
    },
    calendarChange(res, original) {
      this.currentDate = this.formatValue(original)
      if (!this.isTimePicker) {
        // hide popup
        this.popVisible = false
      }
    },
  },
}
</script>

<style lang="scss">
.fg-calendar {
  position: relative;
  .__dash {
    display: block;
    position: absolute;
    z-index: 1;
    top: 50%;
    margin-top: -5px;
    width: 10px;
    height: 10px;
    &.__before {
      left: -5px;
      transform: translateX(-100%);
    }
    &.__after {
      right: -5px;
      transform: translateX(100%);
    }
  }
}

.fg-calendar-pop-wrapper {
  color: $--color-primary;
  // overflow: hidden;
  .zx-calendar {
    width: 320px;
    .zx-calendar-header-wrapper {
      .__title-wrapper {
        font-weight: 600;
      }
      .__l,
      .__r {
        button {
          &:hover {
            i {
              border-color: $--color-primary-active;
            }
          }
          &:active {
            i {
              border-color: $--color-primary-hover;
            }
          }
        }
      }
    }
    .zx-calendar-body-wrapper {
      .__item {
        .__text {
          font-size: $--font-size-12;
          .__suffix {
            font-size: $--font-size-12;
          }
        }
        &.is-selected {
          .__inner {
            .__text {
              background: $--color-primary-active;
            }
          }
        }
      }
    }
    &.mode-is-range {
      .zx-calendar-body-wrapper {
        .__item {
          &.is-selected {
            .__inner {
              .__text {
                background: none;
              }
            }
          }
          &.is-range-first,
          &.is-range-last,
          &.is-range-first-last,
          &.is-range-temp {
            .__inner {
              .__text {
                background: $--color-primary-active;
              }
            }
          }
        }
      }
    }
    .zx-calendar-header-wrapper {
      button {
        &:hover,
        &:active {
          &:before,
          &:after {
            border-color: $--color-primary-active !important;
          }
        }
      }
    }
    .zx-calender-footer-wrapper {
      button {
        font-size: $--font-size-10 !important;
        &.__confirm-button {
          background: $--color-primary-active;
        }
      }
    }
  }
}
</style>
