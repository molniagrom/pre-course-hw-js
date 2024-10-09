import _ from 'lodash';

let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passportCopy = _.cloneDeep(passportWithAddress);

passportCopy.address.city = "Bobryisk";

console.log(passportWithAddress); 
console.log(passportCopy); 