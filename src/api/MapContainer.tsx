import React, { useState } from 'react';
import { GoogleMap, InfoWindowF, LoadScript, MarkerF } from '@react-google-maps/api'; // Google Maps APIのReactラッパーライブラリをインポート

// MapContainer コンポーネントのPropsの型定義
interface MapContainerProps {
  lat: number; // 緯度
  lng: number; // 経度
  range: number; // 範囲（検索半径）
  restaurants: Array<{ // レストランのリスト
    id: string; // レストランのID
    name: string; // レストランの名前
    lat: number; // レストランの緯度
    lng: number; // レストランの経度
  }>;
}

// MapContainer コンポーネントの定義
const MapContainer: React.FC<MapContainerProps> = ({ lat, lng, range, restaurants }) => {
  // selectedRestaurant の型を null またはレストランオブジェクトとして定義
  const [selectedRestaurant, setSelectedRestaurant] = useState<{
    id: string;
    name: string;
    lat: number;
    lng: number;
  } | null>(null);
  
  // 地図コンテナのスタイルを定義
  const containerStyle = {
    width: '100%', // コンテナの幅
    height: '300px', // コンテナの高さ
  };

  // 地図の中心点を定義
  const center = {
    lat: lat,
    lng: lng
  };

  // range（範囲）に応じて zoom（ズームレベル）を計算する関数
  const calculateZoom = (range: number): number => {
    switch (range) {
      case 1:
      case 2:
        return 17; // rangeが1または2の場合、zoomレベルは17
      case 3:
        return 15; // rangeが3の場合、zoomレベルは15
      case 4:
        return 14; // rangeが4の場合、zoomレベルは14
      case 5:
        return 13; // rangeが5の場合、zoomレベルは13
      default:
        return 15; // それ以外の場合、デフォルトのzoomレベルは15
    }
  };

  // 地図を表示するためのコンポーネント
  return (
    <LoadScript
      googleMapsApiKey={"AIzaSyB9d2sQUL4evb_Ef_v8_WHxDNOTDO-O-Pk" || ''} // Google Maps API キー
    >
      <GoogleMap
        mapContainerStyle={containerStyle} // 地図コンテナのスタイル
        center={center} // 地図の中心点
        zoom={calculateZoom(range)} // zoomレベル
      >
        {/* レストランの位置にマーカーを配置 */}
        {restaurants.map(restaurant => (
          <MarkerF
            position={{ lat: restaurant.lat, lng: restaurant.lng }} // マーカーの位置
            onClick={() => setSelectedRestaurant(restaurant)} // マーカークリック時の動作
          />
          
        ))}
        {/* 選択されたレストランの情報ウィンドウを表示 */}
        {selectedRestaurant && (
          <InfoWindowF
            position={{
              lat: selectedRestaurant.lat,
              lng: selectedRestaurant.lng
            }} // 情報ウィンドウの位置
            onCloseClick={() => setSelectedRestaurant(null)} // 情報ウィンドウを閉じる動作
          >
            <div>
              <h3>{selectedRestaurant.name}</h3> {/* レストラン名の表示 */}
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;
