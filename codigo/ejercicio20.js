function generar() {
    let original = document.querySelector(".uno");
    let nuevo = document.createElement("p");
    if (original !== null && original.innerText !== "") {
      nuevo.innerHTML = original.innerText;
    } else {
      nuevo.innerHTML = "Te has cargado lo que iba a copiar";
    }
    nuevo.setAttribute("class", "dos");
    let lugar = document.querySelector("br");
    document.body.insertBefore(nuevo, lugar);
    // Para habilitar el botón
    document.querySelectorAll("button")[2].disabled = false;
  }
  

function borrarV(btn){
    //Para deshabilitar los botones
    btn.disabled=true;
    document.querySelectorAll("button")[3].disabled=true;
    //Para eliminar el párrafo por defecto de la página
    let original=document.querySelector("p");
    let padre=original.parentNode;
    padre.removeChild(original);
}

function borrarN(btn){
    //Para eliminar todos los parrafos nuevos
    let nuevos=document.querySelectorAll(".dos");
    for (let parrafo of nuevos){
        let padre=parrafo.parentNode;
        padre.removeChild(parrafo);
    }
    //Para deshabilitar el boton
    btn.disabled=true;
}

function sustituir(){
    //Creamos la tabla
    let tabla=document.createElement("table");
    //Creamos las filas y celdas de la tabla
    for (let i=0;i<2;i++){
        let fila=document.createElement("tr");
        for (let j=0;j<2;j++){
            let celda=document.createElement("td");
            let valor=document.createTextNode(Math.floor(Math.random()*10)+1);
            celda.appendChild(valor);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    tabla.setAttribute("border","5px solid blue");
    //Para sustituir el parrafo original
    let sustitucion=document.querySelector(".uno");
    let padre=sustitucion.parentNode;
    padre.replaceChild(tabla,sustitucion);
}