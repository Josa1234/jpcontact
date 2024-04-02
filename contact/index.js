const contactContainerElement = document.getElementById("contact-container");
const addContactFormElement = document.getElementById("add-contact-form");
const buttonDelete = document.getElementById("button-delete");
const buttonEdit = document.getElementById("button-edit");
const fullNameElement = document.getElementById("full-name");
const emailElement = document.getElementById("email");
const numberPhoneElement = document.getElementById("number-phone");
const birthDayElement = document.getElementById("birth-day");

function getContactId() {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const id = Number(params.get("id"));
  return id;
}

function renderContactById() {
  const id = getContactId();
  const contact = loadContactById(id);

  buttonEdit.setAttribute("href", `renderEditContactFormById(${id})`);
  buttonDelete.setAttribute("onclick", `deleteContactById(${id})`);
  fullNameElement.innerText = `${contact.fullName}`;
  emailElement.innerText = `${contact.email}`;
  numberPhoneElement.innerText = `${contact.numberPhone}`;
  birthDayElement.innerText = `${contact.birthDay}`;
}

function addContact(event) {
  event.preventDefault();
  const contactFormData = new FormData(addContactFormElement);
  const contacts = loadContactsFromLocalStorage();
  const newId = contacts.length ? contacts[contacts.length - 1].id + 1 : 1;
  const newContact = {
    id: newId,
    avatar: "/img/user.svg",
    fullName: contactFormData.get("fullName"),
    email: contactFormData.get("email"),
    phoneNumber: contactFormData.get("phoneNumber"),
    label: null,
    birthDay: contactFormData.get("birthDay"),
  };

  const updatedContact = [...contacts, newContact];
  saveContactsToLocalStorage(updatedContact);
  addContactFormElement.reset();
  window.location.replace("/");
}

function renderEditContactFormById(id) {
  const contact = loadContactById(id);

  fullNameElement.setAttribute("value", `${contact.fullName}`);
  emailElement.setAttribute("value", `${contact.email}`);
  numberPhoneElement.setAttribute("value", `${contact.numberPhone}`);
  birthDayElement.setAttribute("value", `${contact.birthDay}`);

  // const editContactFormElement = document.getElementById("edit-contact-form");

  // editContactFormElement.addEventListener("submit", editContact);
}

function editContact(event) {
  event.preventDefault();
  const contactFormData = new FormData(event.target);

  const contacts = loadContacts();

  const newContact = {
    id: getContactId(),
    fullName: contactFormData.get("fullName"),
    email: contactFormData.get("email"),
    phone: contactFormData.get("phone"),
    age: Number(contactFormData.get("birthDay")),
  };

  const updatedContacts = contacts.map((contact) => {
    if (contact.id === newContact.id) {
      return newContact;
    } else {
      return contact;
    }
  });

  saveContacts(updatedContacts);
  renderContactById();
}

function deleteContactById(id) {
  const contacts = loadContactsFromLocalStorage();
  const updatedContacts = contacts.filter(
    (contact) => contact.id !== Number(id)
  );

  saveContactsToLocalStorage(updatedContacts);
  window.location.replace("/");
}

window.addEventListener("load", renderContactById);

addContactFormElement.addEventListener("submit", addContact);
