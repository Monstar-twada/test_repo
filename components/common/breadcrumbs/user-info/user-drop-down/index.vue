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
      <fg-form-item label="基本情報" class="__long">
        <span class="edit-button">
          <nuxt-link to="/account/edit/">
            <fg-button size="mini" width="63" border prefix-icon="edit"
              >編集</fg-button
            >
          </nuxt-link>
        </span>
      </fg-form-item>
      <fg-form-item label="所属店舗" class="__short">
        <span>{{ staff.companyName }}</span>
      </fg-form-item>
      <fg-form-item label="写真" class="__short">
        <span
          ><fg-image width="60" height="60" :src="staffImage"></fg-image
        ></span>
      </fg-form-item>
      <fg-form-item label="氏名" class="__short">
        <span
          >{{ staff.lastName }}&nbsp;&nbsp;{{ staff.firstName }}（{{
            staff.lastNameKana
          }}&nbsp;&nbsp;{{ staff.firstNameKana }}）</span
        >
      </fg-form-item>
      <fg-form-item label="cars Manage ID" class="__short">
        <span>{{ staff.staffCode }}</span>
      </fg-form-item>
      <fg-form-item label="職種" class="__short">
        <div class="category-icon">
          <MarkIcon
            v-for="(item, index) in serviceContent"
            v-show="item.checked"
            :key="index"
            :value="true"
            :icon-src="`service-${item.value}`"
            size="small"
          />
        </div>
      </fg-form-item>
      <fg-form-item label="資格" class="__short">
        <fg-tag
          v-for="(item, index) in qualificationList"
          :key="index"
          :value="true"
        >
          {{ item.qualificationName }}
        </fg-tag>
      </fg-form-item>
      <fg-form-item label="電話番号" class="__short">
        <span>{{ staff.phoneNumber }}</span>
      </fg-form-item>
      <fg-form-item label="メールアドレス" class="__long">
        <span>{{ staff.email }}</span>
        <!-- <span class="edit-button">
          <nuxt-link to="">
            <fg-button size="mini" width="63" border prefix-icon="edit"
              >編集</fg-button
            >
          </nuxt-link>
        </span> -->
      </fg-form-item>
      <fg-form-item label="パスワード" class="__long">
        <span>*********</span>
        <!-- <span class="edit-button">
          <nuxt-link to="">
            <fg-button size="mini" width="63" border prefix-icon="edit"
              >編集</fg-button
            >
          </nuxt-link>
        </span> -->
      </fg-form-item>
    </fg-form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import MarkIcon from '~/components/common/mark-icon/index'
export default {
  name: 'UserDropDown',
  components: {
    MarkIcon,
  },
  data() {
    return {
      staff: {},
      staffImage: null,
      occupationCodes: [],
      qualificationList: [],
    }
  },
  computed: {
    ...mapGetters('auth', ['getUserCode']),
    serviceContent() {
      return this.$ui.getBasicData('service_code').map((item) => {
        return {
          ...item,
          checked: this.occupationCodes.includes(item.value),
        }
      })
    },
    carsRole() {
      return this.$ui.getBasicData('cars_role')
    },
  },
  created() {
    this.getStaffProfile()
    this.getStaffOccupation()
    this.getStaffQualification()
  },
  methods: {
    async getStaffProfile() {
      try {
        const res = await this.$api.get(`/v1/account/${this.getUserCode}`)
        this.staff = res || {}
        if (res && res.staffPhoto) {
          this.getStaffImage()
        }
      } catch (err) {
        console.error('err', err)
      }
    },
    // Staff 職種
    async getStaffOccupation() {
      try {
        const res = await this.$api.get(
          `/v1/account/${this.getUserCode}/occupation`
        )
        this.occupationCodes = res.occupationCodes || []
      } catch (err) {
        console.error('err', err)
      }
    },
    // Staff 資格
    async getStaffQualification() {
      try {
        const res = await this.$api.get(
          `/v1/account/${this.getUserCode}/qualification`
        )
        this.qualificationList = res.qualification || []
      } catch (err) {
        console.error('err', err)
      }
    },
    // Staff 写真
    async getStaffImage() {
      try {
        const res = await this.$api.get(
          `/v1/staff/${this.getUserCode}/staffPhoto`
        )
        this.staffImage = res.url || null
      } catch (err) {
        console.error('err', err)
      }
    },
    handleLogout() {
      this.$confirm('ログアウトしますか？', {
        buttons: {
          ok: {
            text: 'ログアウト',
          },
        },
      })
        .then(() => {
          this.$store.dispatch('auth/logout')
        })
        .catch(() => {
          // console.log('cancel')
        })
    },
  },
}
</script>
<style lang="scss">
.user-drop-down {
  color: $--color-primary;
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
      border: 1px $--color-background solid;
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
        color: $--color-primary-active;
      }
    }
  }

  .category-icon {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .fg-form-item.__long {
    font-size: 14px;
    border-top: 1px $--color-background solid;
    padding: 15px 20px;
    margin: 0;
    .edit-button {
      float: right;
    }
  }
  .fg-form-item.__long:nth-child(1) {
    padding: 15px 20px 0;
  }
  .fg-form-item.__short {
    font-size: 14px;
    padding: 5px 0 5px 20px;
    .fg-form-item__label {
      font-weight: normal;
    }
  }
}
</style>
