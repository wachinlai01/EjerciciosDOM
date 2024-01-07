function publicar(){

    let formulario= document.forms.publicaciones;
    let info=formulario.textoPublicacion;
    //para hacer que no se puedan escribir mas de 100 caracteres
    info.addEventListener("input", function(){
        if (info.value.length > 100) {
            info.value = info.value.substring(0, 100); // Limitar a 100 caracteres
            info.setAttribute("disabled", "true"); // Desactivar el textarea
        } else {
            info.removeAttribute("disabled"); // Habilitar el textarea si está dentro del límite
        }
    })
    let salida=info.value;

    /*
    Para que solo aparezcan los primeros 50 caracteres
    salida = salida.substr(0,50);
    */

    //Creamos el div y lo publicamos
    let texto = document.createTextNode(salida);
    let div = document.createElement("div");
    div.appendChild(texto);
    document.body.appendChild(div);
    //Vaciamos el textarea
    info.value="";
}