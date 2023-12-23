// ReactとuseLocationフックをインポート
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';

// RestaurantDetailコンポーネントの定義
const RestaurantDetail = () => {
  // useLocationフックを使用して現在のURLのロケーション情報を取得
  const location = useLocation();
  // location.stateからrestaurantオブジェクトを取り出す
  const { restaurant } = location.state;

  // コンポーネントの描画
  return (
    <div className="min-h-screen">
      {/* ヘッダーコンポーネントの表示 */}
      <Header />
      <div className="mx-auto max-w-6xl px-8 pt-4">
        <div className="flex flex-col">
          {/* ジャンル名の表示 */}
          <p className="text-sm md:text-base text-gray-600 mb-2">{restaurant.genre.name}</p>
          {/* ジャンルキャッチの表示 */}
          <p className="text-sm md:text-base text-gray-600">{restaurant.genre.catch}</p>
          {/* レストラン名の表示 */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">{restaurant.name}</h2>
          <hr className="border-gray-300 mt-1 mb-4" />
          {/* 画像と情報のレイアウト */}
          <div className="flex flex-col md:flex-row items-center">
            {/* レストランの画像表示 */}
            <img src={restaurant.photo.pc.l} alt={restaurant.name} className="object-cover w-1/2 md:w-1/3 max-h-80 rounded-lg md:mr-4 mb-4" />
            {/* テキスト情報の表示 */}
            <div>
              {/* 住所情報の表示 */}
              <p className="text-gray-700 mb-3 text-base md:text-lg">{restaurant.address}</p>
              <hr className="border-gray-300 mb-3" />
              {/* 営業時間情報の表示 */}
              <p className="text-gray-700 mb-3 text-base md:text-lg">{restaurant.open}</p>
              <hr className="border-gray-300 mb-3" />
              {/* アクセス情報の表示 */}
              <p className="text-gray-700 mb-4 text-base md:text-lg">{restaurant.access}</p>
              {/* Google Mapsでの位置表示リンク */}
              <a href={`https://www.google.com/maps/search/?api=1&query=${restaurant.lat},${restaurant.lng}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">GoogleMapで見る</a>
            </div>
          </div>
          <hr className="my-4 border-gray-300 w-full" />
          {/* 店舗のホットペッパーグルメへのリンク */}
          <a href={restaurant.urls.pc} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:text-blue-600">店舗情報</a>
        </div>
      </div>
    </div>

  );
};

// コンポーネントのエクスポート
export default RestaurantDetail;
