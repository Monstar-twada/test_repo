<script>
import TabBar from './Bar.vue'
function noop() {}
// const firstUpperCase = (str) => {
//   return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
// }
export default {
  name: 'TabNav',
  components: {
    TabBar,
  },
  inject: ['rootTabs'],
  props: {
    panels: Array,
    currentName: String,
    editable: Boolean,
    onTabClick: {
      type: Function,
      default: noop,
    },
    onTabRemove: {
      type: Function,
      default: noop,
    },
    type: String,
    stretch: Boolean,
  },
  data() {
    return {
      scrollable: false,
      navOffset: 0,
      isFocus: false,
      focusable: true,
    }
  },
  computed: {
    // navStyle() {
    //   const dir = ['top', 'bottom'].includes(this.rootTabs.tabPosition)
    //     ? 'X'
    //     : 'Y'
    //   return {
    //     transform: `translate${dir}(-${this.navOffset}px)`,
    //   }
    // },
    // sizeName() {
    //   return ['top', 'bottom'].includes(this.rootTabs.tabPosition)
    //     ? 'width'
    //     : 'height'
    // },
  },
  updated() {
    this.update()
  },
  mounted() {
    // addResizeListener(this.$el, this.update)
    document.addEventListener('visibilitychange', this.visibilityChangeHandler)
    window.addEventListener('blur', this.windowBlurHandler)
    window.addEventListener('focus', this.windowFocusHandler)
    // setTimeout(() => {
    //   this.scrollToActiveTab()
    // }, 0)
  },
  beforeDestroy() {
    // if (this.$el && this.update) removeResizeListener(this.$el, this.update)
    document.removeEventListener(
      'visibilitychange',
      this.visibilityChangeHandler
    )
    window.removeEventListener('blur', this.windowBlurHandler)
    window.removeEventListener('focus', this.windowFocusHandler)
  },
  methods: {
    // scrollPrev() {
    //     const containerSize = this.$refs.navScroll[
    //       `offset${firstUpperCase(this.sizeName)}`
    //     ]
    //   const currentOffset = this.navOffset
    //   if (!currentOffset) return
    //   const newOffset =
    //     currentOffset > containerSize ? currentOffset - containerSize : 0
    //   this.navOffset = newOffset
    // },
    // scrollNext() {
    //   const navSize = this.$refs.nav[`offset${firstUpperCase(this.sizeName)}`]
    //   const containerSize = this.$refs.navScroll[
    //     `offset${firstUpperCase(this.sizeName)}`
    //   ]
    //   const currentOffset = this.navOffset
    //   if (navSize - currentOffset <= containerSize) return
    //   const newOffset =
    //     navSize - currentOffset > containerSize * 2
    //       ? currentOffset + containerSize
    //       : navSize - containerSize
    //   this.navOffset = newOffset
    // },
    // scrollToActiveTab() {
    //   if (!this.scrollable) return
    //   const nav = this.$refs.nav
    //   const activeTab = this.$el.querySelector('.is-active')
    //   if (!activeTab) return
    //   const navScroll = this.$refs.navScroll
    //   // const isHorizontal = ['top', 'bottom'].includes(this.rootTabs.tabPosition)
    //   const activeTabBounding = activeTab.getBoundingClientRect()
    //   const navScrollBounding = navScroll.getBoundingClientRect()
    // //   const maxOffset = isHorizontal
    // //     ? nav.offsetWidth - navScrollBounding.width
    // //     : nav.offsetHeight - navScrollBounding.height
    //   const currentOffset = this.navOffset
    //   let newOffset = currentOffset
    // //   if (isHorizontal) {
    // //     if (activeTabBounding.left < navScrollBounding.left) {
    // //       newOffset =
    // //         currentOffset - (navScrollBounding.left - activeTabBounding.left)
    // //     }
    // //     if (activeTabBounding.right > navScrollBounding.right) {
    // //       newOffset =
    // //         currentOffset + activeTabBounding.right - navScrollBounding.right
    // //     }
    // //   } else {
    // //     if (activeTabBounding.top < navScrollBounding.top) {
    // //       newOffset =
    // //         currentOffset - (navScrollBounding.top - activeTabBounding.top)
    // //     }
    // //     if (activeTabBounding.bottom > navScrollBounding.bottom) {
    // //       newOffset =
    // //         currentOffset +
    // //         (activeTabBounding.bottom - navScrollBounding.bottom)
    // //     }
    // //   }
    //   newOffset = Math.max(newOffset, 0)
    //   this.navOffset = Math.min(newOffset, maxOffset)
    // },
    update() {
      if (!this.$refs.nav) return
      const sizeName = this.sizeName
      const navSize = this.$refs.nav[sizeName]
      const containerSize = this.$refs.navScroll[sizeName]
      const currentOffset = this.navOffset
      if (containerSize < navSize) {
        const currentOffset = this.navOffset
        this.scrollable = this.scrollable || {}
        this.scrollable.prev = currentOffset
        this.scrollable.next = currentOffset + containerSize < navSize
        if (navSize - currentOffset < containerSize) {
          this.navOffset = navSize - containerSize
        }
      } else {
        this.scrollable = false
        if (currentOffset > 0) {
          this.navOffset = 0
        }
      }
    },
    changeTab(e) {
      const keyCode = e.keyCode
      let nextIndex
      let currentIndex, tabList
      if ([37, 38, 39, 40].includes(keyCode)) {
        // 左右上下键更换tab
        tabList = e.currentTarget.querySelectorAll('[role=tab]')
        currentIndex = Array.prototype.indexOf.call(tabList, e.target)
      } else {
        return
      }
      if (keyCode === 37 || keyCode === 38) {
        // left
        if (currentIndex === 0) {
          // first
          nextIndex = tabList.length - 1
        } else {
          nextIndex = currentIndex - 1
        }
      } else if (currentIndex < tabList.length - 1) {
        // not last
        nextIndex = currentIndex + 1
      } else {
        nextIndex = 0
      }
      tabList[nextIndex].focus() // 改变焦点元素
      tabList[nextIndex].click() // 选中下一个tab
      this.setFocus()
    },
    setFocus() {
      if (this.focusable) {
        this.isFocus = true
      }
    },
    removeFocus() {
      this.isFocus = false
    },
    visibilityChangeHandler() {
      const visibility = document.visibilityState
      if (visibility === 'hidden') {
        this.focusable = false
      } else if (visibility === 'visible') {
        setTimeout(() => {
          this.focusable = true
        }, 50)
      }
    },
    windowBlurHandler() {
      this.focusable = false
    },
    windowFocusHandler() {
      setTimeout(() => {
        this.focusable = true
      }, 50)
    },
  },
  render(h) {
    const {
      type,
      panels,
      stretch,
      onTabClick,
      changeTab,
      setFocus,
      removeFocus,
    } = this
    // const scrollBtn = scrollable
    //   ? [
    //       <span
    //         class={['el-tabs__nav-prev', scrollable.prev ? '' : 'is-disabled']}
    //         on-click={scrollPrev}
    //       >
    //         <i class="el-icon-arrow-left"></i>
    //       </span>,
    //       <span
    //         class={['el-tabs__nav-next', scrollable.next ? '' : 'is-disabled']}
    //         on-click={scrollNext}
    //       >
    //         <i class="el-icon-arrow-right"></i>
    //       </span>,
    //     ]
    //   : null
    const tabs = this._l(panels, (panel, index) => {
      const tabName = panel.name || panel.index || index
      // const closable = pane.isClosable || editable
      panel.index = `${index}`
      //   const btnClose = closable ? (
      //     <span
      //       class="el-icon-close"
      //       on-click={(ev) => {
      //         onTabRemove(pane, ev)
      //       }}
      //     ></span>
      //   ) : null
      const tabLabelContent = panel.$slots.label || panel.label
      const tabindex = panel.active ? 0 : -1
      return (
        <div
          class={{
            'el-tabs__item': true,
            'is-active': panel.active,
            'is-disabled': panel.disabled,
            'is-focus': this.isFocus,
          }}
          id={`tab-${tabName}`}
          key={`tab-${tabName}`}
          aria-controls={`panel-${tabName}`}
          role="tab"
          aria-selected={panel.active}
          ref="tabs"
          tabindex={tabindex}
          refInFor
          on-focus={() => {
            setFocus()
          }}
          on-blur={() => {
            removeFocus()
          }}
          on-click={(ev) => {
            removeFocus()
            onTabClick(panel, tabName, ev)
          }}
          //   on-keydown={(ev) => {
          //     if (closable && (ev.keyCode === 46 || ev.keyCode === 8)) {
          //       onTabRemove(pane, ev)
          //     }
          //   }}
        >
          {tabLabelContent}
        </div>
      )
    })
    return (
      <div class="el-tabs__nav-wrap">
        <div class={['el-tabs__nav-scroll']} ref="navScroll">
          <div
            class={[
              'el-tabs__nav',
              `is-${this.rootTabs.tabPosition}`,
              stretch && ['top', 'bottom'].includes(this.rootTabs.tabPosition)
                ? 'is-stretch'
                : '',
            ]}
            ref="nav"
            role="tablist"
            on-keydown={changeTab}
          >
            {!type ? <tab-bar tabs={panels}></tab-bar> : null}
            {tabs}
          </div>
        </div>
      </div>
    )
  },
}
</script>
