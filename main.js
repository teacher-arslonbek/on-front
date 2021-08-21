class A {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  stop() {
    this.speed = 0;
    console.log("stopped with class A...");
  }
}

class B extends A {
  constructor(alias, ...args) {
    // setup....
    super(...args);
    this.alias = alias;
  }

  stop() {
    this.alias = `stopped ${this.alias} with class B...`;
    console.log(`stopped with class B...`);
    super.stop();
  }
}

const b = new B("jeck", "jeck rabbit", 40);
b.stop();
console.log("b = ", b);
