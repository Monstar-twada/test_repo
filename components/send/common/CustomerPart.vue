<template>
  <div class="customerContainer">
    <div class="customerContainer__title">
      <p>対象顧客</p>
    </div>
    <div class="customerContainer__user">
      <div class="customerContainer__user__img">
        <v-avatar :size="60">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
      </div>
      <div class="customerContainer__user__content">
        <div class="customerContainer__user__content--text">
          <p>
            米田 道春
            <span>（31歳）</span>
          </p>
          <p>ヨネダ ミチハル</p>
        </div>
        <div class="customerContainer__user__content--btn">
          <v-img
            :max-width="70"
            :max-height="30"
            :src="require(`~/static/send/change_btn.svg`)"
          ></v-img>
        </div>
      </div>
    </div>
    <div class="customerContainer__car">
      <div class="customerContainer__car__img">
        <v-img
          :max-width="120"
          :max-height="66"
          :src="require(`~/static/send/car.png`)"
          class="arrow-right"
        ></v-img>
      </div>
      <div class="customerContainer__car__content">
        <div class="customerContainer__car__content--text">
          <p>トヨタ</p>
          <p>プリウス</p>
        </div>
        <div class="customerContainer__car__content--btn">
          <v-img
            :max-width="90"
            :max-height="30"
            :src="require(`~/static/send/car_change_btn.svg`)"
          ></v-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerPart',
}
</script>

<style lang="scss" scoped>
.customerContainer {
  display: grid;
  grid-template-columns: 140px 1fr 1fr;
  padding: 30px 0;
  margin: 0 120px;
  &__title {
    display: flex;
    align-items: center;
    p {
      font-size: 14px;
      font-weight: bold;
    }
  }
  &__user {
    display: flex;
    border-right: solid 1px $gray-600;
    padding: 0 30px;
    &__img {
      margin-right: 10px;
    }
    &__content {
      &--text {
        p {
          margin: 0;
          margin-bottom: 4px;
        }
        p:first-child {
          font-size: 14px;
          font-weight: bold;
          span {
            font-size: 10px;
          }
        }
        p:last-child {
          font-size: 10px;
          font-weight: 500;
        }
      }
      &--btn {
        margin-top: 10px;
      }
    }
  }
  &__car {
    display: flex;
    padding: 0 30px;
    &__img {
      margin-right: 10px;
    }
    &__content {
      &--text {
        p {
          font-size: 12px;
          font-weight: bold;
          margin: 0;
          margin-bottom: 4px;
        }
      }
      &--btn {
        margin-top: 10px;
      }
    }
  }
}
</style>
