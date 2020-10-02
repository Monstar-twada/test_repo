<template>
  <div class="status-bar">
    <div class="left">
      <table>
        <tr>
          <td>
            <h4>アクション進捗</h4>
          </td>
        </tr>
        <tr>
          <td class="pt10 pb10">
            <p>コール済</p>
            <h4>
              <strong>{{ fmtNumber(9999) }}</strong> /{{ fmtNumber(9999) }}
            </h4>
            <p>（40%）</p>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <fg-checkbox label="SMS送付" class="mr25" />
              <fg-checkbox label="DM送付" />
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div class="right">
      <table>
        <tr>
          <td class="main">
            <div class="ml20">
              <label>継続顧客：</label>
              <span>
                <strong>{{ fmtNumber(9999) }}</strong> /{{
                  fmtNumber(9999)
                }}（40%）
              </span>
            </div>
          </td>
          <td class="detail">
            <div class="detail-wrapper">
              <div
                v-for="(item, i) in continueCustomer"
                :key="i"
                class="detail-item"
              >
                <label>{{ item.title }}</label>
                <span>
                  <strong>{{ item.data.toLocaleString() }}</strong>
                  （{{ item.percent }}）
                </span>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="main">
            <div class="ml20">
              <label>未確定：</label>
              <span>
                <strong>{{ fmtNumber(9999) }}</strong>
                /{{ fmtNumber(9999) }}（40%）
              </span>
            </div>
          </td>
          <td class="detail">
            <div class="detail-wrapper">
              <div v-for="(item, i) in unsettled" :key="i" class="detail-item">
                <label>{{ item.title }}</label>
                <span>
                  <strong>{{ item.data.toLocaleString() }}</strong>
                  （{{ item.percent }}）
                </span>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="main">
            <div class="ml20">
              <label>他社流出：</label>
              <span>
                <strong>{{ fmtNumber(9999) }}</strong> /{{
                  fmtNumber(9999)
                }}（40%）
              </span>
            </div>
          </td>
          <td class="detail">
            <div class="detail-wrapper">
              <div
                v-for="(item, i) in otherCompany"
                :key="`continue${i}}`"
                class="detail-item"
              >
                <label>{{ item.title }}</label>
                <span>
                  <strong>{{ item.data.toLocaleString() }}</strong>
                  （{{ item.percent }}）
                </span>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StatusBar',
  data() {
    return {
      continueCustomer: [
        {
          title: '納車済',
          data: 9999,
          percent: '40%',
        },
        {
          title: '車検入庫',
          data: 9999,
          percent: '40%',
        },
        {
          title: '本予約',
          data: 9999,
          percent: '40%',
        },
      ],
      unsettled: [
        {
          title: '検討中',
          data: 9999,
          percent: '40%',
        },
        {
          title: '買換意向',
          data: 9999,
          percent: '40%',
        },
        {
          title: '仮予約',
          data: 9999,
          percent: '40%',
        },
        {
          title: '不通',
          data: 9999,
          percent: '40%',
        },
        {
          title: '流出先不明',
          data: 9999,
          percent: '40%',
        },
      ],
      otherCompany: [
        {
          title: '買換',
          data: 9999,
          percent: '40%',
        },
        {
          title: '車検',
          data: 9999,
          percent: '40%',
        },
        {
          title: '廃車',
          data: 9999,
          percent: '40%',
        },
      ],
    }
  },
  methods: {
    fmtNumber(number) {
      return number.toLocaleString()
    },
  },
}
</script>
<style lang="scss" scoped>
.status-bar {
  font-size: 12px;
  background: $--color-white;
  color: $--color-primary;
  border-radius: 6px;
  width: 100%;
  border-spacing: 0;
  display: flex;
  flex: 1 1 auto;
  font-family: 'Noto Sans JP';
  .left {
    width: 20%;
    font-size: 14px;
    vertical-align: center;
    table {
      padding: 20px 0px 15px 25px;
      td {
        text-align: center;
        vertical-align: center;
      }
      p {
        margin-top: 5px;
        margin-bottom: 5px;
      }
      h4 {
        font-size: 14px;
      }
      strong {
        margin-left: 5px;
        font-size: 21px;
        font-family: 'Avenir Next';
      }
    }
  }
  .right {
    width: 80%;
    display: block;
    table {
      border-spacing: 0;
      width: 100%;
      tr {
        height: 45px;

        td {
          border-left: 1px solid $--color-border;
          border-bottom: 1px solid $--color-border;
        }
      }

      tr:last-child td {
        border-bottom: none;
      }
    }

    .main {
      font-size: 14px;
      width: 280px;
      label {
        display: inline-block;
        width: 70px;
        font-weight: bold;
        margin-right: 10px;
      }
      strong {
        font-size: 21px;
        font-family: 'Avenir Next';
      }
    }
    .detail {
      &-wrapper {
        padding: 8px 20px;
      }
      &-item {
        display: inline-block;
        margin: 8px 20px 8px 0;

        label {
          margin-right: 10px;
        }

        strong {
          font-size: 16px;
          font-family: 'Avenir Next';
        }
      }
    }
    td.detail {
      border-left: none;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        width: 1px;
        height: 70%;
        top: 15%;
        left: 0;
        background: $--color-border;
      }
    }
  }
}
</style>
