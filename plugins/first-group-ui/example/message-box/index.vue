<template>
<<<<<<< HEAD
  <fg-form label-position="top">
    <fg-form-item label="alert">
      <fg-button type="primary" width="100%" @click="handleMessageBox('alert')"
        >Alert</fg-button
      >
    </fg-form-item>
    <fg-form-item label="confirm">
      <fg-button
        type="primary"
        width="100%"
        @click="handleMessageBox('confirm')"
        >Confirm</fg-button
      >
    </fg-form-item>
    <fg-form-item
      label="confirm buttons:{ ok: {text: 'ログアウトする', type: 'waining'} }"
    >
      <fg-button
        type="primary"
        width="100%"
        @click="handleMessageBox('warning')"
        >Confirm</fg-button
      >
    </fg-form-item>
    <fg-form-item label="alert message:[message-p1, message-p2]">
      <fg-button
        type="primary"
        width="100%"
        @click="handleMessageBox('multiple')"
        >alert</fg-button
      >
      <div style="height: 1000px"></div>
    </fg-form-item>
  </fg-form>
=======
  <div>
    <Docs />
    <h2>Example</h2>
    <Normal />
    <Multiple />
  </div>
>>>>>>> develop
</template>

<script>
import { customMixin } from '../_app/mixins'
import Docs from '../../docs/message-box.md'
import Normal from './Normal.md'
import Multiple from './Multiple.md'

export default {
  components: {
    Docs,
    Normal,
    Multiple,
  },
  mixins: [customMixin],
}
</script>

<style lang="scss"></style>
