import React from 'react';
import { HelmetDatoCms } from "gatsby-source-datocms";
import { StaticQuery, graphql } from "gatsby";
import { Header, Container, Intro } from "../components";

export default function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
      {
        site: datoCmsSite {
          favicon: faviconMetaTags {
            ...GatsbyDatoCmsFaviconMetaTags
          }
        }
        blog: datoCmsBlog {
          seo: seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
        }
      }
    `}
      render={({ site, blog }) => (
        <Container>
          <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />
          <Intro />
          <Header />
          <main>{children}</main>
        </Container>
      )}
    />
  )
}