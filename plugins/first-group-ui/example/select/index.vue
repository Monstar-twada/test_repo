<template>
  <div class="example-select-wrapper">
    <h3>normal</h3>
    <div>
      <fg-select v-model="selectValue1" :items="options1" />
    </div>

    <h3>inline</h3>
    <div>
      <fg-select v-model="selectValue1" :items="options1" inline />
      <fg-select v-model="selectValue1" :items="options1" inline />
      <fg-select v-model="selectValue1" :items="options1" inline />
    </div>

    <h3>clearable</h3>
    <div>
      <fg-row gutter="20">
        <fg-col :span="12">
          <fg-select v-model="selectValue3" :items="options2" clearable />
        </fg-col>
        <fg-col :span="12">
          <fg-select
            v-model="selectValue3"
            :items="options2"
            clearable
            width="70%"
            unit="unit"
          />
        </fg-col>
      </fg-row>
    </div>

    <h3>popup-position=left|right</h3>
    <div>
      <fg-row gutter="20">
        <fg-col :span="12">
          <fg-select
            v-model="selectValue3"
            :items="options2"
            clearable
            popup-position="right"
          />
        </fg-col>
        <fg-col :span="12">
          <fg-select
            v-model="selectValue3"
            :items="options2"
            clearable
            width="70%"
            unit="unit"
            popup-position="left"
          />
        </fg-col>
      </fg-row>
    </div>

    <h3>disabled</h3>
    <div>
      <fg-select v-model="selectValue1" :items="options1" disabled />
    </div>

    <h3>selectValue100</h3>
    <div>
      <fg-select v-model="selectValue100" :items="options100" />
    </div>

    <h3>filterable</h3>
    <div>
      <fg-select v-model="filterValue" :items="filterItems" filterable />
    </div>

    <h3>filterable clearable</h3>
    <div>
      <fg-select
        v-model="filterValue2"
        :items="filterItems"
        filterable
        clearable
      />
    </div>

    <h3>filterable custom-filter</h3>
    <div>
      <fg-select
        v-model="filterValue2"
        :items="filterItems"
        filterable
        :custom-filter="customFilter"
      />
    </div>

    <h3>theme:light-blue, size:medium, item-prefix: '- '</h3>
    <div>
      <fg-select
        v-model="selectValue1"
        :items="options1"
        theme="light-blue"
        size="medium"
        item-prefix="- "
        clearable
      />
    </div>

    <h3>theme:light-blue, slot:prefix :offset-left="22"</h3>
    <div>
      <fg-select
        v-model="selectValue1"
        :items="options1"
        theme="light-blue"
        size="medium"
        item-prefix="- "
        clearable
        :offset-left="22"
      >
        <template v-slot:prefix>
          <img :src="iconShop" alt="" style="margin-right: 5px" />
        </template>
      </fg-select>
    </div>

    <h3>theme="transparent"</h3>
    <div class="transparent-wrapper">
      <fg-select v-model="selectValue2" :items="options2" theme="transparent" />
    </div>

    <h3>size:medium</h3>
    <div>
      <fg-select v-model="selectValue2" :items="options2" size="medium" />
    </div>

    <h3>size:small</h3>
    <div>
      <fg-select v-model="selectValue1" :items="options1" size="small" />
    </div>

    <h3>size:mini</h3>
    <div>
      <fg-select v-model="selectValue1" :items="options1" size="mini" />
    </div>

    <h3>popup-position=right|left</h3>
    <fg-row gutter="20">
      <fg-col :span="12">
        <fg-select
          v-model="selectValue3"
          :items="options2"
          clearable
          popup-position="right"
        />
      </fg-col>
      <fg-col :span="12">
        <fg-select
          v-model="selectValue3"
          :items="options2"
          clearable
          width="70%"
          unit="unit"
          popup-position="left"
        />
      </fg-col>
    </fg-row>

    <h3>popup-position=left|right</h3>
    <fg-row gutter="20">
      <fg-col :span="12">
        <fg-select
          v-model="selectValue3"
          :items="options2"
          clearable
          popup-position="left"
        />
      </fg-col>
      <fg-col :span="12">
        <fg-select
          v-model="selectValue3"
          :items="options2"
          clearable
          popup-position="right"
        />
      </fg-col>
    </fg-row>
  </div>
</template>

<script>
import iconShop from './img/shop.svg'
export default {
  data() {
    const list = [
      {
        title: '営業管理',
      },
      {
        text: 'cars全店',
        value: 1,
      },
      {
        text: '関西エリア',
        value: 2,
      },
      {
        text: '関東エリア',
        value: 3,
      },
      {
        title: '店舗管理',
      },
      {
        text: 'cars奈良中央',
        value: 5,
      },
      {
        text: 'cars大阪',
        value: 6,
      },
      {
        text: 'cars足立',
        value: 7,
      },
      {
        text: 'cars天理',
        value: 8,
      },
    ]
    const options100 = new Array(50).fill({}).map(() => {
      return {
        text: Math.random().toString(),
        value: Math.random().toString(),
      }
    })
    return {
      iconShop,
      selectValue1: 7,
      options1: [...list],
      filterValue: 6,
      filterValue2: '',
      filterItems: list.filter((item) => !item.title),
      selectValue2: '',
      options2: [
        {
          text: 'cars全店',
          value: 1,
        },
        {
          text: '関西エリア',
          value: 2,
        },
        {
          text: '関東エリア',
          value: 3,
          disabled: true,
        },
        {
          text: 'cars奈良中央',
          value: 5,
        },
        {
          text: 'cars大阪',
          value: 6,
        },
        {
          text: 'cars足立',
          value: 7,
        },
        {
          text: 'cars天理',
          value: 8,
        },
      ],
      selectValue3: 2,
      selectValue100: '',
      options100,
    }
  },
  methods: {
    customFilter(value, item, i) {
      return i % 3 === 0
    },
  },
}
</script>

<style lang="scss">
.example-select-wrapper {
  list-style: none;
  dt,
  dd {
    margin: 0;
  }
  dt {
    padding: 30px 0 10px;
  }
  .transparent-wrapper {
    padding: 20px;
    background: $--color-primary-active;
  }
}
</style>
