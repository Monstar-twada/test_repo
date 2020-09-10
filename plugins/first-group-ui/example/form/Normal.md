
```html
<fg-form 
  :model="ruleForm" 
  :rules="rules"
  ref="ruleForm" 
  label-width="120px" 
  class="demo-rule-form">
  <fg-form-item label="Event Name" prop="name" required>
    <fg-input v-model="ruleForm.name"></fg-input>
  </fg-form-item>
  <fg-form-item label="Area" prop="region">
    <fg-select v-model="ruleForm.region">
      <fg-option label="Tokyo" value="tokyo"></fg-option>
      <fg-option label="Osaka" value="osaka"></fg-option>
    </fg-select>
  </fg-form-item>
  <fg-form-item label="Date" required>
    <fg-row gutter="20">
      <fg-col span="12">
        <fg-form-item prop="date1">
          <fg-calendar type="date" v-model="ruleForm.date1" show-after-dash clearable />
        </fg-form-item>
      </fg-col>
      <fg-col span="12">
        <fg-form-item prop="date2">
          <fg-date-picker v-model="ruleForm.date2" clearable></fg-date-picker>
        </fg-form-item>
      </fg-col>
    </fg-row>
  </fg-form-item>
  <fg-form-item>
    <fg-button
      type="primary"
      @click="submitForm"
      size="small"
      width="120">Create</fg-button>
    <fg-button @click="resetForm" size="small" width="120" border>Reset</fg-button>
  </fg-form-item>
</fg-form>


<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
        },
        rules: {
          name: [
            { required: true, message: '入力してください', trigger: 'blur' },
            { min: 3, max: 5, message: 'length 3 ~ 5', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '選択してください', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '選択してください', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '選択してください', trigger: 'change' }
          ],
        }
      };
    },
    methods: {
      submitForm() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm() {
        this.$refs.ruleForm.resetFields()
      }
    }
  }
</script>

<style lang="scss">
.demo-rule-form {
  width: 640px;
  max-width: 100%;
}
</style>
```
