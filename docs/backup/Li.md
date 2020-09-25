# 問題リスト
​
## デザインに関して
​
・色値（Sassの初期値以外の値を使わない）
・透明の場合
​
## Vuetify
・Grid だけを使う（レスポンシブのため）
・他のコンポネートを使用しない
​
## コンポネート
・Input
・Select
・Calendar Select
・Button（size, color)
・Image
​
#### 実装方法
  ```
  コンポネート名
   |-- index.vue　(ロジック処理、API埋め込め)
   |-- /img
   |-- /child-component　(必要な子コンポネート)
  ```
​
#### Theme設定
​
​
​
### 問題
コンポネート事前に分ける
似ているコンポネートまとめて実装する
