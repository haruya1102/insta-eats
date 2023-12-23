// React とその useEffect, useState フックをインポート
import React, { useEffect, useState } from 'react';
// React RouterのuseLocationフックをインポート
import { useLocation } from 'react-router-dom';
// ホットペッパーグルメAPIを呼び出す関数をインポート
import { fetchRestaurants } from '../api/hotpepper';
// RestaurantItem コンポーネントをインポート
import RestaurantItem from './RestaurantItem';
// SearchForm コンポーネントをインポート
import SearchForm from './SearchForm';
// MapContainer コンポーネントをインポート
import MapContainer from '../api/MapContainer';

// レストランリストを表示するコンポーネント
const RestaurantList = () => {
  // レストランのリストと現在のページ番号を保持するステート
  const [restaurants, setRestaurants] = useState([]);
  const [page, setPage] = useState(1);

  // 現在のURL情報を取得
  const location = useLocation();

  const [latitude, setLatitude] = useState(35.681236); // 東京駅の緯度（デフォルト値）
  const [longitude, setLongitude] = useState(139.767125); // 東京駅の経度（デフォルト値）
  const [range, setRange] = useState(3); // 検索範囲半径1000m(デフォルト)

  // コンポーネントのマウント時とlocation.stateやpageが変更された時に実行
  useEffect(() => {
    // データ取得関数
    const fetchData = async () => {
      // location.stateから緯度、経度、範囲を取得
      const { latitude, longitude, range, keyword } = location.state;

      // ステートを更新
      setLatitude(latitude);
      setLongitude(longitude);
      setRange(range)

      // APIからデータを取得し、レストランリストを更新
      const data = await fetchRestaurants(latitude, longitude, range, page, keyword);
      setRestaurants(data);
    };

    // fetchData関数を実行
    fetchData();
  }, [location.state, page]); // 依存配列

  // コンポーネントの描画
  return (
    <div>
      <SearchForm /> {/* 検索フォームコンポーネントの表示 */}
      <div className="px-4 md:px-8">
        <MapContainer
          lat={latitude}
          lng={longitude}
          range={range}
          restaurants={restaurants.map((restaurant: any) => ({
            id: restaurant.id,
            name: restaurant.name,
            lat: restaurant.lat,
            lng: restaurant.lng
          }))}
        /> {/* 地図コンテナの表示 */}
        <div className="flex justify-between md:justify-center items-center my-4 space-x-2">
          {/* 前へボタン */}
          <button onClick={() => setPage(page - 1)} disabled={page === 1} className="bg-white text-base text-gray-800 px-4 py-2 rounded hover:bg-softOrange-200 hover:text-white transition-colors">
            前の10件
          </button>
          {/* ページ番号の計算と表示 */}
          <div className="hidden md:flex space-x-1">
            {Array.from({ length: 10 }, (_, i) => Math.floor((page - 1) / 10) * 10 + i + 1)
              .map(pageNumber => (
                <button
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                  disabled={page === pageNumber}
                  className={`bg-white text-base text-gray-800 px-3 py-2 rounded hover:bg-softOrange-200 hover:text-white transition-colors ${page === pageNumber ? 'hover:bg-softOrange-200 text-gray-200' : ''}`}
                >
                  {pageNumber}
                </button>
              ))
            }
          </ div>
          <span className="text-gray-800 px-3 py-1 md:hidden">
            {page}ページ
          </span>
          {/* 次へボタン */}
          <button onClick={() => setPage(page + 1)} className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-softOrange-200 hover:text-white transition-colors">
            次の10件
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {restaurants.map((restaurant: any) => (
            <RestaurantItem key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
        <div className="flex justify-center items-center my-4 space-x-2">
          {/* 前へボタン */}
          <button onClick={() => setPage(page - 1)} disabled={page === 1} className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-softOrange-200 hover:text-white transition-colors">
            前の10件
          </button>
          {/* ページ番号の計算と表示 */}
          <div className="hidden md:flex space-x-1">
            {Array.from({ length: 10 }, (_, i) => Math.floor((page - 1) / 10) * 10 + i + 1)
              .map(pageNumber => (
                <button
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                  disabled={page === pageNumber}
                  className={`bg-white text-gray-800 px-3 py-1 rounded hover:bg-softOrange-200 hover:text-white transition-colors ${page === pageNumber ? 'hover:bg-softOrange-200 text-gray-200' : ''}`}
                >
                  {pageNumber}
                </button>
              ))
            }
          </div>
          {/* 次へボタン */}
          <button onClick={() => setPage(page + 1)} className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-softOrange-200 hover:text-white transition-colors">
            次の10件
          </button>
        </div>
      </div>
    </div>
  );
};

// コンポーネントのエクスポート
export default RestaurantList;
