const users = {
  10: {
    username: "arslonbekXX",
    repoList: ["react-online", "pdp"],
    commits: {
      "react-online": ["react-online first", "react-online second"],
      pdp: ["pdp first", "pdp second"],
    },
  },
  20: {
    username: "faryozbek",
    repoList: ["new-app", "test"],
    commits: {
      "new-app": ["new-app first", "new-app second"],
      test: ["test first", "test second"],
    },
  },
  30: {
    username: "otabek",
    repoList: ["new-apps", "testing"],
    commits: {
      "new-apps": ["new-apps first", "new-apps second"],
      testing: ["testing first", "testing second"],
    },
  },
};
/**
 *
 * callback
 *   ✅ callback hell
 * promise
 *   ✅ promise hell
 */

function getUser(userID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users[userID]);
    }, 2000);
  });
}

function getRepoList(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user.repoList);
    }, 2000);
  });
}

function getCommits(user, repoName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user.commits[repoName]);
    }, 2000);
  });
}
// using promise
getUser(20).then((user) => {
  console.log("user = ", user);
  getRepoList(user).then((repoList) => {
    console.log("repoList = ", repoList);
    getCommits(user, repoList[1]).then((commits) => {
      console.log("commits ", commits);
    });
  });
});

// async and await
async function test() {
  console.log("start async test function");

  const user = await getUser(20);
  console.log("user = ", user);

  const repoList = await getRepoList(user);
  console.log("repoList = ", repoList);

  const commits = await getCommits(user, repoList[1]);
  console.log("commits = ", commits);

  console.log("finish async test function");
}

test();
