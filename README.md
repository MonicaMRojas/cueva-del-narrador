# cueva-del-narrador

App web (PWA) de La Cueva del Narrador, club de escritura en Sevilla. Es una web estática, sin compilación, que se publica en GitHub Pages con cada cambio en `main`.

## Estructura

| Carpeta o archivo | Qué contiene |
|---|---|
| `*.html` | Las páginas. Se quedan en la raíz para no cambiar sus direcciones. |
| `datos/` | El contenido que edita el club: eventos, libros, retos, cursos y entidades. |
| `js/comun.js` | Funciones que usan todas las páginas. |
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
