import React, { useState } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import useDarkMode from 'use-dark-mode';

import menuIconSrc from 'src/images/menu.svg';
import lightMenuIconSrc from 'src/images/menu-light.svg';
import LinkWithLang, { LinkToOppositeLang } from 'src/components/link';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const darkMode = useDarkMode(false);
  const themeKey = darkMode.value ? 'dark' : 'light';

  return (
    <>
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
        <DarkModeToggleButton type="button" onClick={darkMode.toggle}>
          {darkMode.value ? '☀️' : '🌘'}
        </DarkModeToggleButton>
      </ResponsiveMenuContainer>
    </>
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

  background-color: ${({ theme }) => theme.colors.lightBackground};
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
    color: ${({ theme }) => theme.colors.text};
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
  height: 20px;
  width: 20px;

  background-image: url(${({ themeKey }) => (themeKey === 'light' ? menuIconSrc : lightMenuIconSrc)});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-color: transparent;
  border: none;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.medium}px) {
    display: none;
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

const DarkModeToggleButton = styled.button`
  font-size: ${({ theme }) => theme.typography.scale[6]};
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
`;
