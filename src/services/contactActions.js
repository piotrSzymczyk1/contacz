import { redirect } from "react-router-dom";
import { getContact, editContact, addNewContact, deleteContact } from "./data";

export const contactLoader = ({ params }) => {
  const contact = getContact(params.id);
  return contact;
};
export const editAction = async ({ params, request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  editContact(params.id, data);
  return redirect(`/contacts/${params.id}`);
};
export const addNewAction = async ({ request }) => {
  const formData = await request.formData();
  const contact = Object.fromEntries(formData);
  addNewContact(contact);
  return redirect("/");
};
export const deleteAction = ({ params }) => {
  deleteContact(params.id);
  return redirect("/");
};
