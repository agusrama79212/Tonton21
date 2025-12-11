import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Contact } from "./pages/Contact.tsx";
import Redirect from "./pages/Redirect.tsx";
import { VerifLink } from "./pages/VerifLink.tsx";
import { Home } from "./pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "s/:id",
        element: <Redirect />,
      },
      {
        path: "v",
        element: <VerifLink />,
      },
      {
        path: ":id",
        element: <VerifLink />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);