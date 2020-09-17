<template>
  <div class="color-checkbox-group">
    <fg-checkbox v-for="(item, i) in CAR_COLORS" :key="i" :value="item.active">
      <Color :color="item.color" />
    </fg-checkbox>
    <fg-checkbox label="他"></fg-checkbox>
  </div>
</template>

<script>
import Color from './Color'
import { CAR_COLORS } from '~/assets/constants/index'
export default {
  name: 'ColorCheckboxGroup',
  components: {
    Color,
  },
  data() {
    return {
      CAR_COLORS,
    }
  },
}
</script>

<style lang="scss">
.color-checkbox-group {
  .fg-checkbox {
    margin-right: 14px;
    &:last-child {
      margin-right: 0;
    }
  }
  .color-checkbox {
    margin-left: 6px;
  }
}
</style>
