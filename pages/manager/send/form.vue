<template>
  <div>
    <Form />
  </div>
</template>

<script>
import Form from '~/components/manager/send/form/index'
export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Form,
  },
}
</script>
