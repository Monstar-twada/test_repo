<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="send.svg"
      :page="page"
      icon-width="30"
    />
    <div class="context">
      <h2>依頼内容確認</h2>
      <fg-form
        ref="form"
        :model="form"
        label-width="150px"
        class="context-form"
      >
        <fg-form-item label="対象顧客" class="context-form-item">
          <fg-row>
            <fg-col span="12">
              <div class="form11-profile">
                <img src="/common/person_default.svg" width="60" />
                <div class="form11-profile-info">
                  <h4>
                    {{ profile.lastName }} {{ profile.firstName }}
                    <span>（{{ profile.age || '-' }}歳）</span>
                  </h4>
                  <h4>
                    {{ profile.lastNameKana }} {{ profile.firstNameKana }}
                  </h4>
                </div>
              </div>
              <!-- <fg-avatar
                class="form11-profile"
                :data="{
                  url: '/common/person_default.svg',
                  name: `${profile.lastName} ${profile.firstName}`,
                  subName: `（${profile.age || '-'}歳）`,
                  summary: `${profile.lastNameKana} ${profile.firstNameKana}`,
                }"
                text-width="140px"
                circle
                text-flex-direction-column
              ></fg-avatar>-->
            </fg-col>
            <fg-col span="12">
              <div class="form11-car">
                <img src="./img/car.png" />
                <div class="form11-car-info">
                  <h4>{{ car.maker }}</h4>
                  <h4>{{ car.type }}</h4>
                </div>
              </div>
            </fg-col>
          </fg-row>
        </fg-form-item>

        <fg-form-item label="依頼種別" class="context-form-item">
          <fg-row gutter="20">
            <fg-col v-for="(item, i) in project" :key="i" span="6">
              <img :src="require(`./img/${item.iconSrc}.svg`)" />
            </fg-col>
          </fg-row>
        </fg-form-item>

        <fg-form-item label="依頼詳細">
          <span
            >乗り換えを希望していて、コンパクトカーまたはSUVを考えています。最寄りのcars杉並には来店出来るそうです。（土日）</span
          >
        </fg-form-item>

        <fg-form-item label="銀行口座">
          <span>〇〇銀行 〇〇支店 普通 38918908 ｶ)ｵﾘｴﾝﾄｺｰﾎﾟ）</span>
        </fg-form-item>
      </fg-form>
    </div>
    <div class="footer-button-wrapper">
      <fg-button suffix-icon="arrow-right" border bold width="240px"
        >次へ</fg-button
      >
      <fg-button
        suffix-icon="arrow-right"
        white-transparent
        round
        bold
        width="240px"
        >戻る</fg-button
      >
    </div>
  </div>
</template>
<script>
import Breadcrumbs from '~/components/common/breadcrumbs/index.vue'
export default {
  components: {
    Breadcrumbs,
  },
  props: {
    form: {
      type: Object,
      default: () => {
        return {
          lastName: '',
          firstName: '',
        }
      },
    },
  },
  data() {
    return {
      page: '送客',
      breadcrumbs: [
        {
          text: '送客',
          href: '',
        },
        {
          text: '送客依頼フォーム',
          href: '',
        },
      ],
      genders: this.$ui.getBasicData('sex'),
      profile: {
        lastName: '米田',
        firstName: '道春',
        lastNameKana: 'ヨネダ',
        firstNameKana: 'ミチハル',
        age: 31,
      },
      car: {
        maker: 'トヨタ',
        type: 'プリウス',
      },
      project: [
        {
          iconSrc: 'buy',
        },
        {
          iconSrc: 'sale',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.context {
  width: 1000px;
  height: 650px;
  margin: 0 auto;
  background: $--color-white;
  border-radius: 6px;
  color: $--color-primary;

  h2 {
    width: 100%;
    height: 54px;
    line-height: 54px;
    border-bottom: 1px $--color-border solid;
    padding-left: 20px;
  }

  &-form {
    width: 60%;
    margin: 40px auto 0;

    &-item {
      padding: 40px 0;
      border-bottom: 1px $--color-border solid;

      .form11-profile {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 10px;
        flex: 0 0 70px;

        h4 {
          height: 20px;
          line-height: 20px;
        }
      }

      .form11-car {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        h4 {
          height: 20px;
          line-height: 20px;
        }
      }
    }
  }
}
.footer-button-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin-top: 10px;
  .fg-button {
    display: flex;
    margin-top: 20px;
  }
}
</style>
