import 'firacode/distr/fira_code.css';
import 'highlight.js/styles/hybrid.css';

import { createGlobalStyle } from 'styled-components';

// Color palette https://paletton.com/#uid=53z0u0kmVJ-clUhiaOTrCE6z+vx
const lightColors = {
  background: '#fafafa',
  backgroundDarker: '#f0f0f0',
  main: '#458dce',
  mainDark: '#2676BF',
  mainDarker: '#0A5AA3',
  mainLight: '#68A6DD',
  mainLighter: '#98C4EC',
  accent: '#3CD299',
  accentDark: '#1BC484',
  accentDarker: '#00AA6A',
  accentLight: '#61E0B0',
  accentLighter: '#92EECB',
  lightBackground: '#f1f1f1',
  text: '#444444',
  lightText: '#888888',
};

const darkColors = {
  background: '#111111',
  backgroundDarker: '#222222',
  main: '#458dce',
  mainDark: '#2676BF',
  mainDarker: '#0A5AA3',
  mainLight: '#68A6DD',
  mainLighter: '#98C4EC',
  accent: '#3CD299',
  accentDark: '#1BC484',
  accentDarker: '#00AA6A',
  accentLight: '#61E0B0',
  accentLighter: '#92EECB',
  lightBackground: '#111111',
  text: '#fafafa',
  lightText: '#f8f8f8',
};

const typography = {
  scale: [
    '12px',
    '14px',
    '16px',
    '18px',
    '20px',
    '24px',
    '30px',
    '36px',
    '48px',
    '60px',
    '72px',
  ],
};

typography.body = typography.scale[3];
typography.h1 = typography.scale[8];
typography.h2 = typography.scale[7];
typography.h3 = typography.scale[6];
typography.h4 = typography.scale[5];
typography.h5 = typography.scale[4];
typography.h6 = typography.scale[3];

const spacing = {
  scale: [
    '4px',
    '8px',
    '12px',
    '16px',
    '24px',
    '32px',
    '48px',
    '64px',
    '96px',
    '128px',
    '192px',
    '256px',
    '384px',
    '512px',
    '640px',
    '768px',
  ],
};

spacing.base = spacing.scale[3];

const baseTheme = {
  typography,
  spacing,
  breakpoints: {
    small: 640,
    medium: 768,
    large: 1024,
    extraLarge: 1280,
  },
  fonts: {
    sansSerif: "'Fira Sans', sans-serif",
    serif: 'Merriweather, serif',
    title: 'Fira Sans',
    text: 'Merriweather',
  },
};

export const theme = {
  light: {
    ...baseTheme,
    colors: lightColors,
  },
  dark: {
    ...baseTheme,
    colors: darkColors,
  },
};

/* eslint-disable no-shadow */
export const GlobalStyle = createGlobalStyle`
  body {
    --background-color: ${theme.light.colors.background};
    --text-color: ${theme.light.colors.text};
    --link-color: ${theme.light.colors.main};
    --code-color: ${theme.light.colors.text};
    --code-background-color: ${theme.light.colors.backgroundDarker};
    --quote-border-color: ${theme.light.colors.mainDarker};
    --menu-background-color: ${theme.light.colors.lightBackground};
    --metadata-color: ${theme.light.colors.lightText};
  }

  body.dark {
    --background-color: ${theme.dark.colors.background};
    --text-color: ${theme.dark.colors.text};
    --link-color: ${theme.dark.colors.main};
    --code-color: ${theme.dark.colors.text};
    --code-background-color: ${theme.dark.colors.backgroundDarker};
    --quote-border-color: ${theme.dark.colors.mainDarker};
    --menu-background-color: ${theme.dark.colors.lightBackground};
    --metadata-color: ${theme.dark.colors.lightText};
  }

  body {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.body};
    line-height: 1.5;
    font-family: ${({ theme }) => theme.fonts.serif};
    background-color: var(--background-color);
    color: var(--text-color);
    word-break: break-word;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.sansSerif};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.h1};
    line-height: 1.05;
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.h2};
    margin-top: ${({ theme }) => theme.spacing.scale[6]};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.h3};
  }

  h4 {
    font-size: ${({ theme }) => theme.typography.h4};
  }

  h5 {
    font-size: ${({ theme }) => theme.typography.h5};
  }

  h6 {
    font-size: ${({ theme }) => theme.typography.h6};
  }

  p {
    line-height: 2;
    margin-bottom: ${({ theme }) => theme.spacing.scale[5]};
  }

  ul {
    margin-bottom: ${({ theme }) => theme.spacing.scale[5]};
  }

  li {
    line-height: ${({ theme }) => theme.spacing.scale[5]};
    margin-bottom: ${({ theme }) => theme.spacing.scale[1]};
  }

  a {
    color: var(--link-color);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  pre {
    line-height: 1.5;
  }

  code {
    color: var(--code-color);
    background-color: var(--code-background-color);
    border-radius: 2px;
  }

  a code {
    color: var(--link-color);
  }

  code[class*='language-'],
  pre[class*='language-'] {
    font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
      monospace;

    padding: 1em;
    border-radius: 3px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
    word-break: normal;
  }

  blockquote {
    border-left: 3px solid var(--quote-border-color);
    padding-left: ${({ theme }) => theme.spacing.scale[3]};
    font-style: italic;
  }

  blockquote > p {
    line-height: 1.75;
  }

  @media only screen and (min-width: 812px) {
    code[class*='language-'],
    pre[class*='language-'] {
      width: 110%;
      margin-left: -5%;
    }
  }
`;
/* eslint-enable no-shadow */
