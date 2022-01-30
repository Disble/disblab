import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default function ProfileImage() {
  const data = useStaticQuery(graphql`
  query GET_IMAGE {
    photoProfile: allDatoCmsAsset(filter: {basename: {eq: "foto-square"}}) {
      nodes {
        format
        author
        filename
        basename
        fluid(maxWidth: 300) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
  `);
  return <Img className="block mb-6 bottom-6 md:bottom-6 h-40 w-40 rounded-full md:h-64 md:w-64 border-4 border-slate-600" fluid={data.photoProfile.nodes[0].fluid} />
}
