<template>
  <div class="example-checkbox-wrapper">
    <fg-form label-font-size="16px">
      <fg-form-item label="disable">
        <fg-checkbox v-model="value2" disabled></fg-checkbox>
      </fg-form-item>
      <fg-form-item label="default">
        <fg-checkbox v-model="value2"></fg-checkbox>
      </fg-form-item>
      <fg-form-item label="slot">
        <fg-checkbox v-model="value2">
          <fg-input></fg-input>
        </fg-checkbox>
      </fg-form-item>
      <fg-form-item label="color red">
        <fg-checkbox v-model="value2" theme="red"></fg-checkbox>
      </fg-form-item>
      <fg-form-item label="color blue タイトル付き">
        <fg-checkbox
          v-model="value2"
          theme="blue"
          label="タイトルブルー"
        ></fg-checkbox>
      </fg-form-item>
      <fg-form-item label="color red タイトル付き">
        <fg-checkbox
          v-model="value2"
          theme="red"
          label="タイトルレッド"
        ></fg-checkbox>
      </fg-form-item>
      <fg-form-item label="circle">
        <fg-checkbox
          v-model="value2"
          theme="red"
          label="タイトルレッド"
          circle
        ></fg-checkbox>
      </fg-form-item>
    </fg-form>
  </div>
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
