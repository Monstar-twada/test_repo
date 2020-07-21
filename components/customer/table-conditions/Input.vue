<template>
  <div class="table-conditions-input-wrapper">
    <input
      type="text"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Number, String],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.table-conditions-input-wrapper {
  border: 1px solid #dfe6f0;
  border-radius: 4px;
  padding: 0 10px;
  input {
    display: block;
    height: 28px;
    line-height: 28px;
    font-size: 12px;
    color: #748eb7;
    outline: none;
    border: 0;
    &::placeholder {
      color: #748eb7;
    }
  }
}
</style>
