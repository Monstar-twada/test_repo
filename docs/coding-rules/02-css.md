# CSSのコーディング規約

英字小文字（`a-z`）、アラビア数字（`0-9`）、ハイフン（`-`）、アンダーバー（`_`）に限定する

IDの使用禁止

SASS、LESSなどの変数

## Class Name

|名称|表記例|説明|用途|
|:--|:--|:--|:--|
|ケバブケース|チェインケース|kebab-case|文字の単語間にハイフン|

### Pages

```scss
// components/customer/index.vue
.customer-page-container {
    // ...
}
// components/customer/sub-page/index.vue
.customer-sub-page-container {
    // ...
}
```

使用禁止

```scss
// camelCase
.customerPageContainer {}
// PascalCase
.CustomeSubPageComtainer {}
```

### Global Components

```scss
// components/common/global/select/index.vue
.global-select-wrapper {
    // ...
}
```

### Dialog/Card/Pop-ups

```scss
// dialog
.some-component-dialog {}
// card
.some-component-card {}
.some-component-card-wrapper {}
// pop-ups
.some-component-pop-ups {}
.some-component-pop-ups-wrapper {}
```

### Special

```scss
.some-component-wrapper {
    // グローバル .text、.iconなど の影響を避けるため
    .__text {}
    .__icon {}
}
```

### scoped

```html
<style lang="scss" scoped>
// グローバルは対象外
.tab {
    // ...
}
</style>
```

### IDの使用禁止

```scss
// 使用禁止
#app {
   // ...
}
```

## SASS/SCSSの変数

変数

```scss
// global variable グローバル変数
$white-100: #f2f6fa;
$white-200: #fafbfc;
$white-300: #fff;
$black-100: #000;

// local variable ローカル変数
$camelCase: 100px;
```

＠mixin

```scss
// キャメルケース camelCase
@mixin bgImage($url) {
  background-image: url('#{$url}.png');
  @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
    background-image: url('#{$url}@2x.png');
  }
}

// usage
.icon-avatar {
    @include bgImage('./img/avatar');
}
```