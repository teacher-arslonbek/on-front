import Father from "./father.js";

export class Child extends Father {
  constructor(name, age, fatherName, fatherAge) {
    super(fatherName, fatherAge);
    this.name = name;
    this.age = age;
  }

  displayDataChild() {
    console.log(`child name = ${this.name}`);
    console.log(`child age = ${this.age}`);
  }
}
