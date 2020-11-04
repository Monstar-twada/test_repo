<template>
  <div>
    <Form3 />
  </div>
</template>

<script>
import Form3 from '~/components/manager/send/form-3/index';
export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Form3,
  },
};
</script>
