/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext('bleh');

const DEFAULT_LANG = 'en';

class LangProvider extends React.Component {
  state = {
    lang: window.location.pathname.startsWith('/es') ? 'es' : DEFAULT_LANG,
    setLang: (newLang) => {
      const { lang } = this.state;
      if (newLang !== lang) {
        this.setState({ lang });
      }
    },
    toggleLang: () => this.setState(prevState => ({ lang: prevState.lang === 'en' ? 'es' : 'en' })),
  }

  render() {
    const { children } = this.props;
    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  }
}

LangProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function WithLang({ children }) {
  return <Context.Consumer>{({ lang }) => children(lang)}</Context.Consumer>;
}

WithLang.propTypes = {
  children: PropTypes.func.isRequired,
};

function LangToggle({ children }) {
  return <Context.Consumer>{({ toggleLang }) => children(toggleLang)}</Context.Consumer>;
}

LangToggle.propTypes = {
  children: PropTypes.func.isRequired,
};

function LangSetter({ children }) {
  return <Context.Consumer>{({ setLang }) => children(setLang)}</Context.Consumer>;
}

LangSetter.propTypes = {
  children: PropTypes.func.isRequired,
};

export {
  LangProvider, LangToggle, LangSetter, WithLang,
};
