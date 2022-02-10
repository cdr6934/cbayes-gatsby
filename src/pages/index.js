
import * as React from 'react';
import {StaticImage} from 'gatsby-plugin-image'
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout.js';
import {imageWrapper} from '../styles/index.module.css'

export default function IndexPage() {

  const data = useStaticQuery(graphql`
    query GetBlogPosts { 
      allMdx { 
        nodes {
          id 
          slug
          frontmatter { 
            title 
            description
            date(fromNow: true)
          }
        }
      }
    }
  `); 
  
  const posts = data.allMdx.nodes; 
  
  return (
    <Layout>
      <div className={imageWrapper}>
        <StaticImage
        src="../images/20211205-012435925.jpg"
        alt="Celestial Collisions"
        placeholder="dominantColor"
        width={300}
        height={300}
        />
      </div>
      <h1>Welcome to the <b>CBayes Media Labs</b></h1>
      <p>
        You will find that this site is currently under construction.
      </p> 
      <p>
        <b>BUT</b> will be up soon.
        I'm currently working on scripting it out in a newer framework and its coming together 
        easier I had expected. It will be fully functional soon and give you the opportunity
        to experience it more fully in the near future. 

      </p>
      <h2> For the time being..</h2>
      <Link to='https://www.generativecollective.com'> Check out Generative Collective</Link>
      <p/>
      <h2> Check out recent posts:</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.slug}>{post.frontmatter.title}</Link>{' '}
            <small>posted {post.frontmatter.date}</small>
          </li>
        ))}
      </ul>
    </Layout>
  );
}