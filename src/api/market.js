import axios from 'axios';

export const getMarkets = async (currency, page) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_rank&per_page=50&page=${page}&price_change_percentage=1h%2C24h%2C7d`,
    );

    return response.data;
  } catch (e) {
    console.error('Error get document: ', e);
    throw e;
  }
};

export const getMarketById = async (id) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`,
    );

    return response.data;
  } catch (e) {
    console.error('Error get document: ', e);
    throw e;
  }
};
