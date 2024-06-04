import { addNew, getStorageData } from "../services/data";
export const rootLoader = () => {
  const contacts = getStorageData();
  return contacts;
};
export const rootAction = async ({ request }) => {
  const formData = await request.formData();
  const contact = Object.fromEntries(formData);
  const newData = addNew(contact);
  return newData;
};
