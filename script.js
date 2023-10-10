window.addEventListener("keydown", jumpFunc)
let xCactus = 0
let xDino = 0
let yCactus = 0
let yDino = 0
let alrLose = false
let score = 0
let maxScore = localStorage.getItem("recordDino") || 0
let dino = document.getElementsByClassName("dino")[0];
function jumpFunc(event) {
    if(event.keyCode===32) {
        // if(document.getElementsByClassName("dino")[0].className.includes("jumpingDino")){
        //     document.getElementsByClassName("dino")[0].className = document.getElementsByClassName("dino")[0].className.replace("jumpingDino", "")
        // }
        dino.className += " jumpingDino"
        setTimeout(function(){
            dino.className = dino.className.replace("jumpingDino", "")
        }, 500) 
    }
}
function xSet() {
    xCactus = getComputedStyle(document.getElementById("cactus")).getPropertyValue("left")
    xDino = getComputedStyle(document.getElementsByClassName("dino")[0]).getPropertyValue("left")
    yCactus = getComputedStyle(document.getElementById("cactus")).getPropertyValue("top")
    yDino = getComputedStyle(document.getElementsByClassName("dino")[0]).getPropertyValue("top")
    xCactus = parseInt(xCactus)
    xDino = parseInt(xDino)
    yCactus = parseInt(yCactus)
    yDino = parseInt(yDino)

    if(xCactus<380&&xCactus>299&&(yCactus-yDino)<82) {
        if(alrLose==false) {
            // alert("Game Over" + " " +"Score: " + score)
            alrLose = true
            window.location.reload()
        }
        
    }
}
function scoreFunc() {
    score++
    document.getElementById("score").innerText = score
    document.getElementById("maxScore").innerText = maxScore
    if(maxScore<score) {
        maxScore = score
        localStorage.setItem("recordDino", maxScore)
    }
}

setInterval(xSet, 1)
setInterval(scoreFunc, 1)
