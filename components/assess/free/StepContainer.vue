<template>
  <div class="stepContainer">
    <div class="stepContainer__info">
      <v-img
        :max-width="30"
        :max-height="30"
        :src="require(`~/static/assess/step${step}_icon.svg`)"
      ></v-img>
      {{ title }}
    </div>
    <div class="stepContainer__part">
      <div v-if="!editing" class="stepContainer__part__selected">
        <p>{{ selected }}</p>
        <div v-if="selected" class="stepContainer__part__selected--btn">
          <v-img
            :max-width="12"
            :max-height="12"
            :src="require(`~/static/assess/pancel_icon.svg`)"
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
    step: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      editing: false,
    }
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
  align-items: center;
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
