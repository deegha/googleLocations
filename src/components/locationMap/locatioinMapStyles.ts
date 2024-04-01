import { styled } from 'styled-components';

export const Container = styled.div`
  height: 500px;
  width: 500px;
`;

export const LocationMarker = styled.div`
  width: 20px;
  height: 20px;

  img {
    width: 100%;
  }
  background-color: #2bcbba;
  padding: 10px;
  border-radius: 8px;
`;

export const LocationText = styled.div`
  white-space: pre-wrap;
`;

export const LocationPinContainer = styled.div`
  min-width: 40px;
`;
