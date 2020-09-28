<template>
  <div class="example-row-wrapper">
    <h2>fg-row gutter=20</h2>
    <fg-row gutter="20">
      <fg-col span="12">
        <fg-input value="span=12"></fg-input>
      </fg-col>
      <fg-col span="12">
        <fg-input value="span=12"></fg-input>
      </fg-col>
    </fg-row>
    <fg-form label-position="top">
      <fg-form-item label="fg-row gutter=20">
        <fg-row gutter="20">
          <fg-col span="12">
            <fg-input value="span=12"></fg-input>
          </fg-col>
          <fg-col span="12">
            <fg-input value="span=12"></fg-input>
          </fg-col>
        </fg-row>
      </fg-form-item>
      <fg-form-item label="fg-row gutter=10">
        <fg-row gutter="10">
          <fg-col span="12">
            <fg-input value="span=12"></fg-input>
          </fg-col>
          <fg-col span="12">
            <fg-input value="span=12"></fg-input>
          </fg-col>
        </fg-row>
      </fg-form-item>
      <fg-form-item label="fg-col span=24">
        <fg-row>
          <fg-col span="24">
            <fg-input value="span=24"></fg-input>
          </fg-col>
        </fg-row>
      </fg-form-item>
      <fg-form-item label="fg-row gutter=20">
        <fg-row gutter="20">
          <fg-col span="1">
            <fg-input value="1"></fg-input>
          </fg-col>
          <fg-col span="2">
            <fg-input value="2"></fg-input>
          </fg-col>
          <fg-col span="3">
            <fg-input value="span=3"></fg-input>
          </fg-col>
          <fg-col span="4">
            <fg-input value="span=4"></fg-input>
          </fg-col>
          <fg-col span="5">
            <fg-input value="span=5"></fg-input>
          </fg-col>
          <fg-col span="6">
            <fg-input value="span=6"></fg-input>
          </fg-col>
          <fg-col span="3">
            <fg-input value="span=3"></fg-input>
          </fg-col>
        </fg-row>
      </fg-form-item>
      <fg-form-item label="fg-row gutter=20">
        <fg-row gutter="20">
          <fg-col span="6">
            <fg-input value="span=6"></fg-input>
          </fg-col>
          <fg-col span="6">
            <fg-input value="span=6"></fg-input>
          </fg-col>
          <fg-col span="12">
            <fg-input value="span=12"></fg-input>
          </fg-col>
        </fg-row>
      </fg-form-item>
    </fg-form>
  </div>
</template>

<script>
import { customMixin } from '../_app/mixins'

export default {
  mixins: [customMixin],
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.example-row-wrapper {
}
</style>
