<template>
  <v-dialog v-model="visible" persistent max-width="700px">
    <v-card class="admin-staff-index-dialog-container">
      <DialogHeader title="スタッフ追加" @close="visible = false" />
      <div class="body-wrapper">
        <fg-form label-width="180px">
          <fg-form-item label="メールアドレス">
            <fg-input placeholder="user@cars-enjoy.com"></fg-input>
          </fg-form-item>
          <fg-form-item label="初期パスワード">
            <fg-input type="password" placeholder="パスワード"></fg-input>
          </fg-form-item>
          <fg-form-item label="初期パスワード(確認)">
            <fg-input type="password" placeholder="パスワード確認"></fg-input>
          </fg-form-item>
        </fg-form>
      </div>
      <div class="footer-wrapper">
        <fg-button type="primary" width="240px" @click="save">追加</fg-button>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import DialogHeader from '~/components/common/dialog-header/index'
export default {
  components: {
    DialogHeader,
  },
  props: {
    value: Boolean,
  },
  data() {
    return {
      carModel: '',
      visible: this.value,
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
  methods: {
    save() {
      this.visible = false
    },
  },
}
</script>

<style lang="scss">
.admin-staff-index-dialog-container {
  position: relative;
  .body-wrapper {
    margin: 0 0;
    color: $--color-primary;
    overflow: hidden;
    font-size: 14px;
    .fg-form {
      .fg-form-item {
        padding: 20px 40px;
        margin-bottom: 0;
        border-bottom: 1px solid $--color-background-hover;
        .fg-form-item__label {
          font-weight: normal;
        }
      }
    }
  }
  .footer-wrapper {
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0 27px;
  }
}
</style>
