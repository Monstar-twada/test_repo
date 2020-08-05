<template>
  <div class="send-common-status">
    <div class="send-common-status__title">
      <p>ステータス</p>
    </div>
    <div class="send-common-status__body">
      <div class="send-common-status__body--selectContent">
        <Select
          :list="list"
          :placeholder="placeholder"
          :customwidth="120"
          :customheight="20"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Select from '~/components/common/Select'
export default {
  name: 'StatusPart',
  components: {
    Select,
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
  },
}
</script>

<style lang="scss" scoped>
.send-common-status {
  display: grid;
  grid-template-columns: 140px 1fr 1fr;
  padding: 30px 0;
  margin: 0 120px;
  &__title {
    display: flex;
    align-items: center;
    p {
      font-size: 14px;
      font-weight: bold;
    }
  }
  &__body {
    &--selectContent {
      width: 122px;
      height: 28px;
    }
  }
}
</style>
