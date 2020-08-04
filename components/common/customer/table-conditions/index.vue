<template>
  <div class="customer-search-bar-wrapper">
    <v-row>
      <v-col cols="2">
        <Input
          v-model="form.name"
          placeholder="顧客苗字"
          clearable
          text-size="mini"
        />
      </v-col>
      <v-col cols="2">
        <GlobalSelector placeholder="顧客ランク" text-size="mini" clearable />
      </v-col>
      <v-col cols="2">
        <GlobalSelector placeholder="担当店舗" text-size="mini" clearable />
      </v-col>
      <v-col cols="2">
        <GlobalSelector placeholder="担当者" text-size="mini" clearable />
      </v-col>
      <v-col cols="2">
        <GlobalSelector
          v-model="form.maker"
          placeholder="メーカー"
          :options="manufacturers"
          text-size="mini"
          clearable
        />
      </v-col>
      <v-col cols="2">
        <GlobalSelector
          v-model="form.class"
          :options="carModels"
          placeholder="車種"
          text-size="mini"
          clearable
        />
      </v-col>
      <v-col cols="2">
        <Input
          v-model="form.vin"
          placeholder="登録ナンバー"
          clearable
          text-size="mini"
        />
      </v-col>
      <v-col cols="2">
        <GlobalCalendar
          v-model="form.firstRegistrationDateFrom"
          placeholder="初度登録年月 自"
          text-size="mini"
          readonly
          clearable
          type="month"
          show-dash
        />
      </v-col>
      <v-col cols="2">
        <GlobalCalendar
          v-model="form.firstRegistrationDateTo"
          placeholder="初度登録年月 至"
          text-size="mini"
          readonly
          clearable
          type="month"
        />
      </v-col>
      <v-col cols="2">
        <GlobalCalendar
          v-model="form.inspectionExpirationDateFrom"
          placeholder="車検満了年月 自"
          text-size="mini"
          readonly
          clearable
          show-dash
        />
      </v-col>
      <v-col cols="2">
        <GlobalCalendar
          v-model="form.inspectionExpirationDateTo"
          placeholder="車検満了年月 至"
          text-size="mini"
          readonly
          clearable
        />
      </v-col>
    </v-row>
    <button class="__btn" @click="search" />
  </div>
</template>

<script>
import { getManufacturerList } from '../manufacturers'
import Input from './Input.vue'
import GlobalSelector from '~/components/common/global-selector/index'
import GlobalCalendar from '~/components/common/global-calendar/index'
export default {
  components: {
    Input,
    GlobalSelector,
    GlobalCalendar,
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
    'form.name'(val) {
      console.log(val)
    },
  },
  methods: {
    search() {
      this.$emit('change', this.form)
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
