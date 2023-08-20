import { drawWindow } from "./window.js";

console.log("JS13K 2023");

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

function update() {
    
}

function draw() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    drawWindow(context, 50, 50, 400, 200);
}

function main() {
    update();
    draw();
    requestAnimationFrame(main);
}

main();
