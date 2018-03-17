// @flow
import React from "preact"

import Header from "./Header"
import ContentWrapper from "./ContentWrapper"

if ((module: any).hot) {
  require("preact/debug")
}

const App = () => (
  <div id="app">
    <Header />
    <ContentWrapper />
  </div>
)

export default App
