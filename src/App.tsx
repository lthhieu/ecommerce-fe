import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/public/Home";
import Contact from "./pages/public/Contact";
import TopHeader from "./components/top.header";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { path } from "./config/constant";

const LayoutClient = () => {

  return (
    <div className="flex flex-col items-center">
      <TopHeader />
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutClient />,
    errorElement: <div>404 page not found</div>,
    children: [
      { index: true, element: <Home /> },
      {
        path: path.PRODUCTS,
        element: <Contact />,
      },
    ],
  }
]);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
