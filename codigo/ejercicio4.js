//Ejercicio 4
function retroceder(){
    //CollectionHTML de todas las imágenes
    let imagenes=document.getElementsByTagName('img');
    let pos;
    let foco=document.getElementsByClassName('mostrando')[0];
    for (let i=0;i<imagenes.length;i++){
        if (imagenes[i]===foco){
            pos=i;
            break;
        }
    }
    if(pos===0){
        //Si estamos en el último elemento desactivamos el boton
        document.getElementById('retro').disabled=true; 
    }else{
        //Habilitamos el botón de avanzar por si lo habíamos deshabilitado
        document.getElementById('avanzo').disabled=false;
        //Modificamos las clases de los elementos
        imagenes[pos].classList.remove('mostrando');
        imagenes[pos-1].classList.add('mostrando');
    }

}

function avanzar(){
    //CollectionHTML de todas las imágenes
    let imagenes=document.getElementsByTagName('img');
    let pos;
    let foco=document.getElementsByClassName('mostrando')[0];
    for (let i=0;i<imagenes.length;i++){
        if (imagenes[i]===foco){
            pos=i;
            break;
        }
    }
    if(pos===imagenes.length-1){
        //Si estamos en el último elemento desactivamos el boton
        document.getElementById('avanzo').disabled=true; 
    }else{
        //Habilitamos el botón de retroceso por si lo habíamos deshabilitado
        document.getElementById('retro').disabled=false;
        //Modificamos las clases de los elementos
        imagenes[pos].classList.remove('mostrando');
        imagenes[pos+1].classList.add('mostrando');
    }
}

//Ejercicio 5
function cambiar(elemento){
    elemento.classList.toggle('uno');
    elemento.classList.toggle('dos');
}

//Ejercicio 6
function colorear(elemento){
   let fondo=document.getElementsByTagName('body')[0];
   fondo.style.setProperty('background-color',elemento.value);
}