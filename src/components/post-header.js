import React from 'react'

const PostHeader = ({ title, date, readTime }) => (
  <header className="flex">
    <h1 className="mb-4" style={{ order: 1 }}>
      {title}
    </h1>
    <div
      className="
        w-16 pt-2 mr-4
        border-t border-teal-dark
        text-grey-dark text-xs text-center leading-tight
      "
      style={{ height: 0 }}
    >
      <time dateTime={date}>
        {new Date(date).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })}
      </time>
      <p className="pt-2">{readTime} min read</p>
    </div>
  </header>
)

export default PostHeader
