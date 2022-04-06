import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 100;

  min-width: 400px;
  max-height: calc(100% - 40px);
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem 0.5rem;
`;

const Modal = ({ visible, children }) => {
  return <Wrapper>{visible && <ModalBox>{children}</ModalBox>}</Wrapper>;
};

export default Modal;
