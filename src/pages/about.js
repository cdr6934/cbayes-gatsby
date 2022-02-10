import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from '../components/layout.js';

export default function AboutPage({ data }) {
    return (
     <Layout
     title="About"
     description="More information about this site."
     >
         <h1>About this site</h1>
        <p>
            As a fan of new technologies, I have spent the last 5 years persuing a passion of mine in new media art. This led
            to the discovery of compassion. 
        </p>
     </Layout>
    );
  }