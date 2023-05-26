import Home from "../pages";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";
import ProjectPage from "../pages/project";

export const PrivateRoutes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
    index: 0,
  },
  {
    path: "/about",
    element: <AboutPage />,
    name: "About us",
    index: 1,
  },
  {
    path: "/project",
    element: <ProjectPage />,
    name: "Projects",
    index: 2,
  },
  {
    path: "/services",
    element: <ContactPage />,
    name: "Services",
    index: 3,
  },
  {
    path: "/words",
    element: <ContactPage />,
    name: "Words",
    index: 4,
  },
  {
    path: "/blog",
    element: <ContactPage />,
    name: "Blogs",
    index: 5,
  },
  {
    path: "/contact",
    element: <ContactPage />,
    name: "Contact Us",
    index: 6,
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
