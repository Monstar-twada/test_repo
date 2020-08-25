<template>
  <div class="header-user-info-wrapper">
    <div class="avatar-wrapper" @click="avatarClick">
      <img :src="userAvatar" alt @load="imgOnLoad" />
    </div>
    <div v-show="userDropdownVisible" class="user-dropdown-wrapper">
      <UserDropDown />
    </div>
  </div>
</template>

<script>
import UserDropDown from '~/components/common/breadcrumbs/user-info/user-drop-down/index'
export default {
  components: {
    UserDropDown,
  },
  data() {
    return {
      userAvatar: '/common/person_default.svg',
      userDropdownVisible: false,
    }
  },
  beforeDestroy() {
    this.clearTimeout()
    document.removeEventListener('click', this.docClick, false)
  },
  mounted() {
    document.addEventListener('click', this.docClick, false)
  },
  methods: {
    imgOnLoad(e) {
      const el = e.target
      if (el.width > el.height) {
        el.style.width = 'auto'
        el.style.height = '100%'
      }
    },
    mouseLeave() {
      if (!this.userDropdownVisible) return
      this.clearTimeout()
      this.timer = setTimeout(() => {
        this.userDropdownVisible = false
      }, 2000)
    },
    mouseEnter() {
      this.userDropdownVisible = true
      this.clearTimeout()
    },
    clearTimeout() {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
    },
    avatarClick(e) {
      e.stopPropagation()
      this.userDropdownVisible = !this.userDropdownVisible
    },
    docClick() {
      if (!this.userDropdownVisible) return
      this.userDropdownVisible = false
    },
    handleLogout() {
      this.$store.commit('user/signOut', false)
    },
  },
}
</script>

<style lang="scss">
.header-user-info-wrapper {
  position: relative;
  width: 31px;
  height: 31px;
  .avatar-wrapper {
    width: 27px;
    height: 27px;
    border: 2px solid $white-300;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    img {
      width: 100%;
      height: auto;
    }
  }
  .user-dropdown-wrapper {
    position: absolute;
    z-index: 10;
    top: 35px;
    right: 220px;
    width: 490px;
    background: $white-300;
    border-radius: 4px;
    transform: translateX(50%);
    box-shadow: 0 5px 10px rgba(7, 134, 189, 0.3);
    &:before {
      position: absolute;
      z-index: 0;
      top: -3px;
      right: 40px;
      margin-left: -3px;
      content: '';
      width: 6px;
      height: 6px;
      background: $white-300;
      transform: rotate(45deg);
    }
  }
}
</style>
