/* eslint-disable react/no-unused-state */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_LANG = 'en';
const Context = React.createContext();

class LangProvider extends React.Component {
  state = {
    lang:
      typeof window !== 'undefined'
      && window.location.pathname.startsWith('/es')
        ? 'es'
        : DEFAULT_LANG,
    setLang: (newLang) => {
      const { lang } = this.state;
      if (newLang !== lang) {
        this.setState({ lang });
      }
    },
    toggleLang: () => this.setState(prevState => ({
      lang: prevState.lang === 'en' ? 'es' : 'en',
    })),
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

function useLang() {
  return useContext(Context).lang;
}

export { LangProvider, WithLang, useLang };
