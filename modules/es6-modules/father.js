export default class Father {
  constructor(fatherName, fatherAge) {
    this.fatherName = fatherName;
    this.fatherAge = fatherAge;
  }

  displayDataFather() {
    console.log(`father name = ${this.fatherName}`);
    console.log(`father age = ${this.fatherAge}`);
  }
}
