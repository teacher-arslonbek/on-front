const body = document.body;
const boxes = document.querySelectorAll(".box");

const randomColor = () => {
  const pattern = "0123456789ABCDEF";
  return (
    "#" +
    new Array(6)
      .fill(null)
      .map(() => pattern[Math.floor(Math.random() * pattern.length)])
      .join("")
  );
};

const changeBody = (color) => {
  console.log("color = ", color);
  body.style.backgroundColor = color;
};

Array.from(boxes).forEach((box) => {
  const color = randomColor();
  box.style.backgroundColor = color;
  box.textContent = color;

  box.addEventListener("click", () => changeBody(color));
});
