//Código para tocar la ventana objeto window

console.log(window);

// window.alert("Hola mundo");

//acceder al tamaño del navegador
//Solo la página
console.log(`El alto del navegador es: ${window.innerHeight}px`);
console.log(`El ancho del navegador es: ${window.innerWidth}px`);
//Página mas ventanas
console.log(`El alto del navegador es: ${window.outerHeight}px`);
console.log(`El ancho del navegador es: ${window.outerWidth}px`);

/*Para abrir ventanas
- 1er parámetro: dirección de la nueva ventana.
- 2do parámetro: nombre de la ventana 
- 3er parámetro: cadena de texto de opciones.

Devuelve un objeto para gestionar la ventana
*/

let ventana;

const abrirVentana = () => {
    ventana=window.open("../EjerciciosDOM/pruebas/prueba17b.html","_blank","width=600,height=400,top=" + (screen.availHeight - 400) + ",left=0,scrollbars=no");
};

const cerrarVentana = () => {
    ventana.close();
}

/* Screen Object Representa la pantalla del usuario */
    console.log('Ancho de pantalla: ', window.screen.width);
    console.log('Alto de pantalla: ', window.screen.height); // tiene en cuenta la barra de windows.
    
    console.log('Ancho de pantalla sin barra de Windows: ', window.screen.availWidth);
    console.log('Alto de pantalla sin barra de Windows: ', window.screen.availHeight); // tiene en cuenta la barra de windows.
    



//Vamos a trabajar con la barra de direcciones para ello el objeto locations

console.log(location);
// accedo a la barra de direcciones
console.log(window.location.href);
console.log(location.href);  // objeto location es objeto global.
// por ejemplo si necesito obtener parámetros (mediante hash)

console.log(location.hostname); // obtengo el hostname.

// conocer la ruta del archivo local: pathname
console.log(location.pathname);

// protocolo (file, ftp, http, https)
console.log(location.protocol);

//Para abrir una página
const cargarDocumento = () => {
    location.assign("https://www.google.es/");
}

//Para navegar
const regresar = () => {
    history.back();
}
const avanzar = () => {
    history.forward();
}

//Para las cookies
console.log("Cookies activadas: ",navigator.cookieEnabled);

//info del navegador
console.log(navigator.userAgent);

//lenguaje
console.log(navigator.language);

//Para saber si esta conectado a internet
console.log(navigator.onLine);


// alerta con confirmación. Le preguntamos al usuario si está de acuerdo o no
// retorna verdadero si da aceptar o falto si da cancelar
const ingresar = () => {
    let accesoPermitido = confirm('Eres mayor de edad ?'); //aceptar true, rechazar false

    if (accesoPermitido){
        alert('Enhorabuena. Bienvenido.');
    }
    else{
        alert('Acceso no permitido');
    }
};

//timers
// window.setTimeOut()

//recibe una función de callback que ejecutar tras el tiempo de espera.
setTimeout(() => {
    console.log('Hola');
}, 5000);

const saludo = () => {
    console.log('Hola');
};

let id;
const iniciarTimer = () => {
    console.log('inicio timer');
    id = setTimeout(saludo, 7000);
}

const detenerTimer = () => {
    console.log('detengo timer');
    clearTimeout(id);
}

let cuenta = 0;
let id2;

const iniciarCuenta = () => {
    console.log('inicio cuenta');
    id2 = setInterval(() => {
        console.log(cuenta);
        cuenta++;
    }, 1);
}

const detenerCuenta = () => {
    console.log('detengo cuenta');
    clearInterval(id2);
}

