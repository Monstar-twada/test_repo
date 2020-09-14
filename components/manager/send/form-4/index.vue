<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      title-image="send.svg"
      :page="page"
      icon-width="30"
    />
    <div class="context">
      <h2>依頼内容を選択してください</h2>
      <div class="context-form">
        <div v-for="(item, i) in iconlist" :key="i">
          <div class="context-form-icon" @click="handleClick($event)">
            <img :src="require(`./img/${item.iconSrc}.svg`)" width="100" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer-button-wrapper">
      <fg-button suffix-icon="arrow-right" border bold width="240px"
        >次へ</fg-button
      >
      <fg-button
        suffix-icon="arrow-right"
        white-transparent
        round
        bold
        width="240px"
        >戻る</fg-button
      >
    </div>
  </div>
</template>
<script>
import Breadcrumbs from '~/components/common/breadcrumbs/index.vue'
export default {
  components: {
    Breadcrumbs,
  },
  props: {
    form: {
      type: Object,
      default: () => {
        return {
          lastName: '',
          firstName: '',
        }
      },
    },
  },
  data() {
    return {
      page: '送客',
      breadcrumbs: [
        {
          text: '送客',
          href: '',
        },
        {
          text: '送客依頼フォーム',
          href: '',
        },
      ],
      iconlist: [
        {
          iconSrc: 'buy',
        },
        {
          iconSrc: 'sale',
        },
        {
          iconSrc: 'inspection',
        },
      ],
    }
  },

  methods: {
    handleClick: (e) => {
      console.log(e)
    },
  },
}
</script>
<style lang="scss" scoped>
.context {
  width: 1000px;
  height: 365px;
  margin: 0 auto;
  background: $--color-white;
  border-radius: 6px;
  color: $--color-primary;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    width: 100%;
    height: 54px;
    line-height: 54px;
    border-bottom: 1px $--color-border solid;
    padding-left: 20px;
  }

  &-form {
    width: 100%;
    height: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;

    &-icon {
      width: 270px;
      height: 144px;
      border: 1px $--color-border solid;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        border: 1px $--color-primary-active solid;
      }
    }
  }
}
.footer-button-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin-top: 10px;
  .fg-button {
    display: flex;
    margin-top: 20px;
  }
}
</style>
