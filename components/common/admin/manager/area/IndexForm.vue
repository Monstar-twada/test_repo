<template>
  <div class="adminAreaContainer">
    <div
      v-for="(item, i) in area"
      :key="`area-${i}`"
      class="adminAreaContainer_item"
    >
      <div class="adminAreaContainer_item_area">
        <div class="adminAreaContainer_item_area_left">
          <p>エリア名</p>
        </div>
        <div class="adminAreaContainer_item_area_right">
          <input placeholder="エリア" :value="item.area" />
          <v-img
            :max-width="24"
            :max-height="24"
            :src="require(`~/static/admin/trash_icon.svg`)"
          ></v-img>
        </div>
      </div>
      <div class="adminAreaContainer_item_shop">
        <div class="adminAreaContainer_item_shop_left">
          <p>店舗</p>
        </div>
        <div class="adminAreaContainer_item_shop_right">
          <div class="adminAreaContainer_item_shop_right_select"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Select from '~/components/common/Select.vue'
export default {
  components: {
    // Select,
  },
  data() {
    return {
      dropdown: ['cars足立', 'cars杉並', 'cars板橋', 'cars大宮'],
      area: [
        {
          area: '東京エリア',
          items: [
            {
              value: 'cars足立',
            },
            {
              value: 'cars杉並',
            },
            {
              value: 'cars板橋',
            },
            {
              value: 'cars大宮',
            },
          ],
        },
        {
          area: '奈良エリア',
          items: [
            {
              value: 'cars足立',
            },
            {
              value: 'cars杉並',
            },
            {
              value: 'cars板橋',
            },
            {
              value: 'cars大宮',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.adminAreaContainer {
  max-width: 712px;
  width: 100%;
  background-color: $white-300;
  border-radius: 6px;
  color: $blue-200;
  padding: 0;
  &_item {
    &_area {
      width: 100%;
      height: 80px;
      background-color: $white-100;
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
        input {
          font-size: 12px;
          color: $blue-100;
          background-color: $white-300;
          width: 529px;
          height: 40px;
          border-radius: 4px;
          padding: 13px 15px;
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
</style>
