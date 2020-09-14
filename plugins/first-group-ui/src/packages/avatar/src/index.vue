<template>
  <div class="fg-avatar" :style="wrapperStyle" @click="handleClick">
    <div
      :class="[
        'avatar-wrapper',
        { __circle: circle },
        { __clickable: clickable },
        { __fillet: fillet },
        { __bg: background },
      ]"
      :style="avatarStyle"
    >
      <img :src="imgUrl" @load="handleLoad" />
    </div>
    <div
      v-if="content"
      :class="[
        'text-wrapper',
        { 'text-flex-direction-column': textFlexDirectionColumn },
        { 'text-summary-no-offset': textSummaryNoOffset },
      ]"
      :style="textStyle"
    >
      <div class="__name">
        {{ content }}
        <span v-if="data.subName" class="sub-name">{{ data.subName }}</span>
      </div>
      <div v-if="data.summary" class="__summary">{{ data.summary }}</div>
    </div>
  </div>
</template>

<script>
import { isNumberLike } from '../../../libs'
export default {
  name: 'FgAvatar',
  props: {
    src: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '37',
    },
    circle: {
      type: Boolean,
      default: true,
    },
    clickable: {
      type: Boolean,
      default: false,
    },
    fillet: {
      type: Boolean,
      default: false,
    },
    background: {
      type: Boolean,
      default: false,
    },
    nameFontWeightNormal: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default() {
        return {}
      },
    },
    textFlexDirectionColumn: {
      type: Boolean,
      default: false,
    },
    textSummaryNoOffset: {
      type: Boolean,
      default: false,
    },
    textWidth: {
      type: String,
      default: '',
    },
  },
  computed: {
    imgUrl() {
      return this.src || this.data.url
    },
    wrapperStyle() {
      const ret = {}
      if (this.size) {
        ret.height = isNumberLike(this.size) ? this.size + 'px' : this.size
      }
      return ret
    },
    avatarStyle() {
      const ret = {}
      if (this.size) {
        ret.width = isNumberLike(this.size) ? this.size + 'px' : this.size
        ret.height = ret.width
        ret.flex = `0 0 ${ret.width}`
      }
      return ret
    },
    textStyle() {
      const ret = {}
      if (this.textWidth) {
        ret.maxWidth = this.textWidth
      }
      ret.height = this.wrapperStyle.height
      return ret
    },
    content() {
      const { name, lastName, firstName } = this.data
      return name || [lastName, firstName].join(' ')
    },
  },
  methods: {
    handleLoad(e) {
      const el = e.target
      if (el.width > el.height) {
        el.style.width = 'auto'
        el.style.height = '100%'
      }
    },
    handleClick(e) {
      if (!this.clickable) return
      this.$emit('click', this.imgUrl, e)
    },
  },
}
</script>

<style lang="scss">
.fg-avatar {
  display: inline-flex;
  align-items: center;
  font-size: 0;
  vertical-align: middle;
  .avatar-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    &.__clickable {
      cursor: pointer;
    }
    img {
      width: 100%;
      height: auto;
    }
    &.__circle {
      border-radius: 50%;
    }
    &.__fillet {
      border-radius: $--border-radius-4;
    }
    &.__bg {
      background: $--color-background-hover;
    }
  }
  .text-wrapper {
    display: inline-flex;
    font-weight: 800;
    margin-left: 10px;
    line-height: 1;
    align-items: center;
    overflow-x: hidden;
    .__name,
    .__summary {
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }
    .__name {
      font-size: $--font-size-14;
      .sub-name {
        font-size: $--font-size-10;
      }
    }
    .__summary {
      font-size: $--font-size-10;
    }
    &.text-flex-direction-column {
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      .__summary {
        margin-left: -6px;
      }
    }
    &.text-summary-no-offset {
      .__summary {
        margin-left: 0;
      }
    }
  }
}
</style>
