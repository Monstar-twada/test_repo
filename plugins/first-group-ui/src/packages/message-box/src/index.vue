<template>
  <div ref="el" class="fg-message-box" :class="{ 'is-show': visible }">
    <div class="fg-message-box__inner" :style="innerStyle">
      <div class="__header"></div>
      <div class="__body">
        <div class="icon-wrapper">
          <FgIcon name="exclamation-circle-line" color="#DB3394"></FgIcon>
        </div>
        <div class="content-wrapper">
          <p v-for="(p, i) in content" :key="i">{{ p }}</p>
        </div>
      </div>
      <div class="__footer">
        <FgButton :type="okBtnType" @click="handleClick('ok')">{{
          okBtnText
        }}</FgButton>
        <FgButton
          v-if="type === 'confirm'"
          :type="cancelBtnType"
          border
          @click="handleClick('cancel')"
          >{{ cancelBtnText }}</FgButton
        >
      </div>
    </div>
    <div class="fg-message-box__background" :style="maskStyle"></div>
  </div>
</template>
<script>
import FgButton from '../../button/index'
import FgIcon from '../../icon/index'
import { resetZIndex } from '../../../libs'
export default {
  name: 'FgMessageBox',
  components: {
    FgButton,
    FgIcon,
  },
  props: {},
  data() {
    return {
      visible: false,
      message: '',
      type: 'alert',
      okBtnText: 'ok',
      okBtnType: 'primary',
      cancelBtnText: 'キャンセル',
      cancelBtnType: 'primary',
      maskColor: '',
      maskOpacity: '',
      boxShadow: '',
    }
  },
  computed: {
    content() {
      if (!Array.isArray(this.message)) {
        return [this.message]
      }
      return this.message
    },
    el() {
      return this.$refs.el
    },
    innerStyle() {
      const ret = {}
      if (this.boxShadow) {
        ret.boxShadow = this.boxShadow
      }
      return ret
    },
    maskStyle() {
      const ret = {}
      if (this.maskColor) {
        ret.backgroundColor = this.maskColor
      }
      if (this.maskOpacity) {
        ret.opacity = this.maskOpacity
      }
      return ret
    },
  },
  watch: {
    visible(val) {
      if (val) {
        resetZIndex(this.el)
      }
    },
  },
  methods: {
    handleClick(type) {
      this.callback(type)
    },
  },
}
</script>

<style lang="scss">
@import '../../../assets/scss/mixin';
.fg-message-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), z-index 1ms;
  overflow: hidden;
  .fg-message-box__inner {
    position: relative;
    z-index: 1;
    text-align: center;
    width: 560px;
    max-width: 90%;
    background: $--color-white;
    border-radius: $--border-radius-6;
    box-shadow: 0 5px 10px $--color-shadow-primary;
    overflow: hidden;
    transform: scale(0);
    opacity: 0;
    transition: inherit;
    .icon-wrapper {
      margin: 30px auto;
    }
    .content-wrapper {
      margin: 0 50px;
      padding-bottom: 20px;
      // text-align: left;
      p {
        margin: 0;
        padding: 0;
        line-height: 24px;
        font-size: 12px;
      }
    }
    .__footer {
      position: relative;
      padding: 20px;
      display: flex;
      justify-content: center;
      @include borderTop();
      .fg-button {
        margin: 0 10px;
        flex: 1;
        max-width: 50%;
      }
    }
  }
  .fg-message-box__background {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: $--color-primary-active;
    transition: inherit;
    overflow: hidden;
  }
}
.fg-message-box.is-show {
  pointer-events: auto;
  .fg-message-box__inner {
    transform: scale(1);
    opacity: 1;
  }
  .fg-message-box__background {
    opacity: 0.5;
  }
}
</style>
