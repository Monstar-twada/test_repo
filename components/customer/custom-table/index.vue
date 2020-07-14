<template>
  <table
    border="0"
    cellpadding="0"
    cellspacing="0"
    class="custom-table-wrapper"
    :class="[
      rounded ? 'rounded' : '',
      headBottomBorder ? 'head-bottom-border' : '',
      headFontWeightNormal ? 'head-font-weight-normal' : '',
      headBackground ? 'head-background' : '',
    ]"
  >
    <colgroup width="120"></colgroup>
    <colgroup width="180"></colgroup>
    <colgroup></colgroup>
    <colgroup width="120"></colgroup>
    <colgroup width="120"></colgroup>
    <colgroup></colgroup>
    <colgroup></colgroup>
    <thead>
      <tr>
        <th>
          <div class="table-th-item">
            <span :class="sortId ? 'bold' : ''">顧客ID</span>
            <SortIcon v-model="sortId" />
          </div>
        </th>
        <th>
          <div class="table-th-item">
            <span :class="sortName ? 'bold' : ''">顧客名</span>
            <SortIcon v-model="sortName" />
          </div>
        </th>
        <th>連絡先情報</th>
        <th>所有車</th>
        <th>登録ナンバー</th>
        <th>車検満了日</th>
        <th>初度登録年月</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in list" :key="i" @click="$emit('click:row', item)">
        <td class="cur high-light">{{ item.id }}</td>
        <td>
          <div class="user-item">
            <v-avatar size="37">
              <v-img
                :src="require('~/static/customer/profile-edit.svg')"
              ></v-img>
            </v-avatar>
            <h3>{{ item.name }}</h3>
            <h5>（{{ item.age }}際）</h5>
          </div>
        </td>
        <td>{{ item.tel }}</td>
        <td>
          <div style="text-align: left; display: inline-block;">
            {{ item.car_maker }}
            <div>
              {{ item.car_type }}
              <!--              <v-chip-->
              <!--                v-if="item.car_total"-->
              <!--                x-small-->
              <!--                text-color="white"-->
              <!--                color="#1E5199"-->
              <!--                class="ml5"-->
              <!--                >{{ item.car_total }}</v-chip-->
              <!--              >-->
            </div>
          </div>
        </td>
        <td>{{ item.car_number }}</td>
        <td>{{ item.inspection_finish_date }}</td>
        <td>{{ item.registration_date }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import SortIcon from './SortIcon'
export default {
  components: {
    SortIcon,
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      },
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    headBottomBorder: {
      type: Boolean,
      default: false,
    },
    headFontWeightNormal: {
      type: Boolean,
      default: false,
    },
    headBackground: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      sortId: '',
      sortName: '',
    }
  },
  methods: {},
}
</script>

<style lang="scss">
.custom-table-wrapper {
  width: 100%;
  background: $white-300;
  .cur {
    cursor: pointer;
  }
  .high-light {
    color: $blue-100;
  }
  &.rounded {
    border-radius: 5px;
    overflow: hidden;
  }
  tr {
    font-size: 0;
    th {
      height: 40px;
      text-align: center;
      font-size: 12px;
      color: $blue-200;
      padding: 0 5px;
    }
    td {
      padding: 0 5px;
      height: 70px;
      text-align: center;
      font-size: 12px;
      color: $blue-200;
      position: relative;
      &:before {
        position: absolute;
        top: 15%;
        left: 0;
        content: '';
        background: $gray-100;
        width: 1px;
        height: 70%;
      }
      &:first-child {
        &:before {
          background: none;
        }
      }
    }
  }
  tbody {
    tr {
      &:nth-child(2n) {
        background: $white-100;
      }
    }
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  // head-bottom-border
  &.head-bottom-border {
    tr th {
      border-bottom: 1px solid $gray-100;
    }
  }
  // head font weight normal
  &.head-font-weight-normal {
    tr th {
      font-weight: normal;
    }
  }

  &.head-background {
    background: $white-100;
  }

  .table-th-item {
    span {
      vertical-align: middle;
    }
    .bold {
      font-weight: 800;
    }
  }

  .user-item {
    display: inline-block;
    position: relative;
    padding-left: 47px;
    text-align: left;
    .v-avatar {
      position: absolute;
      top: 0;
      left: 0;
    }
    h5 {
      text-indent: -6px;
    }
  }
}
</style>
