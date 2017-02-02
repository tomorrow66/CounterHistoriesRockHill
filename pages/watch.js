import styled from 'styled-components';
import Layout from '../components/Layout';
import PageSection from '../components/PageSection';
import Banner from '../components/Banner';
import BannerTitle, { BannerSpan } from '../components/BannerTitle';
import ScreeningsList from '../components/ScreeningsList';
import Gallery from '../components/Gallery';
import PlatformLinks from '../components/PlatformLinks';

const ScreeningInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(/static/images/screenings_info.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  border-bottom: 10px solid rgba(26,115,99,1);
  height: 515px;
  padding: 0 5%;

  @media (min-width: 768px) {
    padding: 0 60px;
  }
`;

const Title = styled.h2`
  display: flex;
  align-self: flex-start;
  color: #d99518;
  font-size: 20px;
  text-transform: uppercase;
  margin: 10px 0;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

const SubTitle = styled.h3`
  display: flex;
  align-self: flex-start;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;
  padding: 0 20px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Blurb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  background-color: rgba(3,2,2, .65);
  margin-top: 60px;
  padding: 20px 10%;

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 60px 10%;
  }
`;

const ScreeningListings = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2f3240;
  height: 550px;
  padding: 0 60px;
  position: relative;

  .eventsTable {
    background-color: rgba(3,2,2, .85);
    width: 100%;
    height: 400px;
    padding: 20px;
    overflow-x: auto;
  }

  table {
    width: 100%;
    height: 400px;
    overflow-y: scroll;
  }
  thead th {
    color: #d99518;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: left;
    height: 60px;
  }
  tbody td {
    height: 30px;
  }
`;

export default () => (
  <Layout title='Watch'>
    <PageSection>
      <Banner img='/static/images/screenings_banner.jpg'>
        <BannerTitle>Watch</BannerTitle>
        <BannerSpan>Counter Histories: Rock Hill</BannerSpan>
      </Banner>
      <ScreeningInfo> 
        <Title>Download, stream or catch a screening.</Title>
        <SubTitle>Available now on Amazon, Google, Dish, Vudu, Vimeo, and Shaw.</SubTitle>
        <PlatformLinks/>
        <Blurb>
          <p>1961. Segregation is alive and well in the South and revolution is happening around the world.  In a small town in South Carolina, nine students stood up to inequality by agreeing to sit down in protest at the local whites only lunch counter and demand service.</p>
        </Blurb>
      </ScreeningInfo>
      <ScreeningListings>
        <Title>Screenings</Title>
        <div className='eventsTable'>
          <ScreeningsList />
        </div>
      </ScreeningListings>
      <Gallery>
        <img src='/static/images/screenings_gallery1.jpg' />
        <img src='/static/images/screenings_gallery2.jpg' />
      </Gallery>
    </PageSection>
  </Layout>
)