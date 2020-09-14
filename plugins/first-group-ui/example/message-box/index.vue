<template>
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
      <div style="height: 1000px;"></div>
    </fg-form-item>
  </fg-form>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleMessageBox(type) {
      switch (type) {
        case 'alert':
          this.$alert('this is a alert message')
            .then(() => {
              console.log('ok')
            })
            .catch(() => {
              console.log('cancel')
            })
          break
        case 'confirm':
          this.$confirm('this is a confirm message')
            .then(() => {
              console.log('ok')
            })
            .catch(() => {
              console.log('cancel')
            })
          break
        case 'warning':
          this.$confirm('this is a ログアウトする message', {
            buttons: {
              ok: {
                text: 'ログアウトする',
                type: 'warning',
              },
            },
          })
            .then(() => {
              console.log('ok')
            })
            .catch(() => {
              console.log('cancel')
            })
          break
        case 'multiple':
          this.$confirm(['message-p1', 'message-p2'])
            .then(() => {
              console.log('ok')
            })
            .catch(() => {
              console.log('cancel')
            })
          break
      }
    },
  },
}
</script>

<style lang="scss"></style>
