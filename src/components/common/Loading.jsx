import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Loading = () => {
  return (
    <LoadingWrapper>
      <ReactLoading type="spin" color="#0080ff" />
    </LoadingWrapper>
  );
};

export default Loading;
