//Ejercicio 9

function cambiar(parrafo){
        //accedemos a las propiedades de css del parrafo actual
        let estilo=window.getComputedStyle(parrafo);
        let fondo=estilo.getPropertyValue('background-color');
        let borde=estilo.getPropertyValue('border');
        let letra=estilo.getPropertyValue('color');
        //Cambiamos las propiedades de este parrafo segun nos convenga
        parrafo.style.setProperty('background-color', fondo === 'rgb(0, 0, 0)' ? 'rgb(75, 5, 5)' : 'black');
        parrafo.style.setProperty('border', borde === '20px solid rgb(255, 192, 203)' ? '20px solid rgb(175, 243, 4)' : '20px solid pink');
        parrafo.style.setProperty('color', letra === 'rgb(255, 255, 255)' ? 'rgb(43, 145, 94)' : 'white');   
}

//Ejercicio 10

function fondo(div){
    //accedo al color del div
    let estilo=window.getComputedStyle(div);
    let color=estilo.getPropertyValue('background-color');
    //Cambiamos el fondo de la página
    document.getElementsByTagName('body')[0].style.setProperty('background-color',color)
}

//Ejercicio 11

function magia(div){
    let lista=document.querySelectorAll('section>div');
    if (div===lista[0]){
        //Hacemos que se puede ver el segundo dive
        lista[1].style.setProperty('visibility','visible');
        
        //Añadimos un evento al primer div para que se vuelva 
        //a ocultar el segundo div cuando lo abandone
        lista[0].addEventListener('mouseout',function(){
            lista[1].style.setProperty('visibility','hidden');
        });
    }
}