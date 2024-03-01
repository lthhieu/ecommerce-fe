import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/public/Home";
import TopHeader from "./components/layout/top.header";
import Header from "./components/layout/header";
import Navigation from "./components/layout/navigation";
import Footer from "./components/layout/footer";
import { path } from "./config/constant";
import Blog from "./pages/public/Blog";
import OurServices from "./pages/public/Our.Services";
import Faq from "./pages/public/Faq";
import DetailProduct from "./pages/public/Detail.Product";
import LoginPage from "./pages/public/Login";
import ConfirmEmail from "./pages/public/Confirm.Email";
import ResetPassword from "./pages/public/Reset.Password";
import RegisterPage from "./pages/public/Register";
import { useAppDispatch } from "./app/hooks";
import { useEffect } from "react";
import { fetchProfileAsync } from "./app/slice/profileSlice";
import CategoryPage from "./pages/public/Category";

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
    path: path.HOME,
    element: <LayoutClient />,
    errorElement: <div>404 page not found</div>,
    children: [
      { index: true, element: <Home /> },
      {
        path: path.CATEGORY,
        element: <CategoryPage />,
      },
      {
        path: path.BLOGS,
        element: <Blog />,
      }, {
        path: path.OUR_SERVICE,
        element: <OurServices />,
      }, {
        path: path.FAQS,
        element: <Faq />,
      }, {
        path: path.DETAIL_PRODUCT,
        element: <DetailProduct />,
      }, {
        path: path.RESET_PASSWORD,
        element: <ResetPassword />,
      }, {
        path: path.CONFIRM_EMAIL,
        element: <ConfirmEmail />
      }
    ],
  }, {
    path: path.LOGIN,
    element: <LoginPage />
  }, {
    path: path.REGISTER,
    element: <RegisterPage />
  },
]);
const App = () => {
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(fetchProfileAsync(null))
  }, [])
  return (
    <RouterProvider router={router} />
  )
}

export default App
