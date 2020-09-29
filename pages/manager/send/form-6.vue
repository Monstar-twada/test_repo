<template>
  <div>
    <Form6 />
  </div>
</template>

<script>
import Form6 from '~/components/manager/send/form-6/index'
export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Form6,
  },
}
</script>
