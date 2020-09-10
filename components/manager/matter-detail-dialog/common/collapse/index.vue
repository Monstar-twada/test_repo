<template>
  <div
    class="fg-collapse"
    :class="{ 'is-unfold': visible, 'is-disabled': disabled }"
  >
    <div class="fg-collapse__header" @click="handleCollapse">
      <div class="l">
        <fg-icon name="arrow-right"></fg-icon>
        <b>{{ title }}</b>
      </div>
    </div>
    <transition name="fg-zoom-in-top">
      <div v-show="visible" class="fg-collapse__body">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
    disabled: Boolean,
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      visible: this.value,
    }
  },
  watch: {
    value(val) {
      if (this.visible !== val) {
        this.visible = val
      }
    },
    visible(val) {
      this.$emit('input', val)
    },
  },
  methods: {
    handleCollapse() {
      if (this.disabled) return
      this.visible = !this.visible
    },
  },
}
</script>

<style lang="scss">
@import '../mixins';
.fg-collapse {
  position: relative;
  @include borderTop();
  overflow: hidden;
  padding: 20px;
  .fg-collapse__header {
    display: flex;
    align-items: center;
    .l {
      .fg-icon {
        transition: transform 0.3s ease-in-out;
      }
      b {
        font-size: 12px;
        display: inline-block;
        margin-left: 8px;
      }
    }
  }
  .fg-collapse__body {
    padding-top: 15px;
  }
  &:not(.is-disabled) {
    .fg-collapse__header {
      cursor: pointer;
    }
  }
  &.is-unfold {
    .fg-collapse__header {
      .l {
        .fg-icon {
          transform: rotate(90deg);
        }
      }
    }
  }
  &.is-disabled {
    .fg-collapse__header {
      .l {
        opacity: 0.3;
      }
    }
  }
}
</style>
