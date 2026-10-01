let pestana=(location.hash==='#recomendados')?'recomendados':'biblioteca';
let genero='Todos', texto='', soloDisp=false;

function datos(){return pestana==='biblioteca'?BIBLIOTECA:RECOMENDADOS;}

function pintarTabs(){
  ['biblioteca','recomendados'].forEach(k=>document.getElementById('tab-'+k).setAttribute('aria-selected',String(k===pestana)));
  document.getElementById('solo-wrap').hidden=(pestana!=='biblioteca');
}

function pintarGeneros(){
  const gs=['Todos',...new Set(datos().map(l=>l.genero).filter(Boolean))].sort((a,b)=>a==='Todos'?-1:b==='Todos'?1:a.localeCompare(b,'es'));
  if(!gs.includes(genero)) genero='Todos';
  document.getElementById('generos').innerHTML=gs.map(g=>'<button class="chip'+(g===genero?' on':'')+'" data-g="'+esc(g)+'" aria-pressed="'+(g===genero)+'">'+esc(g)+'</button>').join('');
}

function pintarLista(){
  const q=norm(texto);
  const lista=datos().filter(l=>(genero==='Todos'||l.genero===genero)
    &&(!q||norm(l.titulo).includes(q)||norm(l.autor).includes(q))
    &&(!(pestana==='biblioteca'&&soloDisp)||l.disponible));
  document.getElementById('cuenta').textContent=lista.length+(lista.length===1?' libro':' libros');
  document.getElementById('lista').innerHTML=lista.length?lista.map(l=>{
    const [c,t]=colorPortada(l.titulo);
    const portada=l.portada?'<img class="portada" src="'+esc(l.portada)+'" alt="Portada de '+esc(l.titulo)+'">':'<div class="portada" style="background:'+c+';color:'+t+'" aria-hidden="true">'+esc(l.titulo.charAt(0))+'</div>';
    const estado=(pestana==='biblioteca')?'<span class="estado '+(l.disponible?'ok':'no')+'">'+(l.disponible?'Disponible':'Prestado')+'</span>':'';
    const por=(pestana==='recomendados'&&l.recomienda)?'<p class="por">Recomienda: '+esc(l.recomienda)+'</p>':'';
    return '<article class="libro">'+portada+'<div class="info"><h3>'+esc(l.titulo)+'</h3><p class="autor">'+esc(l.autor)+'</p><div class="meta">'+(l.genero?'<span class="tag">'+esc(l.genero)+'</span>':'')+estado+'</div>'+por+(l.nota?'<p class="nota">'+esc(l.nota)+'</p>':'')+'</div></article>';
  }).join(''):'<p class="empty">No hay libros que coincidan con la búsqueda.</p>';
}

function todo(){pintarTabs();pintarGeneros();pintarLista();}

['biblioteca','recomendados'].forEach(k=>document.getElementById('tab-'+k).addEventListener('click',()=>{pestana=k;genero='Todos';history.replaceState(null,'',k==='recomendados'?'#recomendados':location.pathname);todo();}));
document.getElementById('q').addEventListener('input',e=>{texto=e.target.value;pintarLista();});
document.getElementById('solo').addEventListener('change',e=>{soloDisp=e.target.checked;pintarLista();});
document.getElementById('generos').addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;genero=b.dataset.g;pintarGeneros();pintarLista();});
todo();
