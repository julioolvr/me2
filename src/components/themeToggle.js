import React from 'react';
import PropTypes from 'prop-types';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

const ThemeContext = React.createContext({ theme: 'light', toggle: () => {} });

function ThemeToggleProvider({ children }) {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <ThemeContext.Provider value={{ theme, toggle: toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      )}
    </ThemeToggler>
  );
}

ThemeToggleProvider.propTypes = {
  children: PropTypes.node,
};

ThemeToggleProvider.defaultProps = {
  children: undefined,
};

export default ThemeToggleProvider;
export { ThemeContext };
