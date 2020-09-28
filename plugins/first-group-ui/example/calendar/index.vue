<template>
  <div class="example-calendar-wrapper">
    <Docs />
    <ValidateDemo />

    <h2>Example</h2>
    <fg-row gutter="20">
      <fg-col span="12">
        <h2>show-before-dash</h2>
      </fg-col>
      <fg-col span="12">
        <h2>show-after-dash format=yyyy-MM-dd</h2>
      </fg-col>
      <fg-col span="6">
        <fg-calendar v-model="date1"></fg-calendar>
      </fg-col>
      <fg-col span="6">
        <fg-calendar v-model="date2" show-before-dash></fg-calendar>
      </fg-col>
      <fg-col span="6">
        <fg-calendar
          v-model="date3"
          format="yyyy-MM-dd"
          show-after-dash
        ></fg-calendar>
      </fg-col>
      <fg-col span="6">
        <fg-calendar v-model="date4" format="yyyy-MM-dd"></fg-calendar>
      </fg-col>
    </fg-row>
    <fg-row gutter="20">
      <fg-col span="12">
        <h2>type=month</h2>
      </fg-col>
      <fg-col span="12">
        <h2>format=yyyy年MM月</h2>
      </fg-col>
      <fg-col span="6">
        <fg-calendar
          v-model="month1"
          placeholder="Start Month"
          show-after-dash
          type="month"
        ></fg-calendar>
      </fg-col>
      <fg-col span="6">
        <fg-calendar
          v-model="month2"
          type="month"
          placeholder="End Month"
        ></fg-calendar>
      </fg-col>
      <fg-col span="6">
        <fg-calendar
          v-model="month3"
          placeholder="Start Month"
          show-after-dash
          type="month"
          format="yyyy年MM月"
        ></fg-calendar>
      </fg-col>
      <fg-col span="6">
        <fg-calendar
          v-model="month4"
          type="month"
          format="yyyy年MM月"
          placeholder="End Month"
        ></fg-calendar>
      </fg-col>
    </fg-row>

    <fg-row>
      <h2>writable size="small"</h2>
      <fg-calendar v-model="date" size="small" writable clearable />
    </fg-row>

    <h2>clearable</h2>
    <fg-row gutter="20">
      <fg-col span="24">
        <fg-calendar v-model="date" clearable></fg-calendar>
      </fg-col>
    </fg-row>

    <h2>inline</h2>
    <div>
      <fg-calendar v-model="date" clearable inline></fg-calendar>
      <fg-calendar v-model="date" clearable inline></fg-calendar>
      <fg-calendar v-model="date" clearable inline></fg-calendar>
    </div>

    <fg-row gutter="24">
      <fg-col span="12">
        <h2>year</h2>
        <fg-calendar v-model="year" type="year" clearable />
      </fg-col>
      <fg-col span="12">
        <h2>select-mode=range</h2>
        <fg-calendar
          v-model="yearRange"
          select-mode="range"
          type="year"
          clearable
        />
      </fg-col>
    </fg-row>

    <h2>popup right side test</h2>
    <fg-row gutter="20">
      <fg-col span="12">-</fg-col>
      <fg-col span="6">
        <fg-calendar
          v-model="month3"
          placeholder="Start Month"
          show-after-dash
          type="month"
          format="yyyy年MM月"
        ></fg-calendar>
      </fg-col>
      <fg-col span="6">
        <fg-calendar
          v-model="month4"
          type="month"
          format="yyyy年MM月"
          placeholder="End Month"
        ></fg-calendar>
      </fg-col>
    </fg-row>
  </div>
</template>

<script>
import { customMixin } from '../_app/mixins'
import Docs from '../../docs/calendar.md'
import ValidateDemo from './ValidateDemo.md'
export default {
  components: {
    Docs,
    ValidateDemo,
  },
  mixins: [customMixin],
  data() {
    return {
      date1: '2020/08/12',
      date2: '2020/08/12',
      date3: '2020-08-12',
      date4: '2020-08-12',
      date: '2020/08/12',
      month1: '',
      month2: '',
      month3: '1990年02月',
      month4: '',
      year: '2008',
      yearRange: ['2009', '2016'],
    }
  },
}
</script>

<style lang="scss">
.example-calendar-wrapper {
  .fg-row {
    padding-bottom: 20px;
  }
}
</style>
