let passport = {
    name: "Petr",
    surname: "Petrov",
};

const copy = {...passport};
copy.name = "Ivan";

console.log(passport);
console.log(copy);
