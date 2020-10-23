<template>
  <div>
    <Docs />
    <h2>Example</h2>
    <Normal />
    <Multiple />
  </div>
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
