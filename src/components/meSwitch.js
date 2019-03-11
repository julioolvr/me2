import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Link from 'src/components/link';

const LangSwitcher = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const GreetingLink = styled(Link)`
  text-decoration: none;
  background-image: none;

  h1 {
    color: #1ca086;
  }
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
    englishGreeting = (
      <GreetingLink to="/me" lang="en">
        {englishGreeting}
      </GreetingLink>
    );
  }

  if (lang === 'en') {
    spanishGreeting = (
      <GreetingLink to="/es/me" lang="es">
        {spanishGreeting}
      </GreetingLink>
    );
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
