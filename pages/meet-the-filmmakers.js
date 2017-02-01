import styled from 'styled-components';
import Layout from '../components/Layout';
import PageSection from '../components/PageSection';
import Banner from '../components/Banner';
import BannerTitle, { BannerSpan } from '../components/BannerTitle';
import Gallery from '../components/Gallery';

const FilmmakersBio = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #030202;
  padding: 0 5% 40px;
  border-bottom: 10px solid rgba(26,115,99,1);

  @media (min-width: 768px) {
    padding: 0 20% 40px;
  }

  .name {
    color: #d99518;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
  }
  p {
    font-size: 14px;

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(/static/images/mtf_tpi_logo_section.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  padding: 20px;
  position: relative;

  @media (min-width: 768px) {

  }

  .overlay {
    background-color: rgba(47,50,64, .85);
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    z-index: 1;
  }

  .tpi_logo {
    width: 35%;
    @media (min-width: 768px) {
      width: 25%;
    }
  }

  a {
    display: block;
    width: 300px;
    z-index: 10;
  }
  .cta {
    font-size: 14px;
    color: #fff;
    z-index: 10;

    @media (min-width: 768px) {
      font-size: 16px;
    }
    a {
      display: inline;
      color: #d99518;
      text-decoration: none;
    }
  }
`;

export default () => (
  <Layout title='Meet the Filmmakers'>
    <PageSection>
      <Banner img='/static/images/mtf_banner.jpg'>
        <BannerTitle>Meet<br/>The Filmmakers</BannerTitle>
        <BannerSpan>Counter Histories: Rock Hill</BannerSpan>
      </Banner>
      <FilmmakersBio>
        <img src="/static/images/mtf_fred.jpg" />
        <h3 className='name'>Fr3der1ck Taylor</h3>
        <p className='bio'>Hi, I’m Fr3dR1cK Taylor, a Chicago native with a passion for documenting amazing stories. I’ve been around the world, telling stories about people and the challenges they face. The idea of inspiring audiences through true stories of people doing extraordinary things serves as a source of endless inspiration for me. I endeavor to make films that ask thought provoking questions, teach us something and entertain us in the process. I also bring this sensibility to my client based work, and specialize in real people projects, music artist based work and social justice themed pieces. The more global the better, as our world keeps getting smaller the opportunities to share information and affect change keep getting bigger.</p>
      </FilmmakersBio>
      <FilmmakersBio>
        <img src="/static/images/mtf_ellen.jpg" />
        <h3 className='name'>Ellen Barnard</h3>
        <p className='bio'>As Executive Producer, my main role is to turn ideas into polished productions that deliver results for our clients. Part production guru, part strategic enthusiast, I enjoy thinking through the details that lead to great execution. I have a marketing background & a few great industry awards. I have been partnering with Fr3deR1cK as a producer, helming award winning projects around the globe for almost 20 years. Four years in Chapel Hill, NC at UNC taught me that “Go Heels!” has nothing to do with shoes, and I hold a Master’s degree in cultural history from Emory University. I am a huge fan of liberal arts degrees. And I am awed by the endless opportunity to be creative that the digital age brings us.</p>
      </FilmmakersBio>
      <LogoSection>
        <div className='overlay'/>
        <a className="tpi_logo" href='http://tomorrowpictures.com'>
          <img src='/static/images/tpi_logo.svg' />
        </a>
        <div className='cta'>
          The story is in the telling. Let us help you tell yours. <a href="http://tomorrowpictures.com" target="_blank">Click here to learn more about Tomorrow Pictures.</a>
        </div>
      </LogoSection>
      <Gallery>
        <img src='/static/images/mtf_gallery1.jpg' />
        <img src='/static/images/mtf_gallery2.jpg' />
      </Gallery>
    </PageSection>
  </Layout>
)