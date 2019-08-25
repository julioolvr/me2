import 'firacode/distr/fira_code.css';
import 'highlight.js/styles/hybrid.css';

import { createGlobalStyle } from 'styled-components';

// Color palette https://paletton.com/#uid=53z0u0kmVJ-clUhiaOTrCE6z+vx
const colors = {
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
  darkBackground: '#1d1f21',
  text: '#333333',
  lightText: '#888888',
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

typography.body = typography.scale[2];
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

export const theme = {
  typography,
  spacing,
  colors,
  fonts: {
    sansSerif: "'Fira Sans', sans-serif",
    serif: 'Merriweather, serif',
    title: 'Fira Sans',
    text: 'Merriweather',
  },
};

/* eslint-disable no-shadow */
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.body};
    line-height: 1.5em;
    font-family: ${({ theme }) => theme.fonts.serif};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
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
    line-height: 2em;
  }

  a {
    color: ${({ theme }) => theme.colors.main};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  pre {
    line-height: 1.5;
  }

  code {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.backgroundDarker};
    padding: 4px 6px;
    border-radius: 2px;
  }

  a code {
    color: ${({ theme }) => theme.colors.main};
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

  @media only screen and (min-width: 812px) {
    code[class*='language-'],
    pre[class*='language-'] {
      width: 110%;
      margin-left: -5%;
    }
  }
`;
/* eslint-enable no-shadow */
