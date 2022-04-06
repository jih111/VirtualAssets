import * as MarketAPI from '../api/market';

const CHANGE_SELECTBOX = 'market/CHANGE_SELECTBOX';
const INITIALIZE_MARKETS = 'market/INITIALIZE_MARKETS';
const INITIALIZE_MARKET = 'market/INITIALIZE_MARKET';

const GET_MARKETS = 'market/GET_MARKETS';
const GET_MARKETS_SUCCESS = 'market/GET_MARKETS_SUCCESS';
const GET_MARKETS_FAILURE = 'market/GET_MARKETS_FAILURE';

const GET_MARKET = 'market/GET_MARKET';
const GET_MARKET_SUCCESS = 'market/GET_MARKET_SUCCESS';
const GET_MARKET_FAILURE = 'market/GET_MARKET_FAILURE';

export const changeSelectbox = (selectValue) => ({
  type: CHANGE_SELECTBOX,
  payload: selectValue,
});

export const initializeMarkets = () => ({
  type: INITIALIZE_MARKETS,
});

export const initializeMarket = () => ({
  type: INITIALIZE_MARKET,
});

export const getMarkets = (currency, page) => async (dispatch) => {
  dispatch({ type: GET_MARKETS });
  try {
    const response = await MarketAPI.getMarkets(currency, page);
    dispatch({
      type: GET_MARKETS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: GET_MARKETS_FAILURE,
      payload: error,
      error: true,
    });
    throw error;
  }
};

export const getMarket = (currency, page) => async (dispatch) => {
  dispatch({ type: GET_MARKET });
  try {
    const response = await MarketAPI.getMarketById(currency, page);
    dispatch({
      type: GET_MARKET_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: GET_MARKET_FAILURE,
      payload: error,
      error: true,
    });
    throw error;
  }
};

const initialState = {
  loading: {
    GET_MARKETS: false,
    GET_MARKET: false,
  },
  currency: null,
  markets: [],
  market: null,
  error: null,
};

export default function markets(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SELECTBOX:
      return {
        ...state,
        currency: action.payload,
      };
    case INITIALIZE_MARKETS:
      return {
        ...state,
        markets: [],
      };
    case INITIALIZE_MARKET:
      return {
        ...state,
        market: null,
      };
    case GET_MARKETS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_MARKETS: true,
        },
        error: null,
      };
    case GET_MARKETS_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_MARKETS: false,
        },
        markets: state.markets.concat(action.payload),
      };
    case GET_MARKETS_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_MARKETS: false,
        },
        markets: [],
        error: action.payload,
      };
    case GET_MARKET:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_MARKET: true,
        },
        error: null,
      };
    case GET_MARKET_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_MARKET: false,
        },
        market: action.payload,
      };
    case GET_MARKET_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_MARKET: false,
        },
        market: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
