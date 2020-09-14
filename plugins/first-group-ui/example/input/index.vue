<template>
  <fg-form class="example-input-wrapper" label-position="top">
    <fg-form-item label="normal">
      <fg-input v-model="inputValue1" placeholder="入力ください" clearable />
    </fg-form-item>
    <fg-form-item label="inline">
      <fg-input
        v-model="inputValue1"
        placeholder="入力ください"
        clearable
        inline
      />
      <fg-input
        v-model="inputValue1"
        placeholder="入力ください"
        clearable
        inline
      />
      <fg-input
        v-model="inputValue1"
        placeholder="入力ください"
        clearable
        inline
      />
    </fg-form-item>

    <fg-form-item label="medium :length=10">
      <fg-input
        v-model="inputValue12"
        placeholder="入力ください"
        clearable
        size="medium"
        :length="10"
      />
    </fg-form-item>

    <fg-form-item label="unit=万円">
      <fg-input
        v-model="unitValue"
        width="70%"
        placeholder="年収"
        clearable
        unit="万円"
        type="number"
      />
    </fg-form-item>

    <fg-form-item label='custom-formatter prefix-text="¥" unit="円"'>
      <fg-input
        v-model="unitValue2"
        width="70%"
        placeholder="自賠責保険"
        clearable
        prefix-text="¥"
        unit="円"
        :custom-formatter="customFormatter"
      />
    </fg-form-item>

    <fg-form-item
      label='prefix-icon=edit suffix-icon=car :offset-left="12" :offset-right="30"'
    >
      <fg-input
        v-model="car"
        placeholder="prefix-icon, suffix-icon"
        suffix-icon="car-line"
        prefix-icon="edit"
        :offset-left="12"
        :offset-right="30"
      />
    </fg-form-item>

    <fg-form-item label="password suffix-icon=eye :offset-right=30">
      <fg-input
        v-model="password"
        placeholder="password"
        suffix-icon="eye"
        :suffix-icon-color="showPassword ? '#1E5199' : '#DFE6F0'"
        :type="showPassword ? 'text' : 'password'"
        :offset-right="30"
        @click:suffix-icon="showPassword = !showPassword"
      />
    </fg-form-item>

    <fg-form-item label="password v-slot:suffix :offset-right=30">
      <fg-input
        v-model="password2"
        placeholder="password"
        :offset-right="30"
        :type="showPassword2 ? 'text' : 'password'"
      >
        <template v-slot:suffix>
          <fg-icon
            name="eye"
            :color="showPassword2 ? '#1E5199' : '#DFE6F0'"
            @click="showPassword2 = !showPassword2"
          ></fg-icon>
        </template>
      </fg-input>
    </fg-form-item>

    <fg-form-item label="small">
      <fg-input
        v-model="inputValue3"
        placeholder="入力ください"
        clearable
        size="small"
      />
    </fg-form-item>

    <fg-form-item label="mini">
      <fg-input
        v-model="inputValue4"
        placeholder="入力ください"
        clearable
        size="mini"
      />
    </fg-form-item>

    <fg-form-item label="disabled">
      <fg-input v-model="inputValue5" placeholder="入力ください" disabled />
    </fg-form-item>

    <fg-form-item label="readonly">
      <fg-input v-model="inputValue6" placeholder="入力ください" disabled />
    </fg-form-item>

    <fg-form-item label="round">
      <fg-input
        v-model="inputValue7"
        placeholder="入力ください"
        round
        clearable
      />
    </fg-form-item>

    <fg-form-item label="textarea">
      <fg-input
        v-model="inputValue8"
        placeholder="入力ください"
        type="textarea"
        clearable
      />
    </fg-form-item>

    <fg-form-item label="resizable">
      <fg-input
        v-model="inputValue9"
        placeholder="resizable"
        type="textarea"
        resizable
      />
    </fg-form-item>

    <fg-form-item label=':rows="2" :length="30"'>
      <fg-input
        v-model="inputValue10"
        placeholder="入力ください"
        type="textarea"
        clearable
        :rows="2"
        :length="30"
        width="340px"
      />
    </fg-form-item>
  </fg-form>
</template>

<script>
export default {
  data() {
    return {
      inputValue1: '',
      inputValue12: 'length',
      inputValue2: '',
      inputValue3: 'Small Size',
      inputValue4: '',
      inputValue5: 'disabled',
      inputValue6: 'readonly',
      inputValue7: 'round',
      inputValue8: 'textarea',
      showPassword: false,
      showPassword2: false,
      password: '123456789',
      password2: '',
      car: '',
      unitValue: '',
      unitValue2: '',
      inputValue9: '',
      inputValue10: 'テキストテキストテキストテキストテキストテキストテキスト',
    }
  },
  watch: {
    inputValue1(val) {
      console.log(val)
    },
  },
  methods: {
    customFormatter(value) {
      return toCommaNumber(value, true)
    },
  },
}

function toCommaNumber(value, keepDecimalPlaces = false) {
  if (!value) return value
  const arr = value.toString().split('.')
  const integerPartArray = arr[0].split('').reverse()
  const result = []
  for (let i = 0; i < integerPartArray.length; i++) {
    if (i && i % 3 === 0) {
      result.push(',')
    }
    result.push(integerPartArray[i])
  }
  arr[0] = result.reverse().join('')
  return keepDecimalPlaces ? arr.join('.') : arr[0]
}
</script>

<style lang="scss">
.example-input-wrapper {
  .fg-form-item__content {
    .fg-input {
      flex: 1;
    }
  }
}
</style>
