import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PostHeader from '../components/post-header'

export const query = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
      timeToRead
      html
    }
  }
`

const Post = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <article className="max-w-md mx-auto mt-16">
        <PostHeader
          slug={post.fields.slug}
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          readTime={post.timeToRead}
        />
        <section
          className="ml-24 sm:ml-0 text-lg leading-tight post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </Layout>
  )
}

export default Post
