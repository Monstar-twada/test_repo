<script>
import TabNav from './Nav.vue'
export default {
  name: 'FgTabs',
  components: {
    TabNav,
  },
  props: {
    type: {
      type: String,
      default: null,
    },
    closable: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Object,
      default: () => {},
    },
    // tabPosition: {
    //   type: String,
    //   default: 'top',
    // },
    // beforeLeave: {
    //   type: Function,
    //   default: (v) => v,
    // },
    stretch: {
      type: Boolean,
      default: false,
    },
  },
  provide() {
    return {
      rootTabs: this,
    }
  },
  data() {
    return {
      currentName: this.value,
      panels: [],
    }
  },
  watch: {
    value(value) {
      this.setCurrentName(value)
    },
    currentName(value) {
      if (this.$refs.nav) {
        this.$nextTick(() => {
          this.$refs.nav.$nextTick((_) => {
            this.$refs.nav.scrollToActiveTab()
          })
        })
      }
    },
  },

  created() {
    if (!this.currentName) {
      this.setCurrentName('0')
    }
    this.$on('tab-nav-update', this.calcPaneInstances.bind(null, true))
  },
  mounted() {
    this.calcPaneInstances()
  },
  updated() {
    this.calcPaneInstances()
  },
  methods: {
    calcPaneInstances(isForceUpdate = false) {
      if (this.$slots.default) {
        const panelSlots = this.$slots.default.filter(
          (vnode) =>
            vnode.tag &&
            vnode.componentOptions &&
            vnode.componentOptions.Ctor.options.name === 'ElTabPane'
        )
        // update indeed
        const panelsContent = panelSlots.map(
          ({ componentInstance }) => componentInstance
        )
        const panelsChanged = !(
          panelsContent.length === this.panels.length &&
          panelsContent.every((pane, index) => pane === this.panels[index])
        )
        if (isForceUpdate || panelsChanged) {
          this.panels = panelsContent
        }
      } else if (this.panels.length !== 0) {
        this.panels = []
      }
    },
    handleTabClick(tab, tabName, event) {
      if (tab.disabled) return
      this.setCurrentName(tabName)
      this.$emit('tab-click', tab, event)
    },
    setCurrentName(value) {
      // const changeCurrentName = () => {
      this.currentName = value
      this.$emit('input', value)
      // }
      // if (this.currentName !== value && this.beforeLeave) {
      //   const before = this.beforeLeave(value, this.currentName)
      //   if (before && before.then) {
      //     before.then(
      //       () => {
      //         changeCurrentName()
      //         this.$refs.nav && this.$refs.nav.removeFocus()
      //       },
      //       () => {
      //         // https://github.com/ElemeFE/element/pull/14816
      //         // ignore promise rejection in `before-leave` hook
      //       }
      //     )
      //   } else if (before !== false) {
      //     changeCurrentName()
      //   }
      // } else {
      //   changeCurrentName()
      // }
    },
  },
  render(h) {
    const {
      type,
      handleTabClick,
      currentName,
      panels,
      tabPosition,
      stretch,
    } = this
    // const newButton =
    //   editable || addable ? (
    //     <span
    //       class="el-tabs__new-tab"
    //       on-click={handleTabAdd}
    //       tabindex="0"
    //       on-keydown={(ev) => {
    //         if (ev.keyCode === 13) {
    //           handleTabAdd()
    //         }
    //       }}
    //     >
    //       <i class="el-icon-plus"></i>
    //     </span>
    //   ) : null
    const navData = {
      props: {
        currentName,
        onTabClick: handleTabClick,
        type,
        panels,
        stretch,
      },
      ref: 'nav',
    }
    // const header = (
    //   <div class={['fg-tabs__header', `is-${tabPosition}`]}>
    //     <tab-nav {...navData}></tab-nav>
    //   </div>
    // )
    // const panelsContent = (
    //   <div class="fg-tabs__content">{this.$slots.default}</div>
    // )
    return h(
      '<div>',
      {
        staticClass: 'fg-tabs g-tabs--border-card',
      },
      [
        <div class={['fg-tabs__header', `is-${tabPosition}`]}>
          <tab-nav {...navData}></tab-nav>
        </div>,
        <div class="fg-tabs__content">{this.$slots.default}</div>,
      ]
    )
  },
}
</script>
