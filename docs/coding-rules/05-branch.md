# Branch

英字小文字（`a-z`）、アラビア数字（`0-9`）、スラッシュ（`/`）、ハイフン（`-`）に限定する

|名称|表記例|説明|用途|
|:--|:--|:--|:--|
|ケバブケース|チェインケース|kebab-case|文字の単語間にハイフン|

### Branch

|インスタンス|ブランチ|説明、指示、メモ|
|:--|:--|:--|
|Stable|develop|ワーキングおよびバグ修正からのマージを受け入れます|
|Working|master|機能/問題と修正からのマージを受け入れます|
|Features/Issues|feature/*|常にHEAD of Workingから分岐する|
|Bug|bug/*|常に開発から分岐|
|Version|`version/1.2.x` `version/alpha`||
|Release|release/version||

例：

```bash
# feature
feature/login
feature/about-page

# bug
bug/dt-99
# commit: fix bug#DT-99

# release
release/v1.1.0
```

### commit

|prefix|意味|
|:--|:--|
|Fix|バグ修正、クリティカルなバグ修正なら hotfix|
|Add/Feat|新規機能・新規ファイル追加(feat は feature の略)|
|Update|バグではない機能修正|
|Change|仕様変更による機能修正|
|Clean/Refactor/Improve|整理 (リファクタリング等)|
|Disable|無効化 (コメントアウト等)|
|Remove/Delete|ファイル削除、コードの一部を取り除く|
|Rename|ファイル名の変更|
|Move|ファイル移動|
|Upgrade|バージョンアップ|
|Revert|修正取り消し|
|Docs|ドキュメントのみ修正|
|Style|空白、セミコロン、行、コーディングフォーマットなどの修正|
|Perf|性能向上する修正(perf は perfomance の略)|
|Test|テスト追加や間違っていたテストの修正|
|Chore|ビルドツールやライブラリで自動生成されたものをコミットするとき|

**参考**

https://github.com/facebook/react

https://github.com/microsoft/TypeScript

https://suwaru.tokyo/%E3%80%90%E5%BF%85%E9%A0%88%E3%80%91git%E3%82%B3%E3%83%9F%E3%83%83%E3%83%88%E3%81%AE%E6%9B%B8%E3%81%8D%E6%96%B9%E3%83%BB%E4%BD%9C%E6%B3%95%E3%80%90prefix-emoji%E3%80%91/