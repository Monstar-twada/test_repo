<template>
  <div class="content__row">
    <div class="content__row--title">{{ title }}</div>
    <div class="content__row--body">
      <slot v-if="kind === 'custom'" />
      <div v-if="kind === 'select'" class="content__row--body--baseSelect">
        <Select
          :placeholder="placeholder"
          :customwidth="'100%'"
          :customheight="31"
        />
      </div>
      <div v-if="kind === 'input'" class="content__row--body--baseInput">
        <input :placeholder="placeholder" type="text" />
      </div>

      <div v-if="kind === 'date'" class="content__row--body--date">
        <div class="content__row--body--date--select">
          <Select :placeholder="''" :customwidth="105" :customheight="31" />
        </div>
        年
        <div class="content__row--body--date--select">
          <Select :placeholder="''" :customwidth="105" :customheight="31" />
        </div>
        月
        <div class="content__row--body--date--select">
          <Select :placeholder="''" :customwidth="105" :customheight="31" />
        </div>
        日
      </div>
    </div>
  </div>
</template>

<script>
import Select from '~/components/common/Select'

export default {
  name: 'ContentRowContainer',
  components: {
    Select,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    kind: {
      type: String,
      default: 'custom',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  &__row {
    margin-bottom: 20px;
    &--title {
      padding: 10px;
      font-size: 12px;
      display: flex;
    }
    display: grid;
    grid-template-columns: 130px 1fr;
    &--body {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      input[type='text'] {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        padding: 14px 18px;
        border: solid 1px $gray-100;
        font-size: 12px !important;
        color: $blue-500 !important;
      }
      &--baseSelect,
      &--baseInput {
        width: 440px;
        height: 40px;
      }
      &--date {
        width: 440px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 12px;
        color: $blue-200;
        &--select {
          width: 110px;
          height: 40px;
        }
      }
    }
  }
}
</style>
