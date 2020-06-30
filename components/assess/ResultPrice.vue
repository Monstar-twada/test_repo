<template>
  <div class="d-flex flex-column ml25">
    <div class="card">
      <div class="card__info">
        <h3 class="card__info__title ml20 mb15">基本情報</h3>
      </div>
      <div class="card__price">
        <h3 class="card__price--subtitle">プライシング価格</h3>
        <h3 class="card__price--amount border-bottom">¥1,594,000</h3>
        <h3 class="card__price--subtitle mt10">AI査定価格</h3>
        <h3 class="card__price--amount">¥1,670,000</h3>
      </div>
    </div>
    <div class="card">
      <div class="card__info">
        <h3 class="card__info__title ml20 mb15">他社査定</h3>
      </div>
      <div class="card__price">
        <h3 class="card__price--subtitle">ビッグモーター</h3>
        <h3 class="card__price--amount border-bottom">¥1,350,000</h3>
        <h3 class="card__price--subtitle mt10">ガリバー</h3>
        <h3 class="card__price--amount">¥1,400,000</h3>
      </div>
    </div>
    <div class="card h-170">
      <div class="card__textarea">
        <h3 class="card__textarea--title ml20 mb15">特記事項</h3>
      </div>
      <div class="card__textarea__box">
        <v-textarea auto-grow outlined rows="1" row-height="90"></v-textarea>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ResultPrice',
  components: {},
}
</script>
<style lang="scss" scoped>
.card {
  height: 240px;
  width: 220px;
  padding: 20px 0px;
  border-radius: 5px;
  margin-bottom: 30px;
  background: $white-300;
  &__info {
    border-bottom: 1px solid $gray-300;
    &__title {
      font-size: 18px;
      color: $blue-200;
      font-weight: 600;
    }
  }
  &__price {
    margin: 20px;
    &--subtitle {
      font-size: 12px;
      color: $blue-200;
      font-weight: 400;
    }
    &--amount {
      font-size: 26px;
      color: $blue-200;
      font-weight: 600;
      text-align: right;
      padding-bottom: 10px;
    }
  }
  &__textarea {
    &--title {
      font-size: 18px;
      color: $blue-200;
      font-weight: 600;
    }
    &__box {
      margin: 20px;
    }
  }
}
.h-170 {
  height: 190px !important;
}
.border-bottom {
  border-bottom: 1px solid $gray-300;
}
</style>
