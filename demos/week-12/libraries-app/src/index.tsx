import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import App from "./App";


const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

// JSX -> JavaScript XML
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
