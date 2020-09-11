<template>
  <fg-dialog
    v-model="visible"
    class="matter-detail-dialog"
    max-width="800px"
    persistent
    header-height="117"
  >
    <template v-slot:header>
      <DetailHeader />
    </template>
    <!--担当者-->
    <Principal />
    <!--依頼元-->
    <Request />
    <!--対象顧客, コメント-->
    <Target />

    <FgCollapse v-model="status1" title="未着手中タスク">
      <UnfinishedTask />
    </FgCollapse>

    <FgCollapse title="提案中タスク">
      <ProposedTask />
    </FgCollapse>

    <FgCollapse title="作業中タスク">
      <WorkingTask />
    </FgCollapse>

    <FgCollapse title="見送">
      <SeeOff />
    </FgCollapse>

    <FgCollapse title="支払処理">
      <PaymentProcessing />
    </FgCollapse>
  </fg-dialog>
</template>

<script>
import DetailHeader from './Header'
import Principal from './Principal'
import Request from './Request'
import Target from './Target'
import FgCollapse from './common/collapse'
import UnfinishedTask from './status-item/UnfinishedTask'
import ProposedTask from './status-item/proposed-task/index'
import WorkingTask from './status-item/WorkingTask'
import SeeOff from './status-item/SeeOff'
import PaymentProcessing from './status-item/PaymentProcessing'
import './status-item/index.scss'
export default {
  components: {
    DetailHeader,
    Principal,
    Request,
    Target,
    FgCollapse,
    UnfinishedTask,
    ProposedTask,
    WorkingTask,
    SeeOff,
    PaymentProcessing,
  },
  data() {
    return {
      visible: true,
      status1: true,
    }
  },
}
</script>

<style lang="scss">
.matter-detail-dialog {
}
</style>
