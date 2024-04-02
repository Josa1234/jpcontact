function saveContactsToLocalStorage(contacts) {
  localStorage.setItem("users", JSON.stringify(contacts));
}

function loadContactsFromLocalStorage() {
  const contacts = localStorage.getItem("users");
  if (!contacts) {
    saveContactsToLocalStorage([]);
  }
  return JSON.parse(contacts);
}

function loadContactById(id) {
  const contacts = loadContactsFromLocalStorage();
  const contact = contacts.find((contact) => contact.id === id);
  return contact;
}
