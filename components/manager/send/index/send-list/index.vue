<template>
  <div class="send-list page mt30 mb30">
    <fg-pagination
      v-model="currentPage"
      class="pagination-link"
      :total="table.total"
      :page-size="table.limit"
    />
    <fg-table :data="table.items">
      <fg-table-column
        show="date"
        label="送客日時"
        cell-class="center"
        :sortable="true"
        width="8%"
      >
        <!-- <template v-slot="item">
          <div class="id">
            <nuxt-link to="/send/detail">{{ item.date }}</nuxt-link>
          </div>
        </template> -->
      </fg-table-column>
      <fg-table-column
        show="customerName"
        label="顧客名"
        cell-class="left"
        :sortable="true"
      >
        <template v-slot="item">
          <div>
            <fg-avatar
              class="user"
              :data="{
                url: '/common/person_default.svg',
                name: `${item.lastName} ${item.firstName}`,
                summary: `（${item.age || '-'}歳）`,
              }"
              text-width="120px"
              circle
              text-flex-direction-column
            ></fg-avatar>
          </div>
        </template>
      </fg-table-column>
      <fg-table-column
        show="carInfo"
        label="依頼対象車"
        cell-class="left"
        :sortable="false"
      >
        <template v-slot="item">
          <div class="carInfo">
            {{ item.carInfo[0] }}
            <br />
            {{ item.carInfo[1] }}
            <div v-if="item.carInfo[2]" class="carInfo--badge">
              {{ item.carInfo[2] }}
            </div>
          </div>
        </template>
      </fg-table-column>
      <fg-table-column
        show="sendInfo"
        label="送客先"
        cell-class="center"
        :sortable="false"
      >
        <template v-slot="item">
          <div class="sendInfo">{{ item.sendInfo }}</div>
        </template>
      </fg-table-column>
      <fg-table-column
        show="progress"
        label="進捗"
        cell-class="center"
        :sortable="false"
      >
        <template v-slot="item">
          <div :class="progressList[item.progressCode][0]">
            {{ progressList[item.progressCode][1] }}
          </div>
        </template>
      </fg-table-column>
      <fg-table-column
        show="projectProgress"
        label="進行中案件"
        cell-class="center"
        :sortable="false"
      >
        <template v-slot="item">
          <ProjectProgress :project="item.project" />
        </template>
      </fg-table-column>
      <fg-table-column
        show="expectedAmount"
        label="獲得予定金額"
        cell-class="center"
        :sortable="false"
      >
        <template v-slot="item">
          <div class="price">¥{{ item.price.toLocaleString() }}</div>
        </template>
      </fg-table-column>
    </fg-table>
    <fg-pagination
      v-model="currentPage"
      class="pagination-link"
      :total="table.total"
      :page-size="table.limit"
    />
  </div>
</template>

<script>
import ProjectProgress from '~/components/manager/send/index/send-list/ProjectProgress.vue'
export default {
  name: 'SendList',
  components: {
    ProjectProgress,
  },
  data: () => ({
    currentPage: 1,
    itemsPerPage: 10,
    table: {
      headers: [
        {
          text: '送客日時',
          value: 'date',
          align: 'center',
          sortable: true,
          width: '8%',
        },
        {
          text: '顧客名',
          value: 'customerName',
          align: 'start',
          sortable: true,
        },
        {
          text: '依頼対象車',
          value: 'carInfo',
          align: 'center',
          sortable: false,
        },
        {
          text: '送客先',
          value: 'sendInfo',
          align: 'center',
          sortable: false,
          width: '15%',
        },
        { text: '進捗', value: 'progress', align: 'center', sortable: false },
        {
          text: '進行中案件',
          value: 'projectProgress',
          align: 'start',
          sortable: false,
        },
        {
          text: '獲得予定金額',
          value: 'expectedAmount',
          align: 'center',
          sortable: false,
        },
      ],
      items: [
        {
          id: '1234567890',
          lastName: '米田',
          firstName: '道治',
          age: 64,
          date: '2020/09/09/ 12:34',
          tel: '0743-66-2840',
          carInfo: ['トヨタ', 'プリウス', ''],
          sendInfo: '株式会社ファーストグループ 車検の速太郎',
          progressCode: 0,
          price: 40000,
          project: ['buy', 'sale', 'inspection'],
        },
        {
          id: '1234567891',
          lastName: '山本',
          firstName: '篤',
          age: 42,
          date: '2020/09/09/ 12:34',
          tel: '0743-66-2840',
          carInfo: ['トヨタ', 'プリウス', ''],
          sendInfo: '株式会社ファーストグループ 車検の速太郎',
          progressCode: 0,
          price: 40000,
          project: ['buy'],
        },
        {
          id: '1234567892',
          lastName: '北中',
          firstName: '真希子',
          age: 36,
          date: '2020/09/09/ 12:34',
          tel: '0743-66-2840',
          carInfo: ['トヨタ', 'プリウス', ''],
          sendInfo: '株式会社ファーストグループ 車検の速太郎',
          progressCode: 1,
          price: 40000,
          project: ['sale', 'inspection'],
        },
        {
          id: '1234567893',
          lastName: '斎藤',
          firstName: '斎藤',
          age: 51,
          date: '2020/09/09/ 12:34',
          tel: '0743-66-2840',
          carInfo: ['トヨタ', 'プリウス', ''],
          sendInfo: '株式会社ファーストグループ 車検の速太郎',
          progressCode: 1,
          price: 40000,
          project: ['inspection', 'buy', 'sale'],
        },
        {
          id: '1234567894',
          lastName: '島田',
          firstName: '一郎',
          age: 47,
          date: '2020/09/09/ 12:34',
          tel: '0743-66-2840',
          carInfo: ['トヨタ', 'プリウス', ''],
          sendInfo: '株式会社ファーストグループ 車検の速太郎',
          progressCode: 1,
          price: 40000,
          project: ['inspection', 'sale'],
        },
        {
          id: '1234567895',
          lastName: '長谷川',
          firstName: '宏美',
          age: 30,
          date: '2020/09/09/ 12:34',
          tel: '0743-66-2840',
          carInfo: ['トヨタ', 'プリウス', ''],
          sendInfo: '株式会社ファーストグループ 車検の速太郎',
          progressCode: 2,
          price: 40000,
          project: ['sale', 'inspection'],
        },
        {
          id: '1234567896',
          lastName: '森下',
          firstName: '千絵',
          age: 29,
          date: '2020/09/09/ 12:34',
          tel: '0743-66-2840',
          carInfo: ['トヨタ', 'プリウス', ''],
          sendInfo: '株式会社ファーストグループ 車検の速太郎',
          progressCode: 2,
          price: 40000,
          project: ['buy', 'sale'],
        },
        {
          id: '1234567897',
          lastName: '加藤',
          firstName: '雅之',
          age: 39,
          date: '2020/09/09/ 12:34',
          tel: '0743-66-2840',
          carInfo: ['トヨタ', 'プリウス', ''],
          sendInfo: '株式会社ファーストグループ 車検の速太郎',
          progressCode: 3,
          price: 40000,
          project: ['sale', 'inspection'],
        },
        {
          id: '1234567898',
          lastName: '平岡',
          firstName: '和正',
          age: 56,
          date: '2020/09/09/ 12:34',
          tel: '0743-66-2840',
          carInfo: ['トヨタ', 'プリウス', ''],
          sendInfo: '株式会社ファーストグループ 車検の速太郎',
          progressCode: 3,
          price: 40000,
          project: ['inspection'],
        },
        {
          id: '1234567899',
          lastName: '鈴木',
          firstName: '翔子',
          age: 46,
          date: '2020/09/09/ 12:34',
          tel: '0743-66-2840',
          carInfo: ['トヨタ', 'プリウス', ''],
          sendInfo: '株式会社ファーストグループ 車検の速太郎',
          progressCode: 3,
          price: 40000,
          project: ['sale', 'inspection', 'buy'],
        },
      ],
      limit: 10,
    },
    progressList: [
      ['not-started', '未着手'],
      ['proposing', '提案中'],
      ['working', '作業中'],
      ['finish', '見送済'],
    ],
  }),
  methods: {
    updatePageNumber(newPage) {
      this.currentPage = newPage
    },
  },
}
</script>
<style lang="scss">
.send-list {
  .v-application--is-ltr
    .send-list
    .v-data-table
    .v-data-table__wrapper
    table
    thead
    tr
    th {
    text-align: center;
  }
}
.send-list {
  .v-data-table {
    table {
      border-radius: 6px !important;
      // border-collapse: separate !important;
      // border-spacing: 0 1em !important;
      thead {
        tr {
          th {
            font-size: 12px;
            font-weight: normal;
            height: 40px !important;
            color: $--color-primary !important;
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
                background: url('./img/table-sort-arrow-normal.svg') no-repeat 0
                  0;
                transform: rotate(180deg);
              }
              &:after {
                content: '';
                position: absolute;
                top: calc(50% + 2px);
                right: -10px;
                width: 7px;
                height: 4px;
                background: url('./img/table-sort-arrow-normal.svg') no-repeat 0
                  0;
              }
            }
          }
        }
      }
      tbody {
        tr {
          height: 70px !important;
          &:nth-child(even) {
            background-color: $--color-background;
          }
          td {
            padding: 0 10px !important;
            color: $--color-primary !important;
            border-bottom: none !important;
            font-size: 12px !important;
            height: 70px !important;
            position: relative;
            &:not(:last-child):after {
              content: '';
              position: absolute;
              width: 1px;
              height: 70%;
              top: 15%;
              right: 0;
              // background: $gray-100;
            }
            .carInfo {
              position: relative;
              width: max-content;
              text-align: left;
              &--badge {
                position: absolute;
                right: 0;
                bottom: 0;
                padding: 1px 8px;
                border-radius: 10px;
                background-color: $--color-primary;
                font-size: 12px;
                color: $--color-white;
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
.send-list {
  width: 100%;
  .user {
    margin-left: 20px;
  }

  .not-started {
    // color: $green-100;
  }

  .proposing {
    color: $--color-primary;
  }
  .working {
    // color: $pink-100;
  }
  .finish {
    color: #cccccc;
  }
}
</style>
