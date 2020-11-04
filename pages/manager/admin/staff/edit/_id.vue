<template>
  <Edit />
</template>

<script>
// import Area from '~/components/common/admin/manager/area/index'
import Edit from '~/components/common/admin/manager/staff/edit/index';

export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Edit,
  },
};
</script>
