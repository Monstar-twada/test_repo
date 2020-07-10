<template>
  <div class="tab">
    <div class="tab__header">
      <h3>業務別内訳</h3>
      <h5>※カッコ内は目標乖離金額</h5>
    </div>
    <!-- <div class="d-flex tab__labels">
      <ul class="pa-0">
        <li>売上</li>
        <li>売上</li>
        <li>粗利</li>
        <li>台数</li>
        <li>台粗利</li>
      </ul>
    </div>
    <div class="d-flex tab__lists">
      <ul class="pa-0">
        <li>車検</li>
        <li>
          ¥4,000,000<br />
          <span>(-¥100,000)</span>
        </li>
        <li>
          ¥1,000,000<br />
          <span>(-¥100,000)</span>
        </li>
        <li>4000</li>
        <li>¥200,000</li>
      </ul>
    </div>
    <div class="d-flex tab__lists">
      <ul class="pa-0">
        <li>点検</li>
        <li>
          ¥2,000,000<br />
          <span>(-¥100,000)</span>
        </li>
        <li>
          ¥500,000<br />
          <span>(-¥100,000)</span>
        </li>
        <li>1000</li>
        <li>¥50,000</li>
      </ul>
    </div>
    <div class="d-flex tab__lists">
      <ul class="pa-0">
        <li>一般</li>
        <li>
          ¥1,000,000<br />
          <span>(-¥100,000)</span>
        </li>
        <li>
          ¥200,000<br />
          <span>(-¥100,000)</span>
        </li>
        <li>800</li>
        <li>¥20,000</li>
      </ul>
    </div> -->
    <table class="tab__table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>売上</th>
          <th>粗利</th>
          <th>台数</th>
          <th>台粗利</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>車検</td>
          <td>
            ¥4,000,000<br />
            <span>(-¥100,000)</span>
          </td>
          <td>
            ¥1,000,000<br />
            <span>(-¥100,000)</span>
          </td>
          <td>4000</td>
          <td>¥200,000</td>
        </tr>
        <tr>
          <td>点検</td>
          <td>
            ¥2,000,000<br />
            <span>(-¥100,000)</span>
          </td>
          <td>
            ¥500,000<br />
            <span>(-¥100,000)</span>
          </td>
          <td>1000</td>
          <td>¥50,000</td>
        </tr>
        <tr>
          <td>一般</td>
          <td>
            ¥1,000,000<br />
            <span>(-¥100,000)</span>
          </td>
          <td>
            ¥200,000<br />
            <span>(-¥100,000)</span>
          </td>
          <td>800</td>
          <td>¥20,000</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'SalesBreakdown',
  components: {},
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.tab {
  background: #fff;
  border-radius: 5px;
  height: auto;
  width: 900px;
  &__header {
    height: 65px;
    padding: 0px 20px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    h5 {
      font-size: 10x;
      color: $blue-200;
      font-weight: 400;
    }
    h3 {
      font-size: 18px;
      color: $blue-200;
      font-weight: 600;
    }
    span {
      font-size: 14px;
    }
  }
  &__table {
    width: 100%;
    border-collapse: collapse;
    thead {
      height: 30px;
      background: $white-100;
      th {
        align-items: center;
        font-size: 12px;
        color: $blue-500;
        font-weight: 400;
      }
    }
    tr {
      border-bottom: 1px solid $gray-100;
      td {
        height: 60px;
        font-size: 14px;
        font-weight: 800;
        color: $blue-200;
        text-align: center;
        span {
          font-size: 12px;
          font-weight: 400;
        }
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
