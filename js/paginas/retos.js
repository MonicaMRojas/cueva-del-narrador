const h=new Date();
const hoy=h.getFullYear()+'-'+String(h.getMonth()+1).padStart(2,'0')+'-'+String(h.getDate()).padStart(2,'0');
const fecha=f=>new Date(f+'T12:00:00').toLocaleDateString('es-ES',{day:'numeric',month:'long'});
const plazoTxt=r=>!r.plazo?'':(r.plazo>=hoy?'Plazo: hasta el '+fecha(r.plazo)+'.':'El plazo terminó el '+fecha(r.plazo)+'.');
const condiciones=r=>(r.palabras?'Escribe '+r.palabras+' palabras':'Escribe tu texto')+((r.incluir||[]).length?' que incluyan:':'.');

const orden=RETOS.slice().sort((a,b)=>b.inicio.localeCompare(a.inicio));
const actual=orden.find(r=>r.inicio<=hoy);
const anteriores=orden.filter(r=>r!==actual&&r.inicio<=hoy);

document.getElementById('actual').innerHTML=actual
 ?'<div class="reto-card"><span class="etq">Reto actual</span><h2>'+esc(actual.titulo)+'</h2><p class="rule">'+esc(condiciones(actual))+'</p>'+((actual.incluir||[]).length?'<ul class="words">'+actual.incluir.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul>':'')+(actual.nota?'<p class="notar">'+esc(actual.nota)+'</p>':'')+'<p class="plazo">'+esc(plazoTxt(actual))+'</p>'+ '<a class="btn" href="https://www.instagram.com/lacuevadelnarrador/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".6" fill="currentColor"/></svg>Súbelo a Instagram y etiquétanos</a>' +'</div>'
 :'<p class="empty">Todavía no hay ningún reto en marcha. ¡Muy pronto!</p>';

document.getElementById('anteriores').innerHTML=anteriores.length?anteriores.map(r=>
 '<details class="charla"><summary><span class="tp" style="background:#A9DDE2" aria-hidden="true"></span><span class="st"><b>'+esc(r.titulo)+'</b><small>'+esc(r.mes)+'</small></span></summary><div class="cuerpo"><p class="tema">'+esc(condiciones(r))+'</p>'+((r.incluir||[]).length?'<ul class="words">'+r.incluir.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul>':'')+(r.nota?'<p class="tema">'+esc(r.nota)+'</p>':'')+'</div></details>').join('')
 :'<p class="empty">Aún no hay retos anteriores.</p>';
