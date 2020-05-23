import React, { useState, useContext } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';

import { ThemeContext } from 'src/components/themeToggle';
import menuIconSrc from 'src/images/menu.svg';
import menuLightIconSrc from 'src/images/menu-light.svg';
import LinkWithLang, { LinkToOppositeLang } from 'src/components/link';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme: themeKey, toggle: toggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <MenuButton
        onClick={() => setMenuOpen(true)}
        aria-expanded={false}
        themeKey={themeKey}
      />

      <ScrollBlockGlobalStyle block={menuOpen} />

      <ResponsiveMenuContainer isOpen={menuOpen}>
        {menuOpen && (
          <MenuButton
            onClick={() => setMenuOpen(false)}
            aria-expanded
            themeKey={themeKey}
            css={css`
              position: absolute;
              top: ${({ theme }) => theme.spacing.scale[2]};
              left: ${({ theme }) => theme.spacing.scale[2]};
            `}
          />
        )}

        <SectionLink to="/b" onCurrentLinkClicked={() => setMenuOpen(false)}>
          blog
        </SectionLink>
        <SectionLink
          to="/talks"
          onCurrentLinkClicked={() => setMenuOpen(false)}
        >
          talks
        </SectionLink>
        <SectionLink
          to="/things"
          onCurrentLinkClicked={() => setMenuOpen(false)}
        >
          things
        </SectionLink>
        <ExternalLink href="https://github.com/julioolvr">github</ExternalLink>
        <ExternalLink href="https://twitter.com/julioolvr">
          twitter
        </ExternalLink>
        <hr />
        <LanguageSwitchLink />
      </ResponsiveMenuContainer>

      <ToggleButton
        type="button"
        onClick={() => toggleTheme(themeKey === 'light' ? 'dark' : 'light')}
      >
        {themeKey === 'light' ? '🌖' : '☀️'}
      </ToggleButton>
    </Container>
  );
}

export default Menu;

const ResponsiveMenuContainer = styled.nav`
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: ${props => (props.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: var(--menu-background-color);
  font-size: ${({ theme }) => theme.typography.scale[6]};
  line-height: 1.5em;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.medium}px) {
    position: initial;
    display: flex;
    flex-direction: row;
    background-color: transparent;

    hr {
      display: none;
    }
  }
`;

const linkStyles = css`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.medium}px) {
    color: var(--text-color);
    margin: 0 ${({ theme }) => theme.spacing.scale[2]};
    font-size: ${({ theme }) => theme.typography.scale[4]};
  }
`;

const ExternalLink = styled('a')`
  ${linkStyles};
`;

const SectionLink = styled(LinkWithLang)`
  ${linkStyles};
`;

const LanguageSwitchLink = styled(LinkToOppositeLang)`
  ${linkStyles};
`;

const MenuButton = styled.button`
  height: 32px;
  width: 20px;

  background-image: url(${props => (props.themeKey === 'light' ? menuIconSrc : menuLightIconSrc)});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-color: transparent;
  border: none;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: none;
  }
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border: 0;
  font-size: 1.2em;
  z-index: 3;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.medium}px) {
    justify-content: flex-end;
  }
`;

const ScrollBlockGlobalStyle = createGlobalStyle`
  ${({ block }) => block
    && css`
      body {
        overflow: hidden;

        @media only screen and (min-width: ${({ theme }) => theme.breakpoints.medium}px) {
          overflow: initial;
        }
      }
    `};
`;
