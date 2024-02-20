import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import "./index.css"
import Scrollbars from "react-custom-scrollbars-2"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Scrollbars autoHide style={{ height: '100vh' }}>
          <App />
          <ToastContainer />
        </Scrollbars>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
