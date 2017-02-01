import { Component, PropTypes } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

import { configureAnalytics, pageView } from '../util/analytics';
import Header from './Header';
import Footer from './Footer';

configureAnalytics();

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

// export default ({ children, title = 'Counter Histories: Rock Hill' }) => (
//   <Container>
//     <Head>
//       <title>{ title }</title>
//       <meta charSet='utf-8' />
//       <meta name='viewport' content='initial-scale=1.0, width=device-width' />
//     </Head>
//     <Header />
//     { children }
//     <Footer />
//   </Container>
// )

export default class Page extends Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired,
    title: React.PropTypes.string
  }

  componentWillMount() {
    pageView();
  }

  render() {
    return (
      <Container>
        <Head>
          <title>{ this.props.title }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Header />
        { this.props.children }
        <Footer />
      </Container>
    )
  }
}
