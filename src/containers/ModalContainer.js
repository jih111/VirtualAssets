import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlertModal from '../components/common/AlertModal';
import Dimmed from '../components/common/Dimmed';
import MarketDetailModal from '../components/MarketDetailModal';
import { hideModal, showModal } from '../modules/modal';

const ModalContainer = () => {
  const dispatch = useDispatch();
  const { visible, mode, content, currency, market } = useSelector(
    ({ modal, market }) => ({
      visible: modal.visible,
      mode: modal.mode,
      content: modal.content,
      currency: market.currency,
      market: market.market,
    }),
  );

  const onHideModal = useCallback(() => {
    dispatch(hideModal());
  }, [dispatch]);

  useEffect(() => {
    let timer = null;
    if (mode === 'ALERT') {
      timer = setTimeout(() => {
        dispatch(hideModal());
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, mode]);

  useEffect(() => {
    if (!market) return;
    dispatch(
      showModal({ mode: 'DETAIL', content: { currency: currency, market } }),
    );
  }, [dispatch, market]);

  return (
    <>
      {mode === 'ALERT' && (
        <AlertModal
          visible={visible}
          onHideModal={onHideModal}
          message={content}
        />
      )}
      {mode === 'DETAIL' && (
        <MarketDetailModal
          visible={visible}
          onHideModal={onHideModal}
          detail={content}
        />
      )}
      <Dimmed visible={visible}></Dimmed>
    </>
  );
};

export default ModalContainer;
