<template>
  <div
    v-show="active"
    v-if="!lazy || loaded || active"
    :id="`panel-${panelName}`"
    class="fg-tab-panel"
    role="tabpanel"
    :aria-hidden="!active"
    :aria-labelledby="`tab-${panelName}`"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'FgTabPanel',
  props: {
    label: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    disabled: Boolean,
    lazy: Boolean,
  },
  data() {
    return {
      index: null,
      loaded: false,
    }
  },
  computed: {
    active() {
      const active = this.$parent.currentName === (this.name || this.index)
      //   if (active) {
      //     this.loaded = true
      //   }
      return active
    },
    panelName() {
      return this.name || this.index
    },
  },
  watch: {
    active() {
      if (this.active) {
        this.loaded = true
      }
    },
  },
  updated() {
    this.$parent.$emit('tab-nav-update')
  },
}
</script>
