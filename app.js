const h1 = document.querySelector("h1");
const body = document.querySelector("body");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  h1.innerText = `rgb(${r},${g},${b})`;
  body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
