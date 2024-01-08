/**
 * Valida un Formulario con los siguientes campos y condiciones:
- Nombre → Debe contener al menos una minúscula, mayúscula, número y alguno de
estos signos (. - _)
- Teléfono → (XXX) XX-XX-XX
- Nº mesas → Debe introducir una cantidad entre 1 y 24
- Botón para Registrar
Antes de enviar el registro comprobará que los campos introducidos son válidos.
Al enviar aparecerá una ventana nueva durante 3 segundos, tras este tiempo se cerrará la
ventana


Una vez registrado lo que ocurre es que se añade el valor de los mesas a una cookie y se
recarga la página.
Al entrar en la página si existe la cookie con los mesas, mostrará un aviso con
su valor, pero no cargará el formulario. Si existe la cookie de sesión reemplaza el DOM
por un mensaje en vez del formulario donde muestra los meses y un botón para eliminar
la cookie
*/


const EXPNOMBRE=/^[a-z]+[A-Z]+\d+[\.\-_]+$/;
const EXPTELEFONO=/^\d{3} \d{2}-\d{2}-\d{2}$/;

let formulario=document.forms.reserva;
let validar=document.querySelector('button[type="submit"]');
validar.disabled=true;

//Cuando cargue la pagina pasaran dos cosas, dependiendo de si esxiste o no cookie
window.addEventListener("load",function(){
    if(obtenerValorCookie("Mesas")!=null){
        formulario.style.display="none";
        let contenedor = document.createElement("h1");
        let contenido = document.createTextNode("Ha reservado "+obtenerValorCookie("Mesas")+" mesas");
        contenedor.appendChild(contenido);
        document.body.appendChild(contenedor);
        let boton = this.document.createElement("button");
        boton.textContent="Cancelar reserva";
        document.body.appendChild(boton);
        boton.addEventListener("click", function(){
            eliminarCookie("Mesas");
            location.reload();
        });
    };
})


formulario.querySelectorAll('input[type="text"]')[0].addEventListener("blur", function(){
    let nombre=formulario.querySelectorAll('input[type="text"]')[0].value;
    if(!EXPNOMBRE.test(nombre)){
        validar.disabled=true;
    }else{
        validar.disabled=false;
    }
})

formulario.querySelectorAll('input[type="text"]')[1].addEventListener("blur", function(){
    let telefono=formulario.querySelectorAll('input[type="text"]')[1].value;
    if(!EXPTELEFONO.test(telefono)){
        validar.disabled=true;
    }else{
        validar.disabled=false;
    }
})

formulario.querySelectorAll('input[type="text"]')[2].addEventListener("blur", function(){
    let mesas=formulario.querySelectorAll('input[type="text"]')[2].value;
    if(mesas<1||mesas>24){
        validar.disabled=true;
    }else{
        validar.disabled=false;
    }
})

validar.addEventListener("click",function(){
    let datos=`Reserva:\n 
    Nombre de la reserva: ${formulario.querySelectorAll('input[type="text"]')[0].value}\n
    Teléfono de contacto: ${formulario.querySelectorAll('input[type="text"]')[1].value}\n
    Número de mesas: ${formulario.querySelectorAll('input[type="text"]')[2].value}`;
    let texto=document.createElement("pre");
    texto.textContent = datos;
    let contenedor=document.createElement("div");
    contenedor.appendChild(texto);
    contenedor.style.position = 'fixed';
    contenedor.style.top = '50%';
    contenedor.style.left = '50%';
    contenedor.style.transform = 'translate(-50%, -50%)';
    contenedor.style.height = '250px';
    contenedor.style.width = '300px';
    contenedor.style.backgroundColor = 'red';
    document.body.appendChild(contenedor);
    validar.disabled=true;
    setTimeout(function () {
        contenedor.style.display = "none";
        // Creamos la cookie
        setCookie("Mesas", formulario.querySelectorAll('input[type="text"]')[2].value, 7);
        // Recargar la página después de 3 segundos
        setTimeout(function () {
          location.reload();
        }, 1000);
    }, 3000);
})


//Funcion para crear una cookie
function setCookie(nombre, valor, diasExpiracion) {
    let fechaExpiracion = new Date();
    fechaExpiracion.setDate(fechaExpiracion.getDate() + diasExpiracion);

    let cookie = `${nombre}=${valor}; expires=${fechaExpiracion.toUTCString()}; path=/`;
    document.cookie = cookie;
}

//Funcion para recuperar una cookie por su nombre (Mesas)
function obtenerValorCookie(nombre) {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.startsWith(nombre + '=')) {
        return cookie.substring(nombre.length + 1);
      }
    }
    return null;
}

//Funcion para eliminar una cookie
function eliminarCookie(nombre) {
    document.cookie = nombre + "=; max-age=0; path=/";
}



