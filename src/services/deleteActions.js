import { deleteContact } from "./data";
import { redirect } from "react-router-dom";

export const deleteAction = ({ params }) => {
  deleteContact(params.id);
  return redirect("/");
};
