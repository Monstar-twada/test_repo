<template>
  <div>
    <Form4 />
  </div>
</template>

<script>
import Form4 from '~/components/manager/send/form-4/index';
export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Form4,
  },
};
</script>
