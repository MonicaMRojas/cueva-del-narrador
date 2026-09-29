// EVENTOS DEL CLUB
// Para añadir un evento, copia una línea, pégala debajo y cambia los datos.
// fecha: AAAA-MM-DD   |   hora: "19:30" (puede ir vacía: "")
// tipo (escríbelo exactamente así):
//   "clase"      -> Clase
//   "marketing"  -> Clase de marketing
//   "sesion"     -> Sesión de escritura conjunta
//   "invitado"   -> Charla con invitados
//   "reto"       -> Reto
// lugar y detalle son opcionales (puedes dejarlos vacíos: "")
// Cuidado: cada línea termina en coma y los textos van entre comillas.

const EVENTOS = [
  { fecha: "2026-10-01", hora: "",      titulo: "Sale el reto de octubre", tipo: "reto", lugar: "", detalle: "Tienes una semana para subirlo a Instagram." },
  { fecha: "2026-10-08", hora: "19:30", titulo: "Clase: diálogos que suenan reales", tipo: "clase", lugar: "", detalle: "" },
  { fecha: "2026-10-15", hora: "19:30", titulo: "Sesión de escritura conjunta", tipo: "sesion", lugar: "", detalle: "Trabajamos en los proyectos del club." },
  { fecha: "2026-10-20", hora: "19:30", titulo: "Clase de marketing: tu perfil de autor/a", tipo: "marketing", lugar: "", detalle: "Ejemplo de clase de marketing." },
  { fecha: "2026-10-22", hora: "19:30", titulo: "Charla con autora invitada", tipo: "invitado", lugar: "", detalle: "Ejemplo de evento con invitada." },
  { fecha: "2026-10-22", hora: "",      titulo: "Fin del plazo del reto", tipo: "reto", lugar: "", detalle: "Ejemplo de dos eventos el mismo día." },
  { fecha: "2026-10-29", hora: "19:30", titulo: "Clase: estructura de una historia", tipo: "clase", lugar: "", detalle: "" },
  { fecha: "2026-11-05", hora: "19:30", titulo: "Clase: construcción de personajes", tipo: "clase", lugar: "", detalle: "" },
  { fecha: "2026-11-12", hora: "19:30", titulo: "Sesión de escritura conjunta", tipo: "sesion", lugar: "", detalle: "" }
];
