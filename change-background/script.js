const backgrounds = ["pink", "red", "green", "brown", "blue", "orange"];

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max))
}

function changeBackground(){
    document.body.style.backgroundColor = backgrounds[getRandomInt(backgrounds.length)]
}

document.getElementById("button").onclick = function () {changeBackground()};