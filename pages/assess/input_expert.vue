<template>
  <v-app>
    <Sidebar />
    <div class="main-container">
      <Breadcrumbs :breadcrumbs="breadcrumbs" :page="page" />
      <AssessExpertBar />
      <div class="tab-container">
        <v-row class="align-center">
          <ButtonLarge
            class="button"
            content="QRコード読み込み"
            :is-white="true"
          />
          <h4 class="ml10">ベーシック項目</h4>
          <v-switch color="#fff" class="mx-2"></v-switch>
          <h4 class="">エキスパート項目</h4>
        </v-row>
        <v-tabs
          v-model="tab"
          background-color="transparent"
          slider-color="#fff"
        >
          <v-tab
            v-for="i in tabs"
            :key="i.count"
            class="tab-text"
            :href="`#tab-${i.tab}`"
          >
            {{ i.title }}
          </v-tab>
          <v-tab-item value="tab-1">
            <v-card>
              <v-card-text>1</v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item value="tab-2">
            <v-card>
              <v-card-text>2</v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item value="tab-3">
            <v-card>
              <v-card-text>3</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </div>
    </div>
  </v-app>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import AssessExpertBar from '~/components/AssessExpertBar.vue'
import ButtonLarge from '~/components/common/ButtonLarge.vue'
export default {
  components: {
    Sidebar,
    Breadcrumbs,
    AssessExpertBar,
    ButtonLarge,
  },
  data() {
    return {
      page: '査定',
      breadcrumbs: [
        {
          text: 'home',
          to: '/',
        },
        {
          text: '査定',
          to: '/assess',
        },
        {
          text: '新規査定',
          to: 'matter',
        },
        {
          text: '新規査定',
          to: '査定入力',
        },
      ],
      tab: null,
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
}
</script>
<style lang="scss">
.v-application {
  background: url('~static/common/full.png') !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
.v-application--wrap {
  flex-direction: row !important;
}
.v-item-group {
  margin-bottom: 85px;
}
</style>
<style lang="scss" scoped>
.main-container {
  padding: 30px 70px 0px;
  width: 100%;
}
.tab-container {
  position: relative;
  h4 {
    color: $white-300;
  }
  .button {
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
      background: url('../../static/common/download.svg') no-repeat;
      width: 20px;
      height: 20px;
      float: left;
    }
    &::after {
      display: none;
    }
  }
}
.tab-text {
  color: #fff !important;
}
</style>
