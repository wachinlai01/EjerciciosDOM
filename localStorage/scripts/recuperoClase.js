const URL = 'https://jsonplaceholder.typicode.com/todos/';

document.addEventListener('DOMContentLoaded',function(){
    let padre = document.querySelector('h1');

    //Recupero del localStorage
    let datos = JSON.parse(localStorage.getItem('usuario'));

    let contenedor = document.createElement('div');
    let info = document.createElement('p');
    let texto = `Nombre: ${datos.nombre} <br> Clave: ${datos.clave} <br> Id: ${datos.userId}`;
    info.innerHTML=texto;
    contenedor.appendChild(info);
    padre.appendChild(contenedor);
    let id = datos.userId;
    //Consumimos la API
    fetch(URL)
        .then(response => {
            if(!response.ok){
                throw new Error ('Error al conectar con la API '+response.status);
            }
            return response.json();
        })
        .then(data => {
            mostrarLibro(data,id,padre);
        })
        .catch(error => {
            console.error('Fallo en la solicitud: ', error);
        })
})

function mostrarLibro (data,id,padre){
    let salida =``;
    for (let elemento of data){
        if (elemento.userId==id){
            console.log(elemento);
            salida+=`Título: ${elemento.title}<br>`;
            if (elemento.completed){
                salida+=`Estado: completado`;
            }else{
                salida+=`Estado: incompleto`;
            }
            salida+=`<br>`;
        }
    }
    let contenedor = document.createElement('div');
    let p = document.createElement('p');
    p.innerHTML=salida;
    contenedor.appendChild(p);
    padre.appendChild(contenedor);
}