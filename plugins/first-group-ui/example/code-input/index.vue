<template>
  <div class="example-code-input-wrapper">
    <fg-form label-position="top">
      <fg-form-item label="code-input">
        <fg-code-input v-model="code" width="300" />
      </fg-form-item>
      <fg-form-item label="code-input">
        <fg-code-input v-model="code2" width="300" />
      </fg-form-item>
    </fg-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: '',
      code2: '198987',
    }
  },
}
</script>

<style lang="scss">
.example-code-input-wrapper {
}
</style>
