let prompt = require("prompt-sync")(); //module used to take user input from console

//function to sort the address book by first name, city, state, zip
let sortEntries = (addressBook) => {
    console.log("Select category by which entries to be sorted\n1.Name\n2.City\n3.state\n4.zip");
    let choice = prompt("Enter you choice: ");
    let value1,value2
    switch (Number(choice)) {
      case 1:
        addressBook.sort((a, b) => {
          value1 = a.firstName.toLowerCase()
          value2 = b.firstName.toLowerCase();
          return (value1 > value2) ? 1 : -1
        })
        break;
      case 2:
        addressBook.sort((a, b) => {
          value1 = a.city.toLowerCase()
          value2 = b.city.toLowerCase();
          return (value1 > value2) ? 1 : -1
        })
        break;
      case 3:
        addressBook.sort((a, b) => {
          value1 = a.state.toLowerCase()
          value2 = b.state.toLowerCase();
          return (value1 > value2) ? 1 : -1
        })
        break;
      case 4:
        addressBook.sort((a, b) => {
          value1 = a.zip
          value2 = b.zip
          return (value1 > value2) ? 1 : -1
        })
        break;
      default:
        console.log("Enter from provided number!!!");
        break;
    }
    console.log(addressBook);
  }

  module.exports = {sortEntries}