<template>
  <div class="admin-area-container">
    <div class="admin-area-container_top">
      <div class="admin-area-container_top_list">
        <div
          v-for="(item, i) in area"
          :key="`area-${i}`"
          class="admin-area-container_top_list_item"
        >
          <div class="admin-area-container_top_list_item_area">
            <div class="admin-area-container_top_list_item_area_left">
              <p>エリア名</p>
            </div>
            <div class="admin-area-container_top_list_item_area_right">
              <div
                class="admin-area-container_top_list_item_area_right_inputbox"
              >
                <fg-input v-model="item.value" placeholder="エリア" clearable />
              </div>
              <v-img
                :max-width="24"
                :max-height="24"
                :src="require(`./img/trash-icon.svg`)"
              ></v-img>
            </div>
          </div>
        </div>
      </div>
      <div class="admin-area-container_top_bottom">
        <div class="admin-area-container_top_bottom_add">
          <fg-button circle border icon="plus" :width="'30px'" />
          <div>エリア追加</div>
        </div>
      </div>
    </div>
    <div class="admin-area-container_button">
      <fg-button
        suffix-icon="arrow-right"
        type="primary"
        border
        bold
        width="220"
        >Cancel</fg-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      area: [
        {
          area: '東京エリア',
        },
        {
          area: '奈良エリア',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.admin-area-container {
  &_top {
    max-width: 712px;
    width: 100%;
    background-color: $white-300;
    border-radius: 6px;
    color: $blue-200;
    padding: 0;
    &_list {
      &_item {
        border-radius: 6px;
        &_area {
          width: 100%;
          height: 80px;
          background-color: $white-300;
          display: grid;
          grid-template-columns: 100px 1fr;
          align-items: center;
          border: 1px solid $gray-100;
          padding: 24px 20px;
          &_left {
            p {
              font-size: 12px;
              margin-bottom: 0;
            }
          }
          &_right {
            display: flex;
            align-items: center;
            &_inputbox {
              width: 529px;
              margin-right: 15px;
            }
          }
        }
        &_shop {
          width: 100%;
          display: grid;
          grid-template-columns: 100px 1fr;
          align-items: center;
          padding: 24px 20px;
          &_left {
            p {
              font-size: 12px;
              margin-bottom: 0;
            }
          }
          &_right {
          }
        }
      }
    }
    &_bottom {
      height: 50px;
      background-color: $white-100;
      display: flex;
      align-items: center;
      padding: 10px 23px;
      &_add {
        width: max-content;
        display: flex;
        align-items: center;
        font-size: 12px;
        & > button {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
