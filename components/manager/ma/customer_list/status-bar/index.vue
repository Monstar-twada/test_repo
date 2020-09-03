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
          <td>
            コール済
            <strong>34</strong> /162（40%）
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
              <span> <strong>34</strong> /162（40%） </span>
            </div>
          </td>
          <td>
            <div class="ml20">
              <label>納車済</label>
              <span> <strong>83</strong>（40%） </span>
              <label>車検入庫</label>
              <span> <strong>83</strong>（40%） </span>
              <label>本予約</label>
              <span> <strong>12</strong>（40%） </span>
            </div>
          </td>
        </tr>
        <tr>
          <td class="main">
            <div class="ml20">
              <label>未確定：</label>
              <span> <strong>34</strong> /162（40%） </span>
            </div>
          </td>
          <td>
            <div class="ml20">
              <label>検討中</label>
              <span> <strong>47</strong>（40%） </span>
              <label>買換意向</label>
              <span> <strong>11</strong>（40%） </span>
              <label>仮予約</label>
              <span> <strong>33</strong>（40%） </span>
              <label>不通</label>
              <span> <strong>12</strong>（40%） </span>
              <label>流出先不明</label>
              <span> <strong>4</strong>（40%） </span>
            </div>
          </td>
        </tr>
        <tr>
          <td class="main">
            <div class="ml20">
              <label>他社流出：</label>
              <span> <strong>34</strong> /162（40%） </span>
            </div>
          </td>
          <td>
            <div class="ml20">
              <label>買換</label>
              <span> <strong>47</strong>（40%） </span>
              <label>車検</label>
              <span> <strong>83</strong>（40%） </span>
              <label>廃車</label>
              <span> <strong>32</strong>（40%） </span>
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
    return {}
  },
}
</script>
<style lang="scss" scoped>
.status-bar {
  font-size: 12px;
  background: $white-300;
  color: $blue-200;
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
        height: 32px;
      }
      h4 {
        font-size: 18px;
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
          border-left: 1px solid $gray-100;
          border-bottom: 1px solid $gray-100;

          label {
            display: inline-block;
            margin-right: 5px;
          }
          strong {
            font-size: 16px;
          }
        }
      }

      tr:last-child td {
        border-bottom: none;
      }
    }

    .main {
      font-size: 14px;
      width: 230px;
      label {
        width: 70px;
        font-weight: bold;
        margin-right: 10px;
      }
      strong {
        font-size: 21px;
      }
    }
  }
}
</style>
