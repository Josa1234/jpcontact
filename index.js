const contacts = [
  {
    id: 1,
    fullName: "Josa Pratama",
    email: "josa@gmail.com",
    phoneNumber: "+6281293847592",
    label: ["owner"],
    birthday: "09/09/2006",
    avatar: null,
  },
  {
    id: 2,
    fullName: "Rafli Sadelon",
    email: "rafli@gmail.com",
    phoneNumber: "+6282192740493",
    label: ["friend"],
    birthday: "20/08/2008",
    avatar: null,
  },
  {
    id: 3,
    fullName: "M Rizky Marsezahanis",
    email: "risky@gmail.com",
    phoneNumber: "+62839373829283",
    label: ["friend"],
    birthday: "20/08/2008",
    avatar: null,
  },
];

const contactsContainerElement = document.getElementById("contacts-container");

function renderContacts() {
  const contactItemElements = contacts.map(
    (contact) => `
<li>
  <h2>${contact.fullName}</h2>
  <p>${contact.email}</p>
  <p>${contact.phoneNumber}</p>
</li>
`
  );

  const contactItems = contactItemElements.join("");

  contactsContainerElement.innerHTML = contactItems;
}

function addContact(fullName, email, phoneNumber) {
  const lastId = contacts[contacts.length - 1].id;
  contact.push({ id: lastId + 1, fullName, email, phoneNumber });
  renderContacts();
}

function deleteContactById(id) {}

function updateContactById(id) {}

function searchContact(keyword) {}

renderContacts();
