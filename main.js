class Person {
  constructor(firstName, lastName, age, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.salary = salary;
  }

  run() {
    console.log(`${this.firstName} running...`);
  }
}

const person = new Person("Arslonbek", "Alimbayev", 20, 300);
const person2 = new Person("Faryozbek", "To'xtasinov", 21, 400);
const person3 = new Person("Temurbek", "Rajapboyev", 19, 500);

person.run();
person2.run();
person3.run();
