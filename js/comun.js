// FUNCIONES COMUNES A TODAS LAS PÁGINAS
// Este archivo se carga el primero en cada página.

// Dirección de la carpeta principal, para que las rutas valgan igual desde index.html y desde paginas/
const RAIZ=new URL('..',document.currentScript.src).href;
// Ruta completa de una imagen o archivo del proyecto (si ya es una dirección web, la deja como está)
const ruta=r=>/^(https?:)?\/\//.test(r)?r:RAIZ+r;

// Escapa el texto antes de pintarlo en la página
const esc=t=>String(t==null?'':t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// Quita mayúsculas y tildes para que el buscador encuentre "garcia" en "García"
const norm=t=>String(t||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');

// BARRA DE NAVEGACIÓN INFERIOR
// Se pinta aquí para todas las páginas. Para añadir o cambiar una pestaña, toca solo esta lista.
// Cada página dice cuál es la suya con data-actual en su <nav id="nav">.
const PESTANAS=[
  ['inicio','Inicio','index.html','<path d="M4 21V11a8 8 0 0116 0v10M9 21v-6a3 3 0 016 0v6"/>'],
  ['calendario','Calendario','paginas/calendario.html','<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'],
  ['curso','Curso','paginas/curso.html','<path d="M4 5c3-1 6-1 8 1 2-2 5-2 8-1v13c-3-1-6-1-8 1-2-2-5-2-8-1z"/><path d="M12 6v13"/>'],
  ['biblioteca','Biblioteca','paginas/biblioteca.html','<path d="M5 3h4v18H5zM11 3h4v18h-4zM17 5l3.5 1-4 15-3.5-1z"/>'],
  ['mas','Más','paginas/mas.html','<circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>']
];
(function(){
  const nav=document.getElementById('nav');
  if(!nav) return;
  nav.innerHTML=PESTANAS.map(([k,n,url,icono])=>'<a href="'+RAIZ+url+'"'+(k===nav.dataset.actual?' class="on" aria-current="page"':'')+'><svg viewBox="0 0 24 24" aria-hidden="true">'+icono+'</svg>'+n+'</a>').join('');
})();

// Service worker: permite instalar la app y usarla sin conexión
if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register(RAIZ+"sw.js"));
