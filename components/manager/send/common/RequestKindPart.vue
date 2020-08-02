<template>
  <div class="requestKindPart">
    <div class="requestKindPart__title">
      <p>依頼種別</p>
    </div>
    <div class="requestKindPart__select">
      <div
        v-for="(item, i) in icons"
        :key="`item-${i}`"
        class="requestKindPart__select--list"
        @click="handleClick(i)"
      >
        <div
          :class="`requestKindPart__select--list--item${
            isSelected(i) ? '' : '-active'
          }`"
        >
          <v-img
            :max-width="30"
            :max-height="30"
            :src="require(`./img/${isSelectedIcon(i)}.svg`)"
          ></v-img>
        </div>
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RequestKindPart',
  data() {
    return {
      selected: 'car',
      icons: [
        {
          target: 'car',
          title: '購入',
          svg: 'send_car_icon',
        },
        {
          target: 'money',
          title: '売却',
          svg: 'send_money_icon',
        },
        {
          target: 'wrench',
          title: '整備',
          svg: 'send_wrench_icon',
        },
        {
          target: 'hammer',
          title: '鈑金',
          svg: 'send_hammer_icon',
        },
        {
          target: 'heart',
          title: '保険',
          svg: 'send_heart_icon',
        },
        {
          target: 'tire',
          title: 'アクセサリー',
          svg: 'send_tire_icon',
        },
      ],
    }
  },
  methods: {
    handleClick(index) {
      this.selected = this.icons[index].target
    },
    isSelected(index) {
      return this.selected === this.icons[index].target
    },
    isSelectedIcon(index) {
      return this.isSelected(index)
        ? `${this.icons[index].svg}_white`
        : `${this.icons[index].svg}`
    },
  },
}
</script>

<style lang="scss" scoped>
.requestKindPart {
  display: grid;
  grid-template-columns: 140px 1fr;
  padding: 30px 0;
  margin: 0 120px;
  border-top: solid 1px $gray-600;
  border-bottom: solid 1px $gray-600;
  &__title {
    display: flex;
    align-items: center;
    p {
      font-size: 14px;
      font-weight: bold;
    }
  }
  &__select {
    display: flex;
    justify-content: space-between;
    &--list {
      display: flex;
      flex-direction: column;
      align-items: center;
      &--item {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $blue-200;
        cursor: pointer;
        &-active {
          width: 60px;
          height: 60px;
          border-radius: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: solid 1px $gray-100;
          background-color: $white-300;
        }
      }
      p {
        margin-top: 8px;
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
}
</style>
