<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
    min-width="120px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        label=""
        prepend-icon=""
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" no-title scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
    </v-date-picker>
  </v-menu>
</template>
<script>
export default {
  name: 'Calendar',
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),
}
</script>
<style lang="scss">
.theme--light.v-input input {
  color: $blue-400 !important;
  border: 1px $gray-100 solid;
}
.v-input input {
  max-height: 30px !important;
  padding-left: 10px !important;
}
.theme--light.v-text-field .v-input__control .v-input__slot:before {
  border: none !important;
}
.v-text-field .v-input__control .v-input__slot .v-text-field__slot {
  width: 120px;
}
</style>

<style lang="scss" scoped>
.v-text-field {
  margin: 0 !important;
  padding: 0 !important;
}
.v-input {
  width: 120px !important;
  height: 30px !important;
  font-size: 12px !important;
  flex: 0 0 auto !important;
}
</style>
