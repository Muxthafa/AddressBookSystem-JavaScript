let prompt = require("prompt-sync")(); //module used to take user input from console
let {validateFirstName,validateLastName,validateAddress,validateCity,validateState, validateZip, validateNumber,validateEmail} = require("./Validation.js")

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
  firstName = validateFirstName();
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
  addressBook.push(contact)
};

display = () =>{
    console.log(addressBook);
}

let flag = true;
while (flag) {
  console.log("1.Add Contact\n2.Display AddressBook\nPress other keys to exit");
  let choice = prompt("Enter your choice: ");
  switch (Number(choice)) {
    case 1:
      addContact(); //to insert new contact details of a person
      break;
    case 2:
      display(); // displays the addressBook
      break;
    default:
      flag = false;
      break;
  }
}
