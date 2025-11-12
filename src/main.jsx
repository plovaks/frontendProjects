import { StrictMode } from "react";
import {createRoot} from "react-dom/client"

import App from "./App"

const root = createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
