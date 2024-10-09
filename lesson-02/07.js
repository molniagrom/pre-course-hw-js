let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportCopy = JSON.parse(JSON.stringify(passportMarried));
passportCopy.married = true;
