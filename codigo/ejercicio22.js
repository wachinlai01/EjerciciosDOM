//Para recoger todas las imágenes y añadirles un evento
document.querySelectorAll("img").forEach(function(imagen){
    imagen.addEventListener("click",function(){
        //Creamos un div y le aplicamos el efecto difuminado
        let capa=document.createElement("div");
        capa.setAttribute("class","efectoBlur");
        //Hacemos que la imagen seleccionada desaparezca
        imagen.style.setProperty("visibility","hidden");
        //Nos guardamos la ubicacion de la imagen
        let ruta=imagen.src;
        let nuevaImagen=document.createElement("img");
        nuevaImagen.setAttribute("src",ruta);
        //estilos para que la imagen aparezca en mitad del difuminado
        nuevaImagen.style.setProperty("position", "absolute");
        nuevaImagen.style.setProperty("top", "50%");
        nuevaImagen.style.setProperty("left", "50%");
        nuevaImagen.style.setProperty("transform", "translate(-50%, -50%)");
        nuevaImagen.style.setProperty("z-index", "5");
        document.body.appendChild(nuevaImagen);
        //Introducimos el div en el html
        document.body.appendChild(capa);
        //Eliminamos el div si clickamos en el
        capa.addEventListener("click",function(){
            //Para eliminar el div
            let eliminarDiv=document.querySelector("div");
            let padre=eliminarDiv.parentNode;
            padre.removeChild(eliminarDiv);
            //Para eliminar nueva Imagen
            padre.removeChild(nuevaImagen);
            //hacemos reaparecer la imagen
            imagen.style.setProperty("visibility","visible");
        })
    });
});
