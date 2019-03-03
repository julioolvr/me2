import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle, css } from 'styled-components';

import 'highlight.js/styles/arduino-light.css';

import Header from 'src/components/header';

// TODO: Define a theme with color variables

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
`;

const Content = styled.div`
  padding-top: 2em;
  padding-bottom: 2em;
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

const Layout = ({
  centered, children, withHeader, ...props
}) => (
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
      <>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" />
        </Helmet>

        <GlobalStyle />

        <Container>
          {withHeader ? <Header /> : null}
          <Content centered={centered} {...props}>
            {children}
          </Content>
        </Container>
      </>
    )}
  />
);

Layout.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  withHeader: PropTypes.bool,
};

Layout.defaultProps = {
  centered: false,
  withHeader: true,
};

export default Layout;
