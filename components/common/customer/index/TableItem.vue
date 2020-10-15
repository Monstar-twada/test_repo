<template>
  <tr>
    <td class="high-light">
      {{ item.customerCode }}
    </td>
    <td class="is-left">
      <fg-avatar
        text-flex-direction-column
        circle
        text-width="120px"
        :data="item | fmtAvatar"
      />
    </td>
    <td class="is-left">
      <div class="table-item-tel">
        <fg-text>
          <fg-icon name="mobile" color="$color.primary" />{{
            item.cellphoneNumber | fmtHyphen
          }}
        </fg-text>
        <fg-text>
          <fg-icon name="email" color="$color.primary" />{{
            item.email | fmtHyphen
          }}
        </fg-text>
      </div>
    </td>
    <td>
      <dl style="display: inline-block; text-align: left">
        <dd>{{ carItem.maker }}</dd>
        <dd>
          {{ carItem.carType | fmtHyphen }}
          <fg-tag v-if="item.carTotal > 1" size="mini" round selected
            >+{{ item.carTotal - 1 }}</fg-tag
          >
        </dd>
      </dl>
    </td>
    <td>{{ carItem | fmtCarNumber }}</td>
    <td>{{ carItem.registrationEndDate | fmtDate }}</td>
    <td>{{ carItem.registrationFirstDate | fmtDate }}</td>
    <td>{{ carItem.sellingDatetime | fmtDate }}</td>
    <td>
      <div style="text-align: center">
        <fg-tag
          :class="{ hide: carItem.purchaseIntention === '0' }"
          color="#fff"
          size="small"
          round
          bg-color="#2993D9"
          border-color="#2993D9"
          width="42px"
          >買換</fg-tag
        >
        <fg-tag
          :class="{ hide: carItem.nearTransfer === '0' }"
          color="#fff"
          size="small"
          round
          bg-color="#12AACE"
          border-color="#12AACE"
          width="42px"
          >乗換</fg-tag
        >
      </div>
      <div style="text-align: center">
        <fg-tag
          :class="{ hide: carItem.nearRegistration === '0' }"
          color="#fff"
          size="small"
          round
          bg-color="#0DBEA9"
          border-color="#0DBEA9"
          width="42px"
          >車検</fg-tag
        >
        <fg-tag
          :class="{ hide: carItem.activityReportDatetime === '0' }"
          color="#fff"
          size="small"
          round
          bg-color="#1DDB99"
          border-color="#1DDB99"
          width="42px"
          >6ヶ月</fg-tag
        >
      </div>
    </td>
  </tr>
</template>

<script>
import { customerMixin } from '~/mixins/customer'

export default {
  mixins: [customerMixin],
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    carItem() {
      const { car } = this.item
      return Array.isArray(car) ? car[0] || {} : {}
    },
  },
}
</script>

<style></style>
