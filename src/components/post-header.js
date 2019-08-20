import React from 'react'
import { Link } from 'gatsby'

const PostHeader = ({ slug, title, date, readTime }) => (
  <header className="flex flex-col-reverse sm:flex-row">
    <h1
      className="font-serif text-4xl leading-none break-words"
      style={{ order: 1 }}
    >
      <Link to={slug} className="text-blue-500 no-underline font-medium">
        {title}
      </Link>
    </h1>
    <div
      className="
        flex sm:flex-col
        sm:w-16 sm:mx-4 sm:h-0
        pt-2
        border-t border-teal-500
        text-gray-600 text-xs text-center leading-tight
      "
    >
      <time dateTime={date} className="mx-1 sm:ml-0">
        {new Date(date).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })}
      </time>
      <p className="mx-1 sm:ml-0 sm:pt-2">{readTime} min read</p>
    </div>
  </header>
)

export default PostHeader
