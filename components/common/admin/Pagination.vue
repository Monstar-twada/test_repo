<template>
  <div class="admin-pagination-wrapper">
    <div class="pages">
      <span class="active">1</span>
      <span>2</span>
      <span>3</span>
    </div>
    <div class="button-group">
      <span class="prev-button"><i></i></span>
      <span class="next-button"><i></i></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminPagination',
}
</script>

<style lang="scss">
.admin-pagination-wrapper {
  display: flex;
  align-items: center;
  height: 24px;
  span {
    display: inline-block;
    cursor: pointer;
    color: $blue-100;
    font-size: 10px;
    &:hover {
      opacity: 0.8;
    }
    &.active {
      font-weight: 800;
      &:hover {
        opacity: 1;
      }
    }
    &.disabled {
      cursor: no-drop;
      &:hover {
        opacity: 1;
      }
    }
  }
  .pages {
    margin-right: 10px;
    font-size: 0;
    span {
      margin: 0 2px;
      line-height: 24px;
      width: 18px;
      height: 24px;
      text-align: center;
      font-family: 'Helvetica', Arial;
    }
  }
  .button-group {
    display: flex;
    height: 24px;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 26px;
      height: 22px;
      border: 1px solid $gray-100;
      i {
        position: relative;
        display: inline-block;
        width: 6px;
        height: 6px;
        transform: rotate(135deg);
        &:before,
        &:after {
          position: absolute;
          display: inline-block;
          content: '';
          background: $blue-100;
        }
        &:before {
          left: 0;
          top: 0;
          width: 6px;
          height: 1px;
        }
        &:after {
          left: 0;
          top: 0;
          width: 1px;
          height: 6px;
        }
      }

      &.prev-button {
        border-radius: 50% 0 0 50%;
        i {
          transform: rotate(-45deg);
          margin-left: 3px;
        }
      }

      &.next-button {
        border-radius: 0 50% 50% 0;
        border-left-width: 0;
        i {
          margin-right: 3px;
        }
      }

      &.disabled {
        i {
          &:before,
          &:after {
            background: $gray-200;
          }
        }
      }
    }
  }
}
</style>
