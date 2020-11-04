<template>
  <fg-dialog v-model="visible" persistent max-width="670px">
    <v-card class="customer-import-dialog-card">
      <DialogHeader title="インポート" @close="visible = false" />
      <v-card-text>
        <div class="remark">
          インポートするデータの種類とファイルを選択してください。
        </div>
        <fg-radio-group v-if="isBi" v-model="dataType" column>
          <fg-radio label="売上データ（ブロードリーフ NSオンプレ）"></fg-radio>
        </fg-radio-group>
        <fg-radio-group v-else v-model="dataType" column>
          <fg-radio
            v-for="(item, i) in dataTypeList"
            :key="i"
            :label="item"
          ></fg-radio>
        </fg-radio-group>
        <div class="select-file-wrapper">
          <button @click="selectFile">ファイルを選択</button>
          <input ref="fileInput" type="file" style="display: none" />
          <div class="check-info ml20">
            <fg-icon class="mr5" name="exclamation-circle-line"></fg-icon>
            フォーマットが不一致です。（1000行目）
          </div>
        </div>
      </v-card-text>
      <v-card-actions align="center">
        <v-btn color="blue" depressed rounded @click="handleImport"
          >インポート</v-btn
        >
      </v-card-actions>
      <Progress v-show="isUploading" :value="progress" />
      <Success v-if="isSuccess" is-bi @close="visible = false" />
    </v-card>
  </fg-dialog>
</template>

<script>
import Progress from './Progress';
import Success from './Success';
import DialogHeader from '~/components/common/dialog-header/index';
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
    const dataTypeList = [
      '顧客データ（Vertice）',
      '車両データ（Vertice）',
      '顧客データ（ブロードリーフ NSクラウド）',
      '車両データ（ブロードリーフ NSクラウド）',
      '顧客データ（ブロードリーフ NSオンプレ）',
      '車両データ（ブロードリーフ NSオンプレ）',
    ];
    return {
      dataType: dataTypeList[0],
      visible: this.value,
      dataTypeList,
      isUploading: false,
      progress: 0,
      isSuccess: false,
    };
  },
  computed: {
    fileInput() {
      return this.$refs.fileInput;
    },
  },
  watch: {
    value(val) {
      if (val) {
        this.isSuccess = false;
      }
      this.visible = val;
    },
    visible(val) {
      this.$emit('input', val);
    },
  },
  methods: {
    selectFile() {
      this.fileInput.click();
    },
    handleImport() {
      this.isUploading = true;
      this.progress = 0;
      const timer = setInterval(() => {
        if (this.progress >= 100) {
          this.isUploading = false;
          this.isSuccess = true;
          clearInterval(timer);
          return;
        }
        this.progress += 2;
      }, 100);
    },
  },
};
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
