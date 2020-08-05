<template>
  <v-row class="Title mx-0" justify="start" align="start">
    <div class="Title-left ml20">
      <div class="Title-left__title">
        <h2>{{ title }}</h2>
        <h4 class="mt10">{{ subTitle1 }}</h4>
        <h4>{{ subTitle2 }}</h4>
      </div>
      <div v-if="isSelectComp" class="Title-left__select">
        <GlobalSelector
          v-model="selected"
          items="items"
          :options="selectItem"
          :placeholder="selectItem[0].text"
        />
      </div>
    </div>
    <div class="Title__content" :class="isSelectComp ? 'short' : 'long'">
      <p v-html="content"></p>
      <ul class="px-0">
        <li>配信開始日：{{ startDate }}</li>
        <li>ターゲット：{{ target }}</li>
        <li>諸条件：{{ conditions }}</li>
      </ul>
    </div>
  </v-row>
</template>
<script>
import GlobalSelector from '~/components/common/global-selector/index'
export default {
  name: 'Title',
  components: {
    GlobalSelector,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle1: {
      type: String,
      default: '',
    },
    subTitle2: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    startDate: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '',
    },
    conditions: {
      type: String,
      default: '',
    },
    isSelectComp: {
      type: Boolean,
      default: false,
    },
    selectItem: {
      type: Array,
      default: () => {
        return []
      },
    },
    value: {
      type: [Number, String],
      default: '',
    },
  },
  data() {
    return {
      selected: this.value,
    }
  },
  watch: {
    value(val) {
      this.selected = val
    },
    selected(val) {
      this.$emit('input', val)
    },
  },
}
</script>
<style lang="scss" scoped>
.Title {
  width: 100%;
  height: 80px;
  color: $blue-200;
  flex-direction: column;

  &-left {
    color: $blue-200;
    padding-right: 20px;
    border-right: 1px $gray-100 solid;
    display: flex;

    &__title {
      margin-right: 30px;
    }

    &__select {
      width: 140px;
      display: flex;
    }
  }
  &__content {
    overflow: hidden;
    display: flex;
    flex-flow: row wrap;
    justify-items: flex-start;

    p {
      font-size: 12px;
      margin-bottom: 5px;
    }
    ul {
      display: flex;
      flex: 0 0 auto;
      justify-content: flex-start;

      li {
        list-style: none;
        font-size: 10px;
        margin-right: 10px;
      }
    }
  }
  &__content.short {
    width: 400px;
  }
  &__content.long {
    width: 500px;
  }
}
</style>
