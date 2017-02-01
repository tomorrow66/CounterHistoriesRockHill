import styled from 'styled-components';

export default styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2f3240;
  padding: 60px 5%;

  @media (min-width: 768px) {
    padding: 60px;
  }

  blockquote {
    text-align: center;
    p {
      font-size: 20px;
      font-weight: 700;
      text-align: left;
      letter-spacing: 0.028em;
      margin-bottom: 20px;

      @media (min-width: 768px) {
        font-size: 36px;
      }
    }
    cite {
      color: #d99518;
      font-size: 18px;
      font-style: italic;
      letter-spacing: 0.028em;

      @media (min-width: 768px) {
        font-size: 24px;
      }
    }
  }
`;