import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "home",
    element: <div>Home</div>,
  },
]);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
