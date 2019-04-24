import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from 'src/components/layout';
import MeSwitch from 'src/components/meSwitch';
import { WithLang } from 'src/components/languageToggle';

const Container = styled.div`
  width: 20em;
  text-align: center;
`;

const Content = styled.div`
  margin-top: 2em;
  display: inline-block;
  text-align: left;
`;

function MeLayout({ children }) {
  return (
    <Layout centered width="25em">
      <WithLang>
        {lang => (
          <Container>
            <MeSwitch lang={lang} />
            <Content>{children}</Content>
          </Container>
        )}
      </WithLang>
    </Layout>
  );
}

MeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MeLayout;
