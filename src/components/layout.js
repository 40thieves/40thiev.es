import React from 'react'
import PropTypes from 'prop-types'

import '../css/index.css'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <div className="h-screen grid grid-rows-layout">
    <Header />
    <main className="mb-20">{children}</main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
