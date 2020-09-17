
```html
<fg-form 
  ref="form" 
  label-width="120px" >
  <fg-form-item label="Event Name" required>
    <fg-input v-model="form.name"></fg-input>
  </fg-form-item>
  <fg-form-item label="Area">
    <fg-select v-model="form.region" :items="[{text: 'Tokyo'}, {text: 'Osaka'}]">
    </fg-select>
  </fg-form-item>
  <fg-form-item label="Date" required>
    <fg-row gutter="20">
      <fg-col span="12">
        <fg-form-item>
          <fg-calendar type="date" v-model="form.date1" show-after-dash clearable />
        </fg-form-item>
      </fg-col>
      <fg-col span="12">
        <fg-form-item>
          <fg-date-picker v-model="form.date2" clearable></fg-date-picker>
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
  </fg-form-item>
</fg-form>


<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
        },
      };
    },
    methods: {
      submitForm() {
        console.log('submit')
      },
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
