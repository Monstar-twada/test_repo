<template>
  <div class="mark-icon" :class="`__${size}`">
    <div
      class="icon"
      :class="selected ? '__selected' : ''"
      @click="handleClick"
    >
      <img :src="require(`./img/${iconSrc}.svg`)" />
    </div>
    <span>{{ text }}</span>
  </div>
</template>
<script>
export default {
  name: 'MarkIcon',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'middle', // small/middle/large
    },
    iconSrc: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selected: this.value,
    }
  },
  computed: {},
  watch: {
    value(val) {
      this.selected = val
    },
    selected(val) {
      this.$emit('input', val)
    },
  },
  methods: {
    handleClick() {
      this.selected = !this.selected
    },
  },
}
</script>
<style lang="scss" scoped>
.mark-icon {
  // width: 80px;
  text-align: center;
  margin: 0 -20px;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: flex-start;
  .icon {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $--color-primary-placeholder;
    border-radius: 5px;

    img {
      width: 25px;
    }
  }
  .icon.__selected {
    background: $--color-primary;
  }
  span {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 12px;
    font-weight: normal;
  }

  &.__small {
    width: 34px;
    margin: 0 10px 0 0;
    .icon {
      width: 34px;
      height: 34px;

      img {
        width: 20px;
      }
    }
  }

  &.__middle {
    width: 80px;
    margin: 0 -20px;
    .icon {
      width: 40px;
      height: 40px;

      img {
        width: 25px;
      }
    }
  }
}
</style>
