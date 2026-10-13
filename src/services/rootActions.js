import { getStorageData } from "./data";
export const rootLoader = () => {
  const contacts = getStorageData();
  return contacts;
};
