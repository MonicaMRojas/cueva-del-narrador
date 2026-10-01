# cueva-del-narrador

App web (PWA) de La Cueva del Narrador, club de escritura en Sevilla. Es una web estática, sin compilación, que se publica en GitHub Pages con cada cambio en `main`.

## Estructura

| Carpeta o archivo | Qué contiene |
|---|---|
| `index.html` | La portada. Se queda en la raíz: es la dirección del QR y de la app instalada. |
| `paginas/` | El resto de páginas. |
| `404.html` | Página de error. Redirige las direcciones antiguas (de cuando las páginas estaban en la raíz). |
| `datos/` | El contenido que edita el club: eventos, libros, retos, cursos y entidades. |
| `js/comun.js` | Lo que usan todas las páginas, incluida la barra de navegación inferior. |
| `js/tipos.js` | Categorías de eventos y sus colores. |
| `js/paginas/` | El código de cada página. |
| `css/styles.css` | Los estilos. |
| `img/` | Logos, iconos y portadas. |
| `sw.js` | Service worker (instalación y uso sin conexión). Tiene que estar en la raíz. |

## Probar en local

```
python -m http.server 8000
```

Y abrir http://localhost:8000

## Al publicar cambios

Sube el número de `VERSION` en `sw.js` y, si añades archivos nuevos, apúntalos en su lista `ARCHIVOS`.
