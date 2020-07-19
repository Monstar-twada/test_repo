<template>
  <div class="userAvatarContainer">
    <v-avatar :size="30" class="userAvatarContainer__avatar">
      <img :src="require('~/static/customer/person_default.svg')" alt="John" />
    </v-avatar>
    <p class="userAvatarContainer__userName">米田 道春 <span>（31歳）</span></p>
    <button v-if="!isConfirm" class="userAvatarContainer__changeBtn">
      <v-img
        :max-width="14"
        :max-height="10"
        :src="require(`~/static/customer/change_icon.svg`)"
      ></v-img>
      変更
    </button>
    <div
      v-if="kind === 'edit' && !isConfirm"
      class="userAvatarContainer__editPart"
    >
      <v-img
        :max-width="24"
        :max-height="24"
        :src="require(`~/static/customer/trash_round_icon.svg`)"
        class="userAvatarContainer__editPart--remove"
      ></v-img>
      <v-img
        :max-width="30"
        :max-height="30"
        :src="require(`~/static/common/btn-plus.svg`)"
        class="userAvatarContainer__editPart--add"
      ></v-img>
    </div>
    <div
      v-if="kind === 'same' && !isConfirm"
      class="userAvatarContainer__samePart"
    >
      <input type="checkbox" />
      <p>所有者と同じ</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserAvatarWithChangeBtn',
  props: {
    isConfirm: {
      type: Boolean,
      default: false,
    },
    kind: {
      type: String,
      require: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.userAvatarContainer {
  display: flex;
  align-items: center;
  padding: 5px 0;
  &__avatar {
    margin-right: 10px;
  }
  &__userName {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 0;
    margin-right: 7px;
    span {
      font-size: 10px;
      font-weight: bold;
    }
  }
  &__changeBtn {
    width: 70px;
    height: 24px;
    border-radius: 15px;
    border: solid 1px $gray-100;
    background-color: $white-300;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
    color: $blue-100;
    margin-right: 5px;
    .v-image {
      margin-right: 5px;
    }
  }
  &__editPart {
    display: flex;
    align-items: center;
    &--remove {
      margin-right: 20px;
    }
  }
  &__samePart {
    display: flex;
    align-items: center;
    input {
      margin-right: 8px;
    }
    p {
      margin: 0;
      font-size: 12px;
    }
  }
}
</style>
