<template>
  <div class="send-sales-wrapper">
    <div class="send-sales-wrapper-left">
      <div class="send-sales-wrapper-left-top">
        <h2>確定金額</h2>
        <fg-month-picker :v-model="{ year: 2020, month: 8 }" />
      </div>
      <div class="send-sales-wrapper-left-center">
        <p class="amont">
          ¥
          <span>480,000</span>
        </p>
        <p>振込予定日：2020/06/30</p>
      </div>
      <div class="send-sales-wrapper-left-bottom">
        <dl>
          <dt>購入</dt>
          <dd><span>3,928</span>件</dd>
        </dl>
        <dl>
          <dt>売却</dt>
          <dd><span>3,982</span>件</dd>
        </dl>
        <dl>
          <dt>車検</dt>
          <dd><span>7,382</span>件</dd>
        </dl>
      </div>
    </div>
    <div class="send-sales-wrapper-right">
      <h2>送客案件進捗</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>未着手</th>
            <th>提案中</th>
            <th>作業中</th>
            <th>支払処理中</th>
            <th>入金予定額</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in costItems" :key="i">
            <td>{{ item.title }}件</td>
            <td>{{ item.notStarted.toLocaleString() }}件</td>
            <td>{{ item.proposing.toLocaleString() }}件</td>
            <td>{{ item.working.toLocaleString() }}件</td>
            <td>{{ item.payment.toLocaleString() }}件</td>
            <td>¥{{ item.expectedAmount.toLocaleString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SendSales',
  data() {
    return {
      costItems: [
        {
          title: '購入',
          notStarted: 3928,
          proposing: 3928,
          working: 3928,
          payment: 3928,
          expectedAmount: 392800,
        },
        {
          title: '売却',
          notStarted: 3982,
          proposing: 3982,
          working: 3982,
          payment: 3982,
          expectedAmount: 392800,
        },
        {
          title: '車検',
          notStarted: 7382,
          proposing: 7382,
          working: 7382,
          payment: 7382,
          expectedAmount: 392800,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.send-sales-wrapper {
  display: flex;
  justify-content: space-between;
  color: $--color-primary;
  margin-bottom: 40px;
  &-left {
    width: 25%;
    text-align: center;
    background-color: $--color-white;
    border-radius: 6px;
    &-top {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px $--color-border solid;
      height: 64px;
      align-items: center;
      padding: 0 20px;
    }

    &-center {
      overflow: hidden;
      border-bottom: 1px $--color-border solid;
      align-items: center;
      padding: 20px;

      p {
        margin-bottom: 0;
      }

      .amont {
        width: 100%;
        margin-bottom: 5px;
        font-size: 12px;
        span {
          font-size: 26px;
        }
      }
    }

    &-bottom {
      list-style: none;
      width: 80%;
      margin: 0 10%;
      font-size: 14px;
      padding: 8px 0;
      dl {
        line-height: 30px;
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        dt {
          height: 30px;
        }
        dd {
          height: 30px;
          span {
            font-size: 22px;
          }
        }
      }
    }
  }
  &-right {
    flex: 1;
    margin-left: 20px;
    background-color: $--color-white;
    border-radius: 6px;

    h2 {
      height: 64px;
      line-height: 64px;
      padding: 0 20px;
    }

    table {
      width: 100%;
      border-bottom: 1px $--color-border solid;
      border-spacing: 0;
      thead {
        tr {
          background: $--color-background;
          height: 40px;
          th:first-child {
            width: 10%;
          }
          th {
            width: 18%;
          }
        }
      }
      tbody {
        tr {
          td {
            text-align: center;
            height: 50px;
          }
        }
      }
    }
  }
}
</style>
