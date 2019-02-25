import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from 'src/components/layout';
import MeSwitch from 'src/components/meSwitch';

const Container = styled.div`
  width: 25em;
  text-align: center;
`;

const Content = styled.div`
  margin-top: 2em;
  display: inline-block;
  text-align: left;
`;

function MeLayout({ children, lang }) {
  return (
    <Layout centered width="25em">
      <Container>
        <MeSwitch lang={lang} />
        <Content>{children}</Content>
      </Container>
    </Layout>
  );
}

MeLayout.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.oneOf(['en', 'es']).isRequired,
};

export default MeLayout;
