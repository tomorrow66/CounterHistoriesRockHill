import styled from 'styled-components';

export default styled.h1`
  font-size: 36px;
  font-weight: 900;
  line-height: 1.28;
  text-align: center;
  text-transform: uppercase;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 85px;
  }
`; 

export const BannerSpan = styled.h2`
  font-size: 18px;
  line-height: 1.28;
  text-align: center;
  text-transform: uppercase;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;