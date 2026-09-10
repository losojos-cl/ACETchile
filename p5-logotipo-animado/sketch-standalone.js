// ============================================================
// ACHET — Logotipo animado (responsive a ventana / iframe)
// Pegar completo en editor.p5js.org como sketch.js
// Requiere en index.html el link de JetBrains Mono (ver README).
// ============================================================

let state = [];
const BASE_MOD = 200;
const NX = 2;
const NY = 2;
const GAP = 20;
const MIN_MARGIN = 24;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2);
  initState();
  noSmooth();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
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

// Calcula escala y origen para centrar el contenido conservando proporción.
function layout() {
  const baseW = BASE_MOD * 2 + GAP;
  const baseH = BASE_MOD;
  const availW = Math.max(100, width - MIN_MARGIN * 2);
  const availH = Math.max(100, height - MIN_MARGIN * 2);
  const s = Math.min(availW / baseW, availH / baseH);
  const cell = BASE_MOD * s;
  const gap = GAP * s;
  const contentW = baseW * s;
  const contentH = baseH * s;
  const ox = (width - contentW) / 2;
  const oy = (height - contentH) / 2;
  return { s: s, cell: cell, gap: gap, ox: ox, oy: oy };
}

function draw() {
  background(113, 230, 164);
  for (let x = 0; x < NX; x++) {
    for (let y = 0; y < NY; y++) {
      state[x][y] = floor(random(0, 8));
    }
  }
  const L = layout();
  drawMatrix(L.ox, L.oy, L.cell);
  drawWordmark(L.ox + L.cell + L.gap, L.oy, L.cell, L.cell, L.s);
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

function drawWordmark(x0, y0, w, h, s) {
  push();
  translate(x0, y0);
  fill(0);
  noStroke();
  textFont('JetBrains Mono');
  textAlign(LEFT, CENTER);
  textStyle(BOLD);
  const cx = w * 0.12;
  let cy = h * 0.3;
  textSize(33 * s);
  text('ASOCIACIÓN', cx, cy);
  cy = cy + 38 * s;
  text('CHILENA', cx, cy);
  cy = cy + 33 * s;
  textSize(17 * s);
  text('DE ESTUDIOS', cx, cy);
  cy = cy + 22 * s;
  text('DEL TRABAJO', cx, cy);
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
