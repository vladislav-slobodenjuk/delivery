import { lazy, Suspense, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import styled from 'styled-components';

import ResponsiveAppBar from 'components/Appbar/AppBar';
import { ShopPage, CartPage, McDuckSubPage } from 'components/pages';

import './App.css';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 1170px;
`;

export default function App() {
  const [currentShop, setCurrentShop] = useState('McDuck');

  return (
    <Container>
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
    </Container>
  );
}
