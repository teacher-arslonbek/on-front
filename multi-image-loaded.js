const boxElement = document.getElementById("box");

const images = [];
function addImage(img) {
  console.log("calling addImage Method");
  const imgElement = document.createElement("img");
  imgElement.src = img;
  imgElement.alt = "my image";
  boxElement.appendChild(imgElement);
}

function loadImage(url, isLast) {
  console.log("isLast = ", isLast);
  console.log("image loading...");
  const image = new Image();

  image.onload = () => {
    console.log(`onLoadImage: isLast = ${isLast}`);
    images.push(image.src);
    console.log("images = ", images);

    if (isLast) {
      addAllImages();
    }
  };

  image.src = url;
}

function loadedImages(urls = []) {
  const size = urls.length;
  for (let i = 0; i < size; i++) {
    loadImage(urls[i], i + 1 === size);
  }
}

loadedImages([
  "https://picsum.photos/200/300",
  "https://picsum.photos/300/300",
]);

function addAllImages() {
  images.forEach(addImage);
}
