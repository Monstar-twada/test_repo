<template>
  <div>
    <Form10 />
  </div>
</template>

<script>
import Form10 from '~/components/manager/send/form-10/index'
export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Form10,
  },
}
</script>
