import React from 'react';
import styled from 'styled-components';

import Layout from 'src/components/layout';
import Sections from 'src/components/sections';

const Container = styled.div`
  text-align: center;
`;

const IndexPage = () => (
  <Layout centered withHeader={false}>
    <Container>
      <p>Julio Olivera</p>
      <Sections />
    </Container>
  </Layout>
);

export default IndexPage;
