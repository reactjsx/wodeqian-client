// Readers: To prepare this project to build along in `./App.js`, complete
// steps 1 & 2 below
import React from "react";
import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);