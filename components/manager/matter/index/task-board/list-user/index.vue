<template>
  <div class="list-user-container">
    <img v-for="(item, i) in users" :key="i" class="image" :src="userAvatar" />
  </div>
</template>
<script>
export default {
  name: 'ListUser',
  props: {
    users: {
      type: [Object, Array],
      default() {
        return { test1: [1], test2: [2] }
      },
    },
  },
  data() {
    return { userAvatar: '/common/person_default.svg' }
  },
  mounted() {
    console.log(this.user)
  },
  methods: {},
}
</script>

<style lang="scss">
.list-user-container {
  .image {
    width: 25px;
    height: 25px;
    margin-right: -7px;
  }
}
</style>
