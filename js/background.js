const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
];

const chosenImage = images[(Math.floor(Math.random() * images.length))];

const bgImage = document.createElement('div');

//bgImage.src = `img/${chosenImage}`;
bgImage.style = `background-image: url("img/${chosenImage}")`;
bgImage.classList.add('backgroundImg');

document.body.appendChild(bgImage);
