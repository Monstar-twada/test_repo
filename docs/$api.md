# this.$api

methods: post, get, put, delete, upload

## post(api: string, params?: object, headers?: object): Promise

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

## get(api: string, params?: object, headers?: object): Promise

## put(api: string, params?: object, headers?: object): Promise

## delete(api: string, params?: object, headers?: object): Promise

## upload(file: File/Blob, params?: object): Promise
