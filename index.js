var randomNumber1
var randomNumber2







document.querySelector(".btn").addEventListener("click", function() {
    randomNumber1 = Math.floor(Math.random() * 6) + 1
    randomNumber2 = Math.floor(Math.random() * 6) + 1
    console.log(randomNumber1, randomNumber2)
    var newImgSrc1 = "images/dice" + randomNumber1 + ".png"
    var newImgSrc2 = "images/dice" + randomNumber2 + ".png"
    if (newImgSrc1 > newImgSrc2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
    } else if (newImgSrc1 < newImgSrc2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
    } else {
        document.querySelector("h1").innerHTML = "Draw!"
    }


    document.querySelector(".img1").setAttribute("src", newImgSrc1)
    document.querySelector(".img2").setAttribute("src", newImgSrc2)

})