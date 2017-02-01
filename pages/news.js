import styled from 'styled-components';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import BannerTitle, { BannerSpan } from '../components/BannerTitle';
import Quote from '../components/Quote';

const AwardsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(/static/images/news_body.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  padding: 60px 5%;

  @media (min-width: 768px) {
    padding: 60px;
  }

  .awards-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;

    li {
      font-size: 16px;
      line-height: 1.6;
      font-style: italic;
      width: calc(80%/2);
      list-style: none;
      margin-bottom: 20px;

      @media (min-width: 768px) {
        font-size: 22px;
        margin-bottom: 60px;
      }
    }
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

export default () => (
  <Layout title='News'>
    <Banner img='/static/images/news_banner.jpg'>
      <BannerTitle>News</BannerTitle>
      <BannerSpan>Counter Histories: Rock Hill</BannerSpan>
    </Banner>
    <AwardsSection>
      <Title>Awards and Accolades</Title>
      <ul className="awards-list">
        <li>90 percent carriage in top 25 markets on PBS</li>
        <li>7 Best Documentary Awards</li>
        <li>Telly Awards 2016: Bronze Winner</li>
        <li>Big River Film Festival 2016: Best Documentary Short</li>
        <li>LA Independent Artist Film Festival 2016: Best Documentary</li>
        <li>Broadcast on American  Black Film Festival  Series on Magic Johnson’s Aspire! Network</li>
        <li>28 Film Festival Screenings and counting</li>
        <li>Tribute Film Festival 2016: Best Heritage Short Documentary</li>
        <li>SaMo Indie Film Festival 2016: Best Documentary</li>
      </ul>
    </AwardsSection>
    <Quote>
      <blockquote>
        <p>Counter Histories: Rock Hill is an unexpected breath of fresh air.</p>
        <cite>Hollywood RedCarpetReport</cite>
      </blockquote>
    </Quote>
  </Layout>
)