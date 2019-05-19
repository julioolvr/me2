import React from 'react';
import styled from 'styled-components';

import shevy from 'src/utils/shevy';
import Layout from 'src/components/layout';
import Sections from 'src/components/sections';

const { baseSpacing } = shevy;

const Wrapper = styled.div`
  width: 100%;
  max-width: 30em;
`;

const Content = styled.div`
  max-width: 40em;
  margin-left: ${baseSpacing(0.5)};
  padding-left: ${baseSpacing(0.5)};
  border-left: 2px solid ${({ theme }) => theme.colors.main};
`;

const Name = styled.h1`
  margin-top: 0;
`;

const IndexPage = () => (
  <Layout withHeader={false} withPadding={false} centered>
    <Wrapper>
      <Content>
        <Name>Julio Olivera</Name>
        <Sections />
      </Content>
    </Wrapper>
  </Layout>
);

export default IndexPage;
