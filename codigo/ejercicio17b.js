function correr(btn) {
    btn.disabled=true;
    let corredores = document.getElementsByTagName("div");
    let anchoMaximo=document.querySelector('body').clientWidth-120;
    let intervalo = setInterval(function () {
        for (let corredor of corredores) {
            let velocidad = Math.floor(Math.random() * 20) + 1;
            let margenActual = parseInt(window.getComputedStyle(corredor).getPropertyValue('margin-left'));
            corredor.style.setProperty("margin-left",margenActual+velocidad+"px");
            if (margenActual>=anchoMaximo){
                //Establecemos el ganador
                let resultado=document.createElement("h1");
                resultado.setAttribute("align","center");
                resultado.setAttribute("id","tmp");
                let nuevoTexto=document.createTextNode(obtenerCaballo(corredor));
                resultado.appendChild(nuevoTexto);
                let pos=document.querySelector("div");
                document.body.appendChild(resultado,pos);
                clearInterval(intervalo);
            }
        }
    }, 20);
    document.querySelectorAll("button")[1].disabled=false;
}

function obtenerCaballo(caballo){
    let corredores = document.getElementsByTagName("div");
    let text= "Ganador";
    if (caballo===corredores[0]){
        return text +" caballo 1";
    }else if(caballo===corredores[1]){
        return text +" caballo 2";
    }else if(caballo===corredores[2]){
        return text +" caballo 3";
    }else{
        return text +" caballo 4";
    }
}

function reiniciar(btn){
    btn.disabled=true;
    document.querySelector("button").disabled=false;
    let corredores = document.getElementsByTagName("div");
    for (let corredor of corredores) {
        corredor.style.setProperty("margin-left","10px");
    }
    let elemento=document.getElementById("tmp");
    let padre=elemento.parentNode;
    padre.removeChild(elemento);
}