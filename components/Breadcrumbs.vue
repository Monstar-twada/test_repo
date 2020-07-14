<template>
  <div class="container">
    <div class="breadcrumbs">
      <v-breadcrumbs :items="breadcrumbs" class="pa-0">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item
            v-if="item.text == 'home'"
            :href="item.href"
            :disabled="item.disabled"
          >
            <v-img
              :src="require('~/static/breadcrumbs/home.svg')"
              width="14"
              height="14"
            />
          </v-breadcrumbs-item>
          <v-breadcrumbs-item
            v-else
            :href="item.href"
            :disabled="item.disabled"
          >
            {{ item.text }}
          </v-breadcrumbs-item>
        </template>
        <template v-slot:divider>
          <v-img :src="require('~/static/breadcrumbs/right.svg')" />
        </template>
      </v-breadcrumbs>
      <v-avatar size="31">
        <v-img :src="require('~/static/breadcrumbs/' + personImage)" />
      </v-avatar>
    </div>
    <div class="titlepage">
      <div class="titlepage-title">
        <v-img
          v-if="isManager"
          class="titlepage-title__manager mr-2"
          :src="require('~/static/breadcrumbs/' + titleImage)"
        />
        <v-img
          v-else
          class="titlepage-title__logo mr-2"
          :src="require('~/static/breadcrumbs/' + titleImage)"
        />
        <h1 class="d-inline">{{ page }}</h1>
        <h2 class="d-inline">{{ subTitle }}</h2>
        <div v-if="isDate" class="titlepage__datepick ml25">
          <div>
            <h5>2020年1月-2020年6月</h5>
          </div>
          <Select
            :customwidth="120"
            :customheight="25"
            custombackground="transparent"
            placeholder="過去6ヶ月"
            disabled
            class="titlepage__datepick--select ml25"
          />
        </div>
      </div>
      <div v-if="isTitleBtn" class="titlepage-button">
        <h3>フリー車種入力から作成</h3>
        <v-img
          class="titlepage-button__plus mr-2"
          :src="require('~/static/common/btn-plus.svg')"
        />
      </div>
      <div v-if="isTitlePlus" class="titlepage-plus">
        <v-img
          class="titlepage-plus__plus"
          :src="require('~/static/common/btn-plus.svg')"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Select from '~/components/common/Select.vue'
export default {
  name: 'Breadcrumbs',
  components: {
    Select,
  },
  props: {
    breadcrumbs: {
      type: Array,
      default() {
        return []
      },
    },
    page: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    titleImage: {
      type: String,
      default: 'result.svg',
    },
    personImage: {
      type: String,
      default: 'person.png',
    },
    isManager: {
      type: Boolean,
      default: false,
    },
    isDate: {
      type: Boolean,
      default: false,
    },
    isTitleBtn: {
      type: Boolean,
      default: false,
    },
    isTitlePlus: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="scss">
.v-breadcrumbs__item {
  color: $white-100 !important;
}
</style>
<style lang="scss" scoped>
.container {
  margin-top: 28px;
  padding: 0;
}
.breadcrumbs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  &_home {
    height: 15px;
    width: 15px;
    &-logo {
      height: 15px;
      width: 15px;
    }
  }
}
.titlepage {
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
  margin-bottom: 30px;
  &-title {
    display: flex;
    justify-content: flex-start;
    &__logo {
      margin-top: 8px;
      height: 22px;
      max-width: 50px;
    }
    &__manager {
      margin-top: 13px;
      height: 12px;
      max-width: 30px;
    }
    h1 {
      color: $white-300;
      display: flex;
      &__logo {
        margin-top: 8px;
        height: 22px;
        max-width: 22px;
      }
    }
    h2 {
      margin: 5px 0 0 10px;
      color: $white-300;
      font-size: 20px;
    }
  }
  &__datepick {
    display: flex;
    align-items: center;
    h5 {
      font-size: 12px;
      color: $white-300;
      font-weight: 400;
    }
    &--select {
    }
  }
  &-button {
    display: flex;
    background: $white-100;
    align-items: center;
    padding: 5px;
    border-radius: 20px;
    &__plus {
      margin-left: 10px;
      height: 30px;
      max-width: 30px;
    }
    h3 {
      margin-left: 10px;
      color: $blue-200;
    }
  }
  &-plus {
    background: $white-100;
    padding: 0;
    border-radius: 15px;
    &__plus {
      height: 30px;
      max-width: 30px;
    }
  }
}
</style>
