<template>
  <div class="matchingContainer">
    <h2 class="matchingContainer__title">マッチング提案車両</h2>
    <v-simple-table
      fixed-header
      height="max-content"
      class="matchingContainer__table"
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th
              v-for="(head, i) in table.headers"
              :key="`thead-${i}`"
              class="text-center"
            >
              {{ head.text }}
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, i) in table.items"
            :key="`item-${i}`"
            class="text-center"
          >
            <td class="table--id">
              <nuxt-link to="/matter/detail">{{ item.id }}</nuxt-link>
            </td>
            <td class="table--carInfo">
              {{ item.carInfo[0] }}<br />{{ item.carInfo[1] }}
            </td>
            <td class="table--price">¥{{ numberWithCommas(item.price) }}</td>
            <td class="table--carPlace">
              {{ item.carPlace[0] }}<br />{{ item.carPlace[1] }}
            </td>
            <td class="table--purchaseTerm">
              {{ item.purchaseTerm }}
            </td>
            <td class="table--remove">
              <div class="remove--btn" @click="removeItem(i)">
                <v-img
                  :max-width="12"
                  :max-height="12"
                  :src="require(`./img/trash_icon_nobg.svg`)"
                ></v-img>
                削除
              </div>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'MatchingContainer',
  data: () => ({
    table: {
      headers: [
        { text: '案件ID', sortable: false, value: 'col1' },
        { text: '車両情報', sortable: false, value: 'col2' },
        { text: '希望価格', sortable: false, value: 'col3' },
        { text: '車両保管場所', sortable: false, value: 'col4' },
        { text: '仕入れ期間', sortable: false, value: 'col5' },
      ],
      items: [
        {
          id: 'AT-123',
          carInfo: ['BMW Z4', 'sDrive201'],
          price: '4360000',
          carPlace: ['東京都渋谷区', '渋谷2丁目'],
          purchaseTerm: '60日',
        },
        {
          id: 'AT-123',
          carInfo: ['BMW Z4', 'sDrive201'],
          price: '4360000',
          carPlace: ['東京都渋谷区', '渋谷2丁目'],
          purchaseTerm: '60日',
        },
      ],
    },
  }),
  methods: {
    numberWithCommas(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    removeItem(index) {
      const result = this.table.items.filter((item, i) => i !== index)
      this.table.items = [...result]
    },
  },
}
</script>
<style lang="scss">
.matchingContainer__table {
  table {
    border-collapse: separate !important;
    border-spacing: 0 1em !important;
    thead {
      height: 30px;
      tr {
        th {
          border-bottom: none !important;
          background-color: $white-100 !important;
          color: $blue-200 !important;
          font-weight: normal;
        }
      }
    }
    tbody {
      border-top: none;
      tr {
        margin: 13px 0 !important;
        td {
          color: $blue-200 !important;
          font-size: 12px !important;
          border-right: 1px solid $gray-100;
          padding: 10px 15px !important;
          border-bottom: none !important;
          &.table--id {
            a {
              text-decoration: none !important;
            }
          }
          &.table--price {
            font-size: 14px !important;
            font-weight: bold;
          }
          &.table--remove {
            .remove--btn {
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 16px;
              border: solid 1px #dfe6f0;
              padding: 3px 3px;
              cursor: pointer;
              .v-image {
                margin-right: 8px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.matchingContainer {
  width: 100%;
  position: relative;
  &__title {
    padding: 25px 20px;
    font-size: 18px;
    font-weight: bold;
    color: $blue-200;
  }
}
</style>
