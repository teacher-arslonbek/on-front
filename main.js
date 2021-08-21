class Father {
  constructor(fatherName, fatherAge) {
    this.fatherName = fatherName;
    this.fatherAge = fatherAge;
  }

  displayDataFather() {
    console.log(`father name = ${this.fatherName}`);
    console.log(`father age = ${this.fatherAge}`);
  }
}

class Child extends Father {
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

const child = new Child("arslonbek", 20, "Shuxratbek", 56);
console.log("child = ", child);
child.displayDataChild();
child.displayDataFather();
