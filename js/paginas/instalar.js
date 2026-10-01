document.getElementById("copiar").addEventListener("click", async function(){
  const b=this, url=document.getElementById("url").textContent;
  try { await navigator.clipboard.writeText(url); b.textContent="¡Copiado!"; }
  catch(e){ b.textContent="Copia el enlace de arriba"; }
  setTimeout(()=>{ b.textContent="Copiar enlace"; }, 2500);
});
