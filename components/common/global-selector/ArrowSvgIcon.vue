<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11.19"
    height="6.9"
    viewBox="0 0 11.19 6.9"
  >
    <g transform="translate(11.19) rotate(90)">
      <path
        d="M9.884,0,5.595,4.289,1.305,0,0,1.305,5.595,6.9,11.19,1.305Z"
        transform="translate(0 11.19) rotate(-90)"
        :fill="color"
        fill-rule="evenodd"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#fff',
    },
  },
}
</script>
