import { getContact } from "./data";

export async function contactLoader({ params }) {
  const contact = await getContact(params.id);
  return contact;
}
