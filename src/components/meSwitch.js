import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const LangSwitcher = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

function MeSwitch({ lang }) {
  let englishGreeting = (
    <h1>
      Hi!{' '}
      <span role="img" aria-label="Waving hand">
        👋
      </span>
    </h1>
  );

  let spanishGreeting = (
    <h1>
      ¡Hola!{' '}
      <span role="img" aria-label="Mano saludando">
        👋
      </span>
    </h1>
  );

  if (lang === 'es') {
    englishGreeting = <Link to="/me">{englishGreeting}</Link>;
  }

  if (lang === 'en') {
    spanishGreeting = <Link to="/es/me">{spanishGreeting}</Link>;
  }

  return (
    <LangSwitcher>
      {englishGreeting}
      {spanishGreeting}
    </LangSwitcher>
  );
}

MeSwitch.propTypes = {
  lang: PropTypes.oneOf(['en', 'es']).isRequired,
};

export default MeSwitch;
