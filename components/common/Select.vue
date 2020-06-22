<template>
  <VSelect
    :placeholder="placeholder"
    :options="list"
    class="selectStyle"
    searchable
    :components="{ OpenIndicator }"
<<<<<<< HEAD
    :style="SelectStyle"
=======
>>>>>>> 96bd11555c679a82bece25332cf943b965fc26b6
  >
  </VSelect>
</template>

<script>
import VSelect from 'vue-select'
import Dropdown from '~/components/common/Dropdown.vue'
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
<<<<<<< HEAD
=======
    bgColor: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '35',
    },
>>>>>>> 96bd11555c679a82bece25332cf943b965fc26b6
    list: {
      type: Array,
      default: () => ['1', '2'],
    },
    searchable: {
      type: Boolean,
      default: false,
    },
<<<<<<< HEAD
    customwidth: {
      type: Number,
      default: 120,
    },
    customheight: {
      type: Number,
      default: 20,
    },
=======
>>>>>>> 96bd11555c679a82bece25332cf943b965fc26b6
  },
  data() {
    return {
      OpenIndicator: Dropdown,
    }
  },
<<<<<<< HEAD
  computed: {
    SelectStyle() {
      return {
        '--width': this.customwidth + 'px',
        '--height': this.customheight + 'px',
      }
    },
  },
=======
>>>>>>> 96bd11555c679a82bece25332cf943b965fc26b6
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
<<<<<<< HEAD
  height: var(--height);
=======
  margin: 6px 0 0;
>>>>>>> 96bd11555c679a82bece25332cf943b965fc26b6
}
.selectStyle .vs__search::placeholder,
.selectStyle .vs__dropdown-toggle,
.selectStyle .vs__dropdown-menu {
  background: $white-300;
  border: none;
  color: $blue-500;
  text-transform: lowercase;
  font-variant: small-caps;
  font-family: 'Noto Sans JP';
<<<<<<< HEAD
  width: var(--width);
  min-width: var(--width);
=======
  width: 120px;
>>>>>>> 96bd11555c679a82bece25332cf943b965fc26b6
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
