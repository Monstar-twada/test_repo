<template>
  <div>
    <Detail />
  </div>
</template>

<script>
import Detail from '~/components/manager/send/detail/index'

export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Detail,
  },
}
</script>
