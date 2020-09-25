<template>
  <div>
    <Form5 />
  </div>
</template>

<script>
import Form5 from '~/components/manager/send/form-5/index'
export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Form5,
  },
}
</script>
