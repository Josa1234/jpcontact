const searchInputElement = document.getElementById("search-input");
const contactsContainerElement = document.getElementById("contacts-container");

function searchContacts(contacts, keyword) {
  searchInputElement.value = keyword;

  const filteredContacts = contacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(keyword.toLowerCase())
  );

  return filteredContacts;
}

function renderContacts() {
  const contacts = loadContactsFromLocalStorage();
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const keyword = params.get("q");

  const contactsToRender = keyword
    ? searchContacts(contacts, keyword)
    : contacts;

  const contactItemElements = contactsToRender.map(
    (contact) => `
<tr>
  <a href="#">
    <td><a href="/contact/?id=${contact.id}" class="flex items-center"><img src="${contact.avatar}" alt="${contact.fullName}" class="w-12" /><span class="ml-4">${contact.fullName}</span></a></td>
    <td>${contact.email}</td>
    <td>${contact.phoneNumber}</td>
    <td><span class="px-3 py-2 border-2 rounded-lg">${contact.label}<span></td>
    <td>${contact.birthDay}</td>
    </a>
    </tr>
    `
  );

  const contactItems = contactItemElements.join("");

  contactsContainerElement.innerHTML = contactItems;
}

window.addEventListener("load", renderContacts);
