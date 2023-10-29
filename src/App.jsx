import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root.jsx";
import Home from "./pages/Home.jsx";
import ProjectsDev from "./pages/ProjectsDev.jsx";
import MyProfil from "./pages/MyProfil.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "projetsdeveloppes",
          element: <ProjectsDev />,
        },
        {
          path: "monprofil",
          element: <MyProfil />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
