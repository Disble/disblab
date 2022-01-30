import React from 'react'
import TimelineItem from './timeline-item'

export default function Timeline({ items }) {
  return (
    <div className="mt-32" id="segundo">
      {items.nodes.map(item => (
        <TimelineItem
          description={item.description}
          title={item.title}
          externalLink={item.externalLink}
          image={item.teaser}
        />
      ))}
    </div>
  )
}
