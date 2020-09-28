<template>
  <!-- <div>
    <fg-row :gutter="20">
      <fg-col :span="6">
        <fg-switch :value="value1"></fg-switch>
      </fg-col>
      <fg-col :span="6">
        <fg-switch v-model="value2"></fg-switch>
      </fg-col>
    </fg-row>
    <fg-row :gutter="20" style="padding: 20px 0;">
      <fg-col :span="6">
        <fg-switch :value="value1" label="タイトル"></fg-switch>
      </fg-col>
      <fg-col :span="6">
        <fg-switch value="value2" disabled></fg-switch>
      </fg-col>
    </fg-row>
  </div> -->
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
</template>

<script>
import { customMixin } from '../_app/mixins'

export default {
  mixins: [customMixin],
  data() {
    return {
      value1: false,
      value2: true,
    }
  },
}
</script>

<style lang="scss"></style>
