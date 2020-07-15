const manufacturersString = `
  ＢＭＷ	１シリーズ
  ＢＭＷ	２シリーズ
  ＢＭＷ	３シリーズ
  ＢＭＷ	４シリーズ
  ＢＭＷ	５シリーズ
  ＢＭＷ	６シリーズ
  ＢＭＷ	７シリーズ
  ＢＭＷ	８シリーズ
  ＢＭＷ	ＢＭＷ
  ＢＭＷ	ｉ３
  ＢＭＷ	ｉ８
  ＢＭＷ	Ｍ２
  ＢＭＷ	Ｍ３
  ＢＭＷ	Ｍ５
  ＢＭＷ	Ｍ６
  ＢＭＷ	Ｘ１
  ＢＭＷ	Ｘ２
  ＢＭＷ	Ｘ３
  ＢＭＷ	Ｘ４
  ＢＭＷ	Ｘ５
  ＢＭＷ	Ｘ６
  ＢＭＷ	Ｚ３
  ＢＭＷ	Ｚ４
  ＢＭＷ	ミニ
  ＢＭＷアルピナ	Ｄ３
  INFINITI	FX35
  INFINITI	FX45
  ＭＣＣ	スマート
  ＮＵＭＭＩ	ヴォルツ
  ＴＭＴ	ハイラックス
  ＴＭＵＫ	アベンシス
  アウディ	１００
  アウディ	８０
  アウディ	Ａ１
  アウディ	Ａ３
  アウディ	Ａ４
  アウディ	Ａ５
  アウディ	Ａ６
  アウディ	Ａ７
  アウディ	Ａ８
  アウディ	Ｑ２
  アウディ	Ｑ３
  アウディ	Ｑ５
  アウディ	Ｑ７
  アウディ	ＲＳ５
  アウディ	Ｓ３
  アウディ	Ｓ４
  アウディ	Ｓ５
  アウディ	ＴＴ
  アウディ	Ｖ８
  アウディ	アウディ
  アウディ	オールロード
  アバルト	アバルト
  アバルト	アバルト１２４
  アバルト	アバルト５００
  アバルト	アバルト５９５
  アルファロメオ	１４７
  アルファロメオ	１５５
  アルファロメオ	１５６
  アルファロメオ	１５９
  アルファロメオ	４Ｃ
  アルファロメオ	ＧＴ
  アルファロメオ	アルファロメオ
  アルファロメオ	ジュリエッタ
  アルファロメオ	スパイダー
  アルファロメオ	ブレラ
  アルファロメオ	ミト
  いすゞ	１１７クーペ
  いすゞ	ＣＸ
  いすゞ	エルフ
  いすゞ	コモ
  いすゞ	ジャーニー
  いすゞ	ビークロス
  いすゞ	ビッグホーン
  いすゞ	ファーゴ
  いすゞ	ファスター／ロデオ
  いすゞ	フォワード
  いすゞ	ベレット
  オペル	アストラ
  オペル	ヴィータ
  オペル	オメガ
  オペル	ザフィーラ
  オペル	ベクトラ
  キャデラック	ＡＴＳ
  キャデラック	ＳＲＸ
  キャデラック	エスカレード
  キャデラック	キャデラック
  クライスラー	３００
  クライスラー	３００Ｃ
  クライスラー	ＰＴクルーザー
  クライスラー	イプシロン
  クライスラー	クライスラー
  クライスラー	ジープグランドチェロキー
  クライスラー	ジープコマンダー
  クライスラー	ジープコンパス
  クライスラー	ジープチェロキー
  クライスラー	ジープパトリオット
  クライスラー	ジープラングラー
  クライスラー	ボイジャー
  サーブ	９－３
  ジープ	グランドチェロキー
  ジープ	コンパス
  ジープ	ジープ
  ジープ	チェロキー
  ジープ	ラングラー
  ジープ	レネゲード
  シトロエン	Ｃ３
  シトロエン	Ｃ４
  シトロエン	Ｃ４ピカソ
  シトロエン	Ｃ５
  シトロエン	ＤＳ３
  シトロエン	ＤＳ４
  シトロエン	ＤＳ５
  シトロエン	グランドＣ４ピカソ
  シトロエン	シトロエン
  シボレー	ＭＷ
  シボレー	カプリス
  シボレー	カマロ
  シボレー	キャプティバ
  シボレー	クルーズ
  ジャガー	Ｓ
  ジャガー	Ｘ
  ジャガー	ＸＥ
  ジャガー	ＸＪ
  ジャガー	ＸＪ６
  ジャガー	ＸＪ８
  ジャガー	ＸＫ
  スズキ	Ｋｅｉ
  スズキ	Ｋｅｉワークス
  スズキ	ＭＲワゴン
  スズキ	ＳＸ４
  スズキ	アルト
  スズキ	アルトハッスル
  スズキ	アルトラパン
  スズキ	アルトラパンショコラ
  スズキ	アルトワークス
  スズキ	イグニス
  スズキ	エスクード
  スズキ	エスクードノマド
  スズキ	エブリィ
  スズキ	エブリィプラス
  スズキ	エブリィランディ
  スズキ	エリオ
  スズキ	カプチーノ
  スズキ	カルタス
  スズキ	カルタスクレセント
  スズキ	キザシ
  スズキ	キャラ
  スズキ	キャリィ
  スズキ	グランドエスクード
  スズキ	クロスビー
  スズキ	ジムニー
  スズキ	ジムニーシエラ
  スズキ	ジムニーワイド
  スズキ	スイフト
  スズキ	スティングレー
  スズキ	スプラッシュ
  スズキ	スペーシア
  スズキ	スペーシアギア
  スズキ	セルボ
  スズキ	セルボモード
  スズキ	ソリオ
  スズキ	ソリオバンディット
  スズキ	ツイン
  スズキ	ハスラー
  スズキ	バレーノ
  スズキ	パレット
  スズキ	フロンテ
  スズキ	ランディ
  スズキ	ワゴンＲ
  スズキ	ワゴンＲ ＲＲ
  スズキ	ワゴンＲソリオ
  スズキ	ワゴンＲプラス
  スズキ	ワゴンＲワイド
  スバル	ＢＲＺ
  スバル	Ｒ１
  スバル	Ｒ２
  スバル	ＷＲＸ
  スバル	ＸＶ
  スバル	インプレッサ
  スバル	インプレッサＧ４
  スバル	インプレッサＷＲＸ
  スバル	インプレッサＸＶ
  スバル	インプレッサアネシス
  スバル	ヴィヴィオ
  スバル	ヴィヴィオビストロ
  スバル	エクシーガ
  スバル	エクシーガクロスオーバー７
  スバル	サンバー
  スバル	サンバーディアス
  スバル	サンバートライ
  スバル	シフォン
  スバル	ジャスティ
  スバル	ステラ
  スバル	ディアス
  スバル	デックス
  スバル	ドミンゴ
  スバル	トラヴィック
  スバル	トレジア
  スバル	フォレスター
  スバル	プレオ
  スバル	プレオプラス
  スバル	ルクラ
  スバル	レヴォーグ
  スバル	レオーネ
  スバル	レガシィ
  スバル	レガシィＢ４
  スバル	レガシィアウトバック
  スバル	レガシィランカスター
  スバル	レックス
  スマート	スマート
  スマート	スマートフォーツー
  スマート	スマートフォーフォー
  ダイハツ	ＹＲＶ
  ダイハツ	アトレー
  ダイハツ	アトレー７
  ダイハツ	ウェイク
  ダイハツ	エッセ
  ダイハツ	オプティ
  ダイハツ	キャストアクティバ
  ダイハツ	キャストスタイル
  ダイハツ	キャストスポーツ
  ダイハツ	クー
  ダイハツ	コペン
  ダイハツ	シャレード
  ダイハツ	ストーリア
  ダイハツ	ソニカ
  ダイハツ	タント
  ダイハツ	タントエグゼ
  ダイハツ	テリオス
  ダイハツ	テリオスキッド
  ダイハツ	テリオスルキア
  ダイハツ	デルタ
  ダイハツ	デルタバン／ワゴン
  ダイハツ	トール
  ダイハツ	ネイキッド
  ダイハツ	パイザー
  ダイハツ	ハイゼット
  ダイハツ	ハイゼットキャディー
  ダイハツ	ハイゼットグランカーゴ
  ダイハツ	ビーゴ
  ダイハツ	ブーン
  ダイハツ	ブーンルミナス
  ダイハツ	マックス
  ダイハツ	ミゼットⅡ
  ダイハツ	ミラ
  ダイハツ	ミラアヴィ
  ダイハツ	ミライース
  ダイハツ	ミラココア
  ダイハツ	ミラジーノ
  ダイハツ	ミラジーノ１０００
  ダイハツ	ミラトコット
  ダイハツ	ムーヴ
  ダイハツ	ムーヴキャンバス
  ダイハツ	ムーヴコンテ
  ダイハツ	ムーヴラテ
  ダイハツ	メビウス
  ダイハツ	ロッキー
  ダイムラー	ダイムラー
  トヨタ	８６
  トヨタ	ｂＢ
  トヨタ	Ｃ－ＨＲ
  トヨタ	ＦＪクルーザー
  トヨタ	ｉＱ
  トヨタ	ＭＲ－Ｓ
  トヨタ	ＭＲ２
  トヨタ	ＲＡＶ４
  トヨタ	ＲＡＶ４Ｊ
  トヨタ	ＲＡＶ４Ｌ
  トヨタ	ＳＡＩ
  トヨタ	ＷｉＬＬ Ｖｉ
  トヨタ	ＷｉＬＬ ＶＳ
  トヨタ	ＷｉＬＬサイファ
  トヨタ	アイシス
  トヨタ	アクア
  トヨタ	アベンシス
  トヨタ	アリオン
  トヨタ	アリスト
  トヨタ	アルテッツァ
  トヨタ	アルテッツァジータ
  トヨタ	アルファード
  トヨタ	アルファードＧ
  トヨタ	アルファードＶ
  トヨタ	アレックス
  トヨタ	イスト
  トヨタ	イプサム
  トヨタ	ヴァンガード
  トヨタ	ウィッシュ
  トヨタ	ヴィッツ
  トヨタ	ウィンダム
  トヨタ	ヴェルファイア
  トヨタ	ヴェロッサ
  トヨタ	ヴォクシー
  トヨタ	エスクァイア
  トヨタ	エスティマ
  トヨタ	エスティマＬ
  トヨタ	エスティマＴ
  トヨタ	エスティマエミーナ
  トヨタ	エスティマルシーダ
  トヨタ	オーパ
  トヨタ	オーリス
  トヨタ	オリジン
  トヨタ	ガイア
  トヨタ	カムリ
  トヨタ	カムリグラシア
  トヨタ	カリーナ
  トヨタ	カリーナＥＤ
  トヨタ	カルディナ
  トヨタ	カレン
  トヨタ	カローラ
  トヨタ	カローラⅡ
  トヨタ	カローラアクシオ
  トヨタ	カローラスパシオ
  トヨタ	カローラスポーツ
  トヨタ	カローラセレス
  トヨタ	カローラフィールダー
  トヨタ	カローラランクス
  トヨタ	カローラルミオン
  トヨタ	カローラレビン
  トヨタ	キャバリエ
  トヨタ	キャミ
  トヨタ	クラウン
  トヨタ	クラウンエステート
  トヨタ	クラウンコンフォート
  トヨタ	クラウンマジェスタ
  トヨタ	グランドハイエース
  トヨタ	グランビア
  トヨタ	クルーガーＬ
  トヨタ	クルーガーＶ
  トヨタ	クレスタ
  トヨタ	コースター
  トヨタ	コルサ
  トヨタ	コロナ
  トヨタ	コロナＥＸｉＶ
  トヨタ	コロナＳＦ
  トヨタ	コロナプレミオ
  トヨタ	コンフォート
  トヨタ	サクシード
  トヨタ	シエンタ
  トヨタ	スープラ
  トヨタ	スターレット
  トヨタ	スパーキー
  トヨタ	スプリンター
  トヨタ	スプリンターカリブ
  トヨタ	スプリンタートレノ
  トヨタ	スプリンターマリノ
  トヨタ	スペイド
  トヨタ	セリカ
  トヨタ	セリカＸＸ
  トヨタ	セルシオ
  トヨタ	センチュリー
  トヨタ	ソアラ
  トヨタ	ターセル
  トヨタ	ダイナ
  トヨタ	タウンエース
  トヨタ	タウンエースノア
  トヨタ	タンク
  トヨタ	チェイサー
  トヨタ	ツーリングハイエース
  トヨタ	デュエット
  トヨタ	トヨエース
  トヨタ	ナディア
  トヨタ	ノア
  トヨタ	ハイエース
  トヨタ	ハイエースレジアス
  トヨタ	ハイラックス
  トヨタ	ハイラックスサーフ
  トヨタ	パッソ
  トヨタ	パッソセッテ
  トヨタ	パブリカ
  トヨタ	ハリアー
  トヨタ	ピクシス
  トヨタ	ピクシスエポック
  トヨタ	ピクシスジョイ
  トヨタ	ピクシススペース
  トヨタ	ピクシスメガ
  トヨタ	ビスタ
  トヨタ	ビスタアルデオ
  トヨタ	ファンカーゴ
  トヨタ	プラッツ
  トヨタ	プリウス
  トヨタ	プリウスα
  トヨタ	ブレイド
  トヨタ	ブレビス
  トヨタ	プレミオ
  トヨタ	プログレ
  トヨタ	プロボックス
  トヨタ	ベルタ
  トヨタ	ポルテ
  トヨタ	マークⅡ
  トヨタ	マークⅡクオリス
  トヨタ	マークⅡブリット
  トヨタ	マークＸ
  トヨタ	マークＸジオ
  トヨタ	マスターエース
  トヨタ	ヤリス
  トヨタ	ライトエース
  トヨタ	ライトエースノア
  トヨタ	ラウム
  トヨタ	ラクティス
  トヨタ	ラッシュ
  トヨタ	ランドクルーザー
  トヨタ	ランドクルーザー１００
  トヨタ	ランドクルーザー７０
  トヨタ	ランドクルーザー８０
  トヨタ	ランドクルーザープラド
  トヨタ	ルーミー
  トヨタ	レクサス
  トヨタ	レジアス
  トヨタ	レジアスエース
  トヨタ ＴＭＭ	アバロン
  ニッサン	１８０ＳＸ
  ニッサン	ＡＤ
  ニッサン	ＡＤ エキスパート
  ニッサン	Ｂｅ－１
  ニッサン	ＧＴ－Ｒ
  ニッサン	ＮＴ１００クリッパー
  ニッサン	ＮＶ１００クリッパー
  ニッサン	ＮＶ１００クリッパーリオ
  ニッサン	ＮＶ１５０ＡＤ
  ニッサン	ＮＶ２００バネット
  ニッサン	ＮＶ３５０キャラバン
  ニッサン	アトラス
  ニッサン	アベニール
  ニッサン	アベニールサリュー
  ニッサン	インフィニティＱ４５
  ニッサン	ウイングロード
  ニッサン	エキスパート
  ニッサン	エクストレイル
  ニッサン	エスカルゴ
  ニッサン	エルグランド
  ニッサン	オッティ
  ニッサン	キックス
  ニッサン	キャラバン
  ニッサン	キャラバンエルグランド
  ニッサン	キューブ
  ニッサン	キューブキュービック
  ニッサン	クリッパー
  ニッサン	クリッパーリオ
  ニッサン	クルー
  ニッサン	グロリア
  ニッサン	コンドル
  ニッサン	サニー
  ニッサン	サニーカリフォルニア
  ニッサン	サニートラック
  ニッサン	サファリ
  ニッサン	シーマ
  ニッサン	シビリアン
  ニッサン	ジューク
  ニッサン	シルビア
  ニッサン	シルフィ
  ニッサン	スカイライン
  ニッサン	スカイラインＧＴ－Ｒ
  ニッサン	スカイラインクロスオーバー
  ニッサン	ステージア
  ニッサン	セドリック
  ニッサン	セドリックシーマ
  ニッサン	セフィーロ
  ニッサン	セレナ
  ニッサン	ダットサントラック
  ニッサン	ダットサンピックアップ
  ニッサン	ティアナ
  ニッサン	ティーダ
  ニッサン	ティーダラティオ
  ニッサン	ティーノ
  ニッサン	デイズ
  ニッサン	デイズルークス
  ニッサン	デュアリス
  ニッサン	テラノ
  ニッサン	ノート
  ニッサン	パオ
  ニッサン	バサラ
  ニッサン	バネット
  ニッサン	バネットセレナ
  ニッサン	パルサー
  ニッサン	パルサーセリエ
  ニッサン	ピノ
  ニッサン	フィガロ
  ニッサン	フーガ
  ニッサン	フェアレディＺ
  ニッサン	プリメーラ
  ニッサン	ブルーバード
  ニッサン	ブルーバードシルフィ
  ニッサン	ブルーバードマキシマ
  ニッサン	プレーリー
  ニッサン	プレーリージョイ
  ニッサン	プレーリーリバティ
  ニッサン	プレサージュ
  ニッサン	プレジデント
  ニッサン	プレジデントＪＳ
  ニッサン	プレセア
  ニッサン	ホーミー
  ニッサン	ホーミーエルグランド
  ニッサン	マーチ
  ニッサン	マイクラ
  ニッサン	ムラーノ
  ニッサン	モコ
  ニッサン	ラシーン
  ニッサン	ラティオ
  ニッサン	ラフェスタ
  ニッサン	ラルゴ
  ニッサン	リーフ
  ニッサン	リバティ
  ニッサン	ルークス
  ニッサン	ルキノ
  ニッサン	ルキノＳ－ＲＶ
  ニッサン	ルネッサ
  ニッサン	レパード
  ニッサン	ローレル
  ニッサン	ローレルスピリット
  ニッサン ＭＴ	マーチ
  ニッサン ＭＴ	ラティオ
  ニッサン ＵＫ	デュアリス
  ニッサン ＵＫ	マイクラ
  ニッサンディーゼル	ＣＤ
  ニッサンディーゼル	ＣＷ
  ニッサンディーゼル	ＫＬ
  ニッサンディーゼル	コンドル
  ニッサンディーゼル	コンドル（～４ｔ）
  ニッサンディーゼル	コンドル（４ｔ～）
  ニホンフォード	スペクトロン
  ニホンフォード	テルスター
  ニホンフォード	フェスティバ
  ニホンフォード	フェスティバミニワゴン
  ニホンフォード	フリーダ
  ニホンフォード	レーザー
  ハマー	Ｈ３
  ヒュンダイ	ソナタ
  ヒュンダイ	ヒュンダイ
  フィアット	５００
  フィアット	アバルト５００
  フィアット	グランデプント
  フィアット	フィアット
  フィアット	プント
  フェラーリ	フェラーリ
  フォード	Ｆ１５０
  フォード	エクスプローラー
  フォード	エコスポーツ
  フォード	エスケープ
  フォード	クーガ
  フォード	トーラス
  フォード	フィエスタ
  フォード	フォーカス
  フォード	フォード
  フォード	マスタング
  フォード	リンカーン
  フォルクスワーゲン	アップ
  フォルクスワーゲン	イオス
  フォルクスワーゲン	ヴェント
  フォルクスワーゲン	クロストゥーラン
  フォルクスワーゲン	クロスポロ
  フォルクスワーゲン	ゴルフ
  フォルクスワーゲン	ゴルフトゥーラン
  フォルクスワーゲン	ゴルフプラス
  フォルクスワーゲン	ザ・ビートル
  フォルクスワーゲン	ジェッタ
  フォルクスワーゲン	シャラン
  フォルクスワーゲン	シロッコ
  フォルクスワーゲン	ティグアン
  フォルクスワーゲン	トゥアレグ
  フォルクスワーゲン	ニュービートル
  フォルクスワーゲン	パサート
  フォルクスワーゲン	ビートル
  フォルクスワーゲン	フォルクスワーゲン
  フォルクスワーゲン	ボーラ
  フォルクスワーゲン	ポロ
  フォルクスワーゲン	ルポ
  プジョー	１００７
  プジョー	２００８
  プジョー	２０６
  プジョー	２０７
  プジョー	２０８
  プジョー	３００８
  プジョー	３０７
  プジョー	３０８
  プジョー	４０６
  プジョー	４０７
  プジョー	５００８
  プジョー	５０８
  プジョー	ＲＣＺ
  ふそう	ＦＫ
  ふそう	ＭＫ
  ポルシェ	９１１
  ポルシェ	カイエン
  ポルシェ	ケイマン
  ポルシェ	ケイマンＳ
  ポルシェ	パナメーラ
  ポルシェ	ボクスター
  ポルシェ	ポルシェ
  ポルシェ	マカン
  ボルボ	２４０
  ボルボ	８５０
  ボルボ	９４０
  ボルボ	Ｃ３０
  ボルボ	Ｃ７０
  ボルボ	Ｓ４０
  ボルボ	Ｓ６０
  ボルボ	Ｓ８０
  ボルボ	Ｓ９０
  ボルボ	Ｖ４０
  ボルボ	Ｖ５０
  ボルボ	Ｖ６０
  ボルボ	Ｖ７０
  ボルボ	ＸＣ６０
  ボルボ	ＸＣ７０
  ボルボ	ＸＣ９０
  ボルボ	ボルボ
  ホンダ	CBR600
  ホンダ	ＣＲ－Ｖ
  ホンダ	ＣＲ－Ｚ
  ホンダ	ＨＲ－Ｖ
  ホンダ	Ｎ ＢＯＸ
  ホンダ	Ｎ ＢＯＸ＋
  ホンダ	Ｎ ＢＯＸスラッシュ
  ホンダ	Ｎ ＯＮＥ
  ホンダ	Ｎ ＶＡＮ
  ホンダ	Ｎ ＷＧＮ
  ホンダ	ＮＳＸ
  ホンダ	Ｓ－ＭＸ
  ホンダ	Ｓ２０００
  ホンダ	Ｓ６６０
  ホンダ	Ｚ
  ホンダ	アヴァンシア
  ホンダ	アクティ
  ホンダ	アクティストリート
  ホンダ	アコード
  ホンダ	アスコット
  ホンダ	インサイト
  ホンダ	インスパイア
  ホンダ	インテグラ
  ホンダ	インテグラＳＪ
  ホンダ	ヴェゼル
  ホンダ	エアウェイブ
  ホンダ	エディックス
  ホンダ	エリシオン
  ホンダ	オデッセイ
  ホンダ	オルティア
  ホンダ	キャパ
  ホンダ	クイントインテグラ
  ホンダ	グレイス
  ホンダ	クロスロード
  ホンダ	ザッツ
  ホンダ	ジェイド
  ホンダ	シティ
  ホンダ	シビック
  ホンダ	シビックシャトル
  ホンダ	シビックフェリオ
  ホンダ	シャトル
  ホンダ	ステップワゴン
  ホンダ	ステップワゴンスパーダ
  ホンダ	ストリート
  ホンダ	ストリーム
  ホンダ	ゼスト
  ホンダ	ゼストスパーク
  ホンダ	トゥデイ
  ホンダ	ドマーニ
  ホンダ	トルネオ
  ホンダ	パートナー
  ホンダ	バモス
  ホンダ	バモスホビオ
  ホンダ	ビート
  ホンダ	ビガー
  ホンダ	フィット
  ホンダ	フィットアリア
  ホンダ	フィットシャトル
  ホンダ	フリード
  ホンダ	フリード＋
  ホンダ	フリードスパイク
  ホンダ	プレリュード
  ホンダ	ホンダ二輪
  ホンダ	モビリオ
  ホンダ	モビリオスパイク
  ホンダ	ライフ
  ホンダ	ライフダンク
  ホンダ	ラファーガ
  ホンダ	レジェンド
  ホンダ	ロゴ
  ホンダ カナダ	ラグレイト
  ホンダオブアメリカ	アコードＵ．Ｓ．
  ホンダオブアメリカ	インスパイア
  ホンダオブアメリカ	エレメント
  ホンダオブアメリカ	シビック
  ホンダオブアメリカ	セイバー
  ホンダオブザユーケー	シビック
  マセラテイ	ギブリ
  マセラテイ	クアトロポルテ
  マセラテイ	レヴァンテ
  マツダ	ＡＺ－オフロード
  マツダ	ＡＺ－ワゴン
  マツダ	ＣＸ－３
  マツダ	ＣＸ－５
  マツダ	ＣＸ－７
  マツダ	ＣＸ－８
  マツダ	ＭＰＶ
  マツダ	ＭＳ－６
  マツダ	ＲＸ－７
  マツダ	ＲＸ－８
  マツダ	アクセラ
  マツダ	アテンザ
  マツダ	アンフィニＭＰＶ
  マツダ	アンフィニＲＸ－７
  マツダ	カペラ
  マツダ	キャロル
  マツダ	クロノス
  マツダ	サバンナＲＸ－７
  マツダ	スクラム
  マツダ	スピアーノ
  マツダ	センティア
  マツダ	タイタン
  マツダ	デミオ
  マツダ	トリビュート
  マツダ	ビアンテ
  マツダ	ファミリア
  マツダ	ファミリアＳ－ワゴン
  マツダ	フレア
  マツダ	フレアクロスオーバー
  マツダ	フレアワゴン
  マツダ	プレマシー
  マツダ	プロシード
  マツダ	プロシードレバンテ
  マツダ	ベリーサ
  マツダ	ボンゴ
  マツダ	ボンゴ／ブローニィ
  マツダ	ボンゴフレンディ
  マツダ	ボンゴブローニィ
  マツダ	マツダ３
  マツダ	ミレーニア
  マツダ	ラピュタ
  マツダ	ランティス
  マツダ	ロードスター
  ミツオカ	レイ
  メルセデス・ベンツ	１９０
  メルセデス・ベンツ	Ａクラス
  メルセデス・ベンツ	Ｂクラス
  メルセデス・ベンツ	ＣＬＡクラス
  メルセデス・ベンツ	ＣＬＫクラス
  メルセデス・ベンツ	ＣＬＳクラス
  メルセデス・ベンツ	ＣＬクラス
  メルセデス・ベンツ	Ｃクラス
  メルセデス・ベンツ	Ｅクラス
  メルセデス・ベンツ	ＧＬＡクラス
  メルセデス・ベンツ	ＧＬＣクラス
  メルセデス・ベンツ	ＧＬＥクラス
  メルセデス・ベンツ	ＧＬクラス
  メルセデス・ベンツ	Ｇクラス
  メルセデス・ベンツ	Ｍクラス
  メルセデス・ベンツ	Ｒクラス
  メルセデス・ベンツ	ＳＬＫクラス
  メルセデス・ベンツ	ＳＬクラス
  メルセデス・ベンツ	Ｓクラス
  メルセデス・ベンツ	Ｖクラス
  メルセデス・ベンツ	トランスポーターＴ１Ｎ
  メルセデス・ベンツ	ビアノ
  メルセデス・ベンツ	メルセデスベンツ
  ユーノス	ユーノスロードスター
  ランドローバー	ディスカバリー
  ランドローバー	ディスカバリー３
  ランドローバー	ディスカバリースポーツ
  ランドローバー	フリーランダー２
  ランドローバー	レンジローバー
  ランドローバー	レンジローバーイヴォーク
  ランドローバー	レンジローバースポーツ
  リンカーン	ナビゲーター
  ルノー	カングー
  ルノー	キャプチャー
  ルノー	トゥインゴ
  ルノー	メガーヌ
  ルノー	ルーテシア
  ルノー	ルノー
  レクサス	ＣＴ２００
  レクサス	ＥＳ３００
  レクサス	ＧＳ２００
  レクサス	ＧＳ２５０
  レクサス	ＧＳ３００
  レクサス	ＧＳ３５０
  レクサス	ＧＳ４３０
  レクサス	ＧＳ４５０
  レクサス	ＧＳ４６０
  レクサス	ＨＳ２５０
  レクサス	ＩＳ２５０
  レクサス	ＩＳ３００
  レクサス	ＩＳ３５０
  レクサス	ＬＣ５００
  レクサス	ＬＳ４６０
  レクサス	ＬＳ５００
  レクサス	ＬＳ６００
  レクサス	ＬＸ５７０
  レクサス	ＮＸ２００
  レクサス	ＮＸ３００
  レクサス	ＲＣ２００
  レクサス	ＲＣ３００
  レクサス	ＲＣ３５０
  レクサス	ＲＸ２００
  レクサス	ＲＸ２７０
  レクサス	ＲＸ３５０
  レクサス	ＲＸ４５０
  レクサス	ＳＣ４３０
  ロータス	ロータス
  ローバー	４００
  ローバー	６００
  ローバー	６００シリーズ
  ローバー	ミニ
  ローバー	レンジローバー
  ローバー	ローバー
  三菱	ｅＫアクティブ
  三菱	ｅＫカスタム
  三菱	ｅＫクラッシィ
  三菱	ｅＫクロス
  三菱	ｅＫスペース
  三菱	ｅＫスポーツ
  三菱	ｅＫワゴン
  三菱	ＦＨ
  三菱	ＦＫ
  三菱	ＦＴＯ
  三菱	ＦＶ
  三菱	ＧＴＯ
  三菱	ｉ
  三菱	ＭＪ
  三菱	ＲＶＲ
  三菱	アウトランダー
  三菱	アスパイア
  三菱	エアトレック
  三菱	エクリプス
  三菱	エクリプスクロス
  三菱	ギャラン
  三菱	ギャランフォルティス
  三菱	キャンター
  三菱	グランディス
  三菱	コルト
  三菱	コルトプラス
  三菱	ジープ
  三菱	シャリオ
  三菱	シャリオグランディス
  三菱	タウンボックス
  三菱	チャレンジャー
  三菱	ディアマンテ
  三菱	ディオン
  三菱	デリカ
  三菱	デリカＤ：２
  三菱	デリカＤ：３
  三菱	デリカＤ：５
  三菱	デリカスペースギア
  三菱	トッポ
  三菱	トッポＢＪ
  三菱	トライトン
  三菱	パジェロ
  三菱	パジェロイオ
  三菱	パジェロジュニア
  三菱	パジェロミニ
  三菱	ブラボー
  三菱	ミニカ
  三菱	ミニカトッポ
  三菱	ミニキャブ
  三菱	ミラージュ
  三菱	ミラージュアスティ
  三菱	ミラージュディンゴ
  三菱	ランサー
  三菱	ランサーカーゴ
  三菱	ランサーセディア
  三菱	リベロ
  三菱	レグナム
  三菱	ローザ
  日野	ＦＨ
  日野	ＦＳ
  日野	ＲＢ
  日野	ＲＸ
  日野	デュトロ
  日野	リエッセⅡ
  日野	レンジャー`

const data = {}
let temp
manufacturersString.split(/[\n\r]/).forEach((item) => {
  temp = item.trim().split(/\t/)
  if (temp[0]) {
    if (!data[temp[0]]) {
      data[temp[0]] = []
    }
    data[temp[0]].push(temp[1])
  }
})

const manufacturerList = Object.keys(data).map((item) => {
  return {
    text: item,
    child: data[item],
  }
})

export { manufacturerList }