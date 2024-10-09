import styled from "styled-components";
export const WeatherContainer = styled.div`
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.25);
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;



export const Main = styled.main`
  h4 {
    color: #6366f1;
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

export const GeoCoords = styled.div`
  margin-top: 5px;

  span {
    color: #6366f1;
  }
`;