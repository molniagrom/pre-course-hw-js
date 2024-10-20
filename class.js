class Student {
  // свойства
 static planet = "Земля";
  kind = "human";
  //метод
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  set city(value) {
    const firstSLetter = value[0].toUpperCase()
    const fromSecondSLetter = value.slice(1).toLowerCase()

    this._city = `${firstSLetter}${fromSecondSLetter}`;
  }

  get city() {
    return `г. ${this._city}`;
  }

 static logAge() {
    console.log(this.age);
  }
}

const firstStudent = new Student("Алина", 16);
const secondStudent = new Student("Коля", 44);

// console.log(firstStudent);
// console.log(secondStudent);

// console.log("Сегодня Диджей Василий:", firstStudent.name);
// console.log(firstStudent);

// ..........................................................................

firstStudent.city = "тирасполь"; // сеттер
console.log(firstStudent.city);  // геттер

// ..........................................................................

// firstStudent.logAge();
console.log(Student.planet);
