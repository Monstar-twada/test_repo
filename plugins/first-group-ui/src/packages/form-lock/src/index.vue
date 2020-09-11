<template>
  <form
    class="fg-form"
    :class="[
      labelPosition ? '__label-' + labelPosition : '',
      { __inline: inline },
    ]"
  >
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'FgForm',
  provide() {
    return {
      fgForm: this,
    }
  },
  props: {
    /* eslint-disable */
    model: Object,
    rules: Object,
    labelPosition: {
      type: String,
      default: 'top',
    },
    labelWidth: String,
    labelFontWeight: {
      type: String,
      default: '800',
    },
    labelFontSize: String,
    labelSuffix: {
      type: String,
      default: '',
    },
    size: String,
    inline: Boolean,
  },
}
</script>

<style lang="scss">
.fg-form {
  padding-top: 20px;
  &:after {
    display: block;
    content: '';
    clear: both;
  }

  .fg-form-item {
    .__label {
      line-height: $--height-regular;
      font-size: $--font-size-12;
    }
  }

  &.__label-top {
    .fg-form-item {
      .__label {
        display: block;
      }
    }
  }
  &.__label-left,
  &.__label-center,
  &.__label-right {
    .fg-form-item {
      .__label {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
  &.__label-center {
    .fg-form-item {
      .__label {
        text-align: center;
      }
    }
  }
  &.__label-right {
    .fg-form-item {
      .__label {
        padding-right: 12px;
        text-align: right;
      }
    }
  }

  // inline
  &.__inline {
  }
}
</style>
