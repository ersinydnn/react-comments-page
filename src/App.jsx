import React from "react";

import "./styles/reset.scss";
import "./styles/variables.scss";
import "./styles/global.scss";

import { Conversation } from "./components/conversation";

function App() {
  return (
    <div className="container">
      <Conversation />
    </div>
  );
}

export default App;
