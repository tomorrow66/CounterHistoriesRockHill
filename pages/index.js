import styled from 'styled-components';
import Layout from '../components/Layout';
import PageSection from '../components/PageSection';
import LaurelList from '../components/LaurelList';
import PlatformLinks from '../components/PlatformLinks';

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(/static/images/home_hero.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  height: calc(100vh);
  border-bottom: 10px solid rgba(26,115,99,1);

  .platforms {
    margin-top: 40px;
  }
`; 

const Logo = styled.h1`
  width: 50%;
  margin-bottom: 40px;
`;

const Trailer = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #1a1613;
  padding: 20px 40px;

  @media (min-width: 768px) {
    padding: 20px 120px;
  }

  .label {
    color: #d99518;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;

    @media (min-width: 768px) {
      font-size: 36px;
    }
  }

  .videoEmbed {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 25px;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%!important;
    height: 100%!important;
    border: none;
  }
`;

const Description = styled.div`
  background-color: #2f3240;
  padding: 60px 5%;

  @media (min-width: 768px) {
    padding: 60px 20%;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.65;
    margin-bottom: 16px;

    @media (min-width: 768px) {
      font-size: 18px;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export default () => (
  <Layout title='Home'>
    <PageSection>
      <Hero>
        <Logo>
          <img src="/static/images/logo.svg" alt="Counter Histories: Rock Hill" />
        </Logo>
        <LaurelList/>
        <div className="platforms">
          <p>Available now on Amazon, Google, Dish, Vudu, Vimeo, and Shaw.</p>
          <PlatformLinks/>
        </div>
      </Hero>
      <Trailer>
        <h2 className="label">Watch Trailer</h2>
        <div className="videoEmbed">
          <iframe src="https://player.vimeo.com/video/123777368?title=0&byline=0&portrait=0" width="1280" height="720" frameBorder="0" allowFullScreen></iframe>
        </div>
      </Trailer>
      <Description>
        <p>Nine young black men exercise their power to change history. It’s 1961 and the Civil Rights movement is stalled with protest after protest, arrest after arrest, bailout after bailout and then return to life as usual in the segregated South.  Students at a small local Baptist College in Rock Hill, SC decide to sit in at their local lunch counter, get arrested, go to jail and stay there.  It’s a test case that brings the national attention the movement seeks and changes the strategy of the movement. A little known story in a well chronicled history, Counter Histories: Rock Hill breaks with documentary conventions to connect with a new audience and tie the historical movement to present day struggles.</p>
      </Description>
    </PageSection>
  </Layout>
)