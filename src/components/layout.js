import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle, css } from 'styled-components';

import 'highlight.js/styles/arduino-light.css';

import Header from 'src/components/header';
import { LangProvider, WithLang } from 'src/components/languageToggle';
import LangSwitch from 'src/components/langSwitch';

// TODO: Define a theme with color variables

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
`;

const Content = styled.div`
  padding: 2em 1em;
  max-width: 100vw;
  flex: 1;

  ${props => props.centered
    && css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fafafa;
  }
`;

function Layout({
  centered, children, withHeader, langSwitchTo, ...props
}) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <LangProvider>
          <Helmet title={data.site.siteMetadata.title}>
            <WithLang>{lang => <html lang={lang} />}</WithLang>
          </Helmet>

          <GlobalStyle />

          <Container>
            {withHeader ? <Header /> : null}
            <Content centered={centered} {...props}>
              {children}
            </Content>
          </Container>

          <LangSwitch to={langSwitchTo} />
        </LangProvider>
      )}
    />
  );
}

Layout.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  withHeader: PropTypes.bool,
  langSwitchTo: PropTypes.string,
};

Layout.defaultProps = {
  centered: false,
  withHeader: true,
  langSwitchTo: null,
};

export default Layout;
