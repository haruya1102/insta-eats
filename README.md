## 簡易仕様書

### 概要
- **作者**: 山内陽哉
- **アプリ名**: InstaEats
- **開発環境**: vsCode
- **開発言語**: TypeScript
- **フレームワーク**: React,tailwindcss
- **動作対象ブラウザ**: Chrome 120.0.6099.129
- **開発期間**: 17日間
- **主要機能**:
  1. **現在地やキーワードからの飲食店検索**: ユーザーの現在地情報やキーワード入力を基に、指定した範囲内の飲食店を検索する。
  2. **店舗情報の詳細表示**: 選択した店舗の詳細情報（住所、営業時間、アクセスなど）を表示する。
  3. **Google Maps連携**: 店舗の位置情報をGoogle Maps上で確認できる。

## アーキテクチャ
- **コンポーネント構造**:
  -  `App.tsx`: メインコンポーネント。ルーティングの設定を含む。
  - `Router.tsx`: ルーティングの機能を備えたファイル。
  - `api`: apiを取得するファイルが含まれているフォルダ。
    - `geolocation.tsx`: Geolocation APIからユーザーの現在地を取得するファイル。
    - `hotpepper.tsx`: ホットペッパーグルメサーチAPIから店舗情報を取得するファイル。
  - `conponent`:各コンポーネントが含まれているフォルダ。
    - `SearchForm.tsx`: 検索条件入力画面。現在地の取得と範囲指定を行う。
    - `RestaurantList.tsx`: 検索結果画面。ページング対応。
    - `RestaurantItem.tsx`: 検索結果画面内の各店舗情報を表示するコンポーネント。
    - `RestaurantDetail.tsx`: 店舗詳細画面。店舗のより詳細な情報やURLなどを表示。
    - `MapContainer.tsx`: Google Maps APIを使用し、地図上に店舗位置を表示。
- **API利用**:
  - ホットペッパーグルメサーチAPI: 店舗情報の取得
  - Geolocation API: ユーザーの現在地取得
  - GoogleMaps API: Googleマップを取得

## コンセプト
「すぐに何か食べたい！」、「近くの店をパッと見つけたい！」という人のためにインスタントかつ確実に自分の食べたいお店が見つかるアプリ

## こだわったポイント
GoogleMaps APIによって地図上に店舗位置を表示することで、視覚的にどこにどんな店があるのかを分かりやすくしています。また、店舗のマーカーをクリックすると店舗名が見えるようになっています。それによって、「近くの店をパッと見つけたい！」を実現しています。

## デザイン面でこだわったポイント
全体的に、シンプルで洗練されたデザインにしており、インスタントに使いやすい印象にしました。さらに、アクセントカラーとして食欲をそそるような温かみのあるオレンジを使っています。
また、表示する情報をなるべく削ぎ落としてより必要な情報が見やすくなるように工夫しました。具体的には、現在のページ番号を「？ページ目」というようにそのまま表示するのではなく、ページングの番号を薄くすることで現在のページがわかるようにしました。
さらに、レスポンシブデザインに対応しスマートフォン、タブレット、パソコンなどあらゆるハードでの利用を想定しています。

## アドバイスして欲しいポイント
本番環境でもAPIを取得して実装できるようにしたいです。
検索結果画面にて、フィルター機能とソート機能を追加したいです。
GoogleMap内の店舗の位置にあるマーカーをクリックすることで店舗詳細画面に遷移したいです。
店舗詳細画面から検索結果画面に戻った際にマップがloadingにならないようにuseNavigateなどで戻るボタンを追加したいです。

## 自己評価
考えうる最低限の機能を搭載しましたが、まだまだ追加すべき機能や直すべきポイントがいくつかあると思います。例えば、フィルター機能とソート機能の追加や本番環境でAPIが取得できないCORSエラーの改善などです。
しかし、デザインに関してはシンプルで自分としても使いやすいと感じています。


#### GitHubリポジトリ
- アカウント名: `haruya1102`
- リポジトリ名: `fenrir-2025-recruitment`