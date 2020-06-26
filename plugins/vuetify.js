import Vue from 'vue'
import Vuetify from 'vuetify'

const MY_ICONS = {
  //   calendar:
  //     '<v-img :src="' + require('~/static/common/icon-calendar.svg') + '" />',
}

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    values: MY_ICONS,
  },
})
