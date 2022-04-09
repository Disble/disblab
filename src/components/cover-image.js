import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import cn from "classnames";
import { Link } from "gatsby";

export default function CoverImage({ title, fluid, slug }) {
  const image = (
    <GatsbyImage
      image={fluid}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-small aspect-video", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  );
  return (
    <div className="mx-0">
      {slug ? (
        <Link to={`/blog/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
