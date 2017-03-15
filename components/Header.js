import Link from 'next/link';
import styled from 'styled-components';
import Navigation from './Navigation';

const SiteHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2f3240;
  position: fixed;
  width: 100%;
  height: 80px;
  padding: 0 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    height: 60px;
  }

  .branding {
    width: 150px;
    @media (min-width: 768px) {
      width: 200px;
    }
  }
`;

export default () => (
  <SiteHeader>
    <div className="branding">
      <Link href='/'>
        <a><img src="/static/images/logo.svg" /></a>
      </Link>
    </div>
    <Navigation />
  </SiteHeader>
)