# HTMLコーディング規約

https://google.github.io/styleguide/htmlcssguide.html

### vue

```html
<template>
  <div>
    <!-- header -->
    <header class="breadcrumbs-container">
      <div>
        <CustomComponent some-property="someValue" />
      </div>
    </header>

    <!-- other component -->
    <!-- property 全て小文字でハイフンを使って組み合わせ -->
    <CustomTable
      :headers="headers"
      :list="list"
      padding="lr10"
      rounded
      head-bottom-border
      head-font-weight-normal
      stripe
      td-space-vertical-line
      body-min-height="300px"
      empty-content="検索結果はありません"
    >
      <tr v-for="(item, i) in list" :key="i">
        <td class="high-light cur" @click="clickRow(item)">
          {{ item.customerId }}
        </td>
        <td class="is-left">
          <TdUserInfo :item="item" />
        </td>
        <td>{{ item.tel }}</td>
        <td>
          <dl style="display: inline-block; text-align: left;">
            <dd>{{ item.maker }}</dd>
            <dd>{{ item.class || '-' }}</dd>
          </dl>
        </td>
        <td>{{ fmtCarNumber(item) }}</td>
        <td>{{ item.inspectionExpirationDate | fmtDate }}</td>
        <td>{{ item.firstRegistrationDate | fmtDate }}</td>
      </tr>
    </CustomTable>

    <footer>
      <!-- footer -->
    </footer>
  </div>
</template>
```

使用禁止

```html
<template>
  <!-- property 単語を分けってない -->
  <Input
    customwidth="120"
    customheight="30"
    customfontsize="10"
  />
</template>
```