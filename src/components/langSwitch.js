import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { WithLang } from 'src/components/languageToggle';
import { toSpanish, toEnglish } from 'src/utils/lang';

const Container = styled.div`
  position: absolute;
  top: 2px;
  right: 10px;
`;

const LangLink = styled(Link)`
  text-decoration: none;
  background-image: none;
`;

function Spanish({ to }) {
  const icon = (
    <span role="img" aria-label="Spanish">
      🇦🇷
    </span>
  );

  return <LangLink to={toSpanish(to)}>{icon}</LangLink>;
}

Spanish.propTypes = {
  to: PropTypes.string,
};

Spanish.defaultProps = {
  to: null,
};

function English({ to }) {
  const icon = (
    <span role="img" aria-label="English">
      🇺🇸
    </span>
  );

  return <LangLink to={toEnglish(to)}>{icon}</LangLink>;
}

English.propTypes = {
  to: PropTypes.string,
};

English.defaultProps = {
  to: null,
};

function LangSwitch({ to }) {
  const toOrDefault = to || window.location.pathname;

  return (
    <Container>
      <WithLang>
        {lang => (lang === 'es' ? <English to={toOrDefault} /> : <Spanish to={toOrDefault} />)}
      </WithLang>
    </Container>
  );
}

LangSwitch.propTypes = {
  to: PropTypes.string,
};

LangSwitch.defaultProps = {
  to: null,
};

export default LangSwitch;