<template>
  <div class="matter-index-task-board">
    <div class="task-container mr20">
      <div class="task-container-header-top">
        <h4>未着手</h4>
        <h3>担当・初回面談日確定前のタスク</h3>
        <div class="avatar-wrapper">
          <img :src="userAvatar" alt @load="imgOnLoad" />
        </div>
      </div>
      <div class="task-container-header-bottom">
        <h3>TASKS</h3>
        <h2>32<span>Open</span></h2>
      </div>
    </div>
    <div class="task-container mr20">
      <div class="task-container-header-top">
        <h4>提案中</h4>
        <h3>条件提示期間中のタスク</h3>
        <div class="avatar-wrapper">
          <img :src="userAvatar" alt @load="imgOnLoad" />
        </div>
      </div>
      <div class="task-container-header-bottom">
        <h3>TASKS</h3>
        <h2>32<span>Open</span></h2>
      </div>
    </div>
    <div class="task-container mr20">
      <div class="task-container-header-top">
        <h4>作業中</h4>
        <h3>成約後のタスク</h3>
        <div class="avatar-wrapper">
          <img :src="userAvatar" alt @load="imgOnLoad" />
        </div>
      </div>
      <div class="task-container-header-bottom">
        <h3>TASKS</h3>
        <h2>32<span>Open</span></h2>
      </div>
    </div>
    <div class="task-container mr20">
      <div class="task-container-header-top">
        <h4>支払処理中</h4>
        <h3>紹介料支払中のタスク</h3>
        <div class="avatar-wrapper">
          <img :src="userAvatar" alt @load="imgOnLoad" />
        </div>
      </div>
      <div class="task-container-header-bottom">
        <h3>TASKS</h3>
        <h2>32<span>Open</span></h2>
      </div>
    </div>
    <div class="task-container">
      <div class="task-container-header-top">
        <h4>完了済</h4>
        <h3>決済が完了し経理処理前のタスク</h3>
        <div class="avatar-wrapper">
          <img :src="userAvatar" alt @load="imgOnLoad" />
        </div>
      </div>
      <div class="task-container-header-bottom">
        <h3>TASKS</h3>
        <h2>32<span>Open</span></h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userAvatar: '/common/person_default.svg',
    }
  },
}
</script>
<style lang="scss">
.matter-index-task-board {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: space-around;
  align-items: flex-start;
  margin-top: 20px;
  .task-container {
    width: 20%;
    order: 0;
    flex: 1 1 auto;
    align-self: auto;
    background-color: white;
    border-radius: 6px;
    height: 1000px;
    &-header-top {
      padding: 23px 20px 10px 20px;
      h4 {
        font-size: 14px;
        color: #1e5199;
      }
      h3 {
        margin-top: 10px;
        font-size: 10px;
        color: #748eb7;
        margin-bottom: 15px;
        font-weight: 400;
      }
    }
    &-header-bottom {
      display: flex;
      border-top: 1px solid #e5edf6;
      padding: 5px 20px;
      justify-content: space-between;
      align-items: center;
      h3 {
        color: #748eb7;
        font-weight: 400;
      }
      h2 {
        font-size: 24px;
        color: #748eb7;
        font-weight: 400;
        span {
          margin-left: 5px;
          color: #748eb7;
          font-weight: 400;
          font-size: 10px;
        }
      }
    }
  }
}
</style>
