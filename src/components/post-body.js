import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { StructuredText, renderRule } from "react-datocms";
import { isCode } from "datocms-structured-text-utils";
import Highlight, { defaultProps } from "prism-react-renderer";
import vsDark from 'prism-react-renderer/themes/vsDark';

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="prose prose-lg prose-img:rounded-2xl prose-a:text-purple-700 hover:prose-a:text-purple-600 prose-code:text-sky-700 prose-p:overflow-auto">
        <StructuredText
          data={content}
          renderBlock={({ record }) => {
            if (record.__typename === "DatoCmsImageBlock") {
              return <GatsbyImage image={record.image.gatsbyImageData} alt="" />;
            }
            return (
              <>
                <p>Don't know how to render a block!</p>
                <pre>{JSON.stringify(record, null, 2)}</pre>
              </>
            );
          }}
          customRules={[
            renderRule(isCode, ({ node, key }) => {
              return (
                <Highlight
                  {...defaultProps}
                  theme={vsDark}
                  code={node.code}
                  language={node.language}
                  key={key}
                >
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={style}>
                      {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                          {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              )
            })
          ]}
        />
      </div>
    </div>
  );
}
