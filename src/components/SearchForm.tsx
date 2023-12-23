// React とその useState, FormEvent フックをインポート
import React, { useState, FormEvent } from 'react';
// React Router のナビゲーションフックをインポート
import { useNavigate } from 'react-router-dom';
// 現在位置を取得するための関数をインポート
import { getCurrentPosition } from '../api/geolocation';
import Header from '../Header';

// 検索フォームコンポーネントの定義
const SearchForm = () => {
  // 検索範囲のステートを初期値3で定義
  const [range, setRange] = useState<number>(3);
  // 検索キーワードのステートを定義
  const [keyword, setKeyword] = useState<string>('');

  // ページ遷移のためのナビゲート関数を取得
  const navigate = useNavigate();

  // 検索範囲選択時のイベントハンドラ
  const handleRangeChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    // 選択した範囲の値でステートを更新
    setRange(Number(event.target.value));
  };

  // 検索キーワード入力時のイベントハンドラ
  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // 入力したキーワードの内容でステートを更新
    setKeyword(event.target.value);
  };

  // フォーム送信時のイベントハンドラ
  const handleSubmit = async (event: FormEvent) => {
    // フォームのデフォルト送信動作を防止
    event.preventDefault();
    try {
      // 現在位置を取得
      const position = await getCurrentPosition();
      // 検索結果ページへの遷移（位置と範囲とキーワードを状態として渡す）
      navigate('/results', { state: { ...position, range, keyword } });
    } catch (error) {
      // エラーが発生した場合、コンソールにエラーを出力
      console.error(error);
    }
  };

  // コンポーネントの描画
  return (
    <div className='mb-6'>
      <Header /> {/* ヘッダーコンポーネントの表示 */}
      <div className="border p-6 rounded-lg shadow-lg mx-8 mt-4">
        <h2 className="text-xl font-bold mb-4 text-gray-700">お店検索</h2>
        <form onSubmit={handleSubmit} className="flex flex-row justify-around sm:flex-col sm:space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              キーワード: {/* キーワード入力ラベル */}
            </label>
            <input 
              type="text" 
              value={keyword} 
              onChange={handleKeywordChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-softOrange-200 focus:outline-none"
            /> {/* キーワード入力フィールド */}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              範囲: {/* 範囲選択ラベル */}
            </label>
            <select 
              value={range} 
              onChange={handleRangeChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-softOrange-200 focus:outline-none"
            >
              <option value={1}>300m</option> {/* 選択肢 */}
              <option value={2}>500m</option>
              <option value={3}>1000m</option>
              <option value={4}>2000m</option>
              <option value={5}>3000m</option>
            </select> {/* 範囲選択ドロップダウン */}
          </div>
          <button type="submit" className="sm:w-full bg-softOrange-200 hover:bg-softOrange-100 text-white font-bold mt-6 py-2 px-4 rounded">
            検索 {/* 検索ボタン */}
          </button>
        </form>
      </div>
    </div>
  );
}

// コンポーネントのエクスポート
export default SearchForm;
