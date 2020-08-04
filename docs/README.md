# コーディング規約

## JavaScript

|名称|表記例|説明|用途|
|:--|:--|:--|:--|
|キャメルケース|camelCase|最初の単語以外の文字の先頭を大文字。<br>ローワーキャメルケースとも言う。|変数、関数|
|パスカルケース|PascalCase|文字の先頭を常に大文字。<br>アッパーキャメルケースとも言う。|クラス（プログラミングの抽象データ型の方）。<br>`new PascalCase()`|
|コンスタントケース|GLOBAL_OBJECT|すべて大文字、単語をつなげる場合はアンダースコア。|定数、グローバル変数、その他強い意味を持たせたい時。<br>`const PI = 3.1415926535898`|
|プライベート変数|_privateVar|変数の最初にアンダースコア|プライベート変数とメーソッド。|

#### 変数、関数

```javascript
// 変数
let camelCase = 'any string'

let name = 'Tom'

const data = {
    text: 'text',
    value: 1,
    onClick() {
        // do something
    },
    otherProperty: []
}

// 関数
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

#### パスカルケース

コンストラクタ：インスタンス化されるオブジェクト

```javascript
// ES6
class PascalCase {
    constructor(options) {
        this.options = options
        // プライベート変数
        this._privateVar = 0
        this._init()
    }

    doSomething() {
        console.log('do something')
    }

    _init() {
        // initial
    }
}

// instance
let pascalCase = new PascalCase(options)
pascalCase.doSomething() // do something
```

```javascript
// ES5
// コンストラクタ
function PascalCase(options) {
    this.options = options
    // プライベート変数
    this._privateVar = 0
    this._init()
}

PascalCase.prototype = {
    constructor: PascalCase,
    doSomething: function() {
        console.log('do something')
    },
    // プライベートメーソッド
    _init() {
        // initial
    }
}

// instance
let pascalCase = new PascalCase(options)
pascalCase.doSomething() // do something
```

#### コンスタントケース

```javascript
const PI = 3.1415926

const STATE_SUCCESS = 'STATE_SUCCESS'
const STATE_FAILED = 'STATE_FAILED'
```

#### スネークケース

apiで返却されるjson objectのkey

```json
{
    "user_name": "Tom"
}
```

## Css

英字小文字（`a-z`）、アラビア数字（`0-9`）、ハイフン（`-`）、アンダーバー（`_`）のみ

#### class="class-name"

```css
.page-name-wrapper {

}
```

## Html

#### id="camelCase"

https://google.github.io/styleguide/htmlcssguide.html

## File and Directory

英字小文字（`a-z`）、アラビア数字（`0-9`）、ハイフン（`-`）のみ

```bash
# file
icon-arrow.svg
# directory
/static/img
/message-eidt-dialog/
```

#### 特例

React/Vue Component (パスカルケース)

> コンポーネントは実際にはコンストラクタ（constructor）である

```bash
# react component
/ReactComponent.jsx
# vue component
/VueComponent.vue
```

## 略語

```javascript
// js
```

```scss
// css
// ...
```

## 参考

https://qiita.com/buchiya4th/items/127282088f5a9ad56152

https://qiita.com/pugiemonn/items/964203782e1fcb3d02c3#html-%E3%81%A8-css-%E3%82%92%E6%9B%B8%E3%81%8F%E3%81%A8%E3%81%8D%E3%81%AB%E5%A4%A7%E5%88%87%E3%81%AA%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%882%E7%82%B9
