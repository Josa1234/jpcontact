let contacts = [
  {
    id: 1,
    fullName: "Josa Pratama",
    email: "josa@gmail.com",
    phoneNumber: "+6281293847592",
    label: ["owner"],
    birthDay: "09/09/2006",
    avatar: null,
  },
  {
    id: 2,
    fullName: "Rafli Sadelon",
    email: "rafli@gmail.com",
    phoneNumber: "+6282192740493",
    label: ["friend"],
    birthDay: "20/08/2008",
    avatar: null,
  },
  {
    id: 3,
    fullName: "M Rizky Marsezahanis",
    email: "risky@gmail.com",
    phoneNumber: "+62839373829283",
    label: ["friend"],
    birthDay: "20/08/2008",
    avatar: null,
  },
];

const searchInputElement = document.getElementById("search-input");
const addContactFormElement = document.getElementById("add-contact-form");
const contactsContainerElement = document.getElementById("contacts-container");

function renderContacts() {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const keyword = params.get("q");

  if (keyword) {
    searchInputElement.value = keyword;

    const filteredContacts = contacts.filter((contact) =>
      contact.fullName.toLowerCase().includes(keyword.toLowerCase())
    );

    contacts = filteredContacts;
  }

  const contactItemElements = contacts.map(
    (contact) => `
<li>
  <h2>${contact.fullName}</h2>
  <p>${contact.email}</p>
  <p>${contact.phoneNumber}</p>
  <p>${contact.birthDay}</p>
  <div><button onclick="deleteContactById(${contact.id})">Delete</button></div>
</li>
`
  );

  const contactItems = contactItemElements.join("");

  contactsContainerElement.innerHTML = contactItems;
}

function addContact(event) {
  event.preventDefault();
  const lastId = contacts[contacts.length - 1].id;
  const contactFormData = new FormData(addContactFormElement);
  const newContact = {
    id: lastId + 1,
    fullName: contactFormData.get("fullName"),
    email: contactFormData.get("email"),
    phoneNumber: contactFormData.get("phoneNumber"),
    birthDay: contactFormData.get("birthDay"),
  };
  contacts.push(newContact);
  renderContacts();
}

function deleteContactById(id) {
  const updatedContacts = contacts.filter(
    (contact) => contact.id !== Number(id)
  );
  console.log(updatedContacts);
  contacts = updatedContacts;
  renderContacts();
}

function updateContactById(id) {}

window.addEventListener("load", renderContacts);

addContactFormElement.addEventListener("submit", addContact);
