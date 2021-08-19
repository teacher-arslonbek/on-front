const fetch = require("node-fetch");
let users = [];
const getUsers = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/users");
  setTimeout(() => console.log("Hello World"), 10000);
  users = await response.json();
};

const deleteUser = (selectedUserID) => {
  users = users.filter((user) => user.id !== selectedUserID);
};

async function start() {
  await getUsers();
  console.log("old users = ", users);
  deleteUser(1);
  console.log("lastUsers users = ", users);
}

start();

async function first() {}
function second() {}
