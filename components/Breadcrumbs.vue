<template>
  <div class="container">
    <div class="breadcrumbs">
      <v-breadcrumbs :items="breadcrumbs" class="pa-0">
        <template v-slot:divider>
          <v-img :src="require('~/static/breadcrumbs/right.svg')" />
        </template>
      </v-breadcrumbs>
      <v-avatar size="31">
        <v-img :src="require('~/static/breadcrumbs/person.png')" />
      </v-avatar>
    </div>
    <div class="titlepage">
      <v-img
        class="titlepage_logo mr-2"
        :src="require('~/static/breadcrumbs/result.svg')"
      />
      <h1>{{ page }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Breadcrumbs',
  props: {
    breadcrumbs: {
      type: Array,
      default() {
        return []
      },
    },
    page: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss">
.v-breadcrumbs__item {
  color: $white-100 !important;
}
</style>
<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  &_home {
    height: 15px;
    width: 15px;
    &-logo {
      height: 15px;
      width: 15px;
    }
  }
}
.titlepage {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  &_logo {
    margin-top: 3px;
    height: 22px;
    max-width: 22px;
  }
  h1 {
    color: $white-300;
  }
}
</style>
