<template>
  <v-dialog v-model="visible" persistent max-width="670px">
    <v-card class="customer-import-dialog-card">
      <DialogHeader title="エクスポート" @close="visible = false" />
      <v-card-text>
        <div class="remark">
          エクスポートするデータの種類とファイルを選択してください。
        </div>
        <v-radio-group v-if="isBi" v-model="dataType" column>
          <v-radio
            label="売上データ（ブロードリーフ NSオンプレ）"
            value="売上データ（ブロードリーフ NSオンプレ）"
          ></v-radio>
        </v-radio-group>
        <v-radio-group v-else v-model="dataType" column>
          <v-radio
            v-for="(item, i) in dataTypeList"
            :key="i"
            :label="item"
            :value="item"
          ></v-radio>
        </v-radio-group>
      </v-card-text>
      <v-card-actions align="center">
        <v-btn color="blue" depressed rounded @click="handleImport"
          >エクスポート</v-btn
        >
      </v-card-actions>
      <Progress v-show="isUploading" :value="progress" />
      <Success v-if="isSuccess" is-bi @close="visible = false" />
    </v-card>
  </v-dialog>
</template>

<script>
import Progress from './Progress'
import Success from './Success'
import DialogHeader from '~/components/common/dialog-header/index'
export default {
  name: 'ImportDialog',
  components: {
    DialogHeader,
    Progress,
    Success,
  },
  props: {
    value: Boolean,
    isBi: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    const dataTypeList = ['B-dash取り込み用CSV', 'CROSS POINT用CSV']
    return {
      dataType: dataTypeList[0],
      visible: this.value,
      dataTypeList,
      isUploading: false,
      progress: 0,
      isSuccess: false,
    }
  },
  computed: {
    fileInput() {
      return this.$refs.fileInput
    },
  },
  watch: {
    value(val) {
      if (val) {
        this.isSuccess = false
      }
      this.visible = val
    },
    visible(val) {
      this.$emit('input', val)
    },
  },
  methods: {
    selectFile() {
      this.fileInput.click()
    },
    handleImport() {
      this.isUploading = true
      this.progress = 0
      const timer = setInterval(() => {
        if (this.progress >= 100) {
          this.isUploading = false
          this.isSuccess = true
          clearInterval(timer)
          return
        }
        this.progress += 2
      }, 100)
    },
  },
}
</script>

<style lang="scss">
.customer-import-dialog-card {
  position: relative;
  .v-card__text {
    border-bottom: 1px solid $--color-border;
    .remark {
      margin-top: 28px;
      color: $--color-primary;
      font-size: 14px;
      font-weight: 400;
    }
    .v-input__control {
      .theme--light.v-icon {
        color: $--color-border;
      }
      .v-input--radio-group__input {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        .v-radio {
          flex: 0 0 50%;
          margin-top: 10px;
          label {
            color: $--color-primary;
            font-size: 12px;
          }
        }
      }
    }
    .select-file-wrapper {
      display: flex;
      align-items: center;
      button {
        color: $--color-primary;
        font-size: 12px;
        border: 1px solid $--color-border;
        height: 38px;
        width: 160px;
        border-radius: 4px;
        outline: none;
        &:hover {
          border-color: $--color-primary-placeholder;
        }
      }
      .check-info {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: $--color-warning;
      }
    }
  }
  .v-card__actions {
    padding: 0;
    height: 92px;
    justify-content: center;
    .v-btn {
      width: 240px;
      .v-btn__content {
        color: $--color-white;
      }
    }
  }
}
</style>
