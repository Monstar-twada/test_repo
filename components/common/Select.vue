<template>
  <VSelect
    :placeholder="placeholder"
    :options="list"
    class="selectStyle"
    searchable
    :components="{ OpenIndicator }"
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
    bgColor: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '35',
    },
    list: {
      type: Array,
      default: () => ['1', '2'],
    },
    searchable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      OpenIndicator: Dropdown,
    }
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
  margin: 6px 0 0;
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
  width: 120px;
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
