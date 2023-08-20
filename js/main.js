function getRandomImg(amountOfImages) {
  let randomNumber = Math.floor(Math.random() * amountOfImages);
  randomNumber += 1;
  return `<img src = "images/${randomNumber}.jpg" alt="image" />`;
}

let elemOne = document.querySelector(".image");
elemOne.innerHTML = getRandomImg(9);
