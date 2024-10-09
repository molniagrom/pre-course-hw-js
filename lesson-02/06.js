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

console.log(passportWithAddress); 
console.log(passportCopy); 