<template>
  <div class="stepContainer">
    <div class="stepContainer__info">
      <v-img
        :max-width="30"
        :max-height="30"
        :src="
          require(`~/components/dashboard/assess/img/step${
            stepInfo.step + 1
          }_icon.svg`)
        "
      ></v-img>
      {{ stepInfo.title }}
    </div>
    <div class="stepContainer__part">
      <div
        v-if="currentStep !== stepInfo.step"
        class="stepContainer__part__selected"
      >
        <p>{{ selected }}</p>
        <div
          v-if="selected"
          class="stepContainer__part__selected--btn"
          @click="toggleEdit"
        >
          <v-img
            :max-width="12"
            :max-height="12"
            :src="require(`~/components/dashboard/assess/img/pancel-icon.svg`)"
          ></v-img>
          編集
        </div>
      </div>
      <slot v-else />
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepContainer',
  props: {
    selected: {
      type: String,
      required: true,
    },
    stepInfo: {
      type: Object,
      required: true,
    },
    currentStep: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      editing: false,
    }
  },
  methods: {
    toggleEdit() {
      this.$parent.toggleEdit(this.stepInfo.step)
    },
  },
}
</script>

<style lang="scss" scoped>
.stepContainer {
  width: 100%;
  height: max-content;
  border-radius: 6px;
  background-color: $white-300;
  padding: 18px 23px;
  display: grid;
  grid-template-columns: 230px 1fr;
  margin-bottom: 30px;
  &__info {
    width: 100%;
    display: flex;
    font-size: 18px;
    font-weight: bold;
    color: $blue-200;
    border-right: 1px solid $gray-100;
    .v-image {
      margin-right: 12px;
    }
  }
  &__part {
    padding-left: 34px;
    &__selected {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-size: 14px;
        font-weight: bold;
        color: $blue-200;
        margin-bottom: 0;
      }
      &--btn {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        border: solid 1px #dfe6f0;
        padding: 3px 10px;
        font-size: 12px;
        color: $blue-100;
        cursor: pointer;
        .v-image {
          margin-right: 8px;
        }
      }
    }
  }
}
</style>
