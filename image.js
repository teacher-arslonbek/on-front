const boxElement = document.getElementById("box");

function addImage(img, alt) {
  const imgElement = document.createElement("img");
  imgElement.src = img;
  imgElement.alt = alt;
  boxElement.appendChild(imgElement);
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => {
      console.log("image loaded...");
      resolve(image.src);
    };

    image.onerror = () => {
      reject("Img not found, 404");
    };

    image.src = url;
  });
}
const promises = [];
for (let i = 0; i < 10; i++) {
  promises.push(
    loadImage(
      `https://picsum.photos/id/${Math.floor(Math.random() * 40)}/200/300`
    )
  );
}

const imagesPromises = Promise.all(promises);
imagesPromises.then((images) => {
  let result = "";
  images.forEach((img) => {
    result += `<img src="${img}" alt="image"/>`;
  });
  boxElement.innerHTML = result;
});
