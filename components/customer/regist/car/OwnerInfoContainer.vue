<template>
  <div class="bodyContainer__ownerInfo ownerInfoContainer">
    <h3>所有者情報</h3>
    <div class="ownerInfoContainer__content">
      <div class="ownerInfoContainer__content--row">
        <div class="content__row--title">所有者</div>
        <div class="content__row--body">
          <UserAvatarWithChangeBtn :kind="'base'" />
        </div>
      </div>
      <div class="ownerInfoContainer__content--row">
        <div class="content__row--title">意思決定者</div>
        <div class="content__row--body">
          <div class="content__row--body--same">
            <v-img
              :max-width="30"
              :max-height="30"
              :src="require(`~/static/common/btn-plus.svg`)"
              class="content__row--body--same--btn"
            ></v-img>
            <input type="checkbox" />
            <p>所有者と同じ</p>
          </div>
        </div>
      </div>
      <div class="ownerInfoContainer__content--row">
        <div class="content__row--title">利用者</div>
        <div class="content__row--body">
          <UserAvatarWithChangeBtn :kind="'same'" />
          <UserAvatarWithChangeBtn :kind="'edit'" />
        </div>
      </div>
      <div class="ownerInfoContainer__content--row">
        <div class="content__row--title">主な利用目的</div>
        <div class="content__row--body">
          <div class="content__row--body--badges">
            <div class="badges--blue">車出勤</div>
            <div class="badges--blue">買い物</div>
            <div class="badges--blue">部活送迎</div>
            <div class="badges--white">習い事送迎</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserAvatarWithChangeBtn from '~/components/customer/regist/car/UserAvatarWithChangeBtn'

export default {
  name: 'OwnerInfoContainer',
  components: {
    UserAvatarWithChangeBtn,
  },
  props: {},
}
</script>
<style lang="scss" scoped>
.ownerInfoContainer {
  width: 100%;
  height: 302px;
  border-radius: 6px;
  background-color: $white-300;
  padding: 24px 23.5px;
  margin-bottom: 30px;
  h3 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  &__content {
    &--row {
      margin-bottom: 10px;
      .content__row--title {
        padding: 10px;
        font-size: 12px;
        display: flex;
      }
      display: grid;
      grid-template-columns: 130px 1fr;
    }
    .content__row--body {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      &--same {
        display: flex;
        align-items: center;
        &--btn {
          margin-right: 10px;
        }
        input {
          margin-right: 8px;
        }
        p {
          margin: 0;
          font-size: 12px;
        }
      }
      &--badges {
        display: flex;
        & > div {
          margin-right: 10px;
          padding: 5px 12px;
          font-size: 12px;
          border-radius: 4px;
          &.badges--blue {
            background-color: $blue-200;
            font-weight: bold;
            color: $white-300;
          }
          &.badges--white {
            background-color: $white-100;
          }
        }
      }
    }
  }
}
</style>
