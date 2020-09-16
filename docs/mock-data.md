# mock-data

```shell script
# dev manager
$ npm run mock:m
# dev dashboard
$ npm run mock:d
# dev console
$ npm run mock:c
```

## Example

### list 一覧

api: /v1/customers 顧客一覧取得API

```
json file: /static/_mock-data/v1/customers​.json
# or
yaml file: /static/_mock-data/v1/customers​.yml
```

```javascript
this.$api.get('/v1/customers', {offset: 0, limit: 10}).then(res => {
  console.log(res)
}).catch(err => {
  console.error(err)
})
```

#### json file

```json
[
  {
    "customerCode": "string",
    "lastName": "string",
    "firstName": "string",
    "age": 0,
    "phoneNumber": "string",
    "cellphoneNumber": "string",
    "carTotal": 0
  }
]
```

### detail 詳細

api: ​/v1​/customers​/{customerCode} 顧客詳細取得API

```
json file: /static/_mock-data/v1/customers​/20003.json
# or
yaml file: /static/v1/_mock-data/customers​/20003.yml
```

```javascript
this.$api.get('/v1/customers/20003').then(res => {
  console.log(res)
}).catch(err => {
  console.error(err)
})
```

#### json file

```json
{
  "customerCode": "string",
  "facePhoto": "string",
  "lastName": "string",
  "firstName": "string",
   "...": "..."
}
```

