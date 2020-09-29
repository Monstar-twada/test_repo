<template>
  <div class="send-detail-customer-info">
    <ColumnTitle title="顧客情報" border />
    <fg-row getter="20" class="send-detail-customer-info-row">
      <fg-col span="6">
        <div class="customer-profile">
          <img src="/common/person_default.svg" width="80" />
          <div class="cuntomer-profile-info">
            <h4>
              {{ profile.lastName }} {{ profile.firstName }}
              <span>（{{ profile.age || '-' }}歳）</span>
            </h4>
            <h5>{{ profile.lastNameKana }} {{ profile.firstNameKana }}</h5>
          </div>
        </div>
      </fg-col>
      <fg-col span="18">
        <SubTitle sub-title="基本情報" />
        <fg-col span="12" align-self="start" class="right-border p20 pb-0">
          <TextContent label="住所" is-small-sub-label>
            〒150-0002 <br />東京都渋谷区渋谷2丁目
          </TextContent>
          <TextContent label="メール" is-small-sub-label>
            myoneda@gmail.com
          </TextContent>
        </fg-col>
        <fg-col span="12" align-self="start" class="right-border p20 pb-0">
          <TextContent label="携帯電話" is-small-sub-label>
            080-1234-1234
          </TextContent>
          <TextContent label="電話番号" is-small-sub-label>
            03–2587-0009
          </TextContent>
        </fg-col>
      </fg-col>
    </fg-row>
  </div>
</template>

<script>
import ColumnTitle from '~/components/common/customer/common/ColumnTitle'
import SubTitle from '~/components/common/customer/common/SubTitle.vue'
import TextContent from '~/components/common/customer/common/TextContent.vue'

export default {
  name: 'DetailContainer',
  components: {
    ColumnTitle,
    SubTitle,
    TextContent,
  },
  data: () => ({
    profile: {
      lastName: '米田',
      firstName: '道春',
      lastNameKana: 'ヨネダ',
      firstNameKana: 'ミチハル',
      age: 31,
    },
    row3: {
      title: '依頼詳細',
      value:
        '乗り換えを希望していて、コンパクトカーまたはSUVを考えています。\n最寄りのcars杉並には来店出来るそうです。（土日）',
      placeholder: '',
    },
    row4: {
      title: '対応状況',
      value: '6月2日14時に電話しましたが、出られませんでした。留守電に伝言。',
      placeholder: '',
    },
    row5: {
      selectedValue: 0,
      placeholder: '送客中',
      list: [
        {
          value: 0,
          text: '送客中',
        },
        {
          value: 1,
          text: '対応中',
        },
        {
          value: 2,
          text: '成約済',
        },
        {
          value: 3,
          text: '見送済',
        },
      ],
    },
  }),
}
</script>

<style lang="scss" scoped>
.send-detail-customer-info {
  width: 100%;
  background-color: $--color-white;
  border-radius: 6px;
  color: $--color-primary;
  height: 230px;

  &-row {
    padding: 10px 20px;
  }

  .customer-profile {
    margin: 10px 20px;
    display: flex;
    justify-content: flex-start;
    align-items: top;
    margin-top: 10px;
    flex: 0 0 90;

    &-info {
      margin-left: 20px;
      h4 {
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        span {
          font-size: 10px;
        }
      }

      h5 {
        font-size: 10px;
        font-weight: normal;
      }
    }
  }
}
</style>
