<template>
  <div class="tab-container">
    <v-tabs v-model="tab" background-color="transparent" slider-color="#fff">
      <v-tab
        v-for="i in tabs"
        :key="i.count"
        v-model="tab"
        class="tab-text"
        :href="`#tab-${i.tab}`"
      >
        {{ i.title }}
      </v-tab>
      <v-tab-item value="tab-1">
        <ResultInformation class="mt30" />
      </v-tab-item>
      <v-tab-item value="tab-2">
        <CarInterior class="mt30" />
        <CarImage />
      </v-tab-item>
      <v-tab-item value="tab-3">
        <Pricing class="mt30" />
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import ResultInformation from '~/components/matching/detail/ResultInformation.vue'
import CarInterior from '~/components/matching/detail/CarInterior.vue'
import CarImage from '~/components/matching/detail/CarImageShow.vue'
import Pricing from '~/components/matching/detail/Pricing.vue'
export default {
  components: {
    ResultInformation,
    CarInterior,
    CarImage,
    Pricing,
  },
  data() {
    return {
      tab: 'tab-1',
      tabs: [
        {
          title: '車両基本情報',
          tab: 1,
        },
        {
          title: '内外装情報',
          tab: 2,
        },
        {
          title: 'プライシング',
          tab: 3,
        },
      ],
    }
  },
  methods: {
    move(tab) {
      this.tab = 'tab-' + tab
    },
  },
  layout: 'loggedin',
}
</script>
<style lang="scss">
.v-tabs-bar {
  .v-tabs-bar__content {
    border-bottom: 1px #51aed1 solid;
  }
}
.v-tabs-items {
  border-radius: 5px !important;
  background: transparent !important;
}
</style>
<style lang="scss" scoped>
.main-container {
  padding: 30px 70px 100px;
  width: 100%;
}
.tab-container {
  position: relative;
  h4 {
    color: $white-300;
  }
  .button-qr {
    background-color: $white-300;
    width: 150px;
    font-size: 12px;
    font-weight: 500;
    padding-left: 25px;
    line-height: 15px;
    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 15px;
      background: url('../../../static/common/download.svg') no-repeat;
      width: 20px;
      height: 20px;
      float: left;
    }
    &::after {
      display: none;
    }
  }
  .custombutton {
    border: 1px solid $white-300;
  }
}
.tab-text {
  color: $white-300 !important;
}
</style>
