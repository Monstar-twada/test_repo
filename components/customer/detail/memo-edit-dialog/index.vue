<template>
  <v-dialog v-model="visible" persistent max-width="480px">
    <v-card class="memo-edit-dialog-card">
      <DialogHeader title="活動メモ" @close="visible = false" />

      <dl class="form-item-wrapper">
        <dt>交流日</dt>
        <dd><Calendar label="" /></dd>
      </dl>

      <dl class="form-item-wrapper">
        <dt>車種</dt>
        <dd>
          <Select
            v-model="carModel"
            items="items"
            class="mr20"
            :list="carModels"
            placeholder="車種"
          />
        </dd>
      </dl>

      <dl class="form-item-wrapper">
        <dt>コメント</dt>
        <dd>
          <textarea
            rows="8"
            placeholder="コメントを入力してください。"
          ></textarea>
        </dd>
      </dl>

      <div class="btn-wrapper">
        <v-btn depressed rounded color="#1295CE" height="40" dark
          >保存 <Arrow
        /></v-btn>
        <v-btn outlined rounded color="#1295CE" height="40"
          >削除 <Arrow color="#1295CE"
        /></v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import Arrow from './Arrow'
import DialogHeader from '~/components/common/dialog-header/index'
import Calendar from '~/components/common/Calendar.vue'
import Select from '~/components/common/Select.vue'
export default {
  components: {
    DialogHeader,
    Arrow,
    Calendar,
    Select,
  },
  props: {
    value: Boolean,
  },
  data() {
    return {
      carModel: '',
      visible: this.value,
      carModels: ['A', 'B', 'C'],
    }
  },
  computed: {},
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
.memo-edit-dialog-card {
  position: relative;
  .form-item-wrapper {
    display: flex;
    margin: 20px 0 0;
    dt {
      margin-left: 20px;
      flex: 0 0 70px;
      font-size: 14px;
      font-weight: bold;
      color: $blue-200;
    }
    dd {
      margin-right: 24px;
      min-height: 40px;
      flex: 1;
      .calendar {
        .v-text-field--outlined {
          width: 150px !important;
        }
        .v-input input {
          height: 38px !important;
          max-height: 40px !important;
        }
        .v-icon.v-icon {
          font-size: 12px;
          transform: scaleX(1.2) translate(-4px, 4px);
        }
      }

      .v-select {
        margin-right: 0;
        height: 40px;
        .vs__dropdown-toggle {
          background: none;
          width: 100%;
        }
        .vs__actions {
          padding: 0 6px 0 0;
        }
        input {
          height: 40px;
          line-height: 40px;
          padding: 0 13px;
          margin: 0;
          background: none;
        }
      }

      textarea {
        border: 1px solid $gray-100;
        border-radius: 4px;
        outline: none;
        width: 100%;
        padding: 8px;
        color: $blue-200;
        font-size: 12px;
        &::placeholder {
          font-size: 12px;
          color: $blue-500;
          line-height: 14px;
        }
      }
    }
  }
  .btn-wrapper {
    margin: 20px auto 0;
    padding-bottom: 40px;
    width: 240px;
    display: flex;
    flex-direction: column;
    button {
      position: relative;
      &:first-child {
        margin-bottom: 9px;
      }
      svg {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
