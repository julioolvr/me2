import React from 'react';
import styled from 'styled-components';

import Layout from 'src/components/layout';
import Sections from 'src/components/sections';

const Wrapper = styled.div`
  width: 100%;
  max-width: 30em;
`;

const Content = styled.div`
  max-width: 40em;
  margin-left: ${({ theme }) => theme.spacing.scale[4]};
  padding-left: ${({ theme }) => theme.spacing.scale[3]};
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
        <Sections big vertical />
      </Content>
    </Wrapper>
  </Layout>
);

export default IndexPage;
