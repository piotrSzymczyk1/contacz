import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root.jsx";
import RouterError from "./pages/routerError.jsx";
import ContactList from "./components/contactList.jsx";
import Contact from "./pages/contact.jsx";
import { rootAction, rootLoader } from "./services/rootLoader.js";
import { contactLoader } from "./services/contactActions.js";
import { deleteAction } from "./services/deleteActions.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <RouterError />,
    action: rootAction,
    children: [
      { index: true, element: <ContactList />, loader: rootLoader },
      {
        path: "contacts/:id",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:id/delete",
        action: deleteAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
