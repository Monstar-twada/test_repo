<template>
  <div class="example-icon-wrapper">
    <fg-form label-position="top">
      <fg-row>
        <fg-col v-for="(icon, i) in icons" :key="i" span="4">
          <h4>{{ icon }}</h4>
          <fg-icon :name="icon" />
        </fg-col>
      </fg-row>
    </fg-form>
  </div>
</template>

<script>
const icons = [
  'arrow-top',
  'arrow-right',
  'arrow-down',
  'arrow-left',
  'calendar',
  'car-line',
  'change',
  'clock',
  'd-arrow-left',
  'dash',
  'download',
  'edit',
  'email',
  'exclamation',
  'exclamation-circle',
  'exclamation-circle-line',
  'eye',
  'flag',
  'google',
  'hook',
  'less',
  'magnifier',
  'magnifier-less',
  'magnifier-plus',
  'mobile',
  'plus',
  'qm-circle',
  'tel',
  'trash',
]
export default {
  data() {
    return {
      icons,
    }
  },
}
</script>

<style lang="scss">
.example-icon-wrapper {
  .fg-col {
    text-align: center;
    height: 120px;
    h4 {
      margin: 20px 0;
    }
  }
}
</style>
