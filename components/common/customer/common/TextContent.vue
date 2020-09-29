<template>
  <dl class="text-content pt5 pb5">
    <dt :style="dtStyle">
      {{ label }}
      <div v-if="subLabel" :class="isSmallSubLabel ? 'is-small-sub-label' : ''">
        {{ subLabel }}
      </div>
    </dt>
    <dd
      :class="{ 'high-light': highLight, flex: flex, cur: copyable }"
      @click="ddClick"
    >
      {{ content }}
      <img v-if="copyable" src="./img/link.svg" width="10" />
      <slot></slot>
    </dd>
  </dl>
</template>
<script>
export default {
  name: 'TextContent',
  props: {
    label: {
      type: String,
      default: '',
    },
    subLabel: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
    labelFontWeight: {
      type: String,
      default: '',
    },
    labelFlex: Boolean,
    highLight: {
      type: Boolean,
      default: false,
    },
    copyable: {
      type: Boolean,
      default: false,
    },
    flex: {
      type: Boolean,
      default: false,
    },
    isSmallSubLabel: Boolean,
    labelWidth: {
      type: String,
      default: '',
    },
  },
  computed: {
    dtStyle() {
      const ret = {}
      if (this.height) {
        ret.height = this.height
      }
      if (this.labelFontWeight) {
        ret.fontWeight = this.labelFontWeight
      }
      if (this.labelWidth) {
        ret.flex = `0 0 ${this.labelWidth}`
      }
      if (this.labelFlex) {
        ret.display = 'flex'
        ret.alignItems = 'center'
      }
      return ret
    },
  },
  methods: {
    ddClick() {
      if (this.copyable) {
        this.$emit('click')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.text-content {
  width: 100%;
  position: relative;
  color: $--color-primary;
  vertical-align: top;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .cur {
    cursor: pointer;
  }

  dt {
    flex: 0 0 114px;
    display: inline-block;
    font-weight: bold;
  }

  .is-small-sub-label {
    font-size: 0.8em;
  }

  dd {
    flex: 1;
    display: inline-block;
    &.flex {
      display: flex;
      align-items: center;
    }
  }
}
</style>
