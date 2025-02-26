import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GithubCorner from "react-github-corner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GithubCorner
      href="https://github.com/YTDev/MotionCounter"
      bannerColor="white"
      octoColor="black"
    />
    <App />
  </StrictMode>
);
