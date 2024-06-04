import { nanoid } from "nanoid";
const initialData = [
  {
    id: nanoid(),
    name: "Piotr Szymczyk",
    email: "piotrszymczy@gmail.com",
    description: "Hi! My name is Piotr Szymczyk",
  },
  {
    id: nanoid(),
    name: "Samantha Carter",
    email: "samcarter@example.com",
    description: "I am Samantha Carter",
  },
  {
    id: nanoid(),
    name: "Jason Bourne",
    email: "jb@noname.com",
    description: "I think my name is Jason Bourne",
  },
];
export const getStorageData = () => {
  if (!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify(initialData));
    return initialData;
  } else {
    const data = JSON.parse(localStorage.getItem("data"));
    return data;
  }
};
export const getContact = (id) => {
  const data = JSON.parse(localStorage.getItem("data"));
  const contact = data.find((contact) => contact.id === id);
  if (!contact) {
    return null;
  }
  return contact;
};
export const addNew = (contact) => {
  const data = JSON.parse(localStorage.getItem("data"));
  if (Object.keys(contact).length > 0) {
    contact.id = nanoid();
    data.push(contact);
    localStorage.setItem("data", JSON.stringify(data));
  }
  return data;
};
export const deleteContact = (id) => {
  const data = JSON.parse(localStorage.getItem("data"));
  const index = data.findIndex((contact) => contact.id === id);
  data.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(data));
  return data;
};
