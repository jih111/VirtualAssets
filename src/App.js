import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ModalContainer from './containers/ModalContainer';
import BookmarkListPage from './page/BookmarkListPage';
import QuotationListPage from './page/MarketListPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<QuotationListPage />} />
          <Route path="/bookmark" element={<BookmarkListPage />} />
        </Route>
      </Routes>
      <ModalContainer />
    </>
  );
}

export default App;
