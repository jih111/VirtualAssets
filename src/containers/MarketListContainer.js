import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MarketList from '../components/MarketList';
import {
  getMarket,
  getMarkets,
  initializeMarket,
  initializeMarkets,
} from '../modules/market';
import { showModal } from '../modules/modal';

const MarketListContainer = () => {
  const dispatch = useDispatch();
  const { marketsLoading, marketLoading, currency, markets } = useSelector(
    ({ market }) => ({
      marketsLoading: market.loading['GET_MARKETS'],
      marketLoading: market.loading['GET_MARKET'],
      currency: market.currency,
      markets: market.markets,
    }),
  );
  const [page, setPage] = useState(1);
  const [bookmarkList, setBookmarkList] = useState([]);

  //북마크 추가
  const onAddBookmark = useCallback(
    (id) => {
      const bookmarkMarket = markets.find((market) => market.id === id);
      setBookmarkList((bookmark) => bookmark.concat(bookmarkMarket));
    },
    [markets],
  );

  ////북마크 제거
  const onRemoveBookmark = useCallback((id) => {
    setBookmarkList((list) => list.filter((bookmark) => bookmark.id !== id));
  }, []);

  //북마크 loacalStorage 변경
  useEffect(() => {
    if (Array.isArray(bookmarkList) && bookmarkList.length === 0) return;
    localStorage.setItem('bookmarkList', JSON.stringify(bookmarkList));
  }, [bookmarkList]);

  //첫렌더링시 localStorage에 값이 있으면 가져오기
  useEffect(() => {
    try {
      const list = JSON.parse(localStorage.getItem('bookmarkList'));
      if (Array.isArray(list) && list.length !== 0) {
        setBookmarkList(list);
      }
    } catch (error) {
      console.log('localStorage not working');
    }
  }, []);

  //더보기 클릭시 페이지 증가
  const pageCheck = useCallback(() => {
    setPage((num) => num + 1);
  }, []);

  useEffect(() => {
    dispatch(initializeMarkets());
    setPage(1);
  }, [dispatch, currency]);

  //페이지 변경시 market데이터 불러오기
  useEffect(() => {
    if (!currency) return;
    dispatch(getMarkets(currency, page));
  }, [dispatch, currency, page]);

  const showAlert = useCallback(
    (message) => {
      dispatch(
        showModal({
          mode: 'ALERT',
          content: message,
        }),
      );
    },
    [dispatch],
  );

  const getMarketDetail = useCallback(
    (id) => {
      dispatch(getMarket(id));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(initializeMarkets());
    return () => dispatch(initializeMarket());
  }, [dispatch]);

  return (
    <>
      <MarketList
        currency={currency}
        markets={markets}
        pageCheck={pageCheck}
        onAddBookmark={onAddBookmark}
        bookmarkList={bookmarkList}
        onRemoveBookmark={onRemoveBookmark}
        showAlert={showAlert}
        getMarketDetail={getMarketDetail}
        marketsLoading={marketsLoading}
        marketLoading={marketLoading}
      />
    </>
  );
};

export default MarketListContainer;
