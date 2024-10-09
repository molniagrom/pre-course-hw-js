function createPassport() {
    let passportWithAddress = {
        name: "Petr",
        surname: "Petrov",
        address: {
            country: "USA",
            city: "LA"
        }
    };

    let passportCopy = {
        ...passportWithAddress,
        address: {
            ...passportWithAddress.address
        }
    };

    passportCopy.address.city = "Bobryisk";

    console.log(passportWithAddress.address.city); 
    console.log(passportCopy.address.city);
}

createPassport();