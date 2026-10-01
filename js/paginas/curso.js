const fechaBonita=f=>f?new Date(f+'T12:00:00').toLocaleDateString('es-ES',{day:'numeric',month:'short',year:'numeric'}):'';

let cursoId=CURSOS[0].id, filtroTipo='todos', texto='';
const cursoActual=()=>CURSOS.find(c=>c.id===cursoId)||CURSOS[0];

function pintarTabs(){
  document.getElementById('tabs').innerHTML=CURSOS.map(c=>'<button class="tab" role="tab" data-id="'+esc(c.id)+'" aria-selected="'+(c.id===cursoId)+'">'+esc(c.nombre)+'</button>').join('');
  document.getElementById('tabs').style.gridTemplateColumns='repeat('+CURSOS.length+',1fr)';
  document.getElementById('periodo').textContent=cursoActual().periodo;
}

function pintarTipos(){
  const ts=[...new Set(cursoActual().charlas.map(c=>c.tipo))];
  if(filtroTipo!=='todos'&&!ts.includes(filtroTipo)) filtroTipo='todos';
  const chips=[['todos','Todas']].concat(ts.map(t=>[t,tipo(t).n]));
  document.getElementById('tipos').innerHTML=chips.map(([k,n])=>'<button class="chip'+(k===filtroTipo?' on':'')+'" data-t="'+esc(k)+'" aria-pressed="'+(k===filtroTipo)+'">'+esc(n)+'</button>').join('');
}

function pintarLista(){
  const q=norm(texto);
  const lista=cursoActual().charlas.slice().sort((a,b)=>(a.fecha||'9999').localeCompare(b.fecha||'9999')).filter(c=>
    (filtroTipo==='todos'||c.tipo===filtroTipo)&&(!q||norm(c.titulo).includes(q)||norm(c.tema).includes(q)||norm(c.ponente).includes(q)));
  document.getElementById('cuenta').textContent=lista.length+(lista.length===1?' charla':' charlas');
  document.getElementById('lista').innerHTML=lista.length?lista.map(c=>{
    const t=tipo(c.tipo);
    const docs=(c.documentos||[]).map(d=>d.enlace
      ?'<a class="doc" href="'+esc(d.enlace)+'" target="_blank" rel="noopener"><span class="fmt">'+esc(d.formato)+'</span><span class="dn">'+esc(d.nombre)+'</span></a>'
      :'<div class="doc off"><span class="fmt">'+esc(d.formato)+'</span><span class="dn">'+esc(d.nombre)+'</span><span class="pend">Pronto</span></div>').join('');
    const meta=[fechaBonita(c.fecha),c.ponente].filter(Boolean).map(esc).join(' · ');
    return '<details class="charla"><summary><span class="tp" style="background:'+t.c+'" aria-hidden="true"></span><span class="st"><b>'+esc(c.titulo)+'</b><small>'+esc(t.n)+(meta?' · '+meta:'')+'</small></span></summary><div class="cuerpo">'+(c.tema?'<p class="tema">'+esc(c.tema)+'</p>':'')+(docs?'<div class="docs">'+docs+'</div>':'<p class="empty">Todavía no hay documentos de esta charla.</p>')+'</div></details>';
  }).join(''):'<p class="empty">No hay charlas que coincidan con la búsqueda.</p>';
}

function todo(){pintarTabs();pintarTipos();pintarLista();}
document.getElementById('tabs').addEventListener('click',e=>{const b=e.target.closest('.tab');if(!b)return;cursoId=b.dataset.id;filtroTipo='todos';todo();});
document.getElementById('tipos').addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;filtroTipo=b.dataset.t;pintarTipos();pintarLista();});
document.getElementById('q').addEventListener('input',e=>{texto=e.target.value;pintarLista();});
todo();
