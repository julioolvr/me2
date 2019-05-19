import 'prismjs/themes/prism-coy.css';
import 'firacode/distr/fira_code.css';

import { createGlobalStyle } from 'styled-components';

import typography from './shevy';

export const theme = {
  typography,
  colors: {
    background: '#fafafa',
    main: '#458dce',
    lightBackground: '#f1f1f1',
    code: '#2f6690',
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
    font-family: ${({ theme }) => theme.fonts.text}, serif;
    background-color: ${({ theme }) => theme.colors.background};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.title}, sans-serif;
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

  code[class*='language-'],
  pre[class*='language-'] {
    font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
      monospace;

    background-color: ${({ theme }) => theme.colors.lightBackground};
    border-left: 2px solid black;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
    border-top-right-radius: 2px;
    border-bottom-right-radius: 5px;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }
`;
/* eslint-enable no-shadow */
