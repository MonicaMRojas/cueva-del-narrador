const IG='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".6" fill="currentColor"/></svg>';
document.getElementById('entidades').innerHTML=ENTIDADES.map(e=>{
  const c=colorPortada(e.nombre);
  const logo=e.logo?'<img src="'+esc(ruta(e.logo))+'" alt="Logo de '+esc(e.nombre)+'">':'<span class="inicial" style="background:'+c[0]+';color:'+c[1]+'" aria-hidden="true">'+esc(e.nombre.charAt(0))+'</span>';
  const enlace=e.enlace?'<a class="elink" href="'+esc(e.enlace)+'" target="_blank" rel="noopener">'+IG+esc(e.enlaceTexto||'Ver en Instagram')+'</a>':'';
  return '<article class="entidad"><div class="logo">'+logo+'</div><div class="datos"><h3>'+esc(e.nombre)+'</h3><p>'+esc(e.frase)+'</p>'+enlace+'</div></article>';
}).join('');
