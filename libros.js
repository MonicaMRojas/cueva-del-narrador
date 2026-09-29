// LIBROS DEL CLUB (los datos de abajo son de EJEMPLO: sustitúyelos por los vuestros)
// Para añadir un libro, copia una línea, pégala debajo y cambia los datos.
// alta: fecha en que se añadió el libro (AAAA-MM-DD). El inicio muestra los últimos añadidos.
//       Si la dejas vacía ("") cuenta el orden de la lista: los últimos son los más nuevos.
// disponible: true (en la biblioteca) o false (prestado)
// portada: opcional. Si subes una imagen a la carpeta img/portadas/, escribe por ejemplo "img/portadas/dune.jpg"
// Cuidado: cada línea termina en coma y los textos van entre comillas.

const BIBLIOTECA = [
  { titulo: "Mientras escribo", alta: "2026-09-01", autor: "Stephen King", genero: "Escritura", disponible: true, portada: "", nota: "" },
  { titulo: "Cien años de soledad", alta: "2026-09-03", autor: "Gabriel García Márquez", genero: "Novela", disponible: false, portada: "", nota: "" },
  { titulo: "El nombre del viento", alta: "2026-09-08", autor: "Patrick Rothfuss", genero: "Fantasía", disponible: true, portada: "", nota: "" },
  { titulo: "La sombra del viento", alta: "2026-09-12", autor: "Carlos Ruiz Zafón", genero: "Novela", disponible: true, portada: "", nota: "" },
  { titulo: "Dune", alta: "2026-09-15", autor: "Frank Herbert", genero: "Ciencia ficción", disponible: false, portada: "", nota: "" },
  { titulo: "Circe", alta: "2026-09-20", autor: "Madeline Miller", genero: "Fantasía", disponible: true, portada: "", nota: "" }
];

// RECOMENDADOS POR LOS SOCIOS (también de ejemplo)
// recomienda: nombre del socio o socia que lo recomienda
// nota: por qué lo recomienda (una frase)

const RECOMENDADOS = [
  { titulo: "Los pilares de la Tierra", alta: "2026-09-05", autor: "Ken Follett", genero: "Novela histórica", recomienda: "Socio/a", portada: "", nota: "Ejemplo de nota: perfecta para aprender a construir personajes." },
  { titulo: "Patria", alta: "2026-09-14", autor: "Fernando Aramburu", genero: "Novela", recomienda: "Socio/a", portada: "", nota: "Ejemplo de nota: una estructura narrativa muy trabajada." },
  { titulo: "Un mago de Terramar", alta: "2026-09-22", autor: "Ursula K. Le Guin", genero: "Fantasía", recomienda: "Socio/a", portada: "", nota: "Ejemplo de nota: worldbuilding con muy pocas palabras." }
];
