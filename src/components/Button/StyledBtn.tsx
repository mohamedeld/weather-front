import styled from 'styled-components';

const StyledButton = styled.button`
  outline: none;
  border: none;
  background-color: #6366f1;
  color: white;
  padding: 13.7px 32px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 13.3px 8px;
  }
`;

export default StyledButton;