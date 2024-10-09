let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passportCopy = JSON.parse(JSON.stringify(passportWithAddress));

passportCopy.address.city = "Bobryisk";

console.log(passportWithAddress.address.city); 
console.log(passportCopy.address.city); 