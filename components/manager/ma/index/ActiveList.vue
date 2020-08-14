<template>
  <div class="ma-list">
    <v-data-table
      :headers="headers"
      :items="itemList.results"
      :items-per-page="itemList.limit"
      :page.sync="currentPage"
    >
      <template v-slot:item.list_count="{ item }">
        <p>{{ item.list_count.toLocaleString() }}</p>
      </template>
      <template v-slot:item.progress="{ item }">
        <div>- {{ item.goal_count }}コール済 ({{ item.goal_percent }})</div>
      </template>
      <template v-slot:item.detail="{ item }">
        <ul class="detail">
          <li>車検入庫: {{ item.warehouse }}</li>
          <li>本予約: {{ item.reserve }}</li>
          <li>仮予約: {{ item.tentative_reserve }}</li>
          <li>買換意向: {{ item.intention_to_replace }}</li>
          <li>納車済: {{ item.delivered }}</li>
        </ul>
      </template>
      <!-- <template v-slot:item.operation="{ item }">
        <fg-button
          v-if="item.list_count != 0"
          type="primary"
          suffix-icon="arrow-right"
          round
          bold
          >対象者一覧</fg-button
        >
      </template>-->
    </v-data-table>
    <fg-button type="primary" suffix-icon="arrow-right" round bold
      >対象者一覧</fg-button
    >
    <!-- <fg-input
      v-model="inputValue2"
      placeholder="入力ください"
      clearable
      size="medium"
    /> -->
  </div>
</template>
<script>
export default {
  name: 'ActiveList',
  components: {},
  props: {
    value: {
      type: Number,
      default: 1,
    },
  },
  data: () => ({
    inputValue2: '',
    headers: [
      {
        text: '車検',
        align: 'center',
        value: 'vehicle_inspection',
        width: '15%',
        sortable: false,
      },
      {
        text: '対象者',
        value: 'list_count',
        align: 'center',
        width: '15%',
        sortable: false,
      },
      {
        text: '進捗',
        value: 'progress',
        align: 'center',
        width: '15%',
        sortable: false,
      },
      {
        text: '内訳',
        value: 'detail',
        align: 'center',
        width: '40%',
        sortable: false,
      },
      {
        text: '',
        value: 'operation',
        align: 'center',
        sortable: false,
        width: '15%',
      },
    ],
    itemList: {
      results: [
        {
          vehicle_inspection: '1月満期(2021)',
          list_count: 1415,
          goal_count: '34',
          goal_percent: '40%',
          warehouse: '83',
          reserve: '32',
          tentative_reserve: '33',
          intention_to_replace: '11',
          delivered: '3',
        },
        {
          vehicle_inspection: '1月満期(2021)',
          list_count: 0,
          goal_count: '34',
          goal_percent: '40%',
          warehouse: '83',
          reserve: '32',
          tentative_reserve: '33',
          intention_to_replace: '11',
          delivered: '3',
        },
      ],
      total: 7,
      limit: 7,
    },
    currentPage: 1,
  }),
  watch: {
    value(val) {
      this.currentPage = val
    },
    currentPage(val) {
      this.$emit('input', val)
    },
  },
}
</script>

<style lang="scss">
.v-application--is-ltr
  .ma-list
  .v-data-table
  .v-data-table__wrapper
  table
  thead
  tr
  th {
  text-align: center;
}
.ma-list {
  .v-data-table {
    table {
      thead {
        tr {
          th {
            font-size: 12px;
            font-weight: normal;
            height: 40px !important;
            color: $blue-200 !important;
            padding: 0 2px !important;
            i {
              display: none;
            }
          }
          th.sortable {
            span {
              position: relative;
              &:before {
                content: '';
                position: absolute;
                top: calc(50% - 4px);
                right: -10px;
                width: 7px;
                height: 4px;
                //background: url('./img/table-sort-arrow-normal.svg') no-repeat 0 0;
                transform: rotate(180deg);
              }
              &:after {
                content: '';
                position: absolute;
                top: calc(50% + 2px);
                right: -10px;
                width: 7px;
                height: 4px;
                //background: url('./img/table-sort-arrow-normal.svg') no-repeat 0 0;
              }
            }
          }
          th.asc {
            span {
              font-weight: bold;
              &:before {
                //background: url('./img/table-sort-arrow.svg');
              }
            }
          }
          th.desc {
            span {
              font-weight: bold;
              &:after {
                //background: url('./img/table-sort-arrow.svg');
              }
            }
          }
        }
      }
      tbody {
        tr {
          font-size: 12px;
          height: 70px !important;
          color: $blue-200;
          cursor: pointer;
          td {
            padding: 0 5px !important;
            font-size: 12px !important;
            position: relative;
            font-weight: 300;
            &:not(:last-child):after {
              content: '';
              position: absolute;
              width: 1px;
              height: 70%;
              top: 15%;
              right: 0;
              background: $gray-100;
            }
          }
        }
        tr:nth-child(even) {
          background-color: $white-100;
        }
      }
    }
  }

  .theme--light.v-data-table .v-data-table__empty-wrapper {
    color: $blue-200 !important;
  }

  .theme--light.v-data-table
    .v-data-table__wrapper
    table
    tbody
    tr:not(:last-child)
    td:not(.v-data-table__mobile-row) {
    border-bottom: none !important;
  }
  .theme--light.v-icon {
    color: $blue-300 !important;
  }
}
</style>
<style lang="scss" scoped>
.id a {
  text-decoration: none;
}
.user {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  &__name {
    text-align: left;
    span {
      font-size: 10px;
      font-weight: bold;
    }
  }
}

.address,
.car,
.tel {
  h4 {
    font-weight: 400;
  }
}
.tel {
  .fixed-tel:before {
    //content: url('./img/fixed-tel.svg');
    display: inline-block;
    width: 11px;
    height: 11px;
    margin-right: 5px;
  }

  .mobile-tel:before {
    //content: url('./img/mobile-tel.svg');
    display: inline-block;
    width: 8px;
    height: 11px;
    margin: 0 5px 0 1px;
  }
}
</style>
