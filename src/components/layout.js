import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle, css } from 'styled-components';

import 'highlight.js/styles/arduino-light.css';

// TODO: Define a theme with color variables

const Content = styled.div`
  ${props => props.centered
    && css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
    `}

  ${props => props.horizontallyCentered
    && css`
      display: flex;
      justify-content: center;
      height: 100vh;
    `}
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fafafa;
  }
`;

const Layout = ({
  centered, horizontallyCentered, children, ...props
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

        <Content centered={centered} horizontallyCentered={horizontallyCentered} {...props}>
          {children}
        </Content>
      </>
    )}
  />
);

Layout.propTypes = {
  centered: PropTypes.bool,
  horizontallyCentered: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  centered: false,
  horizontallyCentered: false,
};

export default Layout;
