<template>
  <Edit />
</template>

<script>
import Edit from '~/components/common/customer/regist/edit/index';

export default {
  layout: 'manager',
  middleware: 'authenticated',
  components: {
    Edit,
  },
};
</script>
