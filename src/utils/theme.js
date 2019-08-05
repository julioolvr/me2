import 'firacode/distr/fira_code.css';
import 'highlight.js/styles/hybrid.css';

import { createGlobalStyle } from 'styled-components';

import typography from './shevy';

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

export const theme = {
  typography,
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
    ${typography.body};
    font-family: ${({ theme }) => theme.fonts.serif};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    word-break: break-word;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.sansSerif};
  }

  h1 {
    ${typography.h1};
    line-height: 1.05;
  }

  h2 {
    ${typography.h2};
  }

  h3 {
    ${typography.h3};
  }

  h4 {
    ${typography.h4};
  }

  h5 {
    ${typography.h5};
  }

  h6 {
    ${typography.h6};
  }

  article, p, ol, ul, pre {
    ${typography.content};
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
