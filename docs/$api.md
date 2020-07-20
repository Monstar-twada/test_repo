# this.$api

## post(api, params[, headers])

```javascript
export default {
  created() {
    this.$api.post('/api/customer', {offset: 20, limit: 10})
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.error(err)
      })
  }
}
```

## get(api[, params[, headers]])
