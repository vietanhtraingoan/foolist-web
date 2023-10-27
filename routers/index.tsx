import Home from '../pages';
import AboutPage from '../pages/about';
import ContactPage from '../pages/contact';
import PostPage from '../pages/posts';
import ProjectPage from '../pages/project';
import ServicesPage from '../pages/services';
import WordsPage from '../pages/words';

export const PrivateRoutes = [
  {
    path: '/',
    element: <Home />,
    name: 'Home',
    index: 0,
  },
  {
    path: '/about',
    element: <AboutPage />,
    name: 'About us',
    index: 1,
  },
  // {
  //   path: "/project",
  //   element: <ProjectPage />,
  //   name: "Projects",
  //   index: 2,
  // },
  {
    path: '/services',
    element: <ServicesPage />,
    name: 'Services',
    index: 3,
  },
  // {
  //   path: "/words",
  //   element: <WordsPage />,
  //   name: "Words",
  //   index: 3,
  // },
  // {
  //   path: "/posts",
  //   element: <PostPage />,
  //   name: "Blogs",
  //   index: 4,
  // },
  {
    path: '/contact',
    element: <ContactPage />,
    name: 'Contact Us',
    index: 4,
  },
];

export const PublicRoutes = [
  {
    path: '/auth/login',
    element: <ContactPage />,
    name: 'Login',
  },
  {
    path: '/auth/register',
    element: <ContactPage />,
    name: 'Register',
  },
];
