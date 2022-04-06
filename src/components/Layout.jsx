import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Tabs from './Tabs';

const Fixed = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const Space = styled.div`
  height: 7rem;
`;
const Layout = () => {
  return (
    <>
      <Fixed>
        <Header />
        <Tabs />
      </Fixed>
      <Space />
      <Outlet />
    </>
  );
};

export default Layout;
