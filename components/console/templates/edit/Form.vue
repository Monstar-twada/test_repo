<template>
  <div class="template-edit-form-container">
    <div class="template-edit-form-container_form">
      <div class="template-edit-form-container_form_title">
        <h2>送客メール</h2>
      </div>
      <fg-form ref="form" size="mini" label-width="150px">
        <fg-form-item label="件名">
          <div class="subject-checkbox-container">
            <fg-checkbox
              v-model="checkbox.value1"
              class="subject-checkbox-item"
              label="イノベーション本部"
            ></fg-checkbox>
            <fg-checkbox
              v-model="checkbox.value2"
              class="subject-checkbox-item"
              label="カスタマーサクセス"
            ></fg-checkbox>
            <fg-checkbox
              v-model="checkbox.value3"
              class="subject-checkbox-item"
              label="cars広陵"
            ></fg-checkbox>
            <fg-checkbox
              v-model="checkbox.value4"
              class="subject-checkbox-item"
              label="奈良本社"
            ></fg-checkbox>
          </div>
        </fg-form-item>
        <fg-form-item label="本文">
          <fg-input
            v-model="form.content"
            type="textarea"
            :rows="15"
            style="margin-top: 10px"
            placeholder="ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。"
          />
        </fg-form-item>
      </fg-form>
    </div>

    <div class="template-edit-form-container_buttons">
      <fg-button
        suffix-icon="arrow-right"
        bold
        width="220px"
        type="primary"
        @click="handleSubmit"
        >保存</fg-button
      >
      <fg-button
        width="220px"
        suffix-icon="arrow-right"
        border
        bold
        type="primary"
        >戻る</fg-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox: {
        value1: false,
        value2: false,
        value3: false,
        value4: false,
      },
      form: {
        subject: '',
        content: '',
      },
    }
  },
  watch: {},
  methods: {},
}
</script>

<style lang="scss">
.template-edit-form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  &_form {
    width: 100%;
    max-width: 712px;
    background-color: #fff;
    padding: 25px 40px 25px 30px;
    border-radius: 6px;
    &_title {
      margin-bottom: 30px;
      h2 {
        font-size: 18px;
      }
    }
    .subject-checkbox {
      &-container {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 0 15px;
      }
      &-item {
        margin-right: 10px;
        .fg-checkbox-label {
          font-weight: normal;
          font-size: 12px;
        }
      }
    }
  }
  &_buttons {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    button {
      margin-bottom: 20px;
    }
  }
}
</style>
