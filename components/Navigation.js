import Link, { prefetch } from 'next/prefetch';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  a {
    color: #fff;
    display: inline-block;
    margin: 0.5em;
    font-family: 'Merriweather Sans', Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;

    @media (min-width: 768px) {
      font-size: 16px;
      font-weight: 700;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default () => (
  <NavBar>
    <Link href='/'><a>Home</a></Link>
    <Link href='/meet-the-filmmakers'><a>Meet The Filmmakers</a></Link>
    <Link href='/watch'><a>Watch</a></Link>
    <Link href='/about'><a>About</a></Link>
    <Link href='/news'><a>News</a></Link>
  </NavBar>
)