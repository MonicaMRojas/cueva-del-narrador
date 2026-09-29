// CURSOS Y APUNTES DEL CLUB (los datos de abajo son de EJEMPLO: sustitúyelos por los vuestros)
//
// Cada curso tiene una lista de charlas, y cada charla una lista de documentos.
// Para añadir una charla, copia un bloque { ... }, pégalo debajo (con su coma) y cambia los datos.
// Para añadir un documento a una charla, copia una línea de "documentos" y cambia el nombre.
//
// fecha:    AAAA-MM-DD (puede ir vacía: "")
// tipo:     "clase", "marketing" o "invitado"
// ponente:  quien da la charla (puede ir vacío: "")
// tema:     una frase que resuma la charla (puede ir vacía: "")
// formato:  "PDF" o "Word"
// enlace:   déjalo vacío ("") por ahora. Los apuntes se abrirán cuando estén en la base de datos.
//
// IMPORTANTE: no subas los PDF ni los Word a GitHub mientras la web sea pública.

const CURSOS = [
  {
    id: "2027",
    nombre: "Curso 2027",
    periodo: "Septiembre 2026 - junio 2027",
    charlas: [
      { titulo: "Charla de ejemplo 1", fecha: "2026-09-10", tipo: "clase", ponente: "", tema: "Ejemplo de resumen de la charla.",
        documentos: [
          { nombre: "Apuntes de ejemplo 1", formato: "PDF", enlace: "" },
          { nombre: "Ejercicios de ejemplo 1", formato: "Word", enlace: "" }
        ] },
      { titulo: "Charla de ejemplo 2", fecha: "2026-09-17", tipo: "marketing", ponente: "", tema: "Ejemplo de clase de marketing.",
        documentos: [
          { nombre: "Apuntes de ejemplo 2", formato: "PDF", enlace: "" }
        ] },
      { titulo: "Charla de ejemplo 3", fecha: "2026-09-24", tipo: "invitado", ponente: "Nombre del invitado/a", tema: "Ejemplo de charla con invitado.",
        documentos: [] }
    ]
  },
  {
    id: "2026",
    nombre: "Curso 2026",
    periodo: "",
    charlas: [
      { titulo: "Charla de ejemplo A", fecha: "", tipo: "clase", ponente: "", tema: "Aquí irán las 16 charlas del curso 2026.",
        documentos: [
          { nombre: "Apuntes de ejemplo A", formato: "PDF", enlace: "" },
          { nombre: "Apuntes de ejemplo A (Word)", formato: "Word", enlace: "" }
        ] },
      { titulo: "Charla de ejemplo B", fecha: "", tipo: "invitado", ponente: "Nombre del invitado/a", tema: "",
        documentos: [
          { nombre: "Apuntes de ejemplo B", formato: "PDF", enlace: "" }
        ] }
    ]
  }
];
