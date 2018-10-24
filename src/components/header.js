import React from 'react'

const Header = () => (
  <header>
    <ColorBar />

    <div className="container mx-auto px-10 max-w-sl">
      <h1 className="mt-12 mb-5 text-4xl">
        <a
          href="/"
          className="flex text-grey-darkest hover:text-black no-underline"
        >
          <Logo />
        </a>
      </h1>
    </div>
  </header>
)

const ColorBar = () => (
  <div className="flex h-1" aria-hidden="true">
    <div className="flex-1 bg-green-light" />
    <div className="flex-1 bg-green-darker" />
    <div className="flex-1 bg-teal-dark" />
    <div className="flex-1 bg-blue" />
    <div className="flex-1 bg-purple" />
    <div className="flex-1 bg-pink-darker" />
    <div className="flex-1 bg-red" />
    <div className="flex-1 bg-orange" />
    <div className="flex-1 bg-yellow" />
    <div className="flex-1 bg-grey-lighter" />
  </div>
)

const Logo = () => (
  <>
    <span className="flex flex-col">
      Alasdair
      <span className="text-right font-light uppercase italic">Smith</span>
    </span>
    <span className="border-l border-grey-darkest mx-3" aria-hidden="true" />
    <span className="flex flex-col text-grey-darkest no-underline">
      40
      <span className="text-right font-light uppercase italic">Thieves</span>
    </span>
  </>
)

export default Header
