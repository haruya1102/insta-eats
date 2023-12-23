// ReactとuseNavigateフックをインポート
import React from 'react';
import { useNavigate } from 'react-router-dom';

// RestaurantItemコンポーネントの定義。propsとしてrestaurantオブジェクトを受け取る
const RestaurantItem = ({ restaurant }: { restaurant: any }) => {
  // ナビゲーションのためのフックを使用
  const navigate = useNavigate();

  // 詳細表示関数の定義。クリック時にレストランの詳細ページに遷移する
  const showDetails = () => {
    navigate('/details', { state: { restaurant } });
  };

  // コンポーネントの描画。div要素にクリックイベントを設定
  return (
    <div onClick={showDetails} className="border shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow">
      {/* レストラン名の表示 */}
      <h2 className="mx-2 text-md md:text-lg font-bold text-gray-800">{restaurant.name}</h2>
      {/* レストランジャンルの表示 */}
      <p className="m-2 text-xs md:text-sm text-gray-500">{restaurant.genre.name}</p>
      {/* 画像と情報のレイアウト */}
      <div className="flex flex-row">
        {/* レストランの画像表示 */}
        <img src={restaurant.photo.pc.l} alt={restaurant.name} className="w-32 md:w-40 lg:w-44 h-32 md:h-40 lg:h-44 object-cover rounded-lg" />
        {/* レストラン情報の表示 */}
        <div className="ml-4 flex flex-col justify-between">
          <div className="text-xs md:text-sm lg:text-md text-gray-600">
            {/* アクセス情報の表示 */}
            <p>{restaurant.access}</p>
            <hr className="my-2" />
            {/* 予算情報の表示 */}
            <p>予算: {restaurant.budget.average}</p>
            <hr className="my-2" />
            {/* 営業時間情報の表示 */}
            <p>{restaurant.open}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// コンポーネントのエクスポート
export default RestaurantItem;
