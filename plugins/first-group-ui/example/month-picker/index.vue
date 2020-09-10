<template>
  <div class="example-month-picker-wrapper">
    <fg-month-picker v-model="current"></fg-month-picker>
  </div>
</template>

<script>
export default {
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
