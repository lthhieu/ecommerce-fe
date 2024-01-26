import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/public/Home";
import Contact from "./pages/public/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 page not found</div>,
    children: [
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
