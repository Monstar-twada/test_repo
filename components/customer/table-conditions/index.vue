<template>
  <div class="customer-search-bar-wrapper">
    <v-row>
      <v-col cols="2">
        <Input v-model="form.name" placeholder="顧客苗字" />
      </v-col>
      <v-col cols="2">
        <GlobalSelector placeholder="顧客ランク" />
      </v-col>
      <v-col cols="2">
        <GlobalSelector placeholder="担当店舗" />
      </v-col>
      <v-col cols="2">
        <GlobalSelector placeholder="担当者" />
      </v-col>
      <v-col cols="2">
        <GlobalSelector
          v-model="form.maker"
          placeholder="メーカー"
          :options="manufacturers"
        />
      </v-col>
      <v-col cols="2">
        <GlobalSelector
          v-model="form.class"
          :options="carModels"
          placeholder="車種"
        />
      </v-col>
      <v-col cols="2">
        <Input v-model="form.vin" placeholder="登録ナンバー" />
      </v-col>
      <v-col cols="2">
        <Calendar
          v-model="form.firstRegistrationDateFrom"
          label="初度登録年月 自"
        />
      </v-col>
      <v-col cols="2">
        <Calendar
          v-model="form.firstRegistrationDateTo"
          label="初度登録年月 至"
        />
      </v-col>
      <v-col cols="2">
        <Calendar
          v-model="form.inspectionExpirationDateFrom"
          label="車検満了年月 自"
        />
      </v-col>
      <v-col cols="2">
        <Calendar
          v-model="form.inspectionExpirationDateTo"
          label="車検満了年月 至"
        />
      </v-col>
    </v-row>
    <button class="__btn" @click="search" />
  </div>
</template>

<script>
import { getManufacturerList } from '../manufacturers'
import Input from './Input.vue'
import Calendar from '~/components/common/Calendar.vue'
import GlobalSelector from '~/components/common/global-selector/index'
export default {
  name: 'Searchbar',
  components: {
    Input,
    Calendar,
    GlobalSelector,
  },
  props: {
    query: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      form: {
        ...this.query,
      },
      manufacturers: [...getManufacturerList()],
    }
  },
  computed: {
    carModels() {
      const data =
        this.manufacturers.find((item) => item.text === this.form.maker) || {}
      return data.child || []
    },
  },
  watch: {
    'form.maker'() {
      this.form.class = ''
    },
  },
  methods: {
    search() {
      this.$emit('change', this.form)
      console.log(JSON.stringify(this.form, null, 2))
    },
  },
}
</script>
<style lang="scss">
.customer-search-bar-wrapper {
  position: relative;
  padding: 10px 60px 10px 20px;
  border-radius: 5px;
  background: $white-300;
  .col {
    padding: 10px;
  }
  .__btn {
    position: absolute;
    bottom: 20px;
    right: 15px;
    outline: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #0786bd url('./img/search-icon.svg') no-repeat center center;
  }
}
</style>
