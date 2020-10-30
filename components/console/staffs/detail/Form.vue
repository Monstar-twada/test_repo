<template>
  <div class="staffs-detail-form-container">
    <div class="staffs-detail-form-container_form">
      <div class="staffs-detail-form-container_form_title">
        <h2>スタッフ管理</h2>
      </div>
      <fg-form ref="form" size="mini" label-width="150px">
        <fg-form-item label="所属部署">
          <fg-row gutter="20" type="flex">
            <fg-col span="10">
              <fg-select
                v-model="form.department"
                :items="departments"
              ></fg-select>
            </fg-col>
          </fg-row>
        </fg-form-item>
        <fg-form-item label="写真">
          <fg-image-processor
            :options="options"
            :url="form.img"
            width="80"
            height="80"
            :readonly="true"
            @change="change"
          />
        </fg-form-item>
        <fg-form-item label="氏名">
          <div class="names">
            <p>{{ form.firstname }}</p>
            <p>{{ form.lastname }}</p>
          </div>
        </fg-form-item>
        <fg-form-item label="フリガナ">
          <div class="names">
            <p>{{ form.firstFurigana }}</p>
            <p>{{ form.lastFurigana }}</p>
          </div>
        </fg-form-item>
        <fg-form-item label="管理コンソールID">
          <p>{{ form.consoleId }}</p>
        </fg-form-item>
        <fg-form-item label="権限">
          <fg-radio-group v-model="form.role">
            <fg-radio label="System Admin">System Admin</fg-radio>
            <fg-radio label="Editor">Editor</fg-radio>
            <fg-radio label="Operator">Operator</fg-radio>
          </fg-radio-group>
        </fg-form-item>
        <fg-form-item label="電話番号">
          <p>{{ form.tel }}</p>
        </fg-form-item>
        <fg-form-item label="メールアドレス">
          <p>{{ form.email }}</p>
        </fg-form-item>
      </fg-form>
    </div>

    <div class="staffs-detail-form-container_buttons">
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
        >削除</fg-button
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
      departments: [
        {
          text: 'イノベーション本部',
          value: 'イノベーション本部',
        },
      ],
      form: {
        department: 'イノベーション本部',
        img:
          'https://i.pinimg.com/originals/b9/09/d7/b909d7450a19279f53fb2b86571dcbfe.jpg',
        firstname: '後藤',
        lastname: '寅彦',
        firstFurigana: 'ゴトウ',
        lastFurigana: 'トラヒコ',
        consoleId: 'df1s082829',
        role: 'System Admin',
        tel: '03-3960-7776',
        email: 'aaaa@cars-enjoy.com',
      },
    }
  },
  watch: {},
  methods: {},
}
</script>

<style lang="scss">
.staffs-detail-form-container {
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
    .names {
      display: flex;
      p {
        margin-right: 15px;
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
