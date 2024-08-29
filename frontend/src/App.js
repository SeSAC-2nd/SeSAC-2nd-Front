import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import PostsListPage from "./pages/PostsListPage";
import PostCreatePage from "./pages/PostCreatePage";
import SearchPage from "./pages/SearchPage";
import PostDetailPage from "./pages/PostDetailPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import OrderCompletePage from "./pages/OrderCompletePage";
import RegisterPage from "./pages/RegisterPage";
import MyPage from "./pages/MyPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* 메인페이지 */}
            <Route index element={<MainPage />}/>
            {/* 소개페이지 */}
            <Route path="/about" element={<AboutPage/>}/>
            {/* 상품 목록 페이지 */}
            <Route path="/posts/list/:page/:limit/:categoryId" element={<PostsListPage />} />
            {/* 검색 결과 페이지 */}
            <Route path="/posts/list/:page/:limit?postTitle=:keyword" element={<SearchPage />} />
            {/* 판매글 작성 페이지 */}
            <Route path="/posts/create" element={<PostCreatePage />} />
            {/* 상품 상세 페이지 */}
            <Route path="/posts/:postId" element={<PostDetailPage />} />
            {/* 장바구니 페이지 */}
            <Route path="/cart/:userId" element={<CartPage />} />
            {/* 결제 페이지 */}
            <Route path="/order" element={<OrderPage />} />
            {/* 결제 완료 페이지 */}
            <Route path="/order/complete/:orderId" element={<OrderCompletePage />} />
            {/* 회원가입 페이지 */}
            <Route path="/user/register" element={<RegisterPage />} />
            {/* 마이페이지 */}
            <Route path="/mypage" element={<MyPage />} />
            {/* 관리자페이지 */}
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
