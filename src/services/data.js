import { nanoid } from "nanoid";
const initialData = [
  {
    id: nanoid(),
    name: "Piotr Szymczyk",
    email: "piotrszymczy@gmail.com",
    notes: "Hi! My name is Piotr Szymczyk",
  },
  {
    id: nanoid(),
    name: "Samantha Carter",
    email: "samcarter@example.com",
    notes: "I am Samantha Carter",
  },
  {
    id: nanoid(),
    name: "Jason Bourne",
    email: "jb@noname.com",
    notes: "I think my name is Jason Bourne",
  },
  {
    id: nanoid(),
    name: "Doomslayer",
    email: "ds@doom.com",
    notes: "<doesn't speak>",
  },
  {
    id: nanoid(),
    name: "Luke Skywalker",
    email: "lukes@jedi.com",
    notes: "It can't be true!",
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
export const editContact = (id, editedContact) => {
  const data = JSON.parse(localStorage.getItem("data"));
  const contact = data.find((contact) => contact.id === id);
  if (!contact) {
    throw new Error("No contact to edit found", id);
  }
  Object.assign(contact, editedContact);
  localStorage.setItem("data", JSON.stringify(data));
  return contact;
};
export const addNewContact = (contact) => {
  const data = JSON.parse(localStorage.getItem("data"));
  if (Object.keys(contact).length === 0) {
    throw new Error("No contact data passed to create a new one");
  }
  contact.id = nanoid();
  data.push(contact);
  localStorage.setItem("data", JSON.stringify(data));

  return data;
};
export const deleteContact = (id) => {
  const data = JSON.parse(localStorage.getItem("data"));
  const index = data.findIndex((contact) => contact.id === id);
  data.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(data));
  return data;
};
