let prompt = require("prompt-sync")(); //module used to take user input from console
let {
  validateFirstName,
  validateLastName,
  validateAddress,
  validateCity,
  validateState,
  validateZip,
  validateNumber,
  validateEmail,
} = require("./Validation.js");

let { editContact } = require("./EditContact.js");
let { sortEntries } = require("./sortContacts");

let firstName = "";
let lastName = "";
let address = "";
let city = "";
let state = "";
let zip = "";
let phone = "";
let email = "";

let contact; //to store contact object
let addressBook = new Array(); //to store multiple contacts

//function adds details to the address book array
addContact = () => {
  firstName = validateFirstName(addressBook);
  if(firstName == "exists") return    // if the name exists then it will return
  lastName = validateLastName();
  address = validateAddress();
  city = validateCity();
  state = validateState();
  zip = validateZip();
  phone = validateNumber();
  email = validateEmail();
  contact = {
    firstName: firstName,
    lastName: lastName,
    address: address,
    city: city,
    state: state,
    zip: zip,
    phone: phone,
    email: email,
  };
  addressBook.push(contact);
};

display = () => {
  console.log(addressBook);
};

//method deletes the contact
let deleteContact = (name) => {
  let deletedContact = addressBook.splice(
    addressBook.findIndex((contact) => contact.firstName == name),
    1
  );
  return deletedContact;
};

let countContacts = () => {
  let total = addressBook.reduce((total,contact) => {     //reduce method uses callback to count total number of contacts in an array
      return total+1
  },0)        //total is set to 0 initially
  console.log(total);
}

//method to search person contact in particular city or state
let searchCityState = (name) => {
  let tempArray = addressBook.filter((contact) => contact.city == name || contact.state == name)
  if (tempArray.length == 0) {
    console.log("No contact found");
  } else {
    console.log("Total " + tempArray.length + " found");
    console.log(tempArray);
  }
};

let flag = true;
let name;
while (flag) {
  console.log(
    "1.Add Contact\n2.Display AddressBook\n3.Edit contact\n4.Delete Contact\n5.Total number of contacts in the address book\n6.Search person by city or state\n7.Sort address book\nPress other keys to exit"
  );
  let choice = prompt("Enter your choice: ");
  switch (Number(choice)) {
    case 1:
      addContact(); //to insert new contact details of a person
      break;
    case 2:
      display(); // displays the addressBook
      break;
    case 3:
      name = prompt("Enter the first name to edit: ");
      editContact(name, addressBook);
      console.log("Edited successfullly");
      break;
    case 4:
      name = prompt("Enter the first name whose contact to be deleted: ");
      let contact = deleteContact(name); //delete the contact
      if (contact.length > 0) console.log("Delted Successfully!!");
      else console.log("Contact not found!!!");
      break;
    case 5:
      countContacts()  //count total contacts
      break;
    case 6:
      name = prompt("Enter city or state name: ");
      searchCityState(name);
      break;
    case 7:
      sortEntries(addressBook);  //sort the entries
      break;
    default:
      flag = false;
      break;
  }
}
