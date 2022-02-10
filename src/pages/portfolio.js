import * as React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout.js';

export default function PortfolioPage({ data }) {
    return (
     <Layout
     title="Portfolio"
     description="More information about this site."
     >
         <h1>About this site</h1>
    
         <Link to="/">Back to home</Link>
     </Layout>
    );
  }