<template>
  <div>
    <Form9 />
  </div>
</template>

<script>
import Form9 from '~/components/manager/send/form-9/index';
export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Form9,
  },
};
</script>
