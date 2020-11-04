<template>
  <div class="company-right-wrapper">
    <div class="company-right-wrapper-top-wrapper">
      <div class="header-wrapper">
        <h2>契約情報</h2>
      </div>
      <div class="company-right-wrapper-top-wrapper_body">
        <div class="main-row">
          <div class="main-row_left">プラン</div>
          <div class="main-row_right">ベーシック</div>
        </div>
        <div class="main-row">
          <div class="main-row_left">契約店舗数</div>
          <div class="main-row_right">10店</div>
        </div>
        <div class="main-row">
          <div class="main-row_left">ユーザー数</div>
          <div class="main-row_right">25名/30名</div>
        </div>
      </div>
    </div>
    <div class="company-right-wrapper-bottom-wrapper">
      <div class="header-wrapper">
        <h2>ユーザーガイド</h2>
      </div>
      <div class="company-right-wrapper-bottom-wrapper_body">
        <div class="company-right-wrapper-bottom-wrapper_body_guide">
          <p>使い方ガイド</p>
          <img
            width="10"
            height="10"
            :src="require(`./img/copy-icon.svg`)"
            @click="moveToForm"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MiddleWrapper',
  data() {
    return {
      currentItem: {},
      headers: [],
    };
  },
  methods: {
    moveToForm() {
      this.$router.push({
        path: `/admin/area/new/`,
      });
    },
    moveToEdit(id) {
      this.$router.push({
        path: `/admin/area/edit/${id}`,
      });
    },
  },
};
</script>

<style lang="scss">
.company-right-wrapper {
  flex: 1;
  background: transparent;
  max-width: 240px;
  width: 100%;
  color: $--color-primary;
  margin: 10px;
  display: flex;
  flex-direction: column;
  &-bottom-wrapper {
    margin-top: 20px;
    max-height: 180px;
    height: 100%;
    background-color: $--color-white;
    border-radius: 6px;
    &_body {
      padding: 20px 30px;
      &_guide {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 1px solid $--color-background-hover;
        padding: 29px 20px;
        border-radius: 4px;
        & > p {
          margin-bottom: 0;
          font-size: 12px;
        }
      }
    }
  }
  &-top-wrapper {
    max-height: 250px;
    background-color: $--color-white;
    border-radius: 6px;
    &_body {
      /* padding: 20px 30px; */
      .main-row {
        display: grid;
        grid-template-columns: 60px 1fr;
        align-items: center;
        padding: 20px 30px;
        border-bottom: 1px solid $--color-background-hover;
        &_left {
          font-weight: bold;
          font-size: 12px;
        }
        &_right {
          padding-left: 30px;
          color: $--color-primary-placeholder;
          font-size: 12px;
          & > p {
            font-size: 12px;
            margin-bottom: 0;
          }
        }

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
  &_bottom {
    height: 88px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
