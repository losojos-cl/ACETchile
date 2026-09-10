# Logotipo animado ACHET — para sketch online p5.js

## Opción A — Fiel (`sketch-fiel.js`)
1. Ir a https://editor.p5js.org → New Sketch → borrar `sketch.js`.
2. Pegar contenido de `sketch-fiel.js`.
3. Flecha `Add file +` → subir `../../data/ltipo1.png` renombrado a `ltipo1.png`.
4. Play. Canvas 800x400. Click regenera, Espacio pausa.

## Opción B — Standalone (`sketch-standalone.js`, recomendada)
1. New Sketch → pegar contenido de `sketch-standalone.js`.
2. En `index.html`, dentro de `<head>`, agregar (igual que la web):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap" rel="stylesheet">
```
3. Play directo, sin archivos. Dibuja el wordmark con `textFont('JetBrains Mono')`.
   Sin ese `<link>`, el canvas usa mono genérica como fallback.

## Diferencias vs portada (`js/achet.js`)
- Corregido: `smooth(10)` eliminado, `frameRate(random)` → `frameRate(2)`,
  cadena `if (state==0||state==0)...` → 8 casos `0-7` reales.
- Canvas ampliado 400x200 → 800x400 (módulo 400, logo 400x400 = tamaño real PNG).
- Sin `canvas.parent()`, compatible modo global editor.p5js.org.
