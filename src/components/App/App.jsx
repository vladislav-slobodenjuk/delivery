// import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import ResponsiveAppBar from 'components/Appbar/AppBar';
import { ShopPage, CartPage } from 'components/pages';

import './App.css';

export default function App() {
  return (
    <>
      {/* <ResponsiveAppBar /> */}
      <Routes>
        <Route path="/" element={<ResponsiveAppBar />}>
          <Route index element={<ShopPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </>
  );
}
