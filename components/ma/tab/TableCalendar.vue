<template>
  <table class="table-calendar">
    <thead>
      <tr>
        <th></th>
        <th>6月</th>
        <th>7月</th>
        <th>8月</th>
        <th>9月</th>
        <th>OP</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="td-title">SMS</td>
        <td>
          <v-img
            :src="require('../img/sms.svg')"
            :max-width="20"
            :max-height="20"
          />
        </td>
        <td>ー</td>
        <td>
          <v-img
            :src="require('../img/sms.svg')"
            :max-width="20"
            :max-height="20"
          />
        </td>
        <td>ー</td>
        <td>
          <div class="table-switch-button">
            <v-switch v-model="switch1" inset class="pa-0 ma-0"></v-switch>
          </div>
        </td>
      </tr>
      <tr>
        <td class="td-title">DM</td>
        <td>
          <v-img
            :src="require('../img/mail.svg')"
            :max-width="20"
            :max-height="18"
          />
        </td>
        <td>
          <v-img
            :src="require('../img/mail.svg')"
            :max-width="20"
            :max-height="18"
          />
        </td>
        <td>
          <v-img
            :src="require('../img/mail.svg')"
            :max-width="20"
            :max-height="18"
          />
        </td>
        <td>
          <v-img
            :src="require('../img/mail.svg')"
            :max-width="20"
            :max-height="18"
          />
        </td>
        <td>
          <div class="table-switch-button">
            <v-switch v-model="switch2" inset class="pa-0 ma-0"></v-switch>
          </div>
        </td>
      </tr>
      <tr>
        <td class="td-title">TEL</td>
        <td>
          <v-img
            :src="require('../img/tel.svg')"
            :max-width="20"
            :max-height="20"
          />
        </td>
        <td>
          <v-img
            :src="require('../img/tel.svg')"
            :max-width="20"
            :max-height="20"
          />
        </td>
        <td>ー</td>
        <td>ー</td>
        <td>
          <div class="table-switch-button">
            <v-switch v-model="switch3" inset class="pa-0 ma-0"></v-switch>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'TableColendar',
  data() {
    return {
      switch1: false,
      switch2: false,
      switch3: false,
    }
  },
}
</script>
<style lang="scss">
.table-switch-button {
  .v-input--selection-controls {
    padding-top: 0 !important;
  }
  .v-input--selection-controls__input {
    width: 24px !important;
    height: 14px !important;
  }
  .v-input--selection-controls__input input[role='switch'] {
    top: 10px;
    left: 10px;
    height: 15px !important;
  }
  .v-input--switch--inset .v-input--switch__track {
    width: 24px !important;
    height: 14px !important;
    border-radius: 12px;
    left: 10px !important;
    top: 10px !important;
    opacity: 1 !important;
  }
  .v-input--switch__thumb {
    width: 10px;
    height: 10px;
    top: 12px;
    left: 12px;
  }
  .v-input--switch .v-input--selection-controls__ripple {
    height: 10px !important;
    width: 10px !important;
    left: 5px !important;
    top: calc(50% - 2px);
  }
  .v-input--switch--inset.v-input--is-dirty
    .v-input--selection-controls__ripple {
    height: 10px !important;
    width: 10px !important;
    left: 5px !important;
    top: calc(50% - 1px);
  }
  .v-input--switch__thumb.primary--text {
    color: $white-300 !important;
  }
  .theme--light.v-input--switch .v-input--switch__track {
    color: #e5edf6;
  }
}
.v-application--is-ltr
  .table-switch-button
  .v-input--switch--inset.v-input--is-dirty
  .v-input--selection-controls__ripple,
.v-application--is-ltr
  .table-switch-button
  .v-input--switch--inset.v-input--is-dirty
  .v-input--switch__thumb {
  transform: translate(10px, 0) !important;
}
</style>
<style lang="scss" scoped>
.table-calendar {
  width: 100%;
  max-width: 290px;
  color: $blue-200;
  border: 1px $gray-100 solid;
  border-collapse: collapse;

  thead {
    tr {
      border-bottom: 1px $gray-100 solid;
      th {
        font-size: 12px;
        width: 45px;
        height: 35px;
      }
    }
  }
  tbody {
    tr:not(:last-child) {
      border-bottom: 1px $gray-100 solid;
    }
    td {
      font-size: 12px;
      height: 35px;
      border-right: 1px $gray-100 solid;
      text-align: center;

      .td-title {
        font-size: 12px;
        background: $gray-100;
      }

      .v-image {
        display: block;
        margin: 0 auto;
      }
    }
  }
}
</style>
