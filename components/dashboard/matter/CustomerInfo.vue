<template>
  <div class="customer">
    <div class="customer__info">
      <v-avatar :size="60">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <div class="customer__info--context">
        <p>米田 道春<span>（31歳）</span></p>
        <p>ヨネダ ミチハル</p>
        <span>
          <v-img
            :max-width="12"
            :max-height="12"
            :src="require(`./img/tel.svg`)"
          ></v-img>
          080-1234-1234
        </span>
      </div>
    </div>
    <div class="customer__description">
      <div class="customer__description--img">
        <v-img
          :max-width="'100%'"
          :min-height="166"
          :src="require(`./img/car-img.png`)"
        ></v-img>
        <div>プリウス</div>
      </div>
      <div class="customer__description--bottom">
        <div class="bedges">
          <div>
            <span>所有者</span>
            <v-avatar :size="20">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </div>
          <div>
            <span>意思決定者</span>
            <v-avatar :size="20">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </div>
          <div>
            <span>利用者</span>
            <v-avatar :size="20">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <v-avatar :size="20">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </div>
        </div>
        <div class="perpose">
          <p>主な利用目的</p>
          <div class="items">
            <span>車出勤</span>
          </div>
        </div>
        <div class="kind">
          <p>取引種別</p>
          <div class="items">
            <span class="items__blue">車販</span>
            <span class="items__gray">鈑金</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerInfo',
}
</script>

<style lang="scss" scoped>
.customer {
  width: 100%;
  height: 100%;
  padding: 0;
  &__info {
    max-height: 110px;
    display: flex;
    align-items: center;
    border-bottom: solid 1px #dfe6f0;
    .v-avatar {
      margin: 20px;
    }

    &--context {
      p {
        margin-bottom: 2px;
        color: $--color-primary;
      }
      p:nth-child(1) {
        font-size: 19px;
        font-weight: bold;
        span {
          font-size: 14px;
        }
      }
      p:nth-child(2) {
        font-size: 10px;
        font-weight: 500;
        margin-bottom: 10px;
      }
      & > span {
        font-size: 12px;
        color: $--color-primary-placeholder;
        display: flex;
        align-items: center;
        .v-image {
          margin-right: 5px;
        }
      }
    }
  }
  &__description {
    padding: 20px;
    &--img {
      & > div {
        width: 100%;
        height: 33px;
        opacity: 0.8;
        background-image: linear-gradient(
          96deg,
          $--color-success,
          $--color-primary-active
        );
        font-size: 14px;
        font-weight: bold;
        color: $--color-white;
        display: flex;
        align-items: center;
        padding-left: 1em;
      }
    }

    &--bottom {
      margin-top: 10px;
      .bedges {
        display: flex;
        justify-content: space-between;
        & > div {
          display: flex;
          align-items: center;
          font-size: 12px;
          font-weight: bold;
          color: $--color-primary;
          & > span {
            margin-right: 0.5em;
          }
          & > .v-avatar {
            margin-right: 0.2em;
          }
        }
      }
      .perpose {
        display: grid;
        grid-template-columns: 80px 1fr;
        align-items: center;
        margin-top: 10px;
        & > p {
          font-size: 12px;
          color: $--color-primary;
          font-weight: bold;
          margin-bottom: 0;
        }
        .items {
          & > span {
            font-size: 10px;
            color: $--color-primary;
            background-color: $--color-white;
            border-radius: 4px;
            border: solid 1px $--color-border;
            padding: 5px;
          }
        }
      }
      .kind {
        display: grid;
        grid-template-columns: 80px 1fr;
        align-items: center;
        margin-top: 10px;
        & > p {
          font-size: 12px;
          color: $--color-primary;
          font-weight: bold;
          margin-bottom: 0;
        }
        .items {
          & > span {
            font-size: 10px;
            color: $--color-white;
            border-radius: 10px;
            padding: 5px 10px;
          }
          &__blue {
            background-color: $--color-primary;
          }
          &__gray {
            background-color: $--color-background;
          }
        }
      }
    }
  }
}
</style>
