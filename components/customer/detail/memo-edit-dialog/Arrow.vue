<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="6.9"
    height="11.19"
    viewBox="0 0 6.9 11.19"
  >
    <path
      id="path"
      d="M15.884,8.6l-4.289,4.289L7.305,8.6,6,9.905,11.595,15.5,17.19,9.905Z"
      transform="translate(-8.6 17.19) rotate(-90)"
      :fill="color"
      fill-rule="evenodd"
    />
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
