import React from 'react';
import styled from 'styled-components';

import Layout from 'src/components/layout';
import Sections from 'src/components/sections';

const Container = styled.div`
  text-align: center;
`;

const Name = styled.p`
  margin-bottom: 0.5rem;
`;

const IndexPage = () => (
  <Layout centered withHeader={false}>
    <Container>
      <Name>Julio Olivera</Name>
      <Sections />
    </Container>
  </Layout>
);

export default IndexPage;
