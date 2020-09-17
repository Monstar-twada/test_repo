<template>
  <div class="fg-tabs">
    <ul ref="tabsItems" role="tablist" class="fg-tabs-header">
      <li
        v-for="(tab, i) in tabs"
        v-show="tab.isVisible"
        :key="i"
        :class="{ 'is-active': tab.isActive, 'is-disabled': tab.isDisabled }"
        class="fg-tabs-header-item"
        role="presentation"
      >
        <a
          :aria-controls="tab.hash"
          :aria-selected="tab.isActive"
          class="tabs-component-tab-a"
          role="tab"
          @click="selectTab(tab.hash, $event)"
        >
          {{ tab.header }}
        </a>
      </li>
      <div ref="line" class="__line" />
    </ul>
    <div class="tabs-panels">
      <slot />
    </div>
  </div>
</template>

<script>
// import expiringStorage from '../expiringStorage'
export default {
  name: 'FgTabs',
  props: {},
  data: () => ({
    tabs: [],
    activeTabHash: '',
    activeTabIndex: 0,
    lastActiveTabHash: '',
  }),
  // computed: {
  //   // storageKey() {
  //   //   return `vue-tabs-component.cache.${window.location.host}${window.location.pathname}`
  //   // },
  // },
  created() {
    this.tabs = this.$children
  },
  mounted() {
    if (this.tabs.length) {
      this.selectTab(this.tabs[0].hash)
    }
  },
  methods: {
    findTab(hash) {
      return this.tabs.find((tab) => tab.hash === hash)
    },
    selectTab(selectedTabHash, event) {
      const selectedTab = this.findTab(selectedTabHash)
      if (!selectedTab) {
        return
      }
      if (selectedTab.isDisabled) {
        event.preventDefault()
        return
      }
      if (this.lastActiveTabHash === selectedTab.hash) {
        // this.$emit('clicked', { tab: selectedTab })
        return
      }
      this.tabs.forEach((tab) => {
        tab.isActive = tab.hash === selectedTab.hash
      })
      // this.$emit('changed', { tab: selectedTab })
      this.activeTabHash = selectedTab.hash
      this.activeTabIndex = this.getTabIndex(selectedTabHash)
      this.lastActiveTabHash = this.activeTabHash = selectedTab.hash
      this.resetLinePosition()
    },
    // setTabVisible(hash, visible) {
    //   const tab = this.findTab(hash)
    //   if (!tab) {
    //     return
    //   }
    //   tab.isVisible = visible
    //   if (tab.isActive) {
    //     // If tab is active, set a different one as active.
    //     tab.isActive = visible
    //     this.tabs.every((tab, index, array) => {
    //       if (tab.isVisible) {
    //         tab.isActive = true
    //         return false
    //       }
    //       return true
    //     })
    //   }
    // },

    getTabIndex(hash) {
      const tab = this.findTab(hash)
      return this.tabs.indexOf(tab)
    },

    getTabHash(index) {
      const tab = this.tabs.find((tab) => this.tabs.indexOf(tab) === index)

      if (!tab) {
        return
      }

      return tab.hash
    },

    getActiveTab() {
      return this.findTab(this.activeTabHash)
    },

    getActiveTabIndex() {
      return this.getTabIndex(this.activeTabHash)
    },

    resetLinePosition() {
      this.$nextTick(() => {
        const tabsItems = this.$refs.tabsItems.querySelectorAll('li')
        const index = this.tabs.findIndex((tab) => tab.isActive)
        const el = tabsItems[index]
        if (!el) return
        this.$refs.line.style.width = el.offsetWidth + 'px'
        this.$refs.line.style.transform = `translateX(${el.offsetLeft}px)`
      })
    },
  },
}
</script>
<style lang="scss">
.fg-tabs {
  margin: 0;
}

.fg-tabs-header {
  border-radius: 6px;
  margin-bottom: 5px;
  border: 0;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  position: relative;

  .__line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    transition: all 0.2s ease-in-out;
    background: $--color-white;
  }
}
.fg-tabs-header li {
  border: 0;
  display: flex;
  justify-content: flex-start;
  color: $--color-white;
  font-size: 14px;
  list-style: none;
  margin: 0 20px;
  position: relative;
}

.fg-tabs-header.is-disabled * {
  color: #cdcdcd;
  cursor: not-allowed !important;
}

.fg-tabs-header li a {
  align-items: center;
  color: inherit;
  display: flex;
  padding: 10px 0;
  text-decoration: none;
}
</style>
