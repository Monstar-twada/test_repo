<template>
  <fg-form label-position="top">
    <fg-form-item label="fg-radio">
      <fg-radio v-model="value1" label="Text0001"></fg-radio>
      <fg-radio v-model="value2" label="Text0002"></fg-radio>
    </fg-form-item>
    <fg-form-item label="fg-radio-group">
      <fg-radio-group v-model="value3">
        <fg-radio v-for="(item, i) in values3" :key="i" :label="item.value">{{
          item.text
        }}</fg-radio>
      </fg-radio-group>
    </fg-form-item>
    <fg-form-item label="disabled">
      <fg-radio v-model="value1" label="Text0001" disabled></fg-radio>
    </fg-form-item>
  </fg-form>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      values3: [
        {
          text: 'Text0001',
          value: '1',
        },
        {
          text: 'Text0002',
          value: '2',
        },
      ],
      value3: '2',
    }
  },
  watch: {
    value1(val) {
      console.log('value1', val)
    },
    value2(val) {
      console.log('value2', val)
    },
    value3(val) {
      console.log('value3', val)
    },
  },
}
</script>

<style lang="scss"></style>
