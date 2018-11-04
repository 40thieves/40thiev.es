const React = require('react')

const fonts = ['Roboto', 'Merriweather']

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="fonts"
      href={`https://fonts.googleapis.com/css?family=${fonts.join('|')}`}
      rel="stylesheet"
    />,
  ])
}
