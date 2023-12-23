// hotpepper.tsx
// axios（HTTPクライアント）をインポート
import axios from 'axios';

// ホットペッパーグルメAPIを呼び出してレストラン情報を取得する関数をエクスポート
export const fetchRestaurants = async (
  latitude: number, // 緯度
  longitude: number, // 経度
  range: number, // 検索範囲
  page: number, // ページ番号
  keyword: string // 検索キーワード
) => {
  // APIリクエストのクエリパラメータを設定
  const query = {
    key: '427370fdf0023a88', // APIキー
    lat: latitude, // 緯度
    lng: longitude, // 経度
    range: range, // 検索範囲
    start: (page - 1) * 10 + 1, // 検索結果の開始位置（ページング用）
    keyword: keyword, // 検索キーワード
    format: 'json', // レスポンスの形式（JSON）
  };

  // APIのURLを構築
  let url = '/hotpepper?';
  url += `key=${query.key}&lat=${query.lat}&lng=${query.lng}&range=${query.range}&start=${query.start}&keyword=${query.keyword}&format=${query.format}`;

  // axiosを使用してAPIにGETリクエストを送信し、レスポンスを取得
  const response = await axios.get(url);
  // APIからのレスポンスから店舗情報のみを抽出して返す
  return response.data.results.shop;
};
