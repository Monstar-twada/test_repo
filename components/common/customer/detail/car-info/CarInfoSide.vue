<template>
  <div class="customer-car-info-right-side-wrapper ml20 mr20">
    <div class="car-photos-wrapper">
      <v-img v-if="carSummary.photoKey" :src="carSummary.photoKey" />
    </div>

    <h3>
      マッチング情報
      <fg-tag class="ml5" size="mini" selected round>出品中</fg-tag>
    </h3>
    <v-card outlined>
      <TextContent
        label="価格"
        content="¥1,600,000"
        custom-font-weight="normal"
      />
      <TextContent
        label="掲載期間"
        content="R2/4/1 - R2/4/15"
        custom-font-weight="normal"
      />
    </v-card>

    <h3>車両評価</h3>
    <v-card outlined>
      <TextContent label="外装評価" content="A" custom-font-weight="normal" />
      <TextContent label="内装評価" content="B" custom-font-weight="normal" />
      <TextContent label="修復歴" custom-font-weight="normal">
        <span>有:</span><span>トランクフロア修復歴有</span>
      </TextContent>
    </v-card>
  </div>
</template>

<script>
import TextContent from '~/components/common/customer/common/TextContent.vue'
export default {
  components: {
    TextContent,
  },
  props: {
    carSummary: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      reservationList: [
        {
          type: '6ヶ月',
          tentativeReservation: true,
          reservation: true,
          warehousing: true,
        },
        {
          type: '12ヶ月',
          tentativeReservation: false,
          reservation: false,
          warehousing: true,
        },
        {
          type: '18ヶ月',
          tentativeReservation: true,
          reservation: true,
          warehousing: true,
        },
        {
          type: '車検',
          tentativeReservation: true,
          reservation: true,
          warehousing: true,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.customer-car-info-right-side-wrapper {
  .car-photos-wrapper {
    width: 100%;
    height: 210px;
    background: $white-100 url('./img/car-photo.svg') no-repeat center center;
  }
}
</style>
