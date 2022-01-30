import React from "react";
import { Layout, HeroPost } from '../components';
import MoreStories from "../components/more-stories";
import { graphql } from "gatsby";

export default function Blog({ data: { allPosts } }) {
  // sort allPosts by date
  allPosts.nodes.sort((a, b) => new Date(b.date) - new Date(a.date));

  const heroPost = allPosts.nodes[0];
  const morePosts = allPosts.nodes.slice(1);

  return (
    <Layout>
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Layout>
  );
}

export const query = graphql`
  {
    allPosts: allDatoCmsPost(sort: { fields: date, order: DESC }, limit: 20) {
      nodes {
        title
        slug
        excerpt
        date
        coverImage {
          large: gatsbyImageData(width: 1500)
          small: gatsbyImageData(width: 760)
        }
        author {
          name
          picture {
            gatsbyImageData(
              layout: FIXED
              width: 48
              height: 48
              imgixParams: { sat: -100 }
            )
          }
        }
      }
    }
  }
`;
