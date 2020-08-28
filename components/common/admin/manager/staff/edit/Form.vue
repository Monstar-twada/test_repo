<template>
  <div class="admin-staff-edit-form-container">
    <div class="admin-staff-edit-form-container_body">
      <div class="page-title-wrapper">
        <h2>基本情報</h2>
      </div>
      <fg-form label-width="120px">
        <fg-form-item label="権限">
          <div class="scrollable">
            <div
              v-for="(item, i) in scrollItem"
              :key="`${item.title}-${i}`"
              class="scrollable_item"
            >
              <fg-checkbox v-model="value2"></fg-checkbox>
              <p>{{ item.title }}</p>
            </div>
          </div>
        </fg-form-item>
        <fg-form-item label="写真">
          <fg-avatar :src="form.avatarUrl" size="80" fillet></fg-avatar>
        </fg-form-item>
        <fg-form-item label="氏名">
          <p class="just-text">大倉 秀樹</p>
        </fg-form-item>
        <fg-form-item label="フリガナ">
          <p class="just-text">オオクラ ヒデキ</p>
        </fg-form-item>
        <fg-form-item label="cars Manager ID">
          <p class="just-text">df1s082829</p>
        </fg-form-item>
        <fg-form-item label="権限">
          <fg-radio-group>
            <fg-radio label="スタッフ" value="1"></fg-radio>
            <fg-radio label="マネージャー" value="2"></fg-radio>
            <fg-radio label="オーナー" value="2"></fg-radio>
          </fg-radio-group>
        </fg-form-item>
        <fg-form-item label="職種">
          <div class="job-items">
            <div
              v-for="(item, i) in jobItems"
              :key="`${item}-${i}`"
              class="job-items_item"
            >
              <div class="job-items_item_img">
                <v-img
                  :max-width="24"
                  :max-height="24"
                  :src="require(`./img/${item.icon}-icon-white.svg`)"
                ></v-img>
              </div>
              <div class="job-items_item_text">
                {{ item.text }}
              </div>
            </div>
          </div>
        </fg-form-item>
        <fg-form-item label="資格">
          <fg-tag bold selected>1級小型自動車整備士</fg-tag>
          <fg-tag bold selected>1級大型自動車整備士</fg-tag>
          <fg-tag bold selected>1級二輪自動車整備士</fg-tag>
        </fg-form-item>
        <fg-form-item label="電話番号">
          <p class="just-text">03-3960-7776</p>
        </fg-form-item>
        <fg-form-item label="メールアドレス">
          <p class="just-text">aaaa@cars-enjoy.com</p>
        </fg-form-item>
      </fg-form>
    </div>

    <div class="admin-staff-edit-form-container_bottom">
      <fg-button suffix-icon="arrow-right" border bold width="220px"
        >保存</fg-button
      >
      <fg-button
        suffix-icon="arrow-right"
        type="primary"
        border
        bold
        width="220px"
        white-transparent
        >削除</fg-button
      >
      <fg-button
        suffix-icon="arrow-right"
        type="primary"
        border
        bold
        width="220px"
        white-transparent
        >戻る</fg-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      areaOptions: {},
      scrollItem: [
        {
          title: 'cars足立',
        },
        {
          title: 'cars板橋',
        },
        {
          title: 'cars杉並',
        },
        {
          title: 'cars大宮',
        },
        {
          title: 'cars奈良中央',
        },
        {
          title: '武蔵小杉',
        },
        {
          title: '新宿',
        },
        {
          title: '渋谷',
        },
      ],
      jobItems: [
        {
          icon: 'car',
          text: '購入',
        },
        {
          icon: 'money',
          text: '整備',
        },
        {
          icon: 'wrench',
          text: '整備',
        },
      ],
      form: {
        name: '',
        areaName: '',
        avatarUrl:
          'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2700073372,1831939333&fm=26&gp=0.jpg',
      },
    }
  },
}
</script>

<style lang="scss">
.admin-staff-edit-form-container {
  max-width: 712px;
  width: 100%;
  margin: 0 auto;
  color: $blue-200;
  &_body {
    border-radius: 6px;
    padding: 24px;
    background-color: $white-300;
    .page-title-wrapper {
      h2 {
        font-size: 14px;
      }
    }
    .fg-form-item {
      display: grid;
      grid-template-columns: 147px 1fr;
      align-items: center;
      .just-text {
        margin-bottom: 0;
        font-size: 12px;
      }
      .input-small-column {
        display: flex;
        align-items: center;
        &-width {
          width: 120px;
          margin-right: 15px;
        }
      }
      .service-items {
        display: flex;
        align-items: center;
      }
      .scrollable {
        width: 435px;
        height: 160px;
        overflow-y: scroll;
        border: 1px solid $gray-600;
        border-radius: 4px;
        &_item {
          display: flex;
          align-items: center;
          .fg-checkbox {
            padding-right: 8px;
            margin-right: 0;
          }
          & > p {
            font-size: 12px;
            margin-bottom: 0;
          }
        }
      }

      .job-items {
        display: flex;
        align-items: center;
        &_item {
          cursor: pointer;
          margin-right: 25px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          &_img {
            width: 40px;
            height: 40px;
            background-color: $blue-200;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 6px;
            .v-image {
              width: 100%;
              height: 100%;
            }
          }

          &_text {
            font-size: 12px;
          }
        }
      }
    }
  }
  &_bottom {
    margin-top: 40px;
    height: 170px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
