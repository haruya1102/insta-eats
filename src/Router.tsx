// React RouterのRouteおよびRoutesコンポーネントをインポート
import { Route, Routes } from "react-router-dom";
// 各ページのコンポーネントをインポート
import SearchForm from "./components/SearchForm";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetail from "./components/RestaurantDetail";

// アプリケーションのルーティングを定義するコンポーネントをエクスポート
export const Router = () => {
    return (
        // ルーティングの設定
        <Routes>
            <Route path="/" element={<SearchForm/>}/> 
            <Route path="/results" element={<RestaurantList/>}/>
            <Route path="/details" element={<RestaurantDetail/>}/>
        </Routes>
    );
};
