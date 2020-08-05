<template>
  <VSelect
    :placeholder="placeholder"
    :options="list"
    class="selectStyle"
    searchable
    :components="{ OpenIndicator }"
    :style="SelectStyle"
  />
</template>

<script>
import VSelect from 'vue-select'
import Dropdown from '~/components/common/drop-down/index'
import 'vue-select/dist/vue-select.css'
export default {
  name: 'Select',
  components: {
    VSelect,
  },
  props: {
    placeholder: {
      type: String,
      default: 'Label',
    },
    list: {
      type: Array,
      default: () => ['1', '2'],
    },
    searchable: {
      type: Boolean,
      default: false,
    },
    customwidth: {
      type: Number,
      default: 120,
    },
    customheight: {
      type: Number,
      default: 20,
    },
    isTransparent: {
      type: Boolean,
      default: false,
    },
    custombackground: {
      type: String,
      default: 'white',
    },
  },
  data() {
    return {
      OpenIndicator: Dropdown,
    }
  },
  computed: {
    SelectStyle() {
      return {
        '--width': this.customwidth + 'px',
        '--height': this.customheight + 'px',
        '--background': this.custombackground,
      }
    },
  },
}
</script>
<style lang="scss">
.selectStyle {
  border: 1px solid $gray-100;
  border-radius: 5px;
}
.vs__dropdown-menu {
  padding: 0 !important;
}
.vs__search {
  height: var(--height);
}
.selectStyle .vs__search::placeholder,
.selectStyle .vs__dropdown-toggle,
.selectStyle .vs__dropdown-menu {
  background: var(--background);
  border: none;
  color: $blue-400;
  text-transform: lowercase;
  font-variant: small-caps;
  font-family: 'Noto Sans JP';
  width: var(--width);
  min-width: var(--width);
  font-size: 10px;
}

.vs__selected-options {
  padding: 0px;
}
.vs__selected {
  color: $blue-500;
}
.selectStyle .vs__clear,
.selectStyle .vs__open-indicator {
  fill: #1e5199;
}
</style>
