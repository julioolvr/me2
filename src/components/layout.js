import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

// TODO: Use a CSS-in-JS solution
// TODO: Use a typography lib for font sizes
// TODO: Define a theme with color variables
import './layout.css';

const Layout = ({ centered, children }) => (
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

        <div className={centered ? 'layout-centered' : ''}>{children}</div>
      </>
    )}
  />
);

Layout.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  centered: false,
};

export default Layout;
