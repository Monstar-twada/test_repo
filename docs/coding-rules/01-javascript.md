# JavaScript Coding Convention

## Naming

下記四つの付け方に限定する

| 名称               | 表記例        | 説明                                                                     | 用途                                                                                 |
| :----------------- | :------------ | :----------------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| キャメルケース     | camelCase     | 最初の単語以外の文字の先頭を大文字。<br>ローワーキャメルケースとも言う。 | 変数、関数                                                                           |
| パスカルケース     | PascalCase    | 文字の先頭を常に大文字。<br>アッパーキャメルケースとも言う。             | クラス（プログラミングの抽象データ型の方）。<br>`new PascalCase()`                   |
| コンスタントケース | GLOBAL_OBJECT | すべて大文字、単語をつなげる場合はアンダースコア。                       | 定数、グローバル変数、その他強い意味を持たせたい時。<br>`const PI = 3.1415926535898` |
| プライベート変数   | \_privateVar  | 変数の最初にアンダースコア                                               | プライベート変数とメーソッド。                                                       |

### キャメルケース

`camelCase` 最初の単語以外の文字の先頭を大文字。ローワーキャメルケースとも言う。

**変数**

```javascript
// camel case
let camelCase = 'any string'
// user name
let userName = 'Tom'
// some object
const someObject = {
  // on click
  onClick() {
    // do something
  },
  // other property
  otherProperty: [],
}
```

使用禁止

```javascript
let UserName = 'Tom'
let user_info = {}
// 単語区分してない、読みづらい
let currentwidth = '100px'
let customfontsize = '12px'

const SomeObject = {
  OtherProperty: [],
  InputStyle: {},
}
```

**メソッド**

```javascript
// 動詞 + 名詞 (vt. + n.)
function getUserList() {
  let userList = localStorage.getItem('userList')
  console.log(userList)
}

// check
function isString(str) {
  return typeof str === 'string'
}
```

使用禁止

```javascript
function GetUserList() {
  // ...
}

function getuserlist() {
  // ...
}

function is_number(num) {
  // ...
}

export default {
  computed: {
    // SelectStyle [x]
    SelectStyle() {
      return {
        // customwidth [x]
        '--width': this.customwidth,
      }
    },
  },
}
```

### パスカルケース

`PascalCase` 文字の先頭を常に大文字。アッパーキャメルケースとも言う。

**ES6 で定義(クラス)**

```javascript
class PascalCase {
  constructor() {
    // プライベート変数
    this._privateVar = 0
    this._init()
  }

  // プライベート変数
  _init() {
    // initial
  }

  doSomething() {
    console.log('do something')
  }
}
```

**ES5 で定義(コンストラクタ)**

```javascript
function PascalCase() {
  // プライベート変数
  this._privateVar = 0
  this._init()
}

PascalCase.prototype = {
  constructor: PascalCase,
  // プライベートメーソッド
  _init() {
    // initial
  },
  doSomething: function () {
    console.log('do something')
  },
}
```

**使用 usage**

```javascript
// instance
let pascalCase = new PascalCase()
pascalCase.doSomething()
```

### コンスタントケース

`GLOBAL_OBJECT` すべて大文字、単語をつなげる場合はアンダースコア。定数、グローバル変数、その他強い意味を持たせたい時。

```javascript
const PI = 3.1415926
// state
const STATE_SUCCESS = 'STATE_SUCCESS'
const STATE_FAILED = 'STATE_FAILED'
```

### スネークケース

`snake_case`, 文字の単語間にアンダーバー。api で返却される json object の key。

この命名規則、使うかどうかサーバー開発チーム次第

```json
{
  "user_name": "Tom",
  "snake_case": "文字の単語間にアンダーバー。"
}
```

## その他

`eslint` と `prettier` に参照

```javascript
export default {
  components: {
    SomeComponent,
  },
  props: {},
  data() {
    return {}
  },
  methods: {
    doSomething() {
      // do something
    },
  },
}
```
