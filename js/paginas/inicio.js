(function(){
  const MES=['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  const h=new Date();
  const hoy=h.getFullYear()+'-'+String(h.getMonth()+1).padStart(2,'0')+'-'+String(h.getDate()).padStart(2,'0');
  const proximos=EVENTOS.filter(e=>e.fecha>=hoy).sort((x,y)=>(x.fecha+(x.hora||'')).localeCompare(y.fecha+(y.hora||''))).slice(0,3);
  document.getElementById('proximos').innerHTML=proximos.length?proximos.map(e=>{
    const t=tipo(e.tipo), p=e.fecha.split('-').map(Number);
    return '<article class="event"><div class="date" style="background:'+t.c+';color:'+t.t+'"><b>'+String(p[2]).padStart(2,'0')+'</b><small>'+MES[p[1]-1]+'</small></div><div><h3>'+esc(e.titulo)+'</h3><p>'+t.n+(e.hora?' · '+esc(e.hora)+' h':'')+(e.lugar?' · '+esc(e.lugar):'')+'</p></div></article>';
  }).join(''):'<p class="empty">No hay eventos próximos. Vuelve pronto.</p>';

  // Últimos libros añadidos (los más recientes primero)
  const MAX=6;
  const masNuevos=lista=>lista.map((l,i)=>({l,i})).sort((x,y)=>(y.l.alta||'').localeCompare(x.l.alta||'')||y.i-x.i).map(o=>o.l);
  function estante(id,libros,vacio,conRecomienda){
    document.getElementById(id).innerHTML=libros.length?libros.slice(0,MAX).map(l=>{
      const c=colorPortada(l.titulo);
      const portada=l.portada?'<img class="cover" src="'+esc(ruta(l.portada))+'" alt="Portada de '+esc(l.titulo)+'" style="width:100%;object-fit:cover;padding:0">':'<div class="cover" style="background:'+c[0]+';color:'+c[1]+'">'+esc(l.titulo)+'</div>';
      return '<div class="book">'+portada+'<p>'+esc(l.autor)+'</p>'+(conRecomienda&&l.recomienda?'<p class="by">Recomienda: '+esc(l.recomienda)+'</p>':'')+'</div>';
    }).join(''):'<p class="empty">'+vacio+'</p>';
  }
  estante('est-biblioteca',masNuevos(BIBLIOTECA.filter(l=>l.disponible)),'Ahora mismo no hay libros disponibles.',false);
  estante('est-recomendados',masNuevos(RECOMENDADOS),'Todavía no hay recomendaciones. ¡Sé el primero en recomendar un libro!',true);

  // Reto actual: el más reciente cuya fecha de inicio ya ha llegado
  const fechaL=f=>new Date(f+'T12:00:00').toLocaleDateString('es-ES',{day:'numeric',month:'long'});
  const reto=RETOS.slice().sort((x,y)=>y.inicio.localeCompare(x.inicio)).find(r=>r.inicio<=hoy);
  if(reto){
    document.getElementById('reto-titulo').textContent=reto.palabras?'Escribe '+reto.palabras+' palabras':'Escribe tu texto';
    document.getElementById('reto-regla').textContent=(reto.incluir||[]).length?'Tu texto tiene que incluir:':'';
    document.getElementById('reto-lista').innerHTML=(reto.incluir||[]).map(x=>'<li>'+esc(x)+'</li>').join('');
    document.getElementById('reto-plazo').textContent=reto.plazo?(reto.plazo>=hoy?'Plazo: hasta el '+fechaL(reto.plazo)+'.':'El plazo terminó el '+fechaL(reto.plazo)+'.'):'';
  }else{
    document.getElementById('reto-titulo').textContent='Muy pronto, nuevo reto';
  }
})();
