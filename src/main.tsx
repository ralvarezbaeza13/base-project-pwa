import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TranslationProvider } from "./context/TranslationProvider";
import "reflect-metadata";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <TranslationProvider>
      <App />
    </TranslationProvider>
  </React.StrictMode>
);
