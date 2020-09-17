<template>
  <div class="matter-index-task-board">
    <div v-for="(item, i) in listOfTasks" :key="i" class="task-container">
      <div class="task-container-header-top">
        <h4>{{ item.title }}</h4>
        <h3>{{ item.subTitle }}</h3>
        <ListUsers :user="item.users" />
      </div>
      <div class="task-container-header-bottom">
        <h3>TASKS</h3>
        <h2>{{ item.tasks.length }}<span>Tickets</span></h2>
      </div>

      <div class="task-cards">
        <TaskCard :task="item.tasks" />
      </div>
      <div class="task-container-footer" @click="loadMore(item.tasks, i)">
        <h3>Load More</h3>
        <h4>もっと表示する</h4>
      </div>
    </div>
  </div>
</template>
<script>
import ListUsers from './list-user/index'
import TaskCard from './task-card/index'
export default {
  name: 'TaskBoard',
  components: {
    ListUsers,
    TaskCard,
  },
  props: {
    boardList: {
      type: [Object, Array],
      default() {
        return {
          total: 0,
        }
      },
    },
  },
  data() {
    return {
      show: [],
      listOfTasks: this.boardList,
      showLess: false,
      taskList: this.task,
    }
  },
  // computed: {
  //   tasks() {
  //     return [...new Set(this.listOfTasks.map((o) => o.tasks))]
  //   },
  // },
  methods: {
    loadMore(task, i) {
      task.push(
        {
          number: '11111',
          owner: '米田智彦',
          car: 'トヨタ プリウス',
          date: '2020/09/20 21:32',
          assignee: [1, 2],
          status: 1,
        },
        {
          number: 'xxxxxx',
          owner: '米田智彦',
          car: 'トヨタ プリウス',
          date: '2020/09/20 21:32',
          assignee: [1, 2, 3],
          status: 2,
        },
        {
          number: 'xxxxxx',
          owner: '米田智彦',
          car: 'トヨタ プリウス',
          date: '2020/09/20 21:32',
          assignee: [1, 2, 3],
          status: 3,
        },
        {
          number: 'xxxxxx',
          owner: '米田智彦',
          car: 'トヨタ プリウス',
          date: '2020/09/20 21:32',
          assignee: [1],
          status: 1,
        },
        {
          number: 'xxxxxx',
          owner: '米田智彦',
          car: 'トヨタ プリウス',
          date: '2020/09/20 21:32',
          assignee: [1],
          status: 2,
        },
        {
          number: 'xxxxxx',
          owner: '米田智彦',
          car: 'トヨタ プリウス',
          date: '2020/09/20 21:32',
          assignee: [1, 2, 3],
          status: 1,
        }
      )
      // console.log(task.push)
    },
  },
}
</script>
<style lang="scss">
.matter-index-task-board {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 20px;
  width: 100%;
}
.task-container {
  width: 20%;
  order: 0;
  flex: 1 1 auto;
  align-self: auto;
  background-color: $--color-white;
  border-radius: 6px;
  height: auto;
  margin-right: 20px;
  height: auto;
  &:last-child {
    margin-right: 0px;
  }
  &-header-top {
    padding: 23px 20px 10px 20px;
    h4 {
      font-size: 14px;
      color: $--color-primary;
    }
    h3 {
      margin-top: 10px;
      font-size: 10px;
      color: $--color-primary-placeholder;
      margin-bottom: 15px;
      font-weight: 400;
    }
  }
  &-header-bottom {
    display: flex;
    border-top: 1px solid $--color-background-hover;
    padding: 5px 20px;
    justify-content: space-between;
    align-items: center;
    h3 {
      color: $--color-primary-placeholder;
      font-weight: 400;
    }
    h2 {
      font-size: 24px;
      color: $--color-primary-placeholder;
      font-weight: 400;
      span {
        margin-left: 5px;
        color: $--color-primary-placeholder;
        font-weight: 400;
        font-size: 10px;
      }
    }
  }
  .task-cards {
    padding: 20px 10px;
    background-color: $--color-background;
    border-radius: 0 0 6px 6px;
    overflow: hidden;
    overflow-y: scroll;
    height: 720px;
  }
  .task-container-footer {
    color: $--color-primary-placeholder;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $--color-background;
    padding-bottom: 20px;
    border-radius: 0 0 6px 6px;
    h3 {
      font-size: 14px;
      font-weight: 400;
    }
    h4 {
      font-size: 9px;
      font-weight: 400;
    }
  }
}
</style>
