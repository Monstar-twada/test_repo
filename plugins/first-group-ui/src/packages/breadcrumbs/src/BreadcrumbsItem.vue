<template>
  <div class="fg-breadcrumb-item">
    <span
      ref="link"
      :class="['fg-breadcrumb-item-inner', item.href ? 'is-link' : '']"
      role="link"
    >
      <slot></slot>
    </span>
    <i v-if="!finalFlg" class="icon-divider" />
  </div>
</template>
<script>
export default {
  name: 'FgBreadcrumbsItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    finalFlg: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    const link = this.$refs.link
    link.setAttribute('role', 'link')
    link.addEventListener('click', (_) => {
      const { item, $router } = this
      if (!item.link || !$router) return
      $router.replace(item.link)
    })
  },
}
</script>
<style lang="scss" scoped>
.fg-breadcrumb-item {
  font-size: 14px;
  color: $--color-background;

  .is-link {
    cursor: pointer;
  }
}

.icon-divider {
  margin: 0 8px;
  display: inline-block;
  width: 7px;
  height: 11px;
  background: url('./img/right.svg') no-repeat 0 0;
}
</style>
