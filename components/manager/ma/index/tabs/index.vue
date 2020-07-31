<template>
  <div class="MaTabs">
    <v-tabs v-model="tab" background-color="transparent" slider-color="#1E5199">
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
        <TabItemAll />
      </v-tab-item>
      <v-tab-item value="tab-2">
        <TabItemNew />
      </v-tab-item>
      <v-tab-item value="tab-3">
        <TabItemRepeat />
      </v-tab-item>
    </v-tabs>
  </div>
</template>
<script>
import TabItemAll from '~/components/manager/ma/index/tabs/tab-item-all/index'
import TabItemNew from '~/components/manager/ma/index/tabs/tab-item-new/index'
import TabItemRepeat from '~/components/manager/ma/index/tabs/tab-item-repeat/index'
export default {
  components: {
    TabItemAll,
    TabItemNew,
    TabItemRepeat,
  },
  data() {
    return {
      expert: true,
      tab: 'tab-1',
      tabs: [
        {
          title: 'ALL',
          tab: 1,
        },
        {
          title: '新規獲得',
          tab: 2,
        },
        {
          title: 'リピート獲得',
          tab: 3,
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.MaTabs {
  .v-slide-group__wrapper {
    border-bottom: 1px solid $gray-100;

    .v-tabs-bar__content {
      margin: 0 20px -1px;
      color: $blue-200;
    }
  }
  .v-tabs-bar {
    .v-tab {
      color: $blue-200 !important;
    }
  }
}
</style>
<style lang="scss" scoped>
.MaTabs {
  width: 100%;
  padding: 10px 0;
  background: $white-300;
  border-radius: 6px;
}
</style>
