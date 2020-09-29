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
              <strong>{{
                Number(status.callTotalCount).toLocaleString()
              }}</strong
              >&nbsp;/&nbsp;{{
                Number(status.targetTotalCount).toLocaleString()
              }}
            </h4>
            <p>（{{ status.callTotalRatio }}%）</p>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <fg-checkbox
                label="SMS送付"
                class="mr25"
                :value="status.smsSendFlag"
                @change="handleClick('smsSendFlag', $event.val)"
              />
              <fg-checkbox
                label="DM送付"
                :value="status.dmSendFlag"
                @change="handleClick('dmSendFlag', $event.val)"
              />
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
                <strong>{{
                  Number(status.continueTotalCount).toLocaleString()
                }}</strong>
                /{{ Number(status.targetTotalCount).toLocaleString() }}（{{
                  status.continueTotalRetio
                }}%）
              </span>
            </div>
          </td>
          <td class="detail">
            <div class="detail-wrapper">
              <div class="detail-item">
                <label>納車済</label>
                <span>
                  <strong>{{
                    Number(status.deliveredTotalCount).toLocaleString()
                  }}</strong>
                  （{{ status.deliveredTotalRatio }}%）
                </span>
              </div>
              <div class="detail-item">
                <label>車検入庫</label>
                <span>
                  <strong>{{
                    Number(status.carInspectionTotalCount).toLocaleString()
                  }}</strong>
                  （{{ status.carInspectionTotalRatio }}%）
                </span>
              </div>
              <div class="detail-item">
                <label>本予約</label>
                <span>
                  <strong>{{
                    Number(status.reservationTotalCount).toLocaleString()
                  }}</strong>
                  （{{ status.reservationTotalRatio }}%）
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
                <strong>{{
                  Number(status.pendingTotalCount).toLocaleString()
                }}</strong>
                /{{ Number(status.targetTotalCount).toLocaleString() }}（{{
                  status.pendingTotalRatio
                }}%）
              </span>
            </div>
          </td>
          <td class="detail">
            <div class="detail-wrapper">
              <div class="detail-item">
                <label>検討中</label>
                <span>
                  <strong>{{
                    Number(status.underReviewCount).toLocaleString()
                  }}</strong>
                  （{{ status.underReviewRatio }}%）
                </span>
              </div>
              <div class="detail-item">
                <label>買換意向</label>
                <span>
                  <strong>{{
                    Number(status.purchaseIntentionTotalCount).toLocaleString()
                  }}</strong>
                  （{{ status.carInspectionTotalRatio }}%）
                </span>
              </div>
              <div class="detail-item">
                <label>仮予約</label>
                <span>
                  <strong>{{
                    Number(status.tentiveReservationTotalCount).toLocaleString()
                  }}</strong>
                  （{{ status.tentiveReservationTotalRatio }}%）
                </span>
              </div>
              <div class="detail-item">
                <label>不通</label>
                <span>
                  <strong>{{
                    Number(status.failureCount).toLocaleString()
                  }}</strong>
                  （{{ status.failureRatio }}%）
                </span>
              </div>
              <div class="detail-item">
                <label>流出先不明</label>
                <span>
                  <strong>{{
                    Number(status.outflowUnknownCount).toLocaleString()
                  }}</strong>
                  （{{ status.outflowUnknownRatio }}%）
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
                <strong>{{
                  Number(status.outflowTotalCount).toLocaleString()
                }}</strong>
                /{{ Number(status.targetTotalCount).toLocaleString() }}（{{
                  status.outflowTotalCount
                }}%）
              </span>
            </div>
          </td>
          <td class="detail">
            <div class="detail-wrapper">
              <div class="detail-item">
                <label>買換</label>
                <span>
                  <strong>{{
                    Number(status.outflowReplacementCount).toLocaleString()
                  }}</strong>
                  （{{ status.outflowReplacementRatio }}%）
                </span>
              </div>
              <div class="detail-item">
                <label>車検</label>
                <span>
                  <strong>{{
                    Number(status.outflowInspectionCount).toLocaleString()
                  }}</strong>
                  （{{ status.outflowInspectionRatio }}%）
                </span>
              </div>
              <div class="detail-item">
                <label>廃車</label>
                <span>
                  <strong>{{
                    Number(status.outflowScrappedCount).toLocaleString()
                  }}</strong>
                  （{{ status.outflowScrappedRatio }}%）
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
  props: {
    status: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {}
  },
  methods: {
    handleClick(property, val) {
      // do something
      // const params = { property, val }
      // this.$api.put('/v1/attaractingCustomers/0000/202009', params)
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
          display: inline-block;
          width: 60px;
          text-align: right;
          font-size: 16px;
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
