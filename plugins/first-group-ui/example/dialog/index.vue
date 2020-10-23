<template>
  <div class="example-dialog-wrapper">
<<<<<<< HEAD
    <Doc />
    <h2>default</h2>
    <div>
      <fg-button type="primary" width="320px" @click="visible1 = true"
        >Click</fg-button
      >

      <fg-button type="primary" width="320px" @click="visible5 = true"
        >Click</fg-button
      >
    </div>

    <h2>persistent</h2>
    <div>
      <fg-button type="primary" width="320px" @click="visible2 = true"
        >Click</fg-button
      >
    </div>

    <h2>max-width="640px"</h2>
    <div>
      <fg-button type="primary" width="320px" @click="visible3 = true"
        >Click</fg-button
      >
    </div>

    <h2>hide-header-border</h2>
    <div>
      <fg-button type="primary" width="320px" @click="visible4 = true"
        >Click</fg-button
      >
    </div>

    <h2>v-slot:title-suffix, v-slot:header-right</h2>
    <div>
      <fg-button type="primary" width="320px" @click="visible6 = true"
        >Click</fg-button
      >
    </div>

    <h2>v-slot:header</h2>
    <div>
      <fg-button type="primary" width="320px" @click="visible7 = true"
        >Click</fg-button
      >
    </div>

    <fg-dialog v-model="visible1" title="Hello World日本語テスト">
      content
    </fg-dialog>

    <fg-dialog v-model="visible2" title="Hello World日本語テスト" persistent>
      content
      <div style="padding: 24px">
        <fg-calendar />
      </div>
      <div style="padding: 24px">
        <fg-calendar />
      </div>
    </fg-dialog>

    <!-- max-width="640px"-->
    <fg-dialog
      v-model="visible3"
      title="Hello World日本語テスト"
      max-width="640px"
    >
      content
    </fg-dialog>

    <!-- hide-header-border-->
    <fg-dialog v-model="visible4" title="hide-header-border" hide-header-border>
      hide-header-border
    </fg-dialog>

    <!-- larger -->
    <fg-dialog v-model="visible5" title="larger">
      <div style="overflow: hidden">
        <p v-for="item in 100" :key="item">text {{ item }}</p>
      </div>
    </fg-dialog>

    <fg-dialog
      v-model="visible6"
      title="v-slot:title-suffix, v-slot:header-right"
    >
      <template v-slot:title-suffix>
        <fg-icon name="flag" color="red"></fg-icon>
      </template>
      <template v-slot:header-right>
        <fg-icon name="flag" color="red"></fg-icon>
      </template>
      content
    </fg-dialog>

    <fg-dialog v-model="visible7">
      <template v-slot:header>
        <fg-icon name="flag" color="green"></fg-icon>
      </template>
      <fg-calendar />
    </fg-dialog>

    <div style="height: 1000px"></div>
=======
    <Docs />
    <h2>Example</h2>
    <Normal />
    <Persistent />
    <MaxWidth />
    <HideHeaderBorder />
    <SlotDemo />
>>>>>>> develop
  </div>
</template>

<script>
import { customMixin } from '../_app/mixins'
import Docs from '../../docs/dialog.md'
import Normal from './Normal.md'
import Persistent from './Persistent.md'
import MaxWidth from './MaxWidth.md'
import HideHeaderBorder from './HideHeaderBorder.md'
import SlotDemo from './SlotDemo.md'

export default {
  components: {
    Docs,
    Normal,
    Persistent,
    MaxWidth,
    HideHeaderBorder,
    SlotDemo,
  },
  mixins: [customMixin],
}
</script>

<style lang="scss">
.example-dialog-wrapper {
}
</style>
