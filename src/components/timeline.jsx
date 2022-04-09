import React from "react";
import { StructuredTextGraphQlResponse } from "react-datocms";
import { StructuredContent } from ".";
import Img from 'gatsby-image';

export const Timeline = ({ content }) => {
  return (
    <>
      {
        content && content.map((item, i) => (
          <div key={`experience-${i}`} className="grid grid-cols-[35px_minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_35px_minmax(0,2fr)]">
              <div className="text-sm flex flex-col gap-2 col-start-2 md:col-start-1">
                <h3 className="font-bold text-gray-700 text-left md:text-right text-base">{item.dateStart} {item.isCurrentDate ? ' - Actualidad' : item.dateEnd ? ' - ' + item.dateEnd : ''}</h3>
                <p className="text-gray-500 text-left md:text-right">{item.situation}</p>
                {
                  item.imageMinicover && (
                    <div className="flex flex-row justify-start md:justify-end mb-4">
                      <Img className="w-10" fluid={item.imageMinicover.fluid} />
                    </div>
                  )
                }
              </div>
              <div className="flex flex-row justify-center row-start-1 row-end-3 col-start-1 md:col-start-2">
                <div className="relative bg-blue-300 w-[1px] after:h-4 after:w-4 after:rounded-full after:border-2 after:border-blue-400 after:bg-white after:content-[''] after:absolute after:top-1 after:-right-[7.5px]">
              </div>
              </div>
              <div className="text-sm text-gray-700 col-start-2 md:col-start-3 flex flex-col gap-2 mb-4">
                <h3 className="font-bold text-gray-700 text-base">{item.job}</h3>
                <StructuredContent content={item.descriptionJob} />
              </div>
          </div>
        ))
      }
    </>
  )
}