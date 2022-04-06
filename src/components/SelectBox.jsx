import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const SelectBoxBlock = styled.div`
  position: fixed;
  width: 100%;
  padding: 0.5rem;
  border-top: 1px solid #f1f5f9;
  background-color: white;

  z-index: 1;
`;

const Wrapper = styled(Responsive)`
  align-items: center;
  justify-content: flex-end;
`;
const StyledSelectBox = styled.select`
  display: flex;
  justify-content: flex-end;
  width: 6.5rem;
  border: none;
  font-size: 1rem;
`;

const Spacer = styled.div`
  height: 2rem;
`;

const SelectBox = ({ options, onSelectHandler }) => {
  const onChange = (e) => {
    onSelectHandler(e.target.value);
  };

  return (
    <>
      <SelectBoxBlock>
        <Wrapper>
          <StyledSelectBox onChange={onChange}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option} 보기
              </option>
            ))}
          </StyledSelectBox>
        </Wrapper>
      </SelectBoxBlock>
      <Spacer />
    </>
  );
};
export default SelectBox;
