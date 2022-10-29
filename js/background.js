const imgs = ["img/0.jpeg", "img/1.jpeg", "img/2.jpeg", "img/3.jpeg"];

const randomImg = imgs[Math.floor(Math.random() * imgs.length)];

const bgImg = document.createElement("img");

bgImg.src = randomImg;

document.body.appendChild(bgImg);
