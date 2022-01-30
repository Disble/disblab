import React from "react";
import { Layout } from '../components';
import { graphql } from "gatsby";

export default function Categories({ data: { allCategories } }) {
  return (
    <Layout>
      {allCategories &&
        allCategories.nodes.map(category => (
          <div key={category.id}>
            <h2>{category.name}: /{category.slug}</h2>
          </div>
        ))
      }
    </Layout>
  );
}

export const query = graphql`
  {
    allCategories: allDatoCmsCategory {
      nodes {
        name
        slug
        id
      }
    }
  }
`;
