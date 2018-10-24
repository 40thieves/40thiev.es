import React from 'react'

const Header = () => (
  <header>
    <ColorBar />

    <div className="">
      <h1 className="logo">
        <a href="{{@blog.url}}">
          <span className="name">Alasdair <span className="thin caps">Smith</span></span>
          <span className="pipe"></span>
          <span className="nick">40 <span className="thin caps">Thieves</span></span>
        </a>
      </h1>
    </div>
  </header>
)

const ColorBar = () => (
  <div className="flex h-2 color-bar" aria-hidden="true">
    <div className="bg-red color-bar__color"></div>
    <div className="color-bar__color"></div>
    <div className="color-bar__color"></div>
    <div className="color-bar__color"></div>
    <div className="color-bar__color"></div>
    <div className="color-bar__color"></div>
    <div className="color-bar__color"></div>
    <div className="color-bar__color"></div>
    <div className="color-bar__color"></div>
    <div className="color-bar__color"></div>
  </div>
)

export default Header
