<template>
  <fg-dialog
    v-model="visible"
    persistent
    max-width="480px"
    title="アンケート結果"
  >
    <v-card class="questionnaire-results-dialog-card">
      <ul class="remark">
        <li>取引種別：{{ item.transactionType }}</li>
        <li>回答日時：{{ item.inputDate | fmtDate }}</li>
        <li>店舗：{{ item.storeName }}</li>
      </ul>
      <dl class="list-wrapper">
        <template v-for="(item, i) in list">
          <dt :key="item.q">{{ item.q }}</dt>
          <dd :key="i">
            <div>{{ item.a }}</div>
          </dd>
        </template>
      </dl>
    </v-card>
  </fg-dialog>
</template>

<script>
import { fmtDate } from '~/components/common/customer/common/helper'

export default {
  filters: {
    fmtDate,
  },
  props: {
    value: Boolean,
    item: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      visible: this.value,
    }
  },
  computed: {
    list() {
      const item = this.item || {}
      const answers = ['a1', 'a2', 'a3', 'a4', 'a5']
      const questions = {
        q1: '本日のご来店目的を教えて下さい。',
        q2: '気になる点はございますか？',
        q3: 'あと何回車検を受けられる予定でしょうか？',
        q4: 'ご購入を検討されているお車があれば教えて下さい。',
        q5: '',
      }
      return ['q1', 'q2', 'q3', 'q4'].map((q, i) => {
        return {
          q: item[q] || questions[q],
          a: item[answers[i]] || '-',
        }
      })
    },
  },
  watch: {
    value(val) {
      this.visible = val
    },
    visible(val) {
      this.$emit('input', val)
    },
  },
  methods: {},
}
</script>

<style lang="scss">
.questionnaire-results-dialog-card {
  position: relative;
  ul.remark {
    display: flex;
    border-bottom: 1px solid $--color-border;
    list-style: none;
    justify-content: flex-start;
    height: 50px;
    align-items: center;
    padding: 0;
    li {
      margin: 0 10px 0 20px;
      color: $--color-primary;
      font-size: 12px;
      font-weight: 400;
    }
  }
  .list-wrapper {
    padding-bottom: 23px;
    dt {
      margin: 20px 23px 0;
      font-size: 14px;
      font-weight: bold;
      color: $--color-primary;
      &:before {
        content: 'Q. ';
        color: $--color-primary;
        font-size: 20px;
      }
    }
    dd {
      margin: 14px 23px 10px 47px;
      div {
        padding: 10px 13px;
        background: $--color-background;
        border-radius: 4px;
        display: flex;
        align-items: center;
        border: 1px solid $--color-border;
        font-size: 12px;
        color: $--color-primary;
        text-align: justify;
      }
    }
  }
}
</style>
