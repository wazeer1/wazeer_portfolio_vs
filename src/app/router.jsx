import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import SpotlightSection from "../pages/SpotlightSection";
import AboutMeSection from "../pages/AboutMeSection";
import Projects from "../pages/Projects";
import ContactMeSection from "../pages/ContactMeSection ";
import Skills from "../pages/Skills";
import ExperienceSection from "../pages/ExperienceSection";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "profile",
        children: [
          {
            path: "spotlight",
            element: <SpotlightSection />,
          },
          {
            path: "about-me",
            element: <AboutMeSection />,
          },
        ],
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact-me",
        element: <ContactMeSection />,
      },
      {
        path: 'skills',
        element: <Skills/>
      },
      {
        path: 'experiance',
        element: <ExperienceSection/>
      }
    ],
  },
]);
