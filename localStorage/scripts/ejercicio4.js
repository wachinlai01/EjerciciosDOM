document.addEventListener('DOMContentLoaded',function(){
    let form = document.forms[0];
    let boton = form.envio;
    let usuario = form.username;
    let clave = form.clave;
    let borrar = form.borrar;
    boton.addEventListener('click',function(e){
        e.preventDefault();
        if (comprobarNombre(usuario)&&comprobarClave(clave)){
            console.log('Todo ok');
            let datos = {
                nombre: usuario.value,
                clave: clave.value
            };
            localStorage.setItem('usuario',JSON.stringify(datos));
        }
    })
    //Ahora recupero y accedemos los ponemos por defectos
    let info = JSON.parse(localStorage.getItem('usuario'));
    if (info!=null){
        usuario.value=info.nombre;
        clave.value=info.clave;
    }
    borrar.addEventListener('click',function(e){
        e.preventDefault();
        localStorage.removeItem('usuario');
    })
})

function comprobarNombre(nombre) {
    let regexp = /^[a-z][a-zA-Z0-9]{7,}$/;
    console.log(nombre.value);
    if (regexp.test(nombre.value)){
        nombre.style.border = '1px solid black';
        return true;
    }else{
        nombre.style.border = '2px solid red';
        return false;
    }
}

function comprobarClave(clave){
    let regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    console.log(clave.value);
    if (regexp.test(clave.value)){
        clave.style.border = '1px solid black';
        return true;
    }else{
        clave.style.border = '2px solid red';
        return false;
    }
}