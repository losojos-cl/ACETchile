// ============================================================
// ACHET — Logotipo animado portada (Versión A: FIEL)
// Para editor.p5js.org — copiar/pegar este archivo como sketch.js
// Requiere subir data/ltipo1.png al editor renombrado a "ltipo1.png"
// Compatible p5 1.x y 2.x. Todos los for con llaves (fix _LP2 loop-protect).
// Origen: js/achet.js (portada) — lógica limpiada, bugs corregidos.
// ============================================================

let logo;
let state = [];
const MOD = 400;
const NX = 2;
const NY = 2;
const MARGIN = 100;

function preload() {
  logo = loadImage('ltipo1.png');
}

function setup() {
  createCanvas(MOD * 2 + MARGIN * 2, MOD + MARGIN * 2);
  frameRate(2);
  initState();
  noSmooth();
}

function initState() {
  state = [];
  for (let x = 0; x < NX; x++) {
    state[x] = [];
    for (let y = 0; y < NY; y++) {
      state[x][y] = 0;
    }
  }
}

function draw() {
  background(255);

  for (let x = 0; x < NX; x++) {
    for (let y = 0; y < NY; y++) {
      state[x][y] = floor(random(0, 8));
    }
  }

  drawMatrix(MARGIN, MARGIN, MOD);

  if (logo) {
    image(logo, MOD + MARGIN, MARGIN, MOD, MOD);
  }

  stroke(230);
  strokeWeight(1);
  line(MOD + MARGIN, MARGIN, MOD + MARGIN, MARGIN + MOD);
  noStroke();
}

function drawMatrix(x0, y0, size) {
  const tw = size / NX;
  const th = size / NY;
  push();
  translate(x0, y0);
  ellipseMode(CORNER);
  fill(0);
  noStroke();
  for (let x = 0; x < NX; x++) {
    for (let y = 0; y < NY; y++) {
      push();
      translate(x * tw, y * th);
      const s = state[x][y];
      if (s === 0) {
        ellipse(0, 0, tw, th);
      } else {
        if (s === 1) {
          rect(tw / 2, 0, tw / 2, th);
        } else {
          if (s === 2) {
            triangle(tw, 0, 0, th, 0, 0);
          } else {
            if (s === 3) {
              rect(0, th / 2, tw, th / 2);
            } else {
              if (s === 4) {
                const r = random(tw / 4, tw / 2);
                const px = random(tw - tw / 2);
                const py = random(th - th / 2);
                ellipse(px, py, r, r);
              } else {
                if (s === 5) {
                  triangle(0, 0, tw, 0, tw, th);
                } else {
                  if (s === 6) {
                    triangle(0, th, tw, 0, tw, th);
                  } else {
                    triangle(0, 0, tw, th, 0, th);
                  }
                }
              }
            }
          }
        }
      }
      pop();
    }
  }
  pop();
}

function mousePressed() {
  redraw();
}

function keyPressed() {
  if (key === ' ') {
    if (isLooping()) {
      noLoop();
    } else {
      loop();
    }
    return false;
  }
}
