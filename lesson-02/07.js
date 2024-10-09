let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk",
    },
};

let passportMarried2 = {
    ...passportMarried,
    // Не создаем новый объект address, так как это уже сделано
};

passportMarried2.married = true;

console.log(passportMarried);  
console.log(passportMarried2); 
