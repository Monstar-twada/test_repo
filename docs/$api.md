# this.$api

methods: post, get, put, delete, upload

## post

#### Parameters:

```bash
post(api: string, params?: object, headers?: object): Promise
```

#### Example:

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

## get

#### Parameters:

```bash
get(api: string, params?: object, headers?: object): Promise
```

#### Example:

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
```

## put

#### Parameters:

```bash
put(api: string, params?: object, headers?: object): Promise
```

#### Example:

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

## delete

#### Parameters:

```bash
delete(api: string, params?: object, headers?: object): Promise
```

#### Example:

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

## upload

#### Parameters:

```bash
upload(file: File/Blob, params?: object): Promise
```

#### Example:

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
