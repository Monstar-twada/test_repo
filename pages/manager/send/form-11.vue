<template>
  <div>
    <Form11 />
  </div>
</template>

<script>
import Form11 from '~/components/manager/send/form-11/index';
export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Form11,
  },
};
</script>
