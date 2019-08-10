import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <article className="max-w-3xl mx-8 sm:mx-auto mt-16">
      <h1 className="text-4xl mb-4">Page Not Found</h1>
      <p>
        There's no page here{' '}
        <span role="img" aria-label="crying emoji">
          😢
        </span>
      </p>
    </article>
  </Layout>
)

export default NotFoundPage
