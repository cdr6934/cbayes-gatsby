import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout.js";

export const query = graphql`
  query SanityPost($id: String!) {
    sanityPost(id: { eq: $id }) {
    title
    publishedAt
    body 
    slug {
      current
    }

  }
  }
`;

export default function SanityPost({ data }) {
  const entry = data.sanityPost;

  return (
    <Layout 
    title={entry.title} 
    description={entry.body}>
    
      <h1>{entry.title}</h1>
      <p>
        (posted {entry.publishedAt}) 
      </p>
      <p>
      {entry.body}
      </p>
      <ul>
      </ul>
    </Layout>
  );
}