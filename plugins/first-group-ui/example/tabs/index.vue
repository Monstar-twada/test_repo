<template>
  <div class="fg-tabs-wrapper">
    <fg-tabs
      :options="{ useUrlFragment: false }"
      @clicked="tabClicked"
      @changed="tabChanged"
    >
      <fg-tabs-item name="First tab">
        This is the content of the first tab
      </fg-tabs-item>
      <fg-tabs-item name="Second tab">
        This is the content of the second tab
      </fg-tabs-item>
      <fg-tabs-item name="Third tab">
        This content will be unavailable while :is-disabled prop set to true
      </fg-tabs-item>
      <fg-tabs-item name="Forth tab">
        The fragment that is appended to the url can be customized
      </fg-tabs-item>
    </fg-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemList: [],
    }
  },
  methods: {
    tabClicked() {},
    tabChanged() {},
  },
}
</script>

<style lang="scss">
.fg-tabs-wrapper {
  width: 100%;
  height: 500px;
  background: $--color-primary-active;
}
</style>
