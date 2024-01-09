let formulario = document.forms.formularioContacto;


//Tanto para nombre como para apellido
let regexNom=/^[A-ZÑ][áéíóúüña-z]+([ ][A-ZÑ][áéíóúüña-z]+)?$/;
//Expresion regular para el codigo postal
let regexCodPostal=/^\d{5}$/;

formulario.querySelector("input[type='submit']").addEventListener("click",function(){
    let mensaje="";
    if (formulario.tratamiento.value==""){
        mensaje+="(*)Campo tratamiento obligatorio <br>";
    }
    if (formulario.nombre.value==""){
        mensaje+="(*)Campo nombre obligatorio <br>";
    }else{
        if(!regexNom.test(formulario.nombre.value)){
            mensaje+="(*)Campo nombre no cumple las normas <br>";
        }
    }
    if (formulario.apellidos.value==""){
        mensaje+="(*)Campo apellido obligatorio <br>";
    }else{
        if(!regexNom.test(formulario.apellidos.value)){
            mensaje+="(*)Campo apellido no cumple las normas <br>";
        }
    }
    if (formulario.codigo_postal.value==""){
        mensaje+="(*)Campo codigo_postal obligatorio <br>";
    }else{
        if(!regexCodPostal.test(formulario.codigo_postal.value)){
            mensaje+="(*)Campo codigo_postal no cumple las normas <br>";
        }
    }
    if (formulario.direccion.value==""){
        mensaje+="(*)Campo direccion obligatorio <br>";
    }
    if (formulario.ciudad.value==""){
        mensaje+="(*)Campo ciudad obligatorio <br>";
    }
    if (!formulario.Libros.checked&&!formulario.Peliculas.checked){
        mensaje+="(*)Campo preferencias obligatorio <br>";
    }
    let padre=document.getElementById("validacionDatos");
    let texto=mensaje;
    let contenedor=document.createElement("p");
    contenedor.innerHTML=texto;
    padre.appendChild(contenedor);
})