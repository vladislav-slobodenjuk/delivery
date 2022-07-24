import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import styled from '@emotion/styled';

import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { McDuckSubPage } from 'components/pages';

const Sidebar = styled.div`
  margin-right: 15px;
  padding: 15px;
  min-width: 300px;
  /* width: 100vw; */
  background-color: yellowgreen;
`;

const Content = styled.div`
  flex-grow: 1;
  min-width: 320px;
`;

const buttons = [
  <Button
    component={NavLink}
    to="mcduck"
    key="one"
    sx={{ marginBottom: '15px' }}
  >
    McDuck
  </Button>,
  <Button
    component={NavLink}
    to="/shops"
    key="two"
    sx={{ marginBottom: '15px' }}
  >
    KFC
  </Button>,
  <Button key="three">Some...</Button>,
];

export function ShopPage() {
  const [currentShop, setCurrentShop] = useState('McDuck');

  return (
    <>
      <Container
        component="main"
        maxWidth="xl"
        sx={{ display: 'flex', flexWrap: 'wrap' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginRight: '15px',
            padding: '15px',
            minWidth: 300,
            backgroundColor: `yellowgreen`,
            borderColor: '1px solid #000',
            borderRadius: '5px',
          }}
        >
          <Typography
            variant="h6"
            noWrap
            to="/"
            sx={{
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
              alignSelf: 'center',
            }}
          >
            Shops:
          </Typography>
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
          >
            {buttons}
          </ButtonGroup>
        </Box>
        <Content>
          {/* <Route
              path="mcduck"
              element={currentShop === 'McDuck' && <McDuckSubPage />} */}
          {/* /> */}
          {/* <Route
            path="mcduck"
            element={currentShop === 'McDuck' && <McDuckSubPage />}
          /> */}
          <Outlet />
        </Content>
      </Container>
    </>
  );
}
