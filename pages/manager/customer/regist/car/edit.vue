<template>
  <EditCar />
</template>

<script>
import EditCar from '~/components/common/customer/regist/car/edit/index';
export default {
  layout: 'manager',
  middleware: 'authenticated',
  components: {
    EditCar,
  },
};
</script>
