import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled, { css, ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';

import { theme, GlobalStyle } from 'src/utils/theme';

import Header from 'src/components/header';
import { LangProvider, useLang } from 'src/components/languageToggle';

// TODO: Define a theme with color variables

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
`;

const Content = styled.div`
  max-width: 100vw;
  flex: 1;

  ${props => props.withPadding
    && css`
      padding: 2em 1em;
    `}

  ${props => props.centered
    && css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ${props => props.verticalCenter
    && css`
      display: flex;
      align-items: center;
    `}
`;

// Base Layout component for all pages
function Layout({
  centered,
  verticalCenter,
  withPadding,
  children,
  withHeader,
  ...props
}) {
  const darkMode = useDarkMode(false);

  return (
    <LangProvider>
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
        render={(data) => {
          const currentLang = useLang();
          const themeKey = darkMode.value ? 'dark' : 'light';

          return (
            <ThemeProvider theme={theme[themeKey]}>
              <>
                <Helmet title={data.site.siteMetadata.title}>
                  <html lang={currentLang} />
                </Helmet>

                <GlobalStyle />

                <Container>
                  {withHeader ? <Header /> : null}
                  <Content
                    centered={centered}
                    verticalCenter={verticalCenter}
                    withPadding={withPadding}
                    {...props}
                  >
                    {children}
                  </Content>
                </Container>
              </>
            </ThemeProvider>
          );
        }}
      />
    </LangProvider>
  );
}

Layout.propTypes = {
  centered: PropTypes.bool,
  verticalCenter: PropTypes.bool,
  children: PropTypes.node.isRequired,
  withHeader: PropTypes.bool,
  withPadding: PropTypes.bool,
};

Layout.defaultProps = {
  centered: false,
  verticalCenter: false,
  withHeader: true,
  withPadding: true,
};

export default Layout;
