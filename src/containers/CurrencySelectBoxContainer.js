import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SelectBox from '../components/SelectBox';
import { changeSelectbox } from '../modules/market';

const CurrencySelectBoxContainer = () => {
  const dispatch = useDispatch();

  const onSelectHandler = useCallback(
    (selectValue) => {
      dispatch(changeSelectbox(selectValue));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(changeSelectbox('KRW'));
  }, [dispatch]);

  return (
    <SelectBox options={['KRW', 'USD']} onSelectHandler={onSelectHandler} />
  );
};

export default CurrencySelectBoxContainer;
