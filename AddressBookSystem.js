let prompt = require("prompt-sync")()   //module used to take user input from console

let firstName=''
let lastName=''
let address =''
let city=''
let state=''
let zip=''
let phone=''
let email=''

let contact   //to store contact object

createContact = () => {
    firstName = prompt("Enter the first name: ");
    lastName = prompt("Enter the last name: ");
    address = prompt("Enter the Address: ");
    city = prompt("Enter the city: ");
    state = prompt("Enter the State: ");
    zip = prompt("Enter the zip: ");
    phone = prompt("Enter the phone number: ");
    email = prompt("Enter the email id: ");
    contact = {
        firstName:firstName,
        lastName:lastName,
        address:address,
        city:city,
        state:state,
        zip:zip,
        phone:phone,
        email:email
    }
}
createContact()