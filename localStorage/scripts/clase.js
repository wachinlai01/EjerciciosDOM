document.addEventListener('DOMContentLoaded',function(){
    let form = document.forms[0];
    let boton = form.envio;
    boton.addEventListener('click',function(e){
        e.preventDefault();
        let nombre = form.nombre.value;
        let clave = form.clave.value;
        let userId = (Math.floor(Math.random()*10+1)).toString();
        if (nombre.length>0&&clave.length>0){
            let datos = {
                userId: userId,
                nombre: nombre,
                clave: clave
            };
            localStorage.setItem('usuario',JSON.stringify(datos));
            window.location.href = '../pruebas/recuperoClase.html';
        }
    })
})