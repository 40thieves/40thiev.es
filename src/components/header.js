import React from 'react'

const Header = () => (
  <header>
    <ColorBar />

    <div className="mx-6 sm:mx-16">
      <h1 className="mt-12 mb-5 text-4xl">
        <a
          href="/"
          className="
            flex text-gray-700 hover:text-black no-underline leading-tight
          "
        >
          <Logo />
        </a>
      </h1>
    </div>
  </header>
)

const ColorBar = () => (
  <div className="flex h-2" aria-hidden="true">
    <div className="flex-1 bg-green-400" />
    <div className="flex-1 bg-green-800" />
    <div className="flex-1 bg-teal-500" />
    <div className="flex-1 bg-blue-600" />
    <div className="flex-1 bg-purple-600" />
    <div className="flex-1 bg-pink-800" />
    <div className="flex-1 bg-red-600" />
    <div className="flex-1 bg-orange-500" />
    <div className="flex-1 bg-yellow-500" />
    <div className="flex-1 bg-gray-300" />
  </div>
)

const Logo = () => (
  <>
    <span className="flex flex-col">
      Alasdair
      <span className="text-right font-light uppercase italic">Smith</span>
    </span>
    <span className="border-l border-gray-700 mx-3" aria-hidden="true" />
    <span className="flex flex-col">
      40
      <span className="text-right font-light uppercase italic">Thieves</span>
    </span>
  </>
)

export default Header
