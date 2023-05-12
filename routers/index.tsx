import About from "../pages/about";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Home from "../pages";

export const PrivateRoutes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
    index: 0,
  },
  {
    path: "/about",
    element: <About />,
    name: "About us",
    index: 1,
  },
  {
    path: "/services",
    element: <About />,
    name: "Services",
    index: 1,
  },
  {
    path: "/words",
    element: <About />,
    name: "Words",
    index: 1,
  },
  {
    path: "/blog",
    element: <About />,
    name: "Blogs",
    index: 1,
  },
  {
    path: "/contact",
    element: <About />,
    name: "Contact Us",
    index: 1,
  },
];

export const PublicRoutes = [
  {
    path: "/auth/login",
    element: <Login />,
    name: "Login",
  },
  {
    path: "/auth/register",
    element: <Register />,
    name: "Register",
  },
];
