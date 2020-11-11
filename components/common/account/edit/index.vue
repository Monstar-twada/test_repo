<template>
  <div class="signin-index-page-wrapper">
    <Header title="アカウント情報" />
    <div class="signin-index-form-wrapper">
      <fg-form label-width="140px">
        <fg-form-item label="会社名">
          <p>株式会社ファーストグループ</p>
        </fg-form-item>
        <fg-form-item label="お客様の写真">
          <fg-image-processor
            width="80px"
            height="80px"
            :options="{ width: 720, height: 720 }"
            url
            @change="(res) => avatarChange(res, 'staffPhoto')"
          ></fg-image-processor>
        </fg-form-item>
        <fg-form-item label="氏名">
          <fg-row gutter="20" type="flex">
            <fg-col span="12">
              <fg-input v-model="staff.lastName" placeholder="姓"></fg-input>
            </fg-col>
            <fg-col span="12">
              <fg-input v-model="staff.firstName" placeholder="名"></fg-input>
            </fg-col>
          </fg-row>
        </fg-form-item>
        <fg-form-item label="フリガナ">
          <fg-row gutter="20" type="flex">
            <fg-col span="12">
              <fg-input
                v-model="staff.lastNameKana"
                placeholder="セイ"
              ></fg-input>
            </fg-col>
            <fg-col span="12">
              <fg-input
                v-model="staff.firstNameKana"
                placeholder="メイ"
              ></fg-input>
            </fg-col>
          </fg-row>
        </fg-form-item>
        <fg-form-item label="cars Manager ID">
          <p>{{ staff.staffCode }}</p>
        </fg-form-item>
        <fg-form-item label="権限">
          <p>{{ carsRole[staff.role] }}</p>
        </fg-form-item>
        <fg-form-item label="職種">
          <div class="signin-index-form-items">
            <div v-for="(item, i) in serviceContent" :key="`service-${i}`">
              <MarkIcon
                v-model="item.checked"
                :icon-src="`service-${item.value}`"
                :text="item.text"
              />
            </div>
          </div>
        </fg-form-item>
        <fg-form-item label="資格">
          <template v-for="(item, i) in qualificationList">
            <fg-row :key="i" gutter="20" type="flex" class="mb10">
              <fg-col span="21">
                <fg-input
                  v-model="item.qualificationName"
                  placeholder="例）1級小型自動車整備士"
                ></fg-input>
              </fg-col>
              <fg-col span="3">
                <fg-button
                  circle
                  border
                  icon="less"
                  width="30px"
                  @click="delItem(i)"
                />
              </fg-col>
            </fg-row>
          </template>
          <fg-row gutter="20">
            <fg-col span="3">
              <fg-button
                circle
                border
                icon="plus"
                width="30px"
                @click="addItem"
              />
            </fg-col>
          </fg-row>
        </fg-form-item>
        <fg-form-item label="生年月日">
          <fg-calendar
            v-model="staff.birthday"
            width="160px"
            placeholder="1989/1/1"
          ></fg-calendar>
        </fg-form-item>
        <fg-form-item label="電話番号">
          <fg-input
            v-model="staff.phoneNumber"
            placeholder="03-3960-7776"
          ></fg-input>
        </fg-form-item>
      </fg-form>
      <div class="signin-index-submit-button">
        <fg-button
          type="primary"
          suffix-icon="arrow-right"
          bold
          width="220px"
          @click="saveChange"
          >更新</fg-button
        >
        <fg-button
          suffix-icon="arrow-right"
          type="primary"
          border
          bold
          width="220px"
          >戻る</fg-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '~/components/common/account/common/Header'
import MarkIcon from '~/components/common/mark-icon/index'
const DEF_QUALIFICATION = {
  qualificationName: '',
}
export default {
  components: {
    Header,
    MarkIcon,
  },
  data() {
    return {
      staff: {},
      staffCode: '',
      qualification: [],
      qualificationList: [],
      occupationSelected: [],
      promises: [],
    }
  },
  computed: {
    ...mapGetters('auth', ['getUserCode']),
    serviceContent() {
      return this.$ui.getBasicData('service_code').map((item) => {
        return {
          ...item,
          checked: this.occupationSelected.includes(item.value),
        }
      })
    },
    carsRole() {
      return this.$ui.getBasicData('cars_role')
    },
  },
  created() {
    this.getStaffProfile().then(() => {
      Promise.all([
        this.getStaffOccupation(),
        this.getStaffQualification(),
      ]).then(() => {
        this.initList()
      })
    })
  },
  methods: {
    async getStaffProfile() {
      try {
        const res = await this.$api.get(`/v1/account/${this.getUserCode}`)
        this.staff = res || {}
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
        this.occupationSelected = Array.isArray(res.carLifeCodes)
          ? res.occupationCodes
          : []
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

        this.qualification = res.qualificationName || {}
      } catch (err) {
        console.error('err', err)
      }
    },

    avatarChange(res, type) {
      if (!res.data) {
        this.deleteFile(type)
      }
      this.$api
        .upload(res)
        .then((data) => {
          this.deleteFile(type)
          this.form[type] = data.id
        })
        .catch((err) => {
          this.$alert(err.message)
        })
    },
    initList() {
      const val = this.qualification
      this.qualificationList =
        Array.isArray(val) && val.length > 0
          ? [...val]
          : [
              {
                ...DEF_QUALIFICATION,
              },
            ]
    },
    addItem() {
      if (this.qualificationList.length >= 3) return null
      this.qualificationList.push({
        ...DEF_QUALIFICATION,
      })
    },
    delItem(index) {
      // 資格を削除
      if (this.qualificationList[index].id) {
        const deletePromise = this.$api.delete('url')
        this.promises.push(deletePromise)
      }
      this.qualificationList.splice(index, 1)
    },

    // 変更データ更新
    async saveChange() {
      this.updateStaffQualification()
      const {
        id,
        companyCode,
        staffCode,
        companyName,
        role,
        email,
        ...params
      } = this.staff
      await this.$api
        .put(`/v1/customer/${this.getUserCode}`, { account: { ...params } })
        .then((res) => {
          this.updateStaffOccupation()
          console.log('res', res)
        })
        .catch((err) => {
          console.error(err)
        })
    },

    // 職種データ更新
    async updateStaffOccupation() {
      await this.$api
        .put(
          `/v1/customer/${this.getUserCode}//v1/account/{staffCode}/occupation`,
          { account: { occupationCodes: [] } }
        )
        .then((res) => {
          console.log('res', res)
        })
        .catch((err) => {
          console.error(err)
        })
    },

    // 資格データ更新
    async updateStaffQualification() {
      console.log('this.qualificationList', this.qualificationList)
      this.qualificationList.forEach((item) => {
        if (item.id) {
          this.promises.push(
            this.$api.put(
              `/v1/account/${this.getUserCode}/qualification/${item.id}`,
              {
                qualificationName: item.qualificationName,
              }
            )
          )
        } else {
          this.promises.push(
            this.$api.post(`/v1/account/${this.getUserCode}/qualification/`, {
              qualificationName: item.qualificationName,
            })
          )
        }
      })

      await Promise.all(this.promise).then((res) => {
        console.log(res)
      })
    },
  },
}
</script>

<style lang="scss">
.signin-index-page-wrapper {
  height: 100%;
  .signin-index-form-wrapper {
    .fg-form {
      padding: 20px 40px;
    }
    .signin-index-form-items {
      display: flex;
      justify-content: space-between;
      .signin-index-form-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 25px;
        &_img {
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: $--color-primary;
          border-radius: 6px;
          .fg-avatar {
            width: 25px;
          }
        }
      }
    }
  }
  .signin-index-submit-button {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > button {
      margin-bottom: 20px;
    }
  }
}
</style>
