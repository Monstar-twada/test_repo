<template>
  <dov class="switch-wrapper">
    <fg-form label-font-size="16px">
      <fg-form-item label="default off">
        <fg-switch :value="value1"></fg-switch>
      </fg-form-item>
      <fg-form-item label="ddefault on">
        <fg-switch :value="value2"></fg-switch>
      </fg-form-item>
      <fg-form-item label="タイトル">
        <fg-switch :value="value2" label="タイトル"></fg-switch>
      </fg-form-item>
      <fg-form-item label="disable">
        <fg-switch :value="value2" disabled></fg-switch>
      </fg-form-item>
    </fg-form>
  </dov>
</template>

<script>
export default {
  data() {
    return {
      value1: false,
      value2: true,
    }
  },
}
</script>

<style lang="scss"></style>
