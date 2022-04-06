import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
const HeaderBlock = styled.header`
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #f1f5f9;
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  flex-direction: row;
  padding: 0 1rem;
  align-items: center;
  justify-content: center;
`;

const HeaderTitle = styled.div`
  color: #000000;
  font-size: 2.5rem;
  font-weight: 600;
`;

const Spacer = styled.div`
  height: 4rem;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <HeaderTitle>가상자산</HeaderTitle>
        </Wrapper>
      </HeaderBlock>
    </>
  );
};

export default Header;
