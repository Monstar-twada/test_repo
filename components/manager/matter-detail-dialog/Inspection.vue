<template>
  <div class="matter-detail-dialog__inspection">
    <!--担当者-->
    <Principal />
    <!--対象顧客, コメント-->
    <Target />

    <FgCollapse
      v-for="(item, i) in tasks"
      :key="i"
      :index="i"
      :title="item.title"
      :value="statusIndex === i"
      @collapse="handleCollapse"
    >
      <component :is="item.child" />
    </FgCollapse>
  </div>
</template>

<script>
import Principal from './common/Principal'
import Target from './common/Target'
import FgCollapse from './common/collapse/index'
import NotStartTask from './common/tasks/NotStartTask'
import ProposalTask from './inspection/ProposalTask'
import StartedTask from './inspection/StartedTask'
import LoseTask from './common/tasks/LoseTask'
import PaymentTask from './common/tasks/PaymentTask'
export default {
  components: {
    Principal,
    Target,
    FgCollapse,
  },
  data() {
    return {
      statusIndex: 0,
      tasks: [
        {
          title: '未着手中タスク',
          child: NotStartTask,
        },
        {
          title: '提案中タスク',
          child: ProposalTask,
        },
        {
          title: '作業中タスク',
          child: StartedTask,
        },
        {
          title: '見送',
          child: LoseTask,
        },
        {
          title: '支払処理',
          child: PaymentTask,
        },
      ],
    }
  },
  methods: {
    handleCollapse(index, isOpen) {
      if (isOpen) {
        this.statusIndex = index
      }
    },
  },
}
</script>

<style lang="scss"></style>
