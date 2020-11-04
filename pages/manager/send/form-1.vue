<template>
  <div>
    <Form1 />
  </div>
</template>

<script>
import Form1 from '~/components/manager/send/form-1/index';
export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Form1,
  },
};
</script>
