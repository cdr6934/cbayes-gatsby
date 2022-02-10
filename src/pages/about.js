import { useStaticQuery } from "gatsby";
import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from '../components/layout.js';



export default function AboutPage() {

    const data = useStaticQuery(
        graphql`
        query GetPosts {
            allSanityPost(
                sort: {fields: publishedAt, order: DESC}
                limit: 5
            ) { 
                nodes {
                    id 
                    title
                    gatsbyPath(filePath: "/entry/{SanityPost.slug__current}")
                }
            }
        }
        `); 

        const entries = data.allSanityPost.nodes; 

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
        <h1> 
            Other Interesting Reads
        </h1>
        <ul>
            {entries.map((entry) => (
                <li key={entry.id}>
                    <Link to={entry.gatsbyPath}>
                        {entry.title} 
                    </Link>
                </li>
            ))}
        </ul>
     </Layout>
    );
  }