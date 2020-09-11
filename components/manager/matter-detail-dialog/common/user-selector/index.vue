<template>
  <fg-select
    ref="select"
    class="user-selector"
    :inline="inline"
    :width="width"
    popup-class="user-selector__popup"
    popup-offset="1"
    clearable
    :class="{
      'is-multiple': multiple,
      'is-clearable': clearable,
      'is-pop-show': popVisible,
      'is-empty': selectedItems.length === 0,
    }"
    @pop-visible="(val) => (popVisible = val)"
  >
    <div class="user-selector__input">
      <fg-avatar
        v-for="(item, i) in selectedItems"
        :key="i"
        :data="item"
        size="24"
      ></fg-avatar>
    </div>

    <fg-icon class="icon-arrow" name="arrow-down"></fg-icon>

    <fg-icon class="icon-clear" name="plus" @click="handleClear"></fg-icon>

    <template v-slot:options>
      <dl class="user-selector__options" :class="{ 'is-multiple': multiple }">
        <dd
          v-for="(item, i) in items"
          :key="i"
          @click="select(item, i, $event)"
        >
          <fg-checkbox v-if="multiple" v-model="item.isSelected">
            <fg-avatar :data="item" size="24"></fg-avatar>
          </fg-checkbox>
          <fg-avatar v-else :data="item" size="24"></fg-avatar>
        </dd>
      </dl>
    </template>
  </fg-select>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
    inline: Boolean,
    multiple: Boolean,
    clearable: Boolean,
    width: {
      type: [String, Number],
      default: '',
    },
  },
  data() {
    return {
      selectedItems: this.value,
      popVisible: false,
    }
  },
  watch: {
    value(val) {
      this.selectedItems = val
    },
    selectedItems(val) {
      this.$emit('input', val)
      this.$emit('change', val)
    },
  },
  methods: {
    select(item, index, e) {
      item.index = index
      if (this.multiple) {
        e.stopPropagation()
        setTimeout(() => {
          const i = this.selectedItems.findIndex((v) => v.index === index)
          if (i >= 0) {
            this.selectedItems.splice(i, 1)
          }
          if (item.isSelected) {
            this.selectedItems.push(item)
          }
          this.$refs.select.resetPopPosition()
        })
      } else {
        this.selectedItems = [item]
      }
    },
    handleClear(e) {
      this.selectedItems = []
      this.items.forEach((item) => {
        item.isSelected = false
      })
      this.$refs.select.resetPopPosition()
      e.stopPropagation()
    },
  },
}
</script>

<style lang="scss">
.user-selector {
  position: relative;
  user-select: none;
  display: flex;
  align-items: center;
  min-height: 38px;
  cursor: pointer;
  border-radius: 4px;
  flex-wrap: wrap;
  border: 1px solid $--color-border;
  box-sizing: border-box;
  padding: 4px 0;
  > .fg-icon {
    position: absolute;
    z-index: 2;
    right: 12px;
    &.icon-arrow {
      top: 16px;
      transition: transform 0.2s ease-in-out;
    }
    &.icon-clear {
      display: none;
      top: 13px;
      transform: rotate(45deg);
    }
  }
  &.is-pop-show {
    border-color: $--color-primary-active;
    > .icon-arrow {
      transform: rotate(-180deg);
    }
  }
  &.is-empty {
    &:after {
      content: '選択';
      position: absolute;
      z-index: 1;
      top: 0;
      left: 15px;
      bottom: 0;
      right: 0;
      display: flex;
      align-items: center;
      font-size: 12px;
      color: $--color-primary-placeholder;
    }
  }
  .fg-input {
    display: none;
  }
  .user-selector__input {
    .fg-avatar {
      margin: 2px 0 2px 15px;
    }
  }
  &:not(.is-empty).is-clearable:hover {
    .icon-arrow {
      display: none;
    }
    .icon-clear {
      display: flex;
    }
  }
}

.user-selector__popup {
  border: 1px solid $--color-border;
  box-shadow: none;
  &:after {
    position: absolute;
    z-index: 1;
    left: -1px;
    right: -1px;
    content: '';
    height: 3px;
    border-left: 1px solid $--color-border;
    border-right: 1px solid $--color-border;
  }
  &.is-fg-zoom-in-top {
    border-top: 0;
    border-radius: 0 0 4px 4px;
    &:after {
      top: -2px;
    }
  }
  &.is-fg-zoom-in-bottom {
    border-bottom: 0;
    border-radius: 4px 4px 0 0;
    &:after {
      bottom: -2px;
    }
  }
  .fg-popup__arrow {
    display: none;
  }
}

.user-selector__options {
  dd {
    padding: 2px 0;
    .fg-checkbox {
      margin-left: 15px;
      flex: 1;
      padding: 2px 0;
    }
    .fg-avatar {
      margin-left: 12px;
    }
  }
  &.is-multiple {
    dd {
      padding: 0;
    }
  }
}
</style>
