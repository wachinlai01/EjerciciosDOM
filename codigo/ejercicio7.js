function cambio(elemento){
    let colores=['white','black','red','blue'];
    elemento.dataset.value++;
    if(elemento.dataset.value>3){
        elemento.dataset.value=0;
        elemento.style.setProperty('background-color',colores[elemento.dataset.value]); 
    }
    if(elemento.dataset.value==1){
        elemento.style.setProperty('background-color',colores[elemento.dataset.value]);
    }
    if(elemento.dataset.value==2){
        elemento.style.setProperty('background-color',colores[elemento.dataset.value]);
    }
    if(elemento.dataset.value==3){
        elemento.style.setProperty('background-color',colores[elemento.dataset.value]);
    }
}

//Ejercicio 8
function rollover(elemento,estado){
    if (estado) elemento.src='../Imagenes/imagen2.jpg';
    else elemento.src='../Imagenes/imagen1.jpg';
}
