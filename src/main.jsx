import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import RouterError from "./pages/routerError.jsx";
import { rootAction, rootLoader } from "./services/rootLoader.js";
import ContactList from "./components/contactList.jsx";
import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <RouterError />,
    action: rootAction,
    children: [
      { index: true, element: <ContactList />, loader: rootLoader },
      /* existing routes */
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
