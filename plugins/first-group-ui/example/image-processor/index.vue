<template>
  <div class="example-image-processor-wrapper">
    <Doc />
    <h2>Example</h2>
    <UserPhotoCrop />
    <IconType />
    <Validate />
  </div>
</template>

<script>
import { customMixin } from '../_app/mixins'
import Doc from './doc.md'
import UserPhotoCrop from './UserPhotoCrop.md'
import IconType from './IconType.md'
import Validate from './Validate.md'
export default {
  components: {
    Doc,
    UserPhotoCrop,
    IconType,
    Validate,
  },
  mixins: [customMixin],
}
</script>

<style lang="scss"></style>
