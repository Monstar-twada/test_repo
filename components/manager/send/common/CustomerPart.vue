<template>
  <div class="send-common-customer">
    <div class="send-common-customer__title">
      <p>対象顧客</p>
    </div>
    <div class="send-common-customer__user">
      <div class="send-common-customer__user__img">
        <v-avatar :size="60">
          <img :src="require(`./img/person-default.svg`)" alt="John" />
        </v-avatar>
      </div>
      <div class="send-common-customer__user__content">
        <div class="send-common-customer__user__content--text">
          <p>
            米田 道治
            <span>（64歳）</span>
          </p>
          <p>ヨネダ ミチハル</p>
        </div>
        <div class="send-common-customer__user__content--btn">
          <v-img
            :max-width="70"
            :max-height="30"
            :src="require(`./img/change-btn.svg`)"
          ></v-img>
        </div>
      </div>
    </div>
    <div class="send-common-customer__car">
      <div class="send-common-customer__car__img">
        <v-img
          :max-width="120"
          :max-height="66"
          :src="require(`./img/car.png`)"
          class="arrow-right"
        ></v-img>
      </div>
      <div class="send-common-customer__car__content">
        <div class="send-common-customer__car__content--text">
          <p>トヨタ</p>
          <p>プリウス</p>
        </div>
        <div class="send-common-customer__car__content--btn">
          <v-img
            :max-width="90"
            :max-height="30"
            :src="require(`./img/car-change-btn.svg`)"
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
.send-common-customer {
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
    border-right: solid 1px $--color-background-hover;
    padding: 0 30px 0 0;
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
