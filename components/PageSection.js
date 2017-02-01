import React, {Component, PropTypes} from 'react';
import styled from 'styled-components';

const Main = styled.main`
  padding-top: 60px;
  @media (min-width: 768px) {
    padding-top: 0;
  }
`;

export default ({ children }) => (
  <Main>
    { children }
  </Main>
)
