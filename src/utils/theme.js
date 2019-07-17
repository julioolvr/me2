import 'firacode/distr/fira_code.css';
import 'highlight.js/styles/hybrid.css';

import { createGlobalStyle } from 'styled-components';

import typography from './shevy';

export const theme = {
  typography,
  colors: {
    background: '#fafafa',
    main: '#458dce',
    lightBackground: '#f1f1f1',
    code: '#AB314E',
    text: '#333333',
    lightText: '#888888',
  },
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

  code {
    color: ${({ theme }) => theme.colors.code};
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
