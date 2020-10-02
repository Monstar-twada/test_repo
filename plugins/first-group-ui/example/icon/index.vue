<template>
  <div class="example-icon-wrapper">
    <Docs />
    <h2>Icons</h2>

    <fg-row>
      <fg-col v-for="(icon, i) in icons" :key="i" span="4">
        <fg-icon :name="icon" />
        <p class="mt10">{{ icon }}</p>
      </fg-col>
    </fg-row>
    <h2>Example</h2>
    <Normal />
  </div>
</template>

<script>
import Docs from '../../docs/icon.md'
import { customMixin } from '../_app/mixins'
import Normal from './Normal.md'

const icons = [
  'arrow-top',
  'arrow-right',
  'arrow-down',
  'arrow-left',
  'calendar',
  'car-line',
  'change',
  'clock',
  'd-arrow-left',
  'dash',
  'download',
  'edit',
  'email',
  'exclamation',
  'exclamation-circle',
  'exclamation-circle-line',
  'eye',
  'flag',
  'google',
  'hook',
  'less',
  'magnifier',
  'magnifier-less',
  'magnifier-plus',
  'mobile',
  'plus',
  'qm-circle',
  'tel',
  'trash',
]
export default {
  components: {
    Docs,
    Normal,
  },
  mixins: [customMixin],
  data() {
    return {
      icons,
    }
  },
}
</script>

<style lang="scss">
.example-icon-wrapper {
  .fg-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
    height: 100px;
  }
}
</style>
