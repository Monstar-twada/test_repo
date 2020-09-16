### validate

```html
<fg-calendar :validators="customValidate"></fg-calendar>

<script >
function validateFn(value, callback) {
  if (value !== '2020/09/12') {
    throw new Error('throw Error test, value = ' + value)
  }
  callback()
}
export default {
  data() {
    return {
      customValidate: [
        { validator: validateFn, trigger: 'blur' }
      ]
    }
  }
}
</script>
```
