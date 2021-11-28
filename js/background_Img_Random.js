const images = ["0.jpeg", "1.jpeg", "2.jpeg"]

const chooseImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `../img/${chooseImage}`;

document.body.style.backgroundImage = `url(${bgImg});`;
console.log(document.body.style)

console.log(bgImg);

document.body.appendChild(bgImg);