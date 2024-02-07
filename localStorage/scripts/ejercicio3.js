document.addEventListener('DOMContentLoaded',function(){
    let form = document.querySelector('form');
    let boton = form.envio;

    boton.addEventListener('click',function(e){
        e.preventDefault();
        let nombre = form.nombre.value;
        let apellidos = form.apellidos.value;
        let edad = form.edad.value;
        let email = form.email.value;
        if (nombre.length>0&&apellidos.length>0&&edad>0&&email.length>0){
            let miJson = {
                nombre: nombre,
                apellidos: apellidos,
                edad: edad,
                email: email
            };
            //Lo recorremos por claves y lo vamos almacenando así
            for (let clave in miJson){
                localStorage.setItem(clave,miJson[clave]);
            }
            window.location.href = '../pruebas/recupero3.html';
        }
    })
})