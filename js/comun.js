// FUNCIONES COMUNES A TODAS LAS PÁGINAS
// Este archivo se carga el primero en cada página.

// Escapa el texto antes de pintarlo en la página
const esc=t=>String(t==null?'':t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// Quita mayúsculas y tildes para que el buscador encuentre "garcia" en "García"
const norm=t=>String(t||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');

// Service worker: permite instalar la app y usarla sin conexión
if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js"));
