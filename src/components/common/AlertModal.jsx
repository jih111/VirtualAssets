import React from 'react';
import styled from 'styled-components';
import Modal from './modal';

const AlertModalWrapper = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: 0.75rem 1.25rem;

  font-size: 1rem;
  font-weight: 700;

  background-color: #d4edda;

  border-color: #c3e6cb;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 0.5rem;

  color: #155724;
`;

const AlertModal = ({ visible, message, onHideModal }) => {
  return (
    <Modal visible={visible} onHideModal={onHideModal} width>
      <AlertModalWrapper>{message}</AlertModalWrapper>
    </Modal>
  );
};

export default AlertModal;
