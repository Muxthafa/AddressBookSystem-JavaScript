//Edit the Contact details
let prompt = require("prompt-sync")(); //module used to take user input from console

let editContact = (name, addressBook) => {
  let flag = false;
  for (let i = 0; i < addressBook.length; i++) {
    if (addressBook[i].firstName == name) {
      console.log(addressBook);
      flag = true;
      let repeat = true;
      while (repeat) {
        console.log(
          "1.FirstName\n2.LastName\n3.Address\n4.City\n5.State\n6.Zip\n7.Mobile no.\n8.Email\n9.exit"
        );
        let option = prompt("Enter the choice of details to edit: ");
        switch (Number(option)) {
          case 1:
            let firstName = validateFirstName(/^[A-Z]{1}[a-z]{2,}$/);
            addressBook[i].firstName = firstName;
            break;
          case 2:
            let lastName = validateLastName(/^[A-Z]{1}[a-z]{2,}$/);
            addressBook[i].lastName = lastName;
            break;
          case 3:
            let address = validateAddress(/^[A-Za-z]{4,}$/);
            addressBook[i].address = address;
            break;
          case 4:
            let city = validateCity(/^[A-Za-z]{4,}$/);
            addressBook[i].city = city;
            break;
          case 5:
            let state = validateState(/^[A-Za-z]{4,}$/);
            addressBook[i].state = state;
            break;
          case 6:
            let zip = validateZip(/^\d{5}$/, zip);
            addressBook[i].zip = zip;
            break;
          case 7:
            let phone = validateNumber(
              /^([0-9]{0,3}?)[  ]?([234789]{1})([0-9]{9})$/
            );
            addressBook[i].phone = phone;
            break;
          case 8:
            let email = validateEmail(
              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            );
            addressBook[i].email = email;
            break;
          case 9:
            repeat = false;
            break;
          default:
            console.log("Enter correct option");
            repeat = false;
            break;
        }
      }
    }
  }
  if (flag == false) console.log("Contact not present!!");
};

module.exports = { editContact };
