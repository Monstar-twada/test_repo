<template>
  <div class="requestInfoPart" :style="InputStyle">
    <div class="requestInfoPart__title">
      <p>依頼詳細</p>
    </div>
    <div class="requestInfoPart__body">
      <textarea
        v-model="value"
        :placeholder="placeholder"
        class="requestInfoPart__body--textarea"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextAreaInfo',
  props: {
    title: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    customborderbottom: {
      type: String,
      default: 'solid 1px #e5edf6',
    },
  },
  computed: {
    InputStyle() {
      return {
        '--borderbottom': this.customborderbottom,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.requestInfoPart {
  display: grid;
  grid-template-columns: 140px 1fr;
  padding: 30px 0;
  margin: 0 120px;
  border-bottom: var(--borderbottom);
  &__title {
    display: flex;
    align-items: center;
    p {
      font-size: 14px;
      font-weight: bold;
    }
  }
  &__body {
    &--textarea {
      width: 100%;
      height: 137px;
      border-radius: 4px;
      border: solid 1px $gray-100;
      resize: none;
      padding: 17px;
      font-size: 12px;
      color: $blue-200;
      &::placeholder {
        font-size: 12px;
        color: $blue-500;
      }
    }
  }
}
</style>
