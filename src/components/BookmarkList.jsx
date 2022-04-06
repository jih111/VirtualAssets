import React from 'react';
import styled, { css } from 'styled-components';
import currencyMark from '../utils/currencyMark';
import BookmarkItem from './BookmarkItem';
import Responsive from './Responsive';

const BookmarkListBlock = styled.section`
  width: 100%;
`;

const Wrapper = styled(Responsive)`
  flex-direction: column;
`;

const ListHeader = styled.div`
  display: grid;
  min-width: 100%;
  grid-template-columns: repeat(20, minmax(0, 1fr));
  gap: 1rem;
  background-color: #f1f5f9;
  border-radius: 0.25rem;
  padding: 1rem;
  margin-top: 2rem;
`;

const HeaderText = styled.div`
  color: #64748b;
  font-size: 1rem;
  font-weight: 700;

  ${(props) =>
    props.coin &&
    css`
      grid-column: 2 / span 2;
    `}

  ${(props) =>
    props.price &&
    css`
      text-align: right;
      grid-column: 8 / span 3;
    `}

    ${(props) =>
    props.change &&
    css`
      text-align: right;
      grid-column: span 2;
    `}

    ${(props) =>
    props.volume &&
    css`
      text-align: right;
      grid-column: 18 / span 4;
    `}
`;

const BookmarkList = ({
  currency,
  bookmarkList,
  onAddBookmark,
  onRemoveBookmark,
  showAlert,
  getMarketDetail,
}) => {
  const currencyUnit = currencyMark(currency);
  return (
    <BookmarkListBlock>
      <Wrapper>
        <ListHeader>
          <HeaderText coin>자산</HeaderText>
          <HeaderText price>Price</HeaderText>
          <HeaderText change>1H</HeaderText>
          <HeaderText change>24H</HeaderText>
          <HeaderText change>7D</HeaderText>
          <HeaderText volume>24H Volume</HeaderText>
        </ListHeader>
        {bookmarkList
          .sort((a, b) => {
            return a.market_cap_rank - b.market_cap_rank;
          })
          .map((bookmark, i) => {
            return (
              <BookmarkItem
                key={bookmark.id}
                currencyUnit={currencyUnit}
                bookmark={bookmark}
                onAddBookmark={onAddBookmark}
                onRemoveBookmark={onRemoveBookmark}
                showAlert={showAlert}
                getMarketDetail={getMarketDetail}
              />
            );
          })}
      </Wrapper>
    </BookmarkListBlock>
  );
};

export default BookmarkList;
