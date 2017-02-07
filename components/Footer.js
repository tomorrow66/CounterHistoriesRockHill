import Link from 'next/link';
import styled from 'styled-components';

const SiteFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1a7363;
  padding: 10px;

  @media (min-width: 768px) {
    padding: 30px;
  }

  .links {
    font-size: 12px;
    margin-bottom: 20px;
    @media (min-width: 768px) {
      font-size: 16px;
      margin-bottom: 40px;
    }
    a {
      color: #fff;
      text-transform: uppercase;
      text-decoration: none;
      padding: 0 10px;
    }
  }
  .copyright {
    font-size: 10px;
    @media (min-width: 768px) {
      font-size: inherit;
    }
    text-transform: uppercase;
  }
`;

export default () => (
  <SiteFooter>
    <nav className="links">
      <a href='http://fr3der1ck.com' target='_blank'>Fr3der1ck</a>| 
      <a href='http://tomorrowpictures.com' target='_blank'>Tommorrow Pictures</a>| 
      <a href='mailto:info@tomorrowpictures.com?Subject=Counter%20Histories:%20Rock%20Hill' target='_blank'>Contact</a>
    </nav>
    <small className="copyright">© 2017 Tomorrow Pictures Inc | All Rights Reserved</small>
  </SiteFooter>
)