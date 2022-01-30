import React from 'react';
import './styles.css';
import ReactMarkdown from 'react-markdown';
import { GatsbyImage } from "gatsby-plugin-image";

export default function TimelineItem({ description, title, externalLink, image, date }) {
  return (
    <div className="zigzag-timeline__item">
      <div className="zigzag-timeline__milestone"></div>
      <div className="prose prose-sm mx-7">
        <h2 className="title">{title}</h2>
        <GatsbyImage image={image.gatsbyImageData} alt="" />
        <GatsbyImage
          image={image.small}
          alt={`Cover Image for ${title}`}
        />
        <ReactMarkdown children={description} />
      </div>
    </div>
  )
}
