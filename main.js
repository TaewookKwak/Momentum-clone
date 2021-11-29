const title = document.getElementById("title");

console.dir(title);

title.addEventListener('click', () => {
    console.log("got you");
    title.innerText = "Got you!";
    title.style.color = 'blue';
});