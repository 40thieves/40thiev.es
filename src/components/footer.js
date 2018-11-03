import React from 'react'

const Footer = () => (
  <footer
    className="
      absolute pin-b w-full px-16 py-8
      bg-grey-lightest border-t border-grey-light
      text-xs text-grey-dark
    "
  >
    <section>
      All content released under a{' '}
      <a
        className="text-grey-dark hover:text-grey-darker no-underline"
        href="http://creativecommons.org/licenses/by/3.0/deed.en_US"
      >
        Creative Commons Attribution License
      </a>
    </section>
    <section className="mt-1">
      Built with{' '}
      <a
        className="mt-1 text-grey-dark hover:text-grey-darker no-underline"
        href="https://www.gatsbyjs.org"
      >
        Gatsby
      </a>
    </section>
  </footer>
)

export default Footer
