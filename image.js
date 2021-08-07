const boxElement = document.getElementById("box");

function addImage(img) {
  console.log("calling addImage Method");
  const imgElement = document.createElement("img");
  imgElement.src = img;
  imgElement.alt = "my image";
  boxElement.appendChild(imgElement);
}

function loadImage(url, callback) {
  console.log("image loading...");
  const image = new Image();

  image.onload = () => {
    console.log("image loaded...");
    callback(image.src);
  };

  image.src = url;
}
