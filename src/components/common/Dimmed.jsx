import React from 'react';
import styled from 'styled-components';

const Black = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;

  z-index: 50;

  background: rgba(0, 0, 0, 0.3); ;
`;
const Dimmed = ({ visible }) => {
  return <div> {visible && <Black />}</div>;
};

export default Dimmed;
