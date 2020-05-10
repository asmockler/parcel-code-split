import "./global.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

import * as styles from "./index.module.css";

const Fallback = () => <p>Loading...</p>;

const Home = loadable(() => import("./pages/Home"), { fallback: <Fallback /> });
const Chapter1 = loadable(() => import("./pages/Chapter1"), {
  fallback: <Fallback />,
});
const Chapter2 = loadable(() => import("./pages/Chapter2"), {
  fallback: <Fallback />,
});

function App() {
  return (
    <div className={styles.Container}>
      <h1>Lazy app</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chapter-1" element={<Chapter1 />} />
        <Route path="/chapter-2" element={<Chapter2 />} />
      </Routes>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("main")
);
