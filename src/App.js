import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./component/HomePage";
import Repo from "./component/Repo";
import PageNotFound from "./component/PageNotfound";
import EachRepo from "./component/EachRepo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/repo" element={<Repo />}>
          <Route path="eachrepo" element={<EachRepo />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
