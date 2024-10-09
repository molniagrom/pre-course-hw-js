const _ = require('lodash');

let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

// Создание глубокой копии
let passportCopy = _.cloneDeep(passportWithAddress);

// Изменение значения city
passportCopy.address.city = "Bobryisk";

console.log(passportWithAddress); // Исходный объект остается неизменным
console.log(passportCopy); // Объект с измененным городом
