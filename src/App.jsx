import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/pages/Main";
import lenis from "./components/utils/lenis";
import mainHeader from "./components/utils/mainHeader";
import menu from "./components/utils/menu";
// import imgLoader from "./components/utils/imgLoader";
// import section from "./components/utils/section";

function App() {
  useEffect(() => {
    lenis();
    mainHeader();
    menu();
    // imgLoader();
    // section();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
