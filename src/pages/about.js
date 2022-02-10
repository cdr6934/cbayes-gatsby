import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from '../components/layout.js';

export default function AboutPage({ data }) {
    return (
     <Layout
     title="About This Site"
     description="More information about this site."
     >
         <h1>About this site</h1>
    
         <Link to="/">Back to home</Link>
     </Layout>
    );
  }