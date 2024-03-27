import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { RouterProvider } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react"
import "./index.css"
import { router } from "./Routes.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ChakraProvider>
  </React.StrictMode>
)
