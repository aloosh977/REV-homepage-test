const container = document.querySelector(".container");
for(let i=0;i<100;i++){
    const square=document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

const squares=document.querySelectorAll(".square");

/*
function randomFadeEffect(){
    for(let i=0;i<40;i++){
        const randomIndex= Math.floor(Math.random()*squares.length);
        const randomSquare=squares[randomIndex];
        randomSquare.style.animation="fadeEffect 2s ease-in-out";
    }
}
setInterval(randomFadeEffect,500)
*/

for(let i=0;i<squares.length;i++){
    const delayEffect= Math.random()*3;
    squares[i].style.animationDelay=`${delayEffect}s`;
}