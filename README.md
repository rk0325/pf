卒業試験のREADMEを提出いたします。ご確認のほどよろしくお願いいたします。

## ■サービス概要
韓国コスメに特化した、ユーザーのスキンケアをサポートするサービスです。

具体的には、
- 韓国コスメを使ったことがないけれど興味がある方に向けて、お悩みや肌質別に合った韓国コスメを提案します。
- スキンケアコスメの買い忘れ・使用期限切れを防ぐサポートをします。
- お肌の大敵である紫外線や乾燥から、ユーザーのお肌を守るサポートをします。

## ■サービスを作成した背景
- 私自身、K-POPにハマったのをきっかけに韓国コスメにハマり、その良さを広めたいと思ったため
- 色々なスキンケア商品を試すのが好きで、友人の悩みに合わせてコスメをおすすめしたり、スキンケアの話をするのが好きなため
- 私が好きな「韓国」と「スキンケア」の要素を掛け合わせることで、オリジナリティが出ると考えたため

## ■想定されるユーザー層
- 韓国コスメを使ったことがないけれど興味がある方
- 韓国コスメを使ってから日が浅い / 他にどんな韓国コスメがあるのか知りたい韓国コスメ初心者の方
- スキンケアについて悩みを抱えている方
- どのスキンケアコスメを選んだらいいか迷ってしまう方

## ■MVPリリース時に実装を予定している機能
## 未ログインユーザー
### デモ診断
  - トップページにて、悩み・肌質・年代を選択していくと、それに合ったコスメを提案
  - ログインせずにレコメンド機能をお試しいただき、ユーザー登録への導線をつくる

## ログインユーザー
### レコメンド
- 悩み、肌質、年代などを選択したら、それぞれに合った韓国コスメを提案
  - 悩み…乾燥、美白、ニキビ、毛穴など
  - 肌質…脂性肌、乾燥肌、混合肌、敏感肌など
  - カテゴリごとにチェックボックスを用意して、ユーザーが選択→検索ボタンを押すと商品一覧が表示される想定

- 金額を入力したら、その価格帯の韓国コスメを提案
  - 単品もしくはセットかを選択できる
  - セットの場合は「化粧水＋美容液＋クリーム」セットなど
  - 「〜5,000円以内」「〜1万円以内」のように選択式にして、ユーザーが選択→検索ボタンを押すと商品一覧が表示される想定

### LINE通知
- 買い忘れ防止通知：使い終わる日数をあらかじめ登録しておくと「もうすぐなくなるから買っておいたほうがいいですよ」と通知
  - ユーザーが何日前に通知するかを選択できるようにする
- 使用期限通知：コスメの使用期限をあらかじめ登録しておいたら「そろそろ替え時ですよ」と通知
  - ユーザーが何日前に通知するかを選択できるようにする
- 紫外線 / 乾燥注意通知：住所を登録したら、天候に合わせて「今日はこれをするといいですよ（注意するといいですよ）」と通知
  - 紫外線に注意（日傘をさしたり、日焼け止めを塗りましょう）、乾燥に注意しましょうなど

### その他
- ユーザー登録
- ログイン / ログアウト
- パスワードリセット
  - Sorcery / Google認証
- マイページ
  - プロフィール登録 / 編集 / 削除
  - 悩み・肌質・年代の登録 / 編集 / 削除

## ■本リリース時に実装を予定している機能
### レビュー投稿 / 編集 / 削除 / 一覧
- 掲示板形式にして、他のユーザーが投稿内容をもとに情報を得られるようにする
- 投稿内に商品リンクを貼り、直接購入できるようにする
- レビューは５段階評価を予定
- 自分だけが見たい投稿と、他のユーザーも閲覧できる投稿で分けられる

- ブックマーク / コメント
  - 他のユーザーの投稿をブックマークできる
  - 他のユーザーの投稿にコメントできる

### タグ付け / 検索
- 投稿に悩み・肌質・年代でタグを付けられ、ユーザーはタグで投稿を検索できる

### お気に入りコスメ登録 / 編集 / 削除 / 一覧（マイページ内）
- レコメンド機能でレコメンドされた韓国コスメのお気に入りと、他のユーザーのレビュー投稿のブックマークを合わせた一覧

### 合わなかったコスメ登録 / 編集 / 削除 / 一覧（マイページ内）
- 「このコスメを使ったらニキビができた」など記録しておける
- アプリ内でレコメンドされたコスメ以外でも記録できる

### ランキング
- カテゴリ（悩み、肌質、年代）別にレビュー内の評価が高い順でランキング

### その他
- レビュー投稿のX（Twitter）シェア
- テスト（RSpec）

## ■現在検討している追加サービス案
- 人気の韓国コスメ、新しい韓国コスメ情報の提供
  - InstagramグラフAPIを使用し、ハッシュタグ「韓国スキンケア」の投稿を取得できないか検証中
  - 提供方法は、LINE通知、もしくはレビュー投稿一覧の中に開発者がInstagramグラフAPIから取得した情報を投稿して提供予定
- 韓国アイドルが使用している韓国コスメ情報の提供
  - APIなどによる情報の取得が難しいため、開発者が調査の上、レビュー投稿一覧の中に投稿して提供予定

## ■使用予定技術
|カテゴリ|技術|
|:-------------|:------------|
|開発環境|Docker|
|フロントエンド|Next.js|
|バックエンド|Ruby on Rails 7系|
|データベース|PostgreSQL|
|インフラ|Vercel / Render|
|Web API|楽天市場商品検索API / LINE Messaging API / OpenWeatherMap API / InstagramグラフAPI|
