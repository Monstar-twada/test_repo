<template>
  <div>
    <Form7 />
  </div>
</template>

<script>
import Form7 from '~/components/manager/send/form-7/index'
export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Form7,
  },
}
</script>
