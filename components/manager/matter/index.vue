<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="result.svg"
      :page="page"
      task
    />
    <SearchConditions />
    <TaskBoard />
  </div>
</template>

<script>
import SearchConditions from './index/SearchConditions';
import TaskBoard from './index/task-board/index';
import Breadcrumbs from '~/components/common/breadcrumbs/index';
export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Breadcrumbs,
    SearchConditions,
    TaskBoard,
  },
  data: () => ({
    page: '案件管理',
    breadcrumbs: [
      {
        text: '案件管理',
        href: '',
      },
    ],
  }),
};
</script>
<style lang="scss" scoped></style>
