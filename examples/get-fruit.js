const fruits = {
  apple: "🍎",
  grape: "🍇",
  strawberry: "🍓",
  peach: "🍑",
};

function getFruit(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      try {
        const fruit = fruits[name];
        if (fruit) return resolve(fruit);
        throw new Error(`${name} fruit not found. 😡`);
      } catch (err) {
        reject(err);
      }
    }, 3000);
  });
}

async function asyncFruit() {
  console.log("-----start-----");
  try {
    const fruit = await getFruit("strawberry");
    console.log(`fruit = ${fruit}`);
  } catch (err) {
    console.error(err.message);
  }
  console.log("-----finish-----");
}

asyncFruit();
