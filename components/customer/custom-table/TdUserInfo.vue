<template>
  <div class="table-td-user-info-wrapper">
    <v-avatar size="37">
      <v-img
        :src="item.photoKey || require('~/static/customer/profile-edit.svg')"
      ></v-img>
    </v-avatar>
    <div class="text">
      <h3>{{ fmtCustomerName(item) }}</h3>
      <strong class="age">（{{ item.age || '-' }}歳）</strong>
    </div>
  </div>
</template>
<script>
import { fmtCustomerName } from '../helper'
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    fmtCustomerName,
  },
}
</script>

<style lang="scss">
.table-td-user-info-wrapper {
  display: inline-block;
  position: relative;
  padding-left: 47px;
  width: 100%;
  .v-avatar {
    position: absolute;
    top: 0;
    left: 0;
  }
  .text {
    text-align: left;
    h3 {
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .age {
      display: inline-block;
      text-indent: -8px;
      font-size: 10px;
    }
  }
}
</style>
