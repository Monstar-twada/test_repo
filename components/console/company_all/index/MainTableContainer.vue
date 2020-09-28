<template>
  <div class="company_all-main-table-container">
    <div class="company_all-main-table-container__title">
      <h1>契約企業一覧</h1>
      <span>
        <p>企業追加</p>
        <fg-button circle type="primary" icon="plus" />
      </span>
    </div>
    <div>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :single-expand="singleExpand"
        :expanded.sync="expanded"
        item-key="companyName.id"
        show-expand
        hide-default-footer
        class="company_all-main-table-container__table"
      >
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length" class="sub-table__start">
            <v-data-table
              :headers="subHeaders"
              :items="item.subForm.subDesserts"
              item-key="carManagerId"
              hide-default-footer
              class="sub-table__start__table"
            >
              <template v-slot:item.carManagerId="{ item }">
                <p class="carManagerId">{{ item.carManagerId }}</p>
              </template>
              <template v-slot:item.name="{ item }">
                <fg-avatar
                  :data="{
                    url:
                      'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2700073372,1831939333&fm=26&gp=0.jpg',
                    name: `${item.name.lastName} ${item.name.firstName}`,
                  }"
                  text-flex-direction-column
                  text-summary-no-offset
                ></fg-avatar>
              </template>
              <template v-slot:item.role="{ item }">
                <p>{{ item.role }}</p>
              </template>
              <template v-slot:item.shopName="{ item }">
                <p>{{ item.shopName }}</p>
              </template>
              <template v-slot:item.tel="{ item }">
                <p>{{ item.tel }}</p>
              </template>
              <template v-slot:item.email="{ item }">
                <p>{{ item.email }}</p>
              </template>
            </v-data-table>
          </td>
        </template>
        <template v-slot:item.companyName="{ item }">
          <p>{{ item.companyName.name }}</p>
          <p class="company-id">Company ID: {{ item.companyName.id }}</p>
        </template>
        <template v-slot:item.address="{ item }">
          <p>〒{{ item.address.zipcode }}</p>
          <p>{{ item.address.address }}</p>
        </template>
        <template v-slot:item.info="{ item }">
          <dd>
            <fg-icon name="mobile" color="$color.primary" />
            {{ item.info.tel }}
          </dd>
          <dd>
            <fg-icon name="email" color="$color.primary" />
            {{ item.info.email }}
          </dd>
        </template>
        <template v-slot:item.plan="{ item }">
          <p>{{ item.plan }}</p>
        </template>
        <template v-slot:item.representative="{ item }">
          <fg-avatar
            :data="{
              url:
                'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2700073372,1831939333&fm=26&gp=0.jpg',
              name: `${item.representative.lastName} ${item.representative.firstName}`,
            }"
            text-flex-direction-column
            text-summary-no-offset
          ></fg-avatar>
        </template>
        <template v-slot:item.num="{ item }">
          <p class="ta-center">{{ item.num }}</p>
        </template>
        <template v-slot:item.shopList="{}">
          <fg-button width="83" border size="mini" prefix-icon="shop">
            店舗一覧
          </fg-button>
        </template>
        <template v-slot:item.edit="{}">
          <fg-button width="63" border size="mini" prefix-icon="edit">
            編集
          </fg-button>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expanded: [],
      singleExpand: true,
      headers: [
        { text: '', value: 'data-table-expand', sortable: false },
        {
          text: '企業名',
          value: 'companyName',
          align: 'start',
          sortable: false,
        },
        { text: '所在地', value: 'address', sortable: false },
        { text: '連絡先情報', value: 'info', sortable: false },
        { text: '利用プラン', value: 'plan', sortable: false },
        { text: '代表者', value: 'representative', sortable: false },
        {
          text: 'アカウント数',
          value: 'num',
          sortable: false,
        },
        { text: '', value: 'shopList', sortable: false, width: '85px' },
        { text: '', value: 'edit', sortable: false, width: '65px' },
      ],
      subHeaders: [
        {
          text: 'cars Manager ID',
          value: 'carManagerId',
          sortable: false,
          width: '155px',
        },
        { text: '氏名', value: 'name', sortable: false, width: '144px' },
        { text: '権限', value: 'role', sortable: false, width: '120px' },
        {
          text: '所属店舗',
          value: 'shopName',
          sortable: false,
          width: '120px',
        },
        { text: '電話番号', value: 'tel', sortable: false, width: '120px' },
        {
          text: 'メールアドレス',
          value: 'email',
          sortable: false,
          width: '120px',
        },
      ],
      desserts: [
        {
          companyName: {
            name: '岡田自動車株式会社',
            id: 'xxxxxxxxx1',
          },
          address: {
            zipcode: '120-0011',
            address: '東京都足立区中央本町1-20-1',
          },
          info: {
            tel: '080-8888-2040',
            email: 'kitanaka@gmail.com',
          },
          plan: 'フリー',
          representative: {
            firstName: '道春',
            lastName: '米田',
          },
          num: 4,
          subForm: {
            subDesserts: [
              {
                carManagerId: 'df1s082829',
                name: {
                  firstName: '道春',
                  lastName: '米田',
                },
                role: 'オーナー',
                shopName: 'cars足立',
                tel: '0120-161-135',
                email: 'aaaa@cars-enjoy.com',
              },
            ],
          },
        },
        {
          companyName: {
            name: '山本自動車',
            id: 'xxxxxxxxx2',
          },
          address: {
            zipcode: '120-0011',
            address: '東京都足立区中央本町1-20-1',
          },
          info: {
            tel: '080-8888-2040',
            email: 'kitanaka@gmail.com',
          },
          plan: 'フリー',
          representative: {
            firstName: '道春',
            lastName: '米田',
          },
          num: 4,
          subForm: {
            subDesserts: [
              {
                carManagerId: 'df1s082829',
                name: {
                  firstName: '道春',
                  lastName: '米田',
                },
                role: 'オーナー',
                shopName: 'cars足立',
                tel: '0120-161-135',
                email: 'aaaa@cars-enjoy.com',
              },
            ],
          },
        },
        {
          companyName: {
            name: '岡田自動車株式会社',
            id: 'xxxxxxxxx3',
          },
          address: {
            zipcode: '120-0011',
            address: '東京都足立区中央本町1-20-1',
          },
          info: {
            tel: '080-8888-2040',
            email: 'kitanaka@gmail.com',
          },
          plan: 'フリー',
          representative: {
            firstName: '道春',
            lastName: '米田',
          },
          num: 4,
          subForm: {
            subDesserts: [
              {
                carManagerId: 'df1s082829',
                name: {
                  firstName: '道春',
                  lastName: '米田',
                },
                role: 'オーナー',
                shopName: 'cars足立',
                tel: '0120-161-135',
                email: 'aaaa@cars-enjoy.com',
              },
            ],
          },
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.company_all-main-table-container {
  background: $--color-white;
  width: 100%;
  margin-top: 20px;
  border-radius: 6px;
  &__title {
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
    & h1 {
      font-size: 18px;
      font-weight: bold;
    }
    & span {
      display: flex;
      align-items: center;
      & p {
        margin-right: 13px;
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
  &__table {
    .v-data-table__wrapper {
      table {
        color: #333333;
        font-size: 12px;
        thead {
          height: 30px !important;
          background-color: #f2f2f2;
          tr {
            height: 30px !important;
            th {
              height: 30px !important;
              color: #999999 !important;
            }
          }
        }
        tbody {
          tr {
            height: 65px;
            td {
              p,
              dd {
                color: #333333;
                font-size: 12px;
              }
              .company-id {
                color: #999999;
              }
            }
          }
        }
      }
    }
  }
  .sub-table__start {
    width: max-content;
    padding: 0 !important;
    &__table {
      .v-data-table__wrapper {
        table {
          color: #333333;
          font-size: 12px;
          thead {
            height: 30px !important;
            background-color: #f2f2f2;
            background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.03),
              rgba(0, 0, 0, 0)
            );
            tr {
              height: 30px !important;
              th {
                height: 30px !important;
                padding: 0 !important;
                color: #999999 !important;
              }
            }
          }
          tbody {
            tr {
              height: 65px;
              text-align: center;
              td {
                p,
                dd {
                  color: #333333;
                  font-size: 12px;
                }
                .carManagerId {
                  font-size: 12px;
                  font-weight: bold;
                  color: #333333;
                }
              }
            }
          }
        }
      }
    }
  }
  .ta-center {
    text-align: center;
  }
}
</style>
