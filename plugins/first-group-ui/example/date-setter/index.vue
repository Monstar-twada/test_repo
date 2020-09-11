<template>
  <div class="example-date-setter-wrapper">
    <h2>date-setter</h2>
    <fg-row gutter="20">
      <fg-col span="24">
        <fg-date-setter v-model="date"></fg-date-setter>
      </fg-col>
    </fg-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: +new Date(),
    }
  },
}
</script>

<style lang="scss">
.example-date-picker-wrapper {
  .fg-row {
    padding-bottom: 20px;
  }
}
</style>
