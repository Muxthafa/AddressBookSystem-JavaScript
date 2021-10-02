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


createContact = () => {
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
  console.log(contact);
};

createContact();
