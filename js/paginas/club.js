const ACT=[
  ["clase","Clases","Sesiones sobre técnica y oficio, donde entre todos vemos cómo se construye una historia: personajes, worldbuilding, la raya de diálogo, los adverbios, las figuras literarias, cómo escribir una sinopsis o una propuesta literaria, y mucho más."],
  ["marketing","Clases de marketing","Todo lo que un escritor necesita para darse a conocer: crear un perfil de Instagram, entender el algoritmo, construir comunidad, abrir tu perfil de autor en Amazon y desarrollar tu marca personal."],
  ["sesion","Sesiones de escritura conjunta","Nos juntamos a escribir, cada uno con su proyecto personal o con el común, y compartimos dudas y preguntas según van surgiendo. También hay ratos para leer."],
  ["invitado","Charlas con invitados","Viene alguien del mundo del libro (un autor o autora conocidos, una editorial, un librero, una correctora) y nos cuenta su experiencia para ayudarnos."],
  ["reto","Retos","Cada mes publicamos en Instagram un reto de escritura, normalmente ligado a lo que hemos visto en las clases y en las clases de marketing, para ponerlo en práctica."]
];
document.getElementById("actividades").innerHTML=ACT.map(a=>'<article class="act"><span class="tp" style="background:'+tipo(a[0]).c+'" aria-hidden="true"></span><div><h3>'+a[1]+'</h3><p>'+a[2]+'</p></div></article>').join("");
