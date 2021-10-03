let prompt = require("prompt-sync")(); //module used to take user input from console
validation = (regex, value) => {
    try{
        if (regex.test(value)) return true;
        else
            throw  "Not Valid!!!"
    }catch(err){
        console.error(err);
        return false
    }
};

validateFirstName = (addressBook) => {
  firstName = prompt("Enter the first name: ");
  const findDuplicate = addressBook.find((contact) => {   //if the contact exists then returns true
    if(contact.firstName == firstName){
          return true
    }
  })

  if(findDuplicate){
    console.log("Name already exists!!");
    return "exists"
  }else{
    return validation(/^[A-Z]{1}[a-z]{2,}$/, firstName)
    ? firstName
    : validateFirstName();
  }
};

validateLastName = () => {
    lastName = prompt("Enter the last name: ");
    return validation(/^[A-Z]{1}[a-z]{2,}$/, lastName)
      ? lastName
      : validateLastName();
  };

  validateAddress = () => {
    address = prompt("Enter the Address: ");
    return validation(/^[A-Za-z]{4,}$/, address)
      ? address
      : validateAddress();
  };

  validateCity = () => {
    city = prompt("Enter the city: ");
    return validation(/^[A-Za-z]{4,}$/, city)
      ? city
      : validateCity();
  };

  validateState = () => {
    state = prompt("Enter the state: ");
    return validation(/^[A-Za-z]{4,}$/, state)
      ? state
      : validateState();
  };

  validateZip = () => {
    zip = prompt("Enter the zip: ");
    return validation(/^\d{5}$/, zip)
      ? zip
      : validateZip();
  };

  validateNumber = () => {
    number = prompt("Enter the number: ");
    return validation(/^([0-9]{0,3}?)[  ]?([234789]{1})([0-9]{9})$/, number)
      ? number
      : validateNumber();
  };

  validateEmail = () => {
    email = prompt("Enter the email: ");
    return validation(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, email)
      ? email
      : validateEmail();
  };

module.exports = {validation,validateFirstName,validateLastName,validateAddress,validateCity,validateState,validateZip,validateNumber,validateEmail}