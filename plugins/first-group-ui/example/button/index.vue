<template>
  <div class="example-button-wrapper">
    <Doc />

    <h2>Example</h2>

    <Warning />

    <fg-form label-position="top">
      <fg-form-item label="default">
        <fg-button>DEFAULT</fg-button>
      </fg-form-item>
      <fg-form-item
        label='type="primary" suffix-icon="arrow-right" bold width="220px"'
      >
        <fg-button type="primary" suffix-icon="arrow-right" bold width="220px"
          >パスワード設定</fg-button
        >
      </fg-form-item>
      <fg-form-item
        label='suffix-icon="arrow-right" type="primary" border bold width="220px"'
      >
        <fg-button
          suffix-icon="arrow-right"
          type="primary"
          border
          bold
          width="220px"
          >Cancel</fg-button
        >
      </fg-form-item>
      <fg-form-item
        label='prefix-icon="google" border bold width="220px" justify="center"'
      >
        <fg-button
          prefix-icon="google"
          border
          bold
          width="220px"
          justify="center"
          >Googleでログイン</fg-button
        >
      </fg-form-item>
      <fg-form-item
        label='disabled type="primary" suffix-icon="arrow-right" width="100%"'
      >
        <fg-button
          type="primary"
          suffix-icon="arrow-right"
          bold
          disabled
          width="100%"
          >Submit</fg-button
        >
      </fg-form-item>
      <fg-form-item
        label='disabled border type="primary" suffix-icon="arrow-right" width="100%"'
      >
        <fg-button
          type="primary"
          suffix-icon="arrow-right"
          border
          bold
          disabled
          width="100%"
          >Cancel</fg-button
        >
      </fg-form-item>
      <fg-form-item label='type="primary" width="100%"'>
        <fg-button type="primary" width="100%">primary width=100%</fg-button>
      </fg-form-item>
      <fg-form-item label='size="small" width="90" border prefix-icon="change"'>
        <fg-button size="small" width="90" border prefix-icon="change">
          車両切替
        </fg-button>
        <fg-button size="small" width="90" border disabled prefix-icon="change">
          車両切替
        </fg-button>
      </fg-form-item>
      <fg-form-item label='width="63" border size="mini" prefix-icon="edit"'>
        <fg-button width="63" border size="mini" prefix-icon="edit">
          編集
        </fg-button>
      </fg-form-item>
      <fg-form-item label='circle border icon="edit"'>
        <fg-button circle border icon="edit" />
        <fg-button circle border icon="plus" />
      </fg-form-item>
      <fg-form-item label='circle type="primary" icon="edit"'>
        <fg-button circle type="primary" icon="edit" />
        <fg-button circle type="primary" icon="magnifier" />
      </fg-form-item>
      <fg-form-item label="">
        <div class="dark-bg">
          <fg-button size="small" width="110" prefix-icon="download">
            エクスポート
          </fg-button>
          <fg-button
            size="small"
            width="110"
            prefix-icon="plus"
            justify="center"
            shadow
          >
            顧客追加
          </fg-button>
        </div>
      </fg-form-item>
    </fg-form>
    <dl class="footer-button-wrapper dark-bg">
      <dt>width="240px" suffix-icon="arrow-right"</dt>
      <dd>
        <fg-button width="240px" suffix-icon="arrow-right">確認</fg-button>
      </dd>
      <dt>width="240px" suffix-icon="arrow-right" white-transparent</dt>
      <dd>
        <fg-button width="240px" suffix-icon="arrow-right" white-transparent
          >戻る</fg-button
        >
      </dd>
    </dl>
  </div>
</template>

<script>
import { customMixin } from '../_app/mixins'
import Doc from './doc.md'
import Warning from './Warning.md'
export default {
  components: {
    Doc,
    Warning,
  },
  mixins: [customMixin],
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.example-button-wrapper {
  .dark-bg {
    background: $--color-primary-active;
    padding: 20px;
  }
  .footer-button-wrapper {
    overflow: hidden;
    text-align: center;
    dt {
      color: rgba(255, 255, 255, 0.8);
      margin-top: 20px;
    }
    dd {
      margin: 10px auto 0;
    }
    .fg-button {
    }
  }
}
</style>
