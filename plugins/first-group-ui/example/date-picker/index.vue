<template>
  <div class="example-date-picker-wrapper">
    <h2>show-before-dash</h2>
    <fg-row :gutter="20">
      <fg-col :span="12">
        <fg-date-picker
          v-model="date1"
          format="yyyy/MM/dd（W）hh:mm"
        ></fg-date-picker>
      </fg-col>
      <fg-col :span="12">
        <fg-date-picker v-model="date" show-before-dash></fg-date-picker>
      </fg-col>
    </fg-row>
    <h2>show-after-dash</h2>
    <fg-row :gutter="20" type="flex">
      <fg-col :span="6">
        <fg-date-picker v-model="date" show-after-dash></fg-date-picker>
      </fg-col>
      <fg-col :span="6">
        <fg-date-picker v-model="date"></fg-date-picker>
      </fg-col>
      <fg-col :span="6">
        <fg-date-picker v-model="date" show-after-dash></fg-date-picker>
      </fg-col>
      <fg-col :span="6">
        <fg-date-picker v-model="date"></fg-date-picker>
      </fg-col>
    </fg-row>

    <fg-row>
      <h2>writable size="small"</h2>
      <fg-date-picker v-model="date" size="small" writable />
    </fg-row>

    <h2>clearable</h2>
    <fg-row gutter="20">
      <fg-col span="24">
        <fg-date-picker v-model="date" clearable></fg-date-picker>
      </fg-col>
    </fg-row>

    <h2>inline</h2>
    <div>
      <fg-date-picker v-model="date" clearable inline></fg-date-picker>
      <fg-date-picker v-model="date" clearable inline></fg-date-picker>
      <fg-date-picker v-model="date" clearable inline></fg-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '2020-08-12 12:55',
      date1: '2020-09-12（火）12:55',
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
