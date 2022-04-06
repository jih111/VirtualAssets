import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from './common/modal';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import currencyMark from '../utils/currencyMark';
import PercentageText from './common/PercentageText';

const MarketDetailModalBlock = styled.div`
  width: 800px;
  height: 700px;

  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  grid-template-rows: 30px repeat(12, minmax(0, 1fr));
  grid-row-gap: 1rem;

  font-size: 1rem;

  background-color: white;

  padding: 1rem 0.5rem;
`;

const DetailHeader = styled.header`
  grid-column: span 2;

  display: grid;
  grid-template-columns: 1fr 52px;
  align-content: center;
`;

const CoinName = styled.div`
  span {
    padding-left: 0.5rem;

    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const HideModal = styled.a`
  cursor: pointer;
  font-size: 1rem;
`;

const CoinInfoLeft = styled.div`
  grid-column: span 1;
  grid-row: span 2;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  border: 1px solid #dcdfe2;

  .left {
    display: flex;
    align-items: center;
    padding-left: 1rem;

    background-color: #e0e3e6;

    font-size: 1rem;
    font-weight: 700;

    border-bottom: 1px solid #c6c9cd;
  }

  .right {
    display: flex;
    align-items: center;
    padding-left: 1rem;

    font-size: 1rem;

    border-bottom: 1px solid #dcdfe2;
  }
`;

const CoinInfoRight = styled.div`
  grid-column: span 1;
  grid-row: span 2;
`;

const CoinBoxRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;

  margin: 0.5rem 0;

  .price {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .price-24h {
    margin-left: 0.5rem;

    font-size: 1rem;
    font-weight: 700;
  }
`;

const PriceArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.3rem;

  margin-top: 1.5rem;

  text-align: right;
`;
const Calculator = styled.div`
  grid-column: span 2;
  grid-row: span 2;

  padding: 1rem;

  background-color: #e0e3e6;

  .title {
    font-size: 1rem;
    font-weight: 700;
  }
`;

const CalculatorContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 1px solid #dcdfe2;

  .box-title {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 2.5rem;
    width: 4rem;

    font-size: 1rem;
    font-weight: 700;

    background-color: #f1f5f9;
    border: 1px solid #dcdfe2;
  }

  .box-input {
    height: 2.5rem;
    width: 8rem;

    padding: 1rem;

    font-size: 1rem;

    text-align: right;

    box-sizing: border-box;

    background-color: #ffffff;

    border: 1px solid #dcdfe2;
  }

  .arrow {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 2rem;
    margin: 0 0.5rem;
  }
`;

const DescriptionArea = styled.div`
  border-top: 1px solid #f1f5f9;
  grid-column: span 2;
  grid-row: span 8;

  padding-top: 1rem;
  line-height: 1.2rem;

  overflow: auto;
`;

const MarketDetailModal = ({ visible, detail, onHideModal }) => {
  const {
    id,
    image: { thumb }, //코인이미지
    symbol,
    localization: { ko: localization_ko, en: localization_en }, //코인명
    links: { homepage }, //홈페이지
    description: { ko: description_ko, en: description_en },
    market_data: {
      market_cap_rank, //시가총액Rank
      current_price: { krw: krw_price, usd: usd_price }, //현재 금액
      price_change_percentage_24h_in_currency: { krw: krw_24h, usd: usd_24h }, //24시간 등락 퍼센트
      market_cap: { krw: krw_market_cap, usd: usd_market_cap }, //시가총액
      total_volume: { krw: krw_total_volume, usd: usd_total_volume }, //24시간 거래대금
    },
  } = detail.market;

  const marketInfo = {
    id,
    KRW: {
      name: localization_ko,
      des: description_ko,
      currentPrice: krw_price,
      change24h: krw_24h,
      marketCap: krw_market_cap,
      totalVolume: krw_total_volume,
    },
    USD: {
      name: localization_en,
      des: description_en,
      currentPrice: usd_price,
      change24h: usd_24h,
      marketCap: usd_market_cap,
      totalVolume: usd_total_volume,
    },
  };

  const [coinPrice, setCoinPrice] = useState(1);
  const [currencyPrice, setCurrencyPrice] = useState(0);
  const mark = currencyMark(detail.currency);

  useEffect(() => {
    if (detail.currency === 'USD') {
      setCurrencyPrice(() => marketInfo[detail.currency].currentPrice * 1100);
    } else {
      setCurrencyPrice(() => marketInfo[detail.currency].currentPrice);
    }
  }, []);

  const checkCoin = useCallback(
    (val) => {
      const reg = /^[0-9]*[.]?[0-9]{0,8}$/g;
      if (reg.test(val)) {
        setCoinPrice(val);
      }

      let krwPrice;
      if (detail.currency === 'USD') {
        krwPrice = marketInfo[detail.currency].currentPrice * 1100;
      } else {
        krwPrice = marketInfo[detail.currency].currentPrice;
      }

      setCurrencyPrice(Number((val * krwPrice).toFixed(0)).toLocaleString());
    },
    [detail],
  );

  const checkCurrency = useCallback(
    (val) => {
      const reg = /^[0-9]*$/g;

      if (reg.test(val)) {
        setCurrencyPrice(val.replace(/(^0+)/, ''));
        setCoinPrice(
          (
            val.replace(/(^0+)/, '') / marketInfo[detail.currency].currentPrice
          ).toFixed(8),
        );
      }
    },
    [detail],
  );

  return (
    <Modal visible={visible} onHideModal={onHideModal}>
      <MarketDetailModalBlock>
        <DetailHeader>
          <CoinName>
            <img src={thumb} alt="코인이미지" />
            <span>
              {marketInfo[detail.currency].name}({symbol.toUpperCase()})
            </span>
          </CoinName>
          <HideModal onClick={() => onHideModal()}>닫기</HideModal>
        </DetailHeader>
        <CoinInfoLeft>
          <div className="left">시가총액 Rank</div>
          <div className="right">Rank #{market_cap_rank}</div>
          <div className="left">웹사이트</div>
          <div className="right">{homepage[0]}</div>
        </CoinInfoLeft>
        <CoinInfoRight>
          <CoinBoxRight>
            <div className="price">
              {mark}
              {Number(
                marketInfo[detail.currency].currentPrice.toFixed(2),
              ).toLocaleString()}
            </div>
            <div className="price-24h">
              <PercentageText value={marketInfo[detail.currency].change24h}>
                {marketInfo[detail.currency].change24h.toFixed(2)}
              </PercentageText>
            </div>
          </CoinBoxRight>
          <PriceArea>
            <div>시가총액</div>
            <div>25시간 거래대금</div>
            <div>
              {mark}
              {Number(
                marketInfo[detail.currency].marketCap.toFixed(2),
              ).toLocaleString()}
            </div>
            <div>
              {mark}
              {Number(
                marketInfo[detail.currency].totalVolume.toFixed(2),
              ).toLocaleString()}
            </div>
          </PriceArea>
        </CoinInfoRight>
        <Calculator>
          <div className="title">가격계산</div>
          <CalculatorContent>
            <div className="box-title">{symbol.toUpperCase()}</div>
            <input
              className="box-input"
              value={coinPrice}
              onChange={(e) => checkCoin(e.target.value)}
            />
            <div className="arrow">
              <IoIosArrowRoundBack />
              <IoIosArrowRoundForward />
            </div>
            <div className="box-title">{detail.currency}</div>
            <input
              className="box-input"
              value={currencyPrice.toLocaleString()}
              onChange={(e) => checkCurrency(e.target.value)}
            />
          </CalculatorContent>
        </Calculator>
        <DescriptionArea>{description_ko}</DescriptionArea>
      </MarketDetailModalBlock>
    </Modal>
  );
};
export default MarketDetailModal;
