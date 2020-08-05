<template>
  <div class="assess-input-expert-wrapper">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="assess.svg"
    />
    <AssessExpertBar />
    <div class="tab-container">
      <v-row v-if="tab === 'tab-1'" class="align-center tab-container_position">
        <ButtonLarge
          class="button-qr"
          content="QRコード読み込み"
          :is-white="true"
        />
        <h4 class="ml10">ベーシック項目</h4>
        <v-switch v-model="expert" color="#fff" class="mx-2"></v-switch>
        <h4 class="">エキスパート項目</h4>
      </v-row>
      <v-tabs
        v-model="tab"
        :class="[tab === 'tab-1' ? 'show' : '']"
        background-color="transparent"
        slider-color="#fff"
      >
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
          <BasicInformation />
          <ExpertInformation v-if="expert" />
          <div class="d-flex flex-column justify-center align-center mt40">
            <ButtonLarge
              :customwidth="240"
              content="査定結果へ"
              is-white
              class="mb30"
              @click.native="move(2)"
            />
            <ButtonLarge
              :customwidth="240"
              content="検索結果へ戻る"
              class="custombutton"
              @click.native="move(3)"
            />
          </div>
        </v-tab-item>
        <v-tab-item value="tab-2">
          <CarInterior />
          <CarImage />
          <div class="d-flex flex-column justify-center align-center mt40">
            <ButtonLarge
              :customwidth="240"
              content="査定結果へ"
              is-white
              class="mb30"
              @click.native="move(3)"
            />
            <ButtonLarge
              :customwidth="240"
              content="検索結果へ戻る"
              class="custombutton"
              @click.native="move(1)"
            />
          </div>
        </v-tab-item>
        <v-tab-item value="tab-3">
          <Pricing />
          <div class="d-flex flex-column justify-center align-center mt40">
            <ButtonLarge
              :customwidth="240"
              content="査定結果へ"
              is-white
              class="mb30"
              @click.native="move(3)"
            />
            <ButtonLarge
              :customwidth="240"
              content="検索結果へ戻る"
              class="custombutton"
              @click.native="move(2)"
            />
          </div>
        </v-tab-item>
      </v-tabs>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '~/components/common/breadcrumbs/index.vue'
import AssessExpertBar from '~/components/dashboard/assess/AssessExpertBar.vue'
import ButtonLarge from '~/components/common/ButtonLarge.vue'
import BasicInformation from '~/components/dashboard/assess/BasicInformation.vue'
import ExpertInformation from '~/components/dashboard/assess/ExpertInformation.vue'
import CarInterior from '~/components/dashboard/assess/CarInterior.vue'
import CarImage from '~/components/dashboard/assess/CarImage.vue'
import Pricing from '~/components/dashboard/assess/Pricing.vue'
export default {
  layout: 'dashboard',
  components: {
    Breadcrumbs,
    AssessExpertBar,
    ButtonLarge,
    BasicInformation,
    ExpertInformation,
    CarInterior,
    CarImage,
    Pricing,
  },
  data() {
    return {
      expert: true,
      page: '査定',
      breadcrumbs: [
        {
          text: '査定',
          href: '/assess',
        },
        {
          text: '新規査定',
          href: 'matter',
        },
        {
          text: '新規査定',
          href: '査定入力',
        },
      ],
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
}
</script>
<style lang="scss">
.assess-input-expert-wrapper {
  .show .v-tabs-bar {
    margin-bottom: 85px;
  }
  .v-tabs-items {
    border-radius: 5px !important;
    background: transparent !important;
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
        background: url('./img/download.svg') no-repeat;
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
    &_position {
      position: absolute;
      top: 60px;
      left: 10px;
    }
  }
  .tab-text {
    color: #fff !important;
  }
}
</style>
