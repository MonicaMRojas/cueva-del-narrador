// LIBROS DEL CLUB (los datos de abajo son de EJEMPLO: sustitúyelos por los vuestros)
// Para añadir un libro, copia una línea, pégala debajo y cambia los datos.
// disponible: true (en la biblioteca) o false (prestado)
// portada: opcional. Si subes una imagen a la carpeta img/portadas/, escribe por ejemplo "img/portadas/dune.jpg"
// Cuidado: cada línea termina en coma y los textos van entre comillas.

const BIBLIOTECA = [
  { titulo: "Mientras escribo", autor: "Stephen King", genero: "Escritura", disponible: true, portada: "", nota: "" },
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Novela", disponible: false, portada: "", nota: "" },
  { titulo: "El nombre del viento", autor: "Patrick Rothfuss", genero: "Fantasía", disponible: true, portada: "", nota: "" },
  { titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", genero: "Novela", disponible: true, portada: "", nota: "" },
  { titulo: "Dune", autor: "Frank Herbert", genero: "Ciencia ficción", disponible: false, portada: "", nota: "" },
  { titulo: "Circe", autor: "Madeline Miller", genero: "Fantasía", disponible: true, portada: "", nota: "" }
];

// RECOMENDADOS POR LOS SOCIOS (también de ejemplo)
// recomienda: nombre del socio o socia que lo recomienda
// nota: por qué lo recomienda (una frase)

const RECOMENDADOS = [
  { titulo: "Los pilares de la Tierra", autor: "Ken Follett", genero: "Novela histórica", recomienda: "Socio/a", portada: "", nota: "Ejemplo de nota: perfecta para aprender a construir personajes." },
  { titulo: "Patria", autor: "Fernando Aramburu", genero: "Novela", recomienda: "Socio/a", portada: "", nota: "Ejemplo de nota: una estructura narrativa muy trabajada." },
  { titulo: "Un mago de Terramar", autor: "Ursula K. Le Guin", genero: "Fantasía", recomienda: "Socio/a", portada: "", nota: "Ejemplo de nota: worldbuilding con muy pocas palabras." }
];
