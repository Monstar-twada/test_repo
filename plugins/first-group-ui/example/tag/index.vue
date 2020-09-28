<template>
  <fg-form label-position="top">
    <fg-form-item label="normal size">
      <fg-tag>Hello world</fg-tag>
      <fg-tag selected>selected</fg-tag>
      <fg-tag bold>bold</fg-tag>
      <fg-tag bold selected>bold selected</fg-tag>
      <fg-tag round>round</fg-tag>
      <fg-tag round selected>round selected</fg-tag>
    </fg-form-item>

    <fg-form-item label='size="regular"'>
      <fg-tag size="regular">Hello world</fg-tag>
      <fg-tag size="regular" selected>selected</fg-tag>
      <fg-tag size="regular" bold>bold</fg-tag>
      <fg-tag size="regular" bold selected>bold selected</fg-tag>
      <fg-tag size="regular" round>round</fg-tag>
      <fg-tag size="regular" round selected>round selected</fg-tag>
    </fg-form-item>

    <fg-form-item label='size="small"'>
      <fg-tag size="small">Hello world</fg-tag>
      <fg-tag size="small" selected>selected</fg-tag>
      <fg-tag size="small" bold>bold</fg-tag>
      <fg-tag size="small" bold selected>bold selected</fg-tag>
      <fg-tag size="small" round>round</fg-tag>
      <fg-tag size="small" round selected>round selected</fg-tag>
    </fg-form-item>

    <fg-form-item label='size="mini"'>
      <fg-tag size="mini">Hello world</fg-tag>
      <fg-tag size="mini" selected>selected</fg-tag>
      <fg-tag size="mini" bold>bold</fg-tag>
      <fg-tag size="mini" bold selected>bold selected</fg-tag>
      <fg-tag size="mini" round>round</fg-tag>
      <fg-tag size="mini" round selected>round selected</fg-tag>
    </fg-form-item>

    <fg-form-item label="selectable">
      <fg-tag v-model="value1" selectable>Hello world</fg-tag>
      <fg-tag v-model="value2" selectable>fillet</fg-tag>
      <fg-tag v-model="value3" selectable>border</fg-tag>
      <fg-tag v-model="value4" selectable>fillet border</fg-tag>
    </fg-form-item>

    <fg-form-item label="custom color">
      <fg-tag color="red">color="red"</fg-tag>
      <fg-tag color="red" bg-color="#ff0" border="2px solid red">
        bg-color="#ff0" border="2px solid red"</fg-tag
      >
      <fg-tag color="#ff0" bg-color="#333" fillet>
        color="#ff0" bg-color="#333" fillet</fg-tag
      >
      <fg-tag color="#ff0" bg-color="#333" border-color="#f30">
        color="#ff0" bg-color="#333" border-color="#f30"</fg-tag
      >
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
      value3: false,
      value4: false,
    }
  },
}
</script>

<style lang="scss"></style>
