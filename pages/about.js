import styled from 'styled-components';
import Layout from '../components/Layout';
import PageSection from '../components/PageSection';
import Banner from '../components/Banner';
import BannerTitle, { BannerSpan } from '../components/BannerTitle';
import Quote from '../components/Quote';

const AboutBody = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(/static/images/about_body.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  padding: 60px 5% 0;
  border-bottom: 10px solid rgba(26,115,99,1);

  @media (min-width: 768px) {
    padding: 60px 20% 0;
  }

  .intro {
    font-size: 16px;
    line-height: 1.5;
    text-transform: none;
    text-align: justify;
    padding: 20px 6%;

    @media (min-width: 768px) {
      font-size: 18px;
      padding: 0 6%;
    }
  }

  .description {
    background-color: rgba(3,2,2, .55);
    margin-top: 30px;
    padding: 6%;

    p {
      font-size: 14px;
      margin-bottom: 16px;

      @media (min-width: 768px) {
        font-size: 16px;
      }
    }
  }
`;

const FriendshipNine = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(3,2,2, 1);
  padding: 60px 5%;

  @media (min-width: 768px) {
    padding: 60px;
  }

  .cast {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    @media (min-width: 768px) {
      width: 60%;
    }

    .member {
      display: flex;
      text-transform: uppercase;
      letter-spacing: 0.28em;
      width: 50%;
      padding: 10px 0;

      @media (min-width: 768px) {
        justify-content: space-around;
        width: 33.33%;
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

// const Quote = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background-color: #2f3240;
//   padding: 60px;

//   blockquote {
//     text-align: center;
//     p {
//       font-size: 36px;
//       font-weight: 700;
//       text-align: left;
//       letter-spacing: 0.028em;
//       margin-bottom: 20px;
//     }
//     cite {
//       color: #d99518;
//       font-size: 24px;
//       font-style: italic;
//       letter-spacing: 0.028em;
//     }
//   }
// `;

export default () => (
  <Layout title='About'>
    <PageSection>
      <Banner img='/static/images/about_banner.jpg'>
        <BannerTitle>About</BannerTitle>
        <BannerSpan>Counter Histories: Rock Hill</BannerSpan>
      </Banner>
      <AboutBody>
        <div className='logo'>
          <img src='/static/images/about_logo.png' />
        </div>
        <h2 className='intro'>
          Counter Histories: Rock Hill provides an intimate glimpse at an important moment in our history and ties it to the events of today.
        </h2>
        <div className='description'>
          <p>1961 comes to life through the first hand stories of the Friendship 9 in Counter Histories: Rock Hill, a thirty minute television documentary, directed by Fr3deR1cK Taylor, currently airing on PBS stations nationwide and on the Aspire! Network’s American Black Film Festival Series. This film was born out of a collaboration with the <a href="https://www.southernfoodways.org/">Southern Foodways Alliance</a> counter histories project.</p>
          <p>The film is also available in an hour format on Amazon, Google, Dish, Vudu, Vimeo, and Shaw. And is available for educational use through <a href="http://www.films.com/ecTitleDetail.aspx?TitleID=131013">Films Media Group (t)</a>.</p>
          <p>Meet the men who stood up for their rights at the counter of the Rock Hill, SC McCrory’s Five and Dime. They asked for a cup of coffee and were instead met with violence, police brutality and unjust imprisonment. These students of Friendship College took on the weight of discrimination. They were the test case for the “Jail No Bail” strategy that would re-invigorate the Civil Rights movement.</p>
          <p>The courage of these men ignited a passion and furor that rose into the famed Freedom Rides, and brought the United States closer to major Civil Rights reform in 1964 and 1965. Counter Histories: Rock Hill provides an intimate look at an important moment in our history and resonates with current audiences still battling for equal treatment and rights.</p>
        </div>
      </AboutBody>
      <FriendshipNine>
        <Title>The Friendship 9</Title>
        <div className='cast'>
          <div className='member'>Clarence Graham</div>
          <div className='member'>Willie McCleod</div>
          <div className='member'>James Wells</div>
          <div className='member'>W.T. "Dub" Massey</div>
          <div className='member'>Thomas Gaither</div>
          <div className='member'>John Gaines</div>
          <div className='member'>Mack Workman</div>
          <div className='member'>Robert McCullough</div>
          <div className='member'>David Williamson Jr.</div>
        </div>
      </FriendshipNine>
      <Quote>
        <blockquote>
          <p>This is a documentary that should be screened at every school in the nation.</p>
          <cite>Holloywood RedCarpet Report</cite>
        </blockquote>
      </Quote>
    </PageSection>
  </Layout>
)