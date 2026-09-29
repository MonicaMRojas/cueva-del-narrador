// RETOS DEL MES (los datos de abajo son de EJEMPLO: sustitúyelos por los vuestros)
// Para añadir un reto, copia un bloque { ... }, pégalo debajo (con su coma) y cambia los datos.
// El reto que se muestra como "actual" es el más reciente cuya fecha de inicio ya ha llegado.
//
// inicio:   AAAA-MM-DD  (el día que sale el reto)
// plazo:    AAAA-MM-DD  (último día para subirlo; puede ir vacío: "")
// palabras: número de palabras (o 0 si no hay límite)
// incluir:  lista de cosas que debe tener el texto (puede ir vacía: [])
// nota:     texto libre opcional

const RETOS = [
  { titulo: "Primer reto escritor del mes", mes: "Septiembre 2026", inicio: "2026-09-01", plazo: "2026-09-08", palabras: 600,
    incluir: ["Elemento de ejemplo 1", "Elemento de ejemplo 2"], nota: "Ejemplo de reto anterior." },
  { titulo: "Segundo reto escritor del mes", mes: "Septiembre 2026", inicio: "2026-09-22", plazo: "2026-09-29", palabras: 600,
    incluir: ["Un naufragio.", "Una promesa rota.", "Una dama blanca."], nota: "" }
];
