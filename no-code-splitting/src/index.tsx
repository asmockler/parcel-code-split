import "./global.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as styles from "./index.module.css";

import Home from "./pages/Home";
import Chapter1 from "./pages/Chapter1";
import Chapter2 from "./pages/Chapter2";

function App() {
  return (
    <div className={styles.Container}>
      <h1>Lazy app</h1>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chapter-1" element={<Chapter1 />} />
          <Route path="/chapter-2" element={<Chapter2 />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("main")
);
