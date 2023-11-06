//Ejercicio 12

function mov(btn){
    //Obtenemos el div
    let contenedor=document.querySelector('.marco');
    //Obtenemos la dimension del div
    let estilo=window.getComputedStyle(contenedor);
    //Obteemos la distancia con el borde izqd
    //convertimos a numero lo que nos devuelve (devuelve una cadena
    //en formato numero + px, al parsealo js se queda con la parte 
    //numerica solo)
    let margen=parseFloat(estilo.getPropertyValue("left"));
    if (btn.id=="izqd"&&(margen-5)>=251.6){
        //la modificamos para mmver la imagen a la izquierda
        contenedor.style.setProperty("left",margen-5+"px");
    }else if(btn.id=="dcha"&&(margen+5)<=1281.6){
        //la modificamos para mmver la imagen a la derecha
        contenedor.style.setProperty("left",margen+5+"px");
    }
}

function reset(){
    //Obtenemos el div
    let contenedor=document.querySelector('.marco');
    contenedor.style.setProperty("left",50+"%");
}

function desplazamiento(){
    let contenedor=document.querySelector('.marco');
    let estilo=window.getComputedStyle(contenedor);
    let margen=parseFloat(estilo.getPropertyValue("left"));
    let anchoMaximo=document.querySelector('body').clientWidth-250;
    let desplazamiento=1;
    // Cada 40 milisegundos, incrementa el desplazamiento y actualiza la posición
    let intervalo = setInterval(function() {
        margen+=desplazamiento;
        if (margen+desplazamiento<=anchoMaximo)
        contenedor.style.setProperty("left", margen + "px");
    }, 1);
    // Detenemos el movimiento cuando el ratón sale
    contenedor.addEventListener('mouseout', function() {
        clearInterval(intervalo);
    });
}

function cambio(texto){
    let contenido=texto.innerHTML;
    //Vamos a crear el texto oculto
    //Primero creamos el elemento
    let nuevo=document.createElement('p')
    //Ahora su contenido;
    let nuevoTexto=document.createTextNode("Te vas a quedar con las ganas");
    //Introducimos el contenido en el elemento
    //nuevo.innerHTML=nuevoTexto;
    nuevo.appendChild(nuevoTexto)
    let pos = document.getElementsByClassName("spoiler")[0];
    if (contenido=="Mostrar"){
        texto.innerHTML="Ocultar";
        texto.style.setProperty("color","grey");
        pos.appendChild(nuevo);
    }
    if (contenido=="Ocultar"){
        texto.innerHTML="Mostrar";
        texto.style.setProperty("color","black");
        //Accedemos a todos los parrafos del div
        let parrafos=document.querySelectorAll('.spoiler p');
        let parrafo=parrafos[parrafos.length-1];
        parrafo.parentNode.removeChild(parrafo);
    }
}