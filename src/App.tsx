import React from "react";

import Main from "./components/Main";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <Main />
    </ParallaxProvider>
  );
}

export default App;
