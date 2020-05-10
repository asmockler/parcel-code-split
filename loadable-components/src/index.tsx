import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

const Fallback = () => <p>Loading...</p>;

const Home = loadable(() => import("./pages/Home"), { fallback: <Fallback /> });
const About = loadable(() => import("./pages/About"), {
  fallback: <Fallback />,
});

function App() {
  return (
    <>
      <h1>Lazy app</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("main")
);
