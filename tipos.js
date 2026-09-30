// CATEGORÍAS DE EVENTOS Y CHARLAS (nombres y colores)
// Este archivo lo usan el inicio, el calendario y el curso. Si cambias un color aquí, cambia en todas las pantallas.
// c = color de fondo, t = color del texto sobre ese fondo

const TIPOS = {
  clase:     { n: 'Clase',                        c: '#3E6F77', t: '#FFFFFF' },
  marketing: { n: 'Clase de marketing',           c: '#8797DB', t: '#14262A' },
  sesion:    { n: 'Sesión de escritura conjunta', c: '#E8A9A9', t: '#14262A' },
  invitado:  { n: 'Charla con invitados',         c: '#FFBA55', t: '#14262A' },
  reto:      { n: 'Reto',                         c: '#A9DDE2', t: '#14262A' }
};
const OTRO = { n: 'Otro', c: '#9DB4B8', t: '#14262A' };
const tipo = k => TIPOS[k] || OTRO;

// COLORES DE LAS PORTADAS QUE AÚN NO TIENEN IMAGEN (bloque de color con la inicial o el título)
const PALETA = [['#528A93', '#FFFFFF'], ['#8797DB', '#14262A'], ['#E8A9A9', '#14262A'], ['#FFBA55', '#14262A'], ['#A9DDE2', '#14262A']];
const colorPortada = titulo => PALETA[[...titulo].reduce((a, c) => a + c.charCodeAt(0), 0) % PALETA.length];
