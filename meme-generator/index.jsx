import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { StrictMode } from "react";

const root = 
createRoot(document.getElementById("root"))
.render(

<StrictMode>
    <App/>
</StrictMode>

);