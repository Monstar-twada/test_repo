# DialogHeader

### Import

```javascript
import DialogHeader from '~/components/common/dialog-header/index'
```

### Property

|property|type|remark|
|:--|:--|:--|
|title|String|Dialog Title|
|close|Function|Event that fires when close icon is pressed. |


### Usage

```html
<template>
   <v-dialog
       v-model="visible"
       scrollable
       max-width="670px"
     >
       <v-card class="customer-import-dialog-card">
         <DialogHeader
           title="Dialog Title"
           @close="visible = false"
         />
       </v-card>
     </v-dialog> 
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  }
}
</script>
```
