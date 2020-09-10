<template>
  <div>
    <div v-for="(tasks, i) in task" :key="i" class="matter-index-task-card">
      <h3>No.{{ tasks.number + ' ' + tasks.owner }}</h3>
      <h4>{{ tasks.owner }}</h4>
      <p>{{ tasks.date }}</p>
      <ListUsers :users="tasks.assignee" />
      <span v-if="tasks.status === 1" class="shaken">車検</span>
      <span v-if="tasks.status === 2" class="sale">売却</span>
      <span v-if="tasks.status === 3" class="purchase">購入</span>
    </div>
  </div>
</template>
<script>
import ListUsers from '../list-user/index'
export default {
  components: {
    ListUsers,
  },
  props: {
    task: {
      type: Array,
      default() {},
    },
    users: {
      type: [Object, Array],
      default() {
        return { users: [1, 2, 3, 4, 5] }
      },
    },
  },
  data() {
    return {
      taskList: this.task,
      status: {
        pink: '車検',
        green: '売却',
        orange: '購入',
      },
    }
  },
}
</script>
<style lang="scss">
.matter-index-task-card {
  height: 120px;
  width: auto;
  border-radius: 6px;
  background-color: #fff;
  padding: 15px 10px;
  position: relative;
  margin-bottom: 20px;
  h3 {
    font-size: 14px;
    color: $--color-primary;
    font-weight: 400;
  }
  h4 {
    font-size: 10px;
    color: $--color-primary-placeholder;
  }
  p {
    font-size: 10px;
    color: $--color-primary-placeholder;
    margin-bottom: 15px;
  }
  span {
    right: 0;
    position: absolute;
    bottom: 15px;
    font-size: 10px;
    color: $--color-white;
    width: 35px;
    text-align: center;
    border-radius: 6px 0px 0px 6px;
  }
  .shaken {
    background-color: $--color-warning;
  }
  .sale {
    background-color: #88d842;
  }
  .purchase {
    background-color: #f98a00;
  }
}
</style>
