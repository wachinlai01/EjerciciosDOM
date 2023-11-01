//Ejercicio 1

function InfoEnlace(){
    let enlace=document.getElementById("enlace");
    alert("URL: "+enlace.href+" \nDireccion: "+ enlace.innerText);
}

function CambioEnlace(){
    let enlace=document.getElementById("enlace");
    enlace.href="https://as.com/";
    enlace.innerText="Al As";
}

//Ejercicio 2
function cambioDimensionesT(){
    let tablas=document.getElementsByTagName("table");
    let tabla=tablas[0];
    //Para acceder al height y width de mi tabla
    let estilo=window.getComputedStyle(tabla);
    let alto=estilo.getPropertyValue('height');
    let ancho=estilo.getPropertyValue('width');
    alert("El alto es: "+alto+" y el ancho es: "+ancho);
    let Nancho=prompt("Introduce un nuevo ancho (numero+px)");
    let Nalto=prompt("Introduce un nuevo alto (numero+px)");
    tabla.style.setProperty('height',Nalto);
    tabla.style.setProperty('width',Nancho);
}

function cambioDimensionesB(){
    let tablas=document.getElementsByTagName("table");
    let tabla=tablas[0];
    //Vamos a acceder al borde
    let estilo=window.getComputedStyle(tabla);
    let borde=estilo.getPropertyValue('border');
    alert ("El borde actual es: "+borde);
    borde=prompt("Introduce un nuevo borde (npx solid color)");
    tabla.style.setProperty('border',borde);
}

function cambioOrientacion(){
    let boton=document.getElementById("cambio"); 
    boton.value++;
    let tablas=document.getElementsByTagName("table");
    let tabla=tablas[0];
    if (boton.value>2){
        boton.value=0;
        tabla.style.setProperty('margin-left','auto');
        tabla.style.setProperty('margin-right','auto');
    }
    if (boton.value==1){
        tabla.style.setProperty('margin-right',0);
    }else if (boton.value==2){
        tabla.style.setProperty('margin-left',0);

    }
}

//Ejercicio 3
function Aumentar(){
    let resultado=document.getElementById('res');
    resultado.innerHTML=parseInt(resultado.innerHTML)+1;
}

function Reducir(){
    let resultado=document.getElementById('res');
    resultado.innerHTML=parseInt(resultado.innerHTML)-1;
}