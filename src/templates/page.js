import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from 'src/components/layout';

const Content = styled.div`
  max-width: 40em;
  margin: 0 auto;
`;

export default function Template({ children }) {
  return (
    <Layout>
      <Content>{children}</Content>
    </Layout>
  );
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
};
