<template>
  <div ref="wrapper" class="fg-date-setter">
    <fg-input :value="inputValue" disabled>
      <template v-slot:suffix>
        <fg-icon name="clock" @click="iconClick"></fg-icon>
      </template>
    </fg-input>
  </div>
</template>

<script>
import ZxCalendar from 'zx-calendar'
export default {
  name: 'FgDateSetter',
  components: {},
  props: {
    value: {
      type: [Date, Number, String],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    format: {
      type: String,
      default: 'yyyy/MM/dd (W) hh:mm',
    },
  },
  data() {
    return {
      popVisible: false,
      currentDate: this.value,
      calendar: null,
    }
  },
  computed: {
    wrapper() {
      return this.$refs.wrapper
    },
    inputValue() {
      let ret = this.currentDate
      const { calendar } = this
      if (calendar) {
        const date = calendar.toDate(ret)
        if (date) {
          ret = calendar.formatDate(date, this.format)
        }
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
      }
    },
  },
  mounted() {
    this.calendar = new ZxCalendar({
      el: document.createElement('div'),
      lang: 'jp',
    })
  },
  methods: {
    iconClick() {
      this.currentDate = new Date()
    },
  },
}
</script>

<style lang="scss">
.fg-date-setter {
  .fg-icon {
    cursor: pointer;
  }
}
</style>
