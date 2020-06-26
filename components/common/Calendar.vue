<template>
  <div class="calendar">
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :return-value.sync="date"
      transition="scale-transition"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          outlined
          label=""
          append-icon="mdi-calendar-blank-outline"
          readonly
          v-bind="attrs"
          @click="updateDateValue()"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="date" locale="ja-jp" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu = false">キャンセル</v-btn>
        <v-btn text color="primary" @click="$refs.menu.save(date)">選択</v-btn>
      </v-date-picker>
      <v-icon />
    </v-menu>
  </div>
</template>
<script>
export default {
  name: 'Calendar',
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      date: /* new Date().toISOString().substr(0, 10) */ this.label,
      menu: false,
    }
  },
  watch: {
    label(newVal) {
      this.label = newVal
    },
  },
  methods: {
    updateDateValue() {
      this.date = new Date().toISOString().substr(0, 10)
    },
  },
}
</script>
<style lang="scss">
.calendar {
  .v-text-field--outlined {
    width: 120px !important;
    height: 30px !important;
    margin-top: -1px;
    .v-input__control {
      .v-input__slot {
        min-height: 31px !important;
        margin-bottom: 0 !important;
        border: 1px $gray-100 solid !important;
        padding: 0 4px 0 8px !important;
      }
    }
  }
  .v-text-field--enclosed .v-input__append-inner {
    margin-top: 4px;
  }
  .v-text-field--outlined fieldset {
    width: 120px !important;
    height: 28px !important;
    border: none !important;
    top: 0px !important;
  }
  .v-input input {
    max-height: 28px !important;
    font-size: 12px !important;
    color: $blue-200 !important;
  }
  .v-input__icon {
    width: 16px !important;
    min-width: 16px !important;
  }
  .v-icon.v-icon {
    font-size: 16px;
    color: $blue-200;
  }
}
</style>
<style lang="scss" scoped></style>
