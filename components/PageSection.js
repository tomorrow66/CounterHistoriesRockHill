import React, {Component, PropTypes} from 'react';
import styled from 'styled-components';

const Main = styled.main`
  padding-top: 60px;
`;

export default ({ children = {} }) => (
  <Main>
    { children }
  </Main>
)
