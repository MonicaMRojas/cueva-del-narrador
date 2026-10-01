const MESES=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const DIAS=['dom','lun','mar','mié','jue','vie','sáb'];
const hoy=new Date();
let anio=hoy.getFullYear(), mes=hoy.getMonth(), sel=null;

const clave=(a,m,d)=>a+'-'+String(m+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
const partes=f=>{const p=f.split('-').map(Number);return {a:p[0],m:p[1]-1,d:p[2]};};
const orden=(x,y)=>(x.fecha+(x.hora||'')).localeCompare(y.fecha+(y.hora||''));

function eventosDe(prefijo){return EVENTOS.filter(e=>e.fecha.startsWith(prefijo)).sort(orden);}

function pintarLeyenda(){
  document.getElementById('leyenda').innerHTML=Object.values(TIPOS).map(t=>'<span><i style="background:'+t.c+'"></i>'+t.n+'</span>').join('');
}

function pintar(){
  document.getElementById('titulo-mes').textContent=MESES[mes]+' '+anio;
  const prefMes=anio+'-'+String(mes+1).padStart(2,'0');
  const delMes=eventosDe(prefMes);
  const primero=(new Date(anio,mes,1).getDay()+6)%7;
  const total=new Date(anio,mes+1,0).getDate();
  let h='';
  for(let i=0;i<primero;i++) h+='<span class="day blank"></span>';
  for(let d=1;d<=total;d++){
    const k=clave(anio,mes,d);
    const evs=delMes.filter(e=>e.fecha===k);
    const tipos=[...new Set(evs.map(e=>e.tipo))];
    let estilo='', extra='';
    if(tipos.length===1){const t=tipo(tipos[0]);estilo=' style="background:'+t.c+';color:'+t.t+'"';extra=' has';}
    else if(tipos.length>1){const paso=100/tipos.length;estilo=' style="background:linear-gradient(90deg,'+tipos.map((x,i)=>tipo(x).c+' '+(i*paso)+'% '+((i+1)*paso)+'%').join(',')+')"';extra=' has multi';}
    const esHoy=(anio===hoy.getFullYear()&&mes===hoy.getMonth()&&d===hoy.getDate());
    const cls='day'+extra+(esHoy?' today':'')+(sel===k?' sel':'');
    const label=d+' de '+MESES[mes]+(evs.length?', '+evs.length+(evs.length===1?' evento':' eventos'):'')+(esHoy?', hoy':'');
    h+='<button class="'+cls+'"'+estilo+' data-k="'+k+'" aria-label="'+label+'"'+(sel===k?' aria-pressed="true"':'')+'><span class="num">'+d+'</span></button>';
  }
  document.getElementById('dias').innerHTML=h;

  const lista=sel?delMes.filter(e=>e.fecha===sel):delMes;
  const tl=document.getElementById('titulo-lista');
  if(sel){const p=partes(sel);tl.textContent=p.d+' de '+MESES[p.m];} else tl.textContent='Eventos de '+MESES[mes].toLowerCase();
  document.getElementById('ver-mes').hidden=!sel;
  document.getElementById('lista').innerHTML=lista.length?lista.map(e=>{
    const p=partes(e.fecha), t=tipo(e.tipo);
    const dia=DIAS[new Date(p.a,p.m,p.d).getDay()];
    return '<article class="ev"><div class="date" style="background:'+t.c+';color:'+t.t+'"><b>'+String(p.d).padStart(2,'0')+'</b><small>'+dia+'</small></div><div><h3>'+esc(e.titulo)+'</h3><p>'+(e.hora?esc(e.hora)+' h':'')+(e.lugar?' · '+esc(e.lugar):'')+'</p>'+(e.detalle?'<p>'+esc(e.detalle)+'</p>':'')+'<span class="badge"><i style="background:'+t.c+'"></i>'+t.n+'</span></div></article>';
  }).join(''):'<p class="empty">'+(sel?'Ese día no hay nada previsto.':'Este mes no hay eventos programados.')+'</p>';
}

document.getElementById('dias').addEventListener('click',ev=>{
  const b=ev.target.closest('.day[data-k]'); if(!b) return;
  sel=(sel===b.dataset.k)?null:b.dataset.k; pintar();
});
document.getElementById('ver-mes').addEventListener('click',()=>{sel=null;pintar();});
document.getElementById('prev').addEventListener('click',()=>{mes--;if(mes<0){mes=11;anio--;}sel=null;pintar();});
document.getElementById('next').addEventListener('click',()=>{mes++;if(mes>11){mes=0;anio++;}sel=null;pintar();});
pintarLeyenda(); pintar();
