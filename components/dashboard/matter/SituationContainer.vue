<template>
  <div class="situation">
    <h3 class="situation__title">案件状況</h3>
    <div class="situation__card">
      <div class="situation__card--title">
        <v-img
          :max-width="16"
          :max-height="16"
          :src="require(`./img/note-svg.svg`)"
        ></v-img>
        <p>オーダーシート</p>
      </div>
      <div class="situation__card--info">
        <div>
          <p>作成日</p>
          <p>2021/03/03</p>
        </div>
        <div>
          <p>経過日数</p>
          <p>7日</p>
        </div>
        <div>
          <p>売上見込</p>
          <p>¥2,400,000</p>
        </div>
      </div>
    </div>
    <div class="situation__card">
      <div class="situation__card--title">
        <v-img
          :max-width="16"
          :max-height="16"
          :src="require(`./img/note-svg.svg`)"
        ></v-img>
        <p>査定書</p>
      </div>
      <div class="situation__card--info">
        <div>
          <p>作成日</p>
          <p>2021/03/03</p>
        </div>
        <div>
          <p>査定額</p>
          <p>¥1,670,000</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.situation {
  padding: 25px 20px;
  &__title {
    font-size: 14px;
    font-weight: bold;
    color: $--color-primary;
    margin-bottom: 1.2em;
  }
  &__card {
    padding: 13px 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 4px;
    border: solid 1px $--color-border;
    background-color: $--color-background;
    margin-bottom: 1.2em;
    &--title {
      display: flex;
      align-items: flex-start;
      .v-image {
        margin-right: 4px;
      }
      & > p {
        font-size: 14px;
        font-weight: bold;
        color: #1e5199;
        margin-bottom: 0%;
      }
    }
    &--info {
      & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          margin-bottom: 0;
          color: $--color-primary;
        }
        p:first-child {
          font-size: 10px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
