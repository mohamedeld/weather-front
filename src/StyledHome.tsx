import styled from "styled-components";

export const Home = styled.div`
  max-width:60%;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:0px auto;
  margin-top: 10rem;

  height: 100%;
  flex-direction:column;
  @media (max-width:768px) {
    padding: 12px;
    max-width:100%
  
}
`;

export const HomeSearch = styled.div`
  display: flex;
justify-content: flex-start;
align-items: flex-end;
width: 100%;
margin-top:2rem;
margin-bottom: 1rem;
`