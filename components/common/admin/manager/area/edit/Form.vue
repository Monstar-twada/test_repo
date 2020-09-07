<template>
  <div class="admin-area-edit-form-container">
    <div class="admin-area-edit-form-container_body">
      <div class="page-title-wrapper">
        <h2>基本情報</h2>
      </div>
      <fg-form label-width="150px">
        <fg-form-item label="店舗名">
          <fg-input placeholder="cars足立"></fg-input>
        </fg-form-item>
        <fg-form-item label="エリア名">
          <fg-select
            v-model="form.areaName"
            :options="areaItems"
            width="160px"
            placeholder="東京エリア"
            item-prefix="- "
          />
        </fg-form-item>
        <fg-form-item label="郵便番号">
          <fg-input placeholder="1200011" width="160px"></fg-input>
        </fg-form-item>
        <fg-form-item label="都道府県">
          <fg-select
            v-model="form.areaName"
            :options="areaItems"
            width="160px"
            placeholder="東京都"
            item-prefix="- "
          />
        </fg-form-item>
        <fg-form-item label="市区町村">
          <fg-input placeholder="足立区中央町"></fg-input>
        </fg-form-item>
        <fg-form-item label="番地など">
          <fg-input placeholder="1-20-1"></fg-input>
        </fg-form-item>
        <fg-form-item label="建物名・部屋番号など">
          <fg-input placeholder=""></fg-input>
        </fg-form-item>
        <fg-form-item label="電話番号">
          <fg-input placeholder="0120-161-135"></fg-input>
        </fg-form-item>
        <fg-form-item label="メールアドレス">
          <fg-input placeholder="aaaa@cars-enjoy.com"></fg-input>
        </fg-form-item>
        <fg-form-item label="導入サービス">
          <div class="service-items">
            <div
              v-for="(item, i) in serviceItems"
              :key="`${item}-${i}`"
              class="service-items_item"
            >
              <div class="service-items_item_img">
                <v-img
                  :max-width="24"
                  :max-height="24"
                  :src="require(`./img/${item.icon}-icon-white.svg`)"
                ></v-img>
              </div>
              <div class="service-items_item_text">
                {{ item.text }}
              </div>
            </div>
          </div>
        </fg-form-item>
      </fg-form>
    </div>

    <div class="admin-area-edit-form-container_bottom">
      <fg-button suffix-icon="arrow-right" border bold width="220px"
        >保存</fg-button
      >
      <fg-button width="220px" suffix-icon="arrow-right" bold white-transparent
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
      serviceItems: [
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
        {
          icon: 'hammer',
          text: '鈑金',
        },
        {
          icon: 'heart',
          text: '保険',
        },
        {
          icon: 'tire',
          text: 'アクセサリー',
        },
        {
          icon: 'paper',
          text: '車検',
        },
      ],
      form: {
        name: '',
        areaName: '',
      },
    }
  },
}
</script>

<style lang="scss">
.admin-area-edit-form-container {
  max-width: 712px;
  width: 100%;
  margin: 0 auto;
  color: $--color-primary;
  &_body {
    border-radius: 6px;
    padding: 24px;
    background-color: $--color-white;
    .page-title-wrapper {
      margin-bottom: 20px;
      h2 {
        font-size: 14px;
      }
    }
    .fg-form-item {
      .input-small-width {
        width: 160px;
      }
      .service-items {
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
            background-color: $--color-primary;
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
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
