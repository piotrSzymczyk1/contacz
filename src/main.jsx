import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root.jsx";
import RouterError from "./pages/routerError.jsx";
import ContactList from "./components/contactList.jsx";
import Contact from "./pages/contact.jsx";
import EditNew from "./pages/editNew.jsx";
import { rootLoader } from "./services/rootActions.js";
import {
  contactLoader,
  editAction,
  addNewAction,
  deleteAction,
} from "./services/contactActions.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <RouterError />,
    children: [
      { index: true, element: <ContactList />, loader: rootLoader },
      {
        path: "contacts/:id",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:id/edit",
        element: <EditNew />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:id/delete",
        action: deleteAction,
      },
      {
        path: "contacts/new",
        element: <EditNew />,
        action: addNewAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
