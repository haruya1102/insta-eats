// geolocation.tsx
// 位置情報取得のための関数をエクスポートする
export const getCurrentPosition = () => {
  // Promiseを返す。Promiseは緯度と経度を含むオブジェクトを解決する
  return new Promise<{latitude: number, longitude: number}>((resolve, reject) => {
    // ブラウザのGeolocation APIを使用して現在位置を取得する
    navigator.geolocation.getCurrentPosition(
      // 位置情報が正常に取得された場合の処理
      (position) => {
        // 取得した緯度と経度をresolveで返す
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      // 位置情報の取得に失敗した場合の処理
      (error) => {
        // エラーをrejectで返す
        reject(error);
      }
    );
  });
};
