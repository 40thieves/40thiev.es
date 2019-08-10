import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'typeface-roboto'
import 'typeface-merriweather'

import '../css/index.css'

import Header from './header'
import Footer from './footer'

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        lang
      }
    }
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang={data.site.siteMetadata.lang} />
        </Helmet>
        <Header />
        <main className="mb-20">{children}</main>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
