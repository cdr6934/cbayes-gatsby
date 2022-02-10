
import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout.js';
import { imageWrapper } from '../styles/index.module.css';

export default function IndexPage() {

  return (
    <Layout>
      <h1>Welcome to the <em>CBayes Media Labs</em>!</h1>
      <p>
        You will find that this site is currently under construction but will be up soon.
        I'm currently working on scripting it out in a newer framework but it has been 
        easier than I had expected. It will be fully functional soon and give you the opportunity
        to experience it more fully in the near future. 

      </p>
      <h2> For the time being..</h2>
      <Link to='https://www.generativecollective.com'> Check out Generative Collective</Link>
    
    </Layout>
  );
}