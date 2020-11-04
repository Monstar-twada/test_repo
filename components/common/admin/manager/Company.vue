<template>
  <div class="admin-company-container-wrapper">
    <LeftWrapper />
    <MiddleWrapper />
    <RightWrapper />
  </div>
</template>

<script>
import LeftWrapper from './company/index/LeftWrapper';
import MiddleWrapper from './company/index/MiddleWrapper';
import RightWrapper from './company/index/RightWrapper';

export default {
  name: 'Company',
  components: {
    LeftWrapper,
    MiddleWrapper,
    RightWrapper,
  },
  data() {
    return {
      currentItem: {},
      headers: [],
    };
  },
  methods: {
    moveToForm() {
      this.$router.push({
        path: `/admin/area/new/`,
      });
    },
    moveToEdit(id) {
      this.$router.push({
        path: `/admin/area/edit/${id}`,
      });
    },
  },
};
</script>

<style lang="scss">
.admin-company-container-wrapper {
  margin-top: 10px;
  width: 100%;
  display: flex;
  .admin-btn {
    cursor: pointer;
  }
  .right-wrapper {
    flex: 0 0 220px;
    background: $--color-white;
    border-radius: 6px;
    height: fit-content;
  }
  .header-wrapper {
    padding: 25px 20px 16px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $--color-background-hover;
    h2 {
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      color: $--color-primary;
    }
  }
}
</style>
