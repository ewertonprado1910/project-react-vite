import React from "react"
import ReactDOM from "react-dom/client"

import { GlobalStyles } from "./styles/globalStyles"
import AppRouter from "./routes/route"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
    <GlobalStyles />
  </React.StrictMode>
)