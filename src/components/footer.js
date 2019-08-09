import React from 'react'

const Footer = () => (
  <footer
    className="
      w-full px-16 py-8
      bg-gray-100 border-t border-gray-300
      text-xs text-gray-700
    "
  >
    <section>
      All content released under a{' '}
      <a
        className="text-gray-700 hover:text-gray-900 no-underline"
        href="http://creativecommons.org/licenses/by/3.0/deed.en_US"
      >
        Creative Commons Attribution License
      </a>
    </section>
    <section className="mt-1">
      Built with{' '}
      <a
        className="mt-1 text-gray-700 hover:text-gray-900 no-underline"
        href="https://www.gatsbyjs.org"
      >
        Gatsby
      </a>
    </section>
  </footer>
)

export default Footer
