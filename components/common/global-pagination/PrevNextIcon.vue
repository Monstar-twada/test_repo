<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="5.55"
    height="9"
    viewBox="0 0 5.55 9"
  >
    <g transform="translate(5.55 9) rotate(180)">
      <path
        d="M7.95,0,4.5,3.45,1.05,0,0,1.05l4.5,4.5L9,1.05Z"
        transform="translate(0 9) rotate(-90)"
        :fill="color"
        fill-rule="evenodd"
      />
    </g></svg
></template>
<script>
const COLORS = {
  white: '#0786bd',
  blue: '#0786BD',
}
export default {
  props: {
    theme: {
      type: String,
      default: 'white',
    },
  },
  computed: {
    color() {
      return COLORS[this.theme]
    },
  },
}
</script>

<style></style>
