import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainView from "./views/MainView";
import GeneralView from "./views/GeneralView";
import BlogView from "./views/BlogView";
import BlogPostView from "./views/BlogPostView";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="font-rasa">
              <MainView />
            </div>
          }
        />
        <Route path="/general" element={<GeneralView />} />
        <Route path="/blog" element={<BlogView />} />
        <Route path="/blog/:id" element={<BlogPostView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
