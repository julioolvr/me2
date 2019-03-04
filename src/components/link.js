import React from 'react';
import { Link } from 'gatsby';

import { WithLang } from 'src/components/languageToggle';

function toSpanish(to) {
  if (to.startsWith('/es')) {
    return to;
  }
  return `/es${to}`;
}

function toEnglish(to) {
  if (to.startsWith('/es')) {
    return to.replace(/^\/es/, '');
  }
  return to;
}

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

export default LinkWithLang;
