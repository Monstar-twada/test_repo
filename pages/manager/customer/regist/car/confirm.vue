<template>
  <ConfirmCar />
</template>

<script>
import ConfirmCar from '~/components/common/customer/regist/car/confirm/index';
export default {
  layout: 'manager',
  middleware: 'authenticated',
  components: {
    ConfirmCar,
  },
};
</script>
