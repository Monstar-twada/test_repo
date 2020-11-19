export const browserMixin = {
  methods: {
    /**
     * Add Browsers Back button Event
     * @param callback
     */
    addWindowPopstateEvent(url, callback) {
      history.pushState(null, null, url)
      window.addEventListener('popstate', callback, false)
    },
    /**
     * Remove Browsers Back button Event
     * @param callback
     */
    removeWindowPopstateEvent(callback) {
      window.removeEventListener('popstate', callback)
    },

    popupConfirm(flg, next, back) {
      if (flg) {
        this.$confirm('入力中のデータが失われます。画面遷移をしますか？', {
          buttons: {
            ok: {
              text: '遷移する',
            },
          },
        })
          .then(() => {
            this.$store.dispatch('popup/setFlg', false)
            next()
          })
          .catch(() => {
            back()
          })
      } else {
        next()
      }
    },
  },
}
