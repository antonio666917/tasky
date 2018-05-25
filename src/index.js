import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./assets/styles/global.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
