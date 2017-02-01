import styled from 'styled-components';

const PageBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  width: 100%;
  height: 300px;
  border-bottom: 10px solid rgba(26,115,99,1);
  @media (min-width: 768px) {
    height: 400px;
  }
`;

const Title = styled.h1`
  font-size: 55px;
  font-weight: 900;
  line-height: 1.28;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 85px;
  }
`;

export default ({img, children}) => { 
  const imgUrl = img;
  const divStyle = {
    backgroundImage: 'url(' + imgUrl + ')',
  };
  return (
    <PageBanner style={divStyle}>
      {children}
    </PageBanner>
  )
}