import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import './index.css';

const IndexPage = () => (
  <Layout centered>
    <ul className="index-list">
      <li>
        <Link to="/b">me</Link>
      </li>
      <li>
        <Link to="/b">blog</Link>
      </li>
      <li>
        <Link to="/talks">talks</Link>
      </li>
      <li>
        <Link to="/b">things</Link>
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
