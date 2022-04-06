import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Responsive from './Responsive';

const TabsBlock = styled.nav`
  height: 3rem;
  width: 100%;
  padding: 0.1rem;
  background-color: white;
`;

const Wrapper = styled(Responsive)`
  height: 100%;
`;

const Spacer = styled.div`
  height: 3.3rem;
`;

const StyledItem = styled(NavLink)`
  cursor: pointer;

  height: 100%;

  /*  flex: 1;*/
  display: flex;
  align-items: center;

  font-size: 1.2rem;
  text-decoration: none;
  color: #afafaf;

  background-color: white;
  & + & {
    margin-left: 2rem;
  }
  &:hover {
    color: #0080ff;
    font-weight: 600;
  }
  &.active {
    font-weight: 600;
    color: #000000;
    &:hover {
      color: #0080ff;
    }
  }
`;
const Tabs = () => {
  return (
    <>
      <TabsBlock>
        <Wrapper>
          <StyledItem
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            가상자산 시세목록
          </StyledItem>
          <StyledItem to="/bookmark">북마크 목록</StyledItem>
        </Wrapper>
      </TabsBlock>
    </>
  );
};

export default Tabs;
