document.addEventListener('DOMContentLoaded',function(){
    let form = document.forms[0];
    let crear = form.add;
    let ver = document.querySelector('#lista');
    crear.addEventListener('click', function(e){
        e.preventDefault();
        let tarea = form.tarea;
        let descripcion = form.descripcion;
        if (tarea.value.length==0||descripcion.value.length==0){
            console.log('No has rellenado los campos');
        }else{
            let data = {
                tarea: tarea.value,
                descripcion: descripcion.value
            };
            let clave = 'actividades';
            addLocalStorage (clave,data);
        }
        tarea.value='';
        descripcion.value='';
    })
    ver.addEventListener('click', function(){
        window.location.href = '../pruebas/prueba5.html';
    })
})

function addLocalStorage (clave, valor){

    let datos = localStorage.getItem(clave);

    if (datos === null) {
        // Si no existe, añado el elemento al localStorage
        localStorage.setItem(clave, JSON.stringify([valor]));
        console.log(`Elemento con clave '${clave}' añadido al localStorage.`);
    } else {
        // Si existe, obtengo el valor existente, añado el nuevo valor y actualizo en el localStorage
        var valoresExistente = JSON.parse(datos);
        valoresExistente.push(valor);
        localStorage.setItem(clave, JSON.stringify(valoresExistente));
        console.log(`Valor añadido para la clave '${clave}' en el localStorage.`);
    }
}