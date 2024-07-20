import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

// JSX -> JavaScript XML
root.render(
    <>
        <App
            title="Choose your mode of payment and complete the purchase"
            x={100}
        ></App>
        {/* <App title="UPI Payment" /> */}
    </>
);
