let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    },
    married: true // Добавляем свойство married в исходный объект
};

let passportMarried2 = {
    ...passportMarried,
    address: {
        ...passportMarried.address 
    }
};

console.log(passportMarried);  
console.log(passportMarried2);