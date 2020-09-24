# this.$api

methods: post, get, put, delete, upload

## post(api: string, params?: object, headers?: object): Promise

```javascript
export default {
  created() {
    this.$api.post('/v1/customer', {offset: 20, limit: 10}).then(res => {
      console.log(res)
    }).catch(err => {
      console.error(err)
    })
  }
}
```

## get(api: string, params?: object, headers?: object): Promise

```javascript
export default {
  created() {
    this.$api.get('/v1/customer').then(res => {
      console.log(res)
    }).catch(err => {
      console.error(err)
    })
  }
}

## put(api: string, params?: object, headers?: object): Promise

```javascript
export default {
  created() {
    this.$api.put('/v1/customer', params).then(res => {
      console.log(res)
    }).catch(err => {
      console.error(err)
    })
  }
}
```

## delete(api: string, params?: object, headers?: object): Promise

```javascript
export default {
  created() {
    this.$api.delete('/v1/customer', params).then(res => {
      console.log(res)
    }).catch(err => {
      console.error(err)
    })
  }
}
```

## upload(file: File/Blob, params?: object): Promise

```javascript
export default {
  created() {
    this.$api.upload(file, {}).then(res => {
      console.log(res)
    }).catch(err => {
      console.error(err)
    })
  }
}
```