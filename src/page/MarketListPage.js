import React from 'react';
import CurrencySelectBoxContainer from '../containers/CurrencySelectBoxContainer';
import MarketListContainer from '../containers/MarketListContainer';

const MarketListPage = () => {
  return (
    <>
      <CurrencySelectBoxContainer />
      <MarketListContainer />
    </>
  );
};

export default MarketListPage;
