let person = {
  firstName: "Arslonbek",
  age: 20,
};

person.lastName = "Alimbayev";
delete person.lastName;
delete person.age;
console.log(person);
