import React from 'react';
import styled, { css } from 'styled-components';

const PercentageTextBlock = styled.div`
  font-size: 1rem;
  font-weight: 700;
  text-align: right;

  ${(props) =>
    props.value < 0 &&
    css`
      color: blue;
    `}

  ${(props) =>
    props.value > 0 &&
    css`
      color: red;
    `}

    ${(props) =>
    props.value === 0 &&
    css`
      color: black;
    `}
`;

const PercentageText = ({ children, value }) => {
  return <PercentageTextBlock value={value}>{children}%</PercentageTextBlock>;
};
export default PercentageText;
