import Home from "../pages";
import ContactPage from "../pages/contact";

export const PrivateRoutes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
    index: 0,
  },
  {
    path: "/about",
    element: <ContactPage />,
    name: "About us",
    index: 1,
  },
  {
    path: "/services",
    element: <ContactPage />,
    name: "Services",
    index: 1,
  },
  {
    path: "/words",
    element: <ContactPage />,
    name: "Words",
    index: 1,
  },
  {
    path: "/blog",
    element: <ContactPage />,
    name: "Blogs",
    index: 1,
  },
  {
    path: "/contact",
    element: <ContactPage />,
    name: "Contact Us",
    index: 1,
  },
];

export const PublicRoutes = [
  {
    path: "/auth/login",
    element: <ContactPage />,
    name: "Login",
  },
  {
    path: "/auth/register",
    element: <ContactPage />,
    name: "Register",
  },
];
