<template>
  <div class="send-common-status">
    <div class="send-common-status__title">
      <p>ステータス</p>
    </div>
    <div class="send-common-status__body">
      <div class="send-common-status__body--selectContent">
        <fg-select
          v-model="selected"
          :items="list"
          size="small"
          :width="'120px'"
          :placeholder="placeholder"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusPart',
  props: {
    selected: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Label',
    },
    list: {
      type: Array,
      require: true,
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
