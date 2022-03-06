import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { StructuredText, renderRule } from "react-datocms";
import { isCode } from "datocms-structured-text-utils";
import Highlight, { defaultProps } from "prism-react-renderer";
import vsDark from 'prism-react-renderer/themes/vsDark';

export const StructuredContent = ({ content }) => {
  return (
    <StructuredText
      data={content}
    />
  )
}