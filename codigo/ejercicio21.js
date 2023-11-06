// Obtener todos los enlaces y agregar el evento a cada uno
//para crear en la esquin dereha superior
document.querySelectorAll('a').forEach(function(enlace) {
    enlace.addEventListener('mouseover', function() {
        let salida=document.createElement("div");
        salida.setAttribute("class","info");
        let texto=document.createTextNode("La URL de este enlace es "+enlace.href);
        salida.appendChild(texto);
        document.body-this.appendChild(salida);
    });
});

// Obtener todos los enlaces y agregar un evento a cada uno
//para eliminar en la esquin dereha superior
document.querySelectorAll('a').forEach(function(enlace) {
    enlace.addEventListener('mouseout', function() {
        let borrar=document.querySelector("div");
        let padre=borrar.parentNode;
        padre.removeChild(borrar);
    });
});