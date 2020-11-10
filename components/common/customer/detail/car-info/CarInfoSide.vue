<template>
  <div class="customer-car-info-right-side-wrapper mr20">
    <div class="car-photos-wrapper">
      <fg-image v-if="data.url" height="210" width="100%" :src="data.url" />
    </div>
    <h3 class="mt30">
      マッチング情報
      <fg-tag class="ml5" size="mini" selected round>出品中</fg-tag>
    </h3>

    <div class="card-wrapper">
      <TextContent
        label="価格"
        :label-width="labelWidth"
        content="-"
        label-font-weight="normal"
      />
      <TextContent
        label="掲載期間"
        :label-width="labelWidth"
        content="-"
        label-font-weight="normal"
      />
    </div>

    <h3 class="mt30">車両評価</h3>

    <div class="card-wrapper">
      <TextContent
        label="外装評価"
        :label-width="labelWidth"
        content="-"
        label-font-weight="normal"
      />
      <TextContent
        label="内装評価"
        :label-width="labelWidth"
        content="-"
        label-font-weight="normal"
      />
      <TextContent
        label="修復歴"
        :label-width="labelWidth"
        label-font-weight="normal"
      >
        -
      </TextContent>
    </div>
  </div>
</template>

<script>
import TextContent from '../../common/TextContent.vue'
export default {
  components: {
    TextContent,
  },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      labelWidth: '80px',
    }
  },
}
</script>

<style lang="scss">
.customer-car-info-right-side-wrapper {
  .car-photos-wrapper {
    width: 100%;
    height: 210px;
    background: $--color-background url('./img/car-photo.svg') no-repeat center
      center;
  }
  .card-wrapper {
    position: relative;
    background: $--color-background;
    border-radius: 4px;
    margin-top: 10px;
    padding: 12px;
    overflow: hidden;
    &:before {
      position: absolute;
      top: 12px;
      left: 75px;
      bottom: 12px;
      content: '';
      width: 1px;
      background: $--color-border;
    }
  }
}
</style>
