import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';

const MainPage = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

const Pages = styled.li`
  padding: 0 10px;

  & + & {
    border-left: 1px solid black;
  }
`;

const IndexPage = () => (
  <Layout centered>
    <MainPage>
      <Pages>
        <Link to="/b">me</Link>
      </Pages>
      <Pages>
        <Link to="/b">blog</Link>
      </Pages>
      <Pages>
        <Link to="/talks">talks</Link>
      </Pages>
      <Pages>
        <Link to="/b">things</Link>
      </Pages>
    </MainPage>
  </Layout>
);

export default IndexPage;
