console.log("hello!");

function addShadow(element) {
    console.log("More Shadow");
    element.classList.add("shadow");
}

function removeShadow(element) {
    console.log("Less Shadow!");
    element.classList.remove("shadow");
}