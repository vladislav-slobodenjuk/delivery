import { lazy, Suspense, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import ResponsiveAppBar from 'components/Appbar/AppBar';
import { ShopPage, CartPage, McDuckSubPage } from 'components/pages';

import './App.css';

export default function App() {
  const [currentShop, setCurrentShop] = useState('McDuck');

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ResponsiveAppBar />
            </>
          }
        >
          <Route
            index
            element={<h1 style={{ textAlign: 'center' }}>Main Page</h1>}
          />
          <Route path="shops/" element={<ShopPage />}>
            <Route path="mcduck" element={<McDuckSubPage />} />
          </Route>
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </>
  );
}
