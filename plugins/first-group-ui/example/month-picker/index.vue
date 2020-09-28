<template>
  <div class="example-month-picker-wrapper">
    <fg-month-picker v-model="current"></fg-month-picker>
  </div>
</template>

<script>
import { customMixin } from '../_app/mixins'

export default {
  mixins: [customMixin],
  data() {
    return {
      current: { year: 2020, month: 8 },
    }
  },
}
</script>

<style lang="scss">
.example-month-picker-wrapper {
  .fg-row {
    padding-bottom: 20px;
  }
}
</style>
