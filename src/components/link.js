import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { WithLang } from 'src/components/languageToggle';
import { toSpanish, toEnglish } from 'src/utils/lang';

function LinkWithLang({ lang, to, ...props }) {
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

        return <Link to={newTo} {...props} />;
      }}
    </WithLang>
  );
}

LinkWithLang.propTypes = {
  lang: PropTypes.oneOf(['en', 'es']),
  to: PropTypes.string.isRequired,
};

LinkWithLang.defaultProps = {
  lang: null,
};

export default LinkWithLang;
