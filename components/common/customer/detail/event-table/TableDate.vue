<template>
  <div>{{ date[0] }}<br />{{ date[1] }}</div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    date() {
      const str = this.$ui.formatDate(this.value, 'yyyy/MM/dd (W)|hh:mm')
      return str.split('|')
    },
  },
}
</script>

<style></style>
