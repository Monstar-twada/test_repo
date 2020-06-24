<template>
  <div class="detailSearch">
    <div class="detailSearch__info">
      <div class="detailSearch__info__id">
        <p>案件ID</p>
        <p>AT-123</p>
      </div>
      <div class="detailSearch__info__divider" />
      <div class="detailSearch__info__charge">
        <p>担当者</p>
        <Select items="items" class="mr15" :list="list" placeholder="" />
      </div>
      <div class="detailSearch__info__divider" />
      <div class="detailSearch__info__category">
        <p>カテゴリー</p>
        <v-breadcrumbs :items="items" class="pa-0">
          <template v-slot:divider>
            <v-img :src="require('~/static/matter/right_arrow_blue.svg')" />
          </template>
        </v-breadcrumbs>
      </div>
    </div>
    <div class="detailSearch__save">
      <button class="detailSearch__save--btn">保存</button>
    </div>
  </div>
</template>

<script>
import Select from '~/components/common/Select.vue'

export default {
  name: 'DetailSearchBar',
  components: {
    Select,
  },
  data: () => ({
    list: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    page: 1,
    items: [
      {
        text: '買取',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'EC',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
    ],
  }),
}
</script>
<style lang="scss">
.detailSearch__info__category {
  .v-breadcrumbs__item {
    color: $blue-200 !important;
  }
}
</style>
<style lang="scss" scoped>
.detailSearch {
  width: 100%;
  padding: 20px;
  height: 70px;
  border-radius: 5px;
  background-color: $white-300;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin-bottom: 0;
  }
  &__info {
    display: flex;
    align-items: center;
    width: 90%;
    &__id {
      display: flex;
      align-items: center;
      justify-content: space-around;
      p:nth-child(1) {
        font-size: 14px;
        font-weight: bold;
        color: $blue-200;
        margin-right: 1em;
      }
      p:nth-child(2) {
        font-size: 12px;
        color: $blue-100;
      }
    }
    &__charge {
      display: flex;
      align-items: center;
      justify-content: space-around;
      p {
        font-size: 14px;
        font-weight: bold;
        color: $blue-200;
        margin-right: 1em;
      }
    }
    &__category {
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: $blue-200 !important;
      & > p {
        font-size: 14px;
        font-weight: bold;
        color: $blue-200;
        margin-right: 1em;
      }
    }
    &__divider {
      height: 40px;
      width: 1px;
      background-color: #dfe6f0;
      margin: 0 30px;
    }
  }
  &__save {
    width: 10%;
    display: flex;
    justify-content: flex-end;
    &--btn {
      padding: 5px 25px;
      font-size: 14px;
      color: $white-300;
      border-radius: 15px;
      background-color: $blue-100;
    }
  }
}
</style>
