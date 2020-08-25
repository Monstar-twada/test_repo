<template>
  <div class="user-drop-down">
    <div class="user-drop-down-title">
      <h3>アカウント情報</h3>
      <div class="logout" @click="handleLogout">
        <i class="icon-logout"></i>
        <span>ログアウト</span>
      </div>
    </div>
    <fg-form ref="form" label-width="110px">
      <fg-form-item label="基本情報" class="__long"></fg-form-item>
      <fg-form-item label="会社名" class="__short">
        <span>{{ profile.company }}</span>
      </fg-form-item>
      <fg-form-item label="店舗" class="__short">
        <span>{{ profile.position }}</span>
      </fg-form-item>
      <fg-form-item label="氏名" class="__short">
        <span>{{ profile.last_name }}{{ profile.first_name }}</span>
      </fg-form-item>
      <fg-form-item label="cars Manage ID" class="__short">
        <span>{{ profile.manager_id }}</span>
      </fg-form-item>
      <fg-form-item label="職種" class="__short">
        <div
          v-for="(item, index) in profile.category"
          :key="index"
          class="category-icon"
        >
          <MarkIcon :value="true" :icon-src="item.icon" :text="item.text" />
        </div>
      </fg-form-item>
      <fg-form-item label="電話番号" class="__short">
        <span>{{ profile.tel }}</span>
      </fg-form-item>
      <fg-form-item label="メールアドレス" class="__long">
        <span>{{ profile.mail_address }}</span>
      </fg-form-item>
      <fg-form-item label="パスワード" class="__long">
        <span>{{ profile.password }}</span>
      </fg-form-item>
    </fg-form>
  </div>
</template>
<script>
import MarkIcon from '~/components/common/mark-icon/index'
export default {
  name: 'UserDropDown',
  components: {
    MarkIcon,
  },
  data() {
    return {
      profile: {
        company: '株式会社ファーストグループ',
        position: '武蔵小杉店',
        manager_id: '8409813823',
        first_name: '太郎',
        last_name: '田中',
        tel: '04-392-9483',
        mail_address: 'account@firstgroup.co.jp',
        password: '････････',
        category: [
          {
            icon: 'car',
            text: '購入',
          },
          {
            icon: 'tools',
            text: '整備',
          },
        ],
      },
    }
  },
  methods: {
    handleLogout() {
      this.$store.commit('user/signOut', false)
    },
  },
}
</script>
<style lang="scss">
.user-drop-down {
  color: $blue-200;
  &-title {
    padding: 13px 15px;
    display: flex;
    justify-content: space-between;
    h3 {
      font-size: 18px;
    }

    .logout {
      width: 105px;
      height: 30px;
      display: flex;
      align-items: center;
      padding: 0 11px;
      border: 1px $white-100 solid;
      border-radius: 15px;
      cursor: pointer;
      .icon-logout {
        display: inline-block;
        width: 11px;
        height: 11px;
        background: url('./img/logout.svg') no-repeat 0 0;
        background-size: cover;
        margin-right: 4px;
      }
      span {
        font-size: 12px;
        color: $blue-100;
      }
    }
  }

  .category-icon {
    display: inline-block;
    margin-right: 15px;
  }
  .fg-form-item.__long {
    font-size: 14px;
    border-top: 1px $white-100 solid;
    padding: 14px 20px;
  }
  .fg-form-item.__long:nth-child(1) {
    padding: 14px 20px 0;
  }
  .fg-form-item.__short {
    font-size: 14px;
    margin-left: 48px;
    .fg-form-item__label {
      font-weight: normal;
    }
  }
}
</style>
