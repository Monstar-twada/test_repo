# this.$api

methods: post, get, put, delete

## post(api, params[, headers])

```javascript
export default {
  created() {
    this.$api.post('/v1/customer', {offset: 20, limit: 10})
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })
  }
}
```

## get(api[, params[, headers]])

## put(api[, params[, headers]])

## delete(api[, params[, headers]])
