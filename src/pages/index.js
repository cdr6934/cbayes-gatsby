
import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout.js';
import { imageWrapper } from '../styles/index.module.css';

export default function IndexPage() {

  return (
    <Layout>
      

      <h1>Hello Frontend Masters!</h1>
      <Link to="/about">About this site</Link>

    
    </Layout>
  );
}