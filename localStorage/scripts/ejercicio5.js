document.addEventListener('DOMContentLoaded', function(){
    let comienzo = document.querySelector('#boton-agregar');
    let padre = document.querySelector('ul');
    let clave = 'actividades';
    let vaciar = document.querySelectorAll('.boton-limpiar')[0];
    comienzo.addEventListener('click', function(){
        tareaAleatoriaSinRep(clave, padre);
    })
    vaciar.addEventListener('click', function(){
        while (padre.firstChild) {
            padre.removeChild(padre.firstChild);
        }
        localStorage.removeItem(clave);
    })
})

function tareaAleatoria(clave, padre) {
    let datos = localStorage.getItem(clave);
    if (datos!=null){
        let datosJson = JSON.parse(datos);
        //índice aleatorio
        let indice = Math.floor(Math.random() * datosJson.length);
        let texto =``;
        let elemento = document.createElement('li');
        for (let key in datosJson[indice]){
            console.log(datosJson[indice][key]);
            texto += `<b> ${datosJson[indice][key]}</b>`;
        }
        elemento.innerHTML = texto;
        padre.appendChild(elemento);
        //Lo elimino una vez insertado
        datosJson.splice(indice,1);
    } else {
        alert ('No hay tareas');
    }
}

function tareaAleatoriaSinRep(clave, padre) {
    let datos = localStorage.getItem(clave);
    if (datos!=null&&datos!='[]'){
        let datosJson = JSON.parse(datos);
        //índice aleatorio
        let indice = Math.floor(Math.random() * datosJson.length);
        let texto =``;
        let elemento = document.createElement('li');
        for (let key in datosJson[indice]){
            console.log(datosJson[indice][key]);
            texto += `<b> ${datosJson[indice][key]}</b>`;
        }
        elemento.innerHTML = texto;
        padre.appendChild(elemento);
        //Lo elimino una vez insertado
        datosJson.splice(indice,1);
        // Actualizar el localStorage con el nuevo array sin el elemento
        localStorage.setItem(clave, JSON.stringify(datosJson));
    } else {
        let resultado = window.confirm("No hay tareas, quiere crear una: ");
        if (resultado){
            window.location.href = '../pruebas/creoTareas.html';
        }
    }
}