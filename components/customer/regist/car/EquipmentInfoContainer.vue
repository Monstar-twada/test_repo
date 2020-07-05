<template>
  <div class="bodyContainer__equipmentInfo equipmentInfoContainer">
    <h3>{{ itemInfo.title }}</h3>
    <div class="equipmentInfoContainer__content">
      <div
        v-for="(input, i) in itemInfo.inputs"
        :key="`input-${i}`"
        class="equipmentInfoContainer__content__inputs"
      >
        <p class="equipmentInfoContainer__content__inputs--title">
          {{ input.title }}
          <span v-if="input.require">✳︎</span>
        </p>
        <div class="equipmentInfoContainer__content__inputs--body">
          <div
            v-for="(item, j) in input.items"
            :key="`${input.id}-item-${j}`"
            class="equipmentInfoContainer__content__inputs--body--item"
          >
            <Select
              v-if="item.type === 'select'"
              :placeholder="item.placeholder"
              :list="item.items"
              :customwidth="item.width"
              :customheight="item.height"
              class="customSelect"
            />
            <input
              v-else
              v-model="itemInfo.results[item.index]"
              type="text"
              :style="setStyle(item.width, item.height)"
              class="customInput"
            />
            <span>{{ item.otherText }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Select from '~/components/common/Select'

export default {
  name: 'EquipmentInfoContainer',
  components: {
    Select,
  },
  props: {
    itemInfo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    setStyle(width, height) {
      return {
        '--width': `${width}px`,
        '--height': `${height}px`,
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.equipmentInfoContainer {
  width: 100%;
  border-radius: 6px;
  background-color: $white-300;
  padding: 24px 23.5px;
  margin-bottom: 30px;
  h3 {
    margin-bottom: 12px;
    font-size: 20px;
    font-weight: bold;
  }
  &__content {
    display: flex;
    font-size: 12px;
    flex-wrap: wrap;
    max-width: 93%;
    &__inputs {
      &--title {
        margin-bottom: 5px;
        & > span {
          margin-left: 5px;
        }
      }
      &--body {
        display: flex;
        &--item {
          width: max-content;
          .customSelect {
            font-size: 12px !important;
            margin-right: 15px;
          }
          .customInput {
            border: solid 1px $gray-100;
            width: var(--width);
            min-width: var(--width);
            height: var(--height);
            min-height: var(--height);
            border-radius: 4px;
            text-align: center;
            font-size: 12px;
            color: $blue-200;
            margin-right: 5px;
          }
          & > span {
            margin-right: 15px;
          }
        }
      }
    }
  }
}
</style>
