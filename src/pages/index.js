import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import PostHeader from '../components/post-header'

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query IndexPageQuery {
        allMarkdownRemark(
          filter: { frontmatter: { date: { ne: null } } }
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
              timeToRead
              excerpt
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <Head />
      {allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.id} className="max-w-3xl mx-8 sm:mx-auto mt-16">
          <PostHeader
            slug={node.fields.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            readTime={node.timeToRead}
          />
          <section className="sm:ml-24 mt-4">
            <p>{node.excerpt}</p>
          </section>
        </article>
      ))}
    </Layout>
  )
}
export default IndexPage
