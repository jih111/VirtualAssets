import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookmarkList from '../components/BookmarkList';
import { getMarket, initializeMarket } from '../modules/market';
import { showModal } from '../modules/modal';

const BookmarkListContainer = () => {
  const dispatch = useDispatch();
  const { currency } = useSelector(({ market }) => ({
    currency: market.currency,
  }));
  const [bookmarkList, setBookmarkList] = useState([]);

  ////북마크 제거
  const onRemoveBookmark = useCallback((id) => {
    setBookmarkList((list) => list.filter((bookmark) => bookmark.id !== id));
  }, []);

  //북마크 loacalStorage 변경
  useEffect(() => {
    if (Array.isArray(bookmarkList) && bookmarkList.length === 0) return;
    localStorage.setItem('bookmarkList', JSON.stringify(bookmarkList));
  }, [bookmarkList]);

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
    try {
      const list = JSON.parse(localStorage.getItem('bookmarkList'));
      if (Array.isArray(list) && list.length !== 0) {
        console.log(list);
        setBookmarkList(list);
      }
    } catch (error) {
      console.log('localStorage not working');
    }
  }, []);

  useEffect(() => {
    return () => dispatch(initializeMarket());
  }, []);

  return (
    <BookmarkList
      currency={currency}
      bookmarkList={bookmarkList}
      onRemoveBookmark={onRemoveBookmark}
      showAlert={showAlert}
      getMarketDetail={getMarketDetail}
    />
  );
};

export default BookmarkListContainer;
