<template>
  <div class="breadcrumb-wrapper">
    <fg-breadcrumbs :items="items">
      <template v-slot:default="{ item }">
        <fg-breadcrumbs-item>
          <template v-slot>
            <h4>{{ item.href }}</h4>
          </template>
        </fg-breadcrumbs-item>
      </template>
    </fg-breadcrumbs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'HOME',
          href: '/home',
        },
        {
          text: '御客一覧',
          href: '/customer',
        },
        {
          text: '御客詳細',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.breadcrumb-wrapper {
  width: 100%;
  height: 50px;
  background: $--color-primary-active;
}
</style>
