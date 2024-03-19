const contacts = [
  {
    id: 1,
    fullname: "Josa Pratama",
    email: "josa@gmail.com",
    phoneNumber: "+6281293847592",
    label: ["owner"],
    birthday: "09/09/2006",
    avatar: null,
  },
  {
    id: 2,
    fullname: "Rafli Sadelon",
    email: "rafli@gmail.com",
    phoneNumber: "+6282192740493",
    label: ["friend"],
    birthday: "20/08/2008",
    avatar: null,
  },
  {
    id: 3,
    fullname: "M Rizky Marsezahanis",
    email: "risky@gmail.com",
    phoneNumber: "+62839373829283",
    label: ["friend"],
    birthday: "20/08/2008",
    avatar: null,
  },
];

console.log(contacts, "This is JP Contact");

// for (contact of contacts) {
//   for (person in contact) {
//     console.log(`${person}: ${contact[person]}`);
//   }
// }

for (let i = 0; i < contacts.length; i++) {
  const { id, fullname, email, phoneNumber, label } = contacts[i];
  console.log(`${id}. ${fullname} ${email} (${phoneNumber}) ${label}`);
}
