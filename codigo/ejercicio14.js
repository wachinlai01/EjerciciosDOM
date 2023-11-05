//Función para desplegar el menu vertical
function desplegar(elemento){
    let desplegables=document.querySelectorAll(".vertical ul > ul");
    if (elemento.innerHTML==="Inicio"){
        desplegables[0].style.setProperty("display","block");
        desplegables[1].style.setProperty("display","none");
        desplegables[2].style.setProperty("display","none");
    }else if (elemento.innerHTML==="Proyectos"){
        desplegables[0].style.setProperty("display","none");
        desplegables[1].style.setProperty("display","block");
        desplegables[2].style.setProperty("display","none");
    }else {
        desplegables[0].style.setProperty("display","none");
        desplegables[1].style.setProperty("display","none");
        desplegables[2].style.setProperty("display","block");
    }
}

//Función para desplegar el menu horizontal
function desplegar2(elemento){
    let desplegables=document.querySelectorAll(".horizontal div > ul");
    if (elemento.innerText==="Inicio"){
        desplegables[0].style.setProperty("display","block");
        desplegables[1].style.setProperty("display","none");
        desplegables[2].style.setProperty("display","none");
    }else if (elemento.innerText==="Proyectos"){
        desplegables[0].style.setProperty("display","none");
        desplegables[1].style.setProperty("display","block");
        desplegables[2].style.setProperty("display","none");
    }else {
        desplegables[0].style.setProperty("display","none");
        desplegables[1].style.setProperty("display","none");
        desplegables[2].style.setProperty("display","block");
    }
}