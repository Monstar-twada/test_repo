<template>
  <ul v-if="project.length !== 0" class="projetc-progress">
    <li>
      <img :src="require('./img/play.svg')" width="14" />
    </li>
    <li>
      <img :src="require(`./img/${project[0]}.svg`)" width="50" />
    </li>
    <li :class="!project[1] && !project[2] ? 'disable' : ''">
      <img :src="require('./img/plus.svg')" width="14" />
    </li>
    <li v-if="project[1]">
      <img :src="require(`./img/${project[1]}.svg`)" width="50" />
    </li>
    <li v-if="project[2]">
      <img :src="require(`./img/${project[2]}.svg`)" width="50" />
    </li>
  </ul>
</template>
<script>
export default {
  name: 'ProjectProgress',
  props: {
    project: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
}
</script>
<style lang="scss" scoped>
.projetc-progress {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  li {
    margin-right: 10px;
  }
}
</style>
