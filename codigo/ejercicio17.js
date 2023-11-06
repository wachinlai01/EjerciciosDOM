function correr() {
    let corredores = document.getElementsByTagName("div");
    let anchoMaximo=document.querySelector('body').clientWidth;
    let intervalo = setInterval(function () {
        for (let corredor of corredores) {
            let velocidad = Math.floor(Math.random() * 20) + 1;
            let anchoActual = parseInt(window.getComputedStyle(corredor).getPropertyValue('width'));
            corredor.style.setProperty("width",anchoActual+velocidad+"px");
            if (anchoActual>=anchoMaximo-20){
                //Vamos a poner un mensaje del ganador
                //client width estudiar
                //const trackWidth = document.querySelector('.track-area').clientWidth
                let color=window.getComputedStyle(corredor).getPropertyValue('background-color');
                let text="Ganador " + obtenerNombreCaballo(color);
                let resultado=document.createElement("h1");
                resultado.setAttribute("align","center");
                resultado.setAttribute("id","tmp");
                let nuevoTexto=document.createTextNode(text);
                resultado.appendChild(nuevoTexto);
                let pos=document.getElementById("caballo1");
                document.body.insertBefore(resultado,pos);
                clearInterval(intervalo);
            }
        }
    }, 20);
}

// Función auxiliar para obtener el nombre del caballo según el color
function obtenerNombreCaballo(color) {
    switch (color) {
        case "rgb(255, 0, 0)":
            return "Caballo 1";
        case "rgb(0, 128, 0)":
            return "Caballo 2";
        case "rgb(255, 255, 0)":
            return "Caballo 3";
        case "rgb(0, 0, 255)":
            return "Caballo 4";
        default:
            return "Desconocido";
    }
}


function reiniciar(){
    let corredores = document.getElementsByTagName("div");
    for (let corredor of corredores) {
        corredor.style.setProperty("width","100px");
    }
    let elemento=document.getElementById("tmp");
    let padre=elemento.parentNode;
    padre.removeChild(elemento);
}