<template>
  <div>
    <fg-col :span="span">
      <fg-select
        v-model="form.maker"
        size="small"
        placeholder="メーカー"
        clearable
        filterable
        :items="makerItems"
        :custom-filter="customFilter"
      ></fg-select>
    </fg-col>
    <fg-col :span="span">
      <fg-select
        v-model="form.class"
        size="small"
        placeholder="車種"
        clearable
        :items="carModels"
      ></fg-select>
    </fg-col>
  </div>
</template>

<script>
import { getManufacturerList } from './maker'
import { fmtJpCharacter } from '~/assets/js/full-half-width'
export default {
  props: {
    span: {
      type: [String, Number],
      default: 8,
    },
    form: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      makerItems: [...getManufacturerList()],
    }
  },
  computed: {
    carModels() {
      const data =
        this.makerItems.find((item) => item.text === this.form.maker) || {}
      return data.child || []
    },
  },
  watch: {
    'form.maker'() {
      this.form.class = ''
    },
  },
  methods: {
    customFilter(value, item) {
      const str = fmtJpCharacter(value)
      const reg = new RegExp(`(${str})`, 'i')
      return value ? reg.test(item.text) : true
    },
  },
}
</script>
