

// [processing-p5-convert] import processing.svg.*;
let a = false;
let amountX = 2;
let amountY = 2;
let state = Array.from(new Array(amountX), () => new Array(amountY));
let modulo = 200;
let tileW = modulo / amountX;
let tileH = modulo / amountY;
let wScreen = modulo * 3;
let time_offset = 0;
let logotipo;
function setup() {
    let canvas = createCanvas(400, 200);
          canvas.id('imgCanvas');
          canvas.parent('p5-canvas-container');
    smooth(10);
}
function preload() {
    logotipo = loadImage("data/ltipo1.png");
}
function draw() {
    frameRate(floor(random(1,3)));
    //noLoop();
    for (let x = 0; x < amountX; x++) {
        for (let y = 0; y < amountY; y++) {
            state[x][y] = int(random(0, 8));
        }
    }
    push();
    scale(0.78);
    translate(modulo/6,modulo/6);
    matriz();
    pop();
    push();
    image(logotipo, modulo, 0,modulo, modulo);
    pop();

}
function matriz() {
    ellipseMode(CORNER);
    fill(0);
    noStroke(); //image(img1, 0, 0);
    background(255);
    for (let x = 0; x < amountX; x++) {
        for (let y = 0; y < amountY; y++) {
            if (state[x][y] == 0 || state[x][y] == 0) {
                push();
                translate(x * tileW, y * tileH);
                ellipse(0, 0, tileW, tileH);
                pop();
            } else if (state[x][y] == 1 || state[x][y] == 1) {
                push();
                translate(x * tileW, y * tileH);
                rect(tileW / 2, 0, tileW / 2, tileH);
                pop();
            } else if (state[x][y] == 2 || state[x][y] == 3) {
                push();
                translate(x * tileW, y * tileH);
                triangle(tileW, 0, 0, tileH, 0, 0);
                pop();
            } else if (state[x][y] == 3 || state[x][y] == 4) {
                push();
                translate(x * tileW, y * tileH);
                rect(0, tileH / 2, tileW, tileH / 2);
                pop();
            } else if (state[x][y] == 4 || state[x][y] == 5) {
                push();
                translate(x * tileW, y * tileH);
                let randomSize = random(tileW / 4, tileW / 2);
                ellipse(
                    random(tileW - tileW / 2),
                    random(tileH - tileH / 2),
                    randomSize,
                    randomSize
                );
                pop();
            } else if (state[x][y] == 4 || state[x][y] == 6) {
                push();
                translate(x * tileW, y * tileH);
                triangle(0, 0, tileW, 0, tileW, tileH);
                pop();
            } else if (state[x][y] == 4 || state[x][y] == 7) {
                push();
                translate(x * tileW, y * tileH);
                triangle(0, tileH, tileW, 0, tileW, tileH);
                pop();
            } else {
                push();
                translate(x * tileW, y * tileH);
                triangle(0, 0, tileW, tileH, 0, tileH);
                pop();
            }
        }
    }
} 
