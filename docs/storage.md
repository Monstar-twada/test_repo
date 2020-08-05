# localStorage

## import

```javascript
import { storage } from '~/assets/js/storage'
```

## set(key, value)

```javascript
// save string
storage.set('token', 'ds8ss8f7w6f7a674a4dsf3as58esefs8d77e')
// save object
storage.set('object', {
  id: 10000,
  text: 'text',
  list: [1, 3, 5]
})
```
## get(key)

```javascript
storage.get('token')
// 'ds8ss8f7w6f7a674a4dsf3as58esefs8d77e'

storage.get('object')
// {
//   id: 10000,
//   text: 'text',
//   list: [1, 3, 5]
// }
```

## remove(key)

```javascript
storage.remove('token')
```

## clear()

> clear all cache data the domain localStorage
>
> 該当ドメインの全てlocalStorageデータを削除する
