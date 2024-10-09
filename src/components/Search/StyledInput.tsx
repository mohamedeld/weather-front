import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 28px;
  padding-left: 32px;
  display: block;
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
  border: 1px solid #e0e0;
  outline-offset: 0.5rem;
  outline: none;
  border-color: #1890ff;
  font-size: 0.875rem;

  &:focus {
    box-shadow: 0 0 0 0.115rem rgba(24, 144, 255, 0.25);
  }
`;

export default StyledInput;