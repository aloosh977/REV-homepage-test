const container = document.querySelector(".container");
for(let i=0;i<100;i++){
    const square=document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

const squares=document.querySelectorAll(".square");



for(let i=0;i<squares.length;i++){
    const delayEffect= Math.random()*3;
    squares[i].style.animationDelay=`${delayEffect}s`;
}