import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import registerIcons from "./fontawesome.js";
import Particle from "./Particles";
registerIcons();

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Test</h1>

        <h2>Software Developer</h2>

        <div>
          <span className="bubble">
            <a
              href="https://github.com/{name}"
              target="_blank "
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="icon"
                icon={["fab", "github"]}
                size="3x"
              />
              <span className="icon_title">Github</span>
            </a>
          </span>

          <span className="bubble">
            <a
              href="https://www.linkedin.com/in/{name}/"
              target="_blank "
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="icon"
                icon={["fab", "linkedin"]}
                size="3x"
              />
              <span className="icon_title">LinkedIn</span>
            </a>
          </span>

          <span className="bubble">
            <a href="resume.pdf" target="_blank " rel="noopener noreferrer">
              <FontAwesomeIcon
                className="icon"
                icon={["fas", "file-alt"]}
                size="3x"
              />
              <span className="icon_title">Resume</span>
            </a>
          </span>

          <span className="bubble">
            <a href="mailto:{name}" target="_blank " rel="noopener noreferrer">
              <div className="temp">
                <FontAwesomeIcon
                  className="icon"
                  icon={["fas", "envelope"]}
                  size="3x"
                />
                <span className="icon_title">Email me</span>
              </div>
            </a>
          </span>
        </div>
      </div>

      <Particle />
    </div>
  );
}

export default App;
