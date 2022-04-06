import React from 'react';
import styled, { css } from 'styled-components';
import currencyMark from '../utils/currencyMark';
import Loading from './common/Loading';
import MarketItem from './MarketItem';
import Responsive from './Responsive';

const MarketListBlock = styled.section`
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

const LoadingArea = styled.div`
  position: fixed;
  height: 100%;

  left: 0px;
  right: 0px;
  bottom: 0px;
`;

const AddButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  border-bottom: 1px solid #f1f5f9;
  padding: 1rem;
`;

const MarketList = ({
  currency,
  markets,
  pageCheck,
  onAddBookmark,
  onRemoveBookmark,
  bookmarkList,
  showAlert,
  getMarketDetail,
  marketsLoading,
  marketLoading,
}) => {
  const currencyUnit = currencyMark(currency);
  return (
    <MarketListBlock>
      <Wrapper>
        <ListHeader>
          <HeaderText coin>자산</HeaderText>
          <HeaderText price>Price</HeaderText>
          <HeaderText change>1H</HeaderText>
          <HeaderText change>24H</HeaderText>
          <HeaderText change>7D</HeaderText>
          <HeaderText volume>24H Volume</HeaderText>
        </ListHeader>
        {(marketsLoading || marketLoading) && (
          <LoadingArea>
            <Loading />
          </LoadingArea>
        )}
        {markets &&
          markets.map((market, i) => {
            let bookmarkCheck = false;
            bookmarkList.forEach((bookmark) => {
              if (bookmark.id === market.id) {
                bookmarkCheck = true;
              }
            });
            return (
              <MarketItem
                key={market.id}
                currencyUnit={currencyUnit}
                market={market}
                onAddBookmark={onAddBookmark}
                onRemoveBookmark={onRemoveBookmark}
                bookmarkCheck={bookmarkCheck}
                showAlert={showAlert}
                getMarketDetail={getMarketDetail}
                marketsLoading={marketsLoading}
              />
            );
          })}
        <AddButton onClick={pageCheck}>더보기</AddButton>
      </Wrapper>
    </MarketListBlock>
  );
};

export default React.memo(MarketList);
