import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import styled, { css } from 'styled-components';
import PercentageText from './common/PercentageText';

const BookmarkItemBlock = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(20, minmax(0, 1fr));
  gap: 1rem;
  border-bottom: 1px solid #f1f5f9;
  padding: 1rem;
`;

const StyledText = styled.div`
  font-size: 1rem;
  font-weight: 700;

  ${(props) =>
    props.coin &&
    css`
      grid-column: span 4;
    `}

  ${(props) =>
    props.symbol &&
    css`
      grid-column: span 2;
    `}

  ${(props) =>
    props.price &&
    css`
      text-align: right;
      grid-column: span 3;
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

    ${(props) =>
    props.cursorPoiter &&
    css`
      cursor: pointer;
    `}
`;

const BookmarkItem = ({
  currencyUnit,
  bookmark,
  onAddBookmark,
  onRemoveBookmark,
  showAlert,
  getMarketDetail,
}) => {
  const {
    id,
    name,
    symbol,
    current_price,
    price_change_percentage_1h_in_currency: price_1h,
    price_change_percentage_24h_in_currency: price_24h,
    price_change_percentage_7d_in_currency: price_7d,
    total_volume,
  } = bookmark;

  const RemoveBookmark = (id, name) => {
    showAlert(`${name} 북마크가 제거되었습니다.`);
    onRemoveBookmark(id);
  };

  return (
    <>
      <BookmarkItemBlock>
        <StyledText cursorPoiter>
          <BsStarFill color="yellow" onClick={() => RemoveBookmark(id, name)} />
        </StyledText>
        <StyledText coin cursorPoiter onClick={() => getMarketDetail(id)}>
          {name}
        </StyledText>
        <StyledText symbol>{symbol}</StyledText>
        <StyledText price>
          {currencyUnit}
          {Number(current_price.toFixed(2)).toLocaleString()}
        </StyledText>
        <StyledText change>
          <PercentageText value={price_1h}>
            {price_1h.toFixed(2)}
          </PercentageText>
        </StyledText>
        <StyledText change>
          <PercentageText value={price_24h}>
            {price_24h.toFixed(2)}
          </PercentageText>
        </StyledText>
        <StyledText change>
          <PercentageText value={price_7d}>
            {price_7d.toFixed(2)}
          </PercentageText>
        </StyledText>
        <StyledText right volume>
          {currencyUnit}
          {Number(total_volume.toFixed(2)).toLocaleString()}
        </StyledText>
      </BookmarkItemBlock>
    </>
  );
};
export default BookmarkItem;
