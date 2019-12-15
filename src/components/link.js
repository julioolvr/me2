import React from 'react';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router';

import { WithLang, useLang } from 'src/components/languageToggle';
import { toSpanish, toEnglish } from 'src/utils/lang';

function LinkWithLang({
  lang, to, onCurrentLinkClicked, ...props
}) {
  return (
    <WithLang>
      {(currentLang) => {
        let newTo = to;

        if (to) {
          if (lang === 'es' || (!lang && currentLang === 'es')) {
            newTo = toSpanish(to);
          } else if (lang === 'en' || (!lang && currentLang === 'en')) {
            newTo = toEnglish(to);
          }
        }

        return (
          <Location>
            {({ location }) => {
              const onClickOverride = {};

              if (newTo === location.pathname && onCurrentLinkClicked) {
                onClickOverride.onClick = onCurrentLinkClicked;
              }

              return <Link to={newTo} {...onClickOverride} {...props} />;
            }}
          </Location>
        );
      }}
    </WithLang>
  );
}

LinkWithLang.propTypes = {
  lang: PropTypes.oneOf(['en', 'es']),
  to: PropTypes.string.isRequired,
  onCurrentLinkClicked: PropTypes.func,
};

LinkWithLang.defaultProps = {
  lang: null,
  onCurrentLinkClicked: null,
};

export default LinkWithLang;

function LinkToOppositeLang(props) {
  const currentLang = useLang();
  const otherLang = currentLang === 'es' ? 'en' : 'es';

  return (
    <Location>
      {({ location }) => (
        <StaticQuery
          query={graphql`
            query BlogPosts {
              allSitePage(filter: { path: { regex: "/^(?:/es)?/b/" } }) {
                edges {
                  node {
                    path
                  }
                }
              }
            }
          `}
          render={(data) => {
            let to = location.pathname;

            if (to.startsWith('/b') || to.startsWith('/es/b')) {
              if (
                !data.allSitePage.edges.some(
                  page => to !== page.node.path
                    && page.node.path.replace(/^\/es/, '')
                      === to.replace(/^\/es/, ''),
                )
              ) {
                to = '/b';
              }
            }

            return (
              <LinkWithLang lang={otherLang} to={to} {...props}>
                {otherLang === 'es' ? 'español' : 'english'}
              </LinkWithLang>
            );
          }}
        />
      )}
    </Location>
  );
}

export { LinkToOppositeLang };
